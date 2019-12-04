import moment from 'moment';
import crypto from 'crypto';
import rp from 'request-promise';
import db from '../../config/db';
import * as Response from '../../utils/response';
import auth from '../../utils/auth';
import * as Queries from '../../utils/queries';

export default class Authenticaion {
    static async Signup (req, res) {
        try{
            const { firstname, lastname, phone_number, address, password} = req.body;
            const password_hash = await auth.hash(password);
            const payload = [firstname, lastname, phone_number, address, password_hash];
            const user  = await db(Queries.createUser, payload);
            if (user && user.routine === '_bt_check_unique') {
                return Response.badrequestError(res, 'User Already Exist.');
            }
            if(user && user.rows[0].id){
                const token = await auth.generateToken(user.rows[0].id);
                user.rows[0].token = token;
                return Response.createdOkResponse(res, user.rows[0]);
            }
            return Response.serverError(res, 'Error registering user.');
        }
        catch(error){
            return Response.serverError(res, 'Something went wrong.');
        }
    }

    static async BVN (req, res) {
        try{
            const { bvn, dob } = req.body;
            const options = auth.BVNData(bvn);
            const { firstname, lastname, phone_number} = req.user;
    await rp.post(options, async(err, response, body)=>{
            const result = auth.decrypt(body);
            if(JSON.parse(result).message){
                const { PhoneNumber, FirstName, LastName } = JSON.parse(result).data;
                if(firstname === FirstName && lastname === LastName && phone_number === PhoneNumber ){       
                    const update = await db(Queries.updateUser, [PhoneNumber, bvn, dob]);
                    return (update&&update.rows[0]) ? res.status(200).json({'success': true, 'message': 'BVN matched'})
                    : Response.serverError(res, 'Error updating user data');
                }
                return res.status(400).json({'success': false, 'message': 'BVN Mismatch'});
            }
            return Response.badrequestError(res, 'Invalid BVN');
        })    
        }catch(error){return Response.serverError(res, 'Something went wrong')}
    }
}