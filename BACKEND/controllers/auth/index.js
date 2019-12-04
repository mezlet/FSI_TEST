import moment from 'moment';
import crypto from 'crypto';
import rp from 'request-promise';
import db from '../../config/db';
import * as Response from '../../utils/response';
import auth from '../../utils/auth';
import * as Queries from '../../utils/queries';
import { password, aes_key, ivkey, organisation_code } from '../../app'

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
        if(!req.headers['authorization']) Response.badrequestError(res, 'Please Enter an authorization token');
        try{
            const { bvn, dob } = req.body;
            const BVN=bvn;
            const DOB = dob;
            const date = moment.utc().format('YYYYMMDD');
            const username = process.env.SANDBOX_ORGANIZATION_CODE;
            const signatureString = `${username}${date}${password}`;
            const hash = crypto.createHash('sha256');
            const signatureHeader = hash.update(signatureString).digest('hex');
            const authString = `${username}:${password}`;
            const authHeader = Buffer.from(authString).toString('base64');
            const signatureMethodHeader = 'SHA256';

            const bvn_obj = {BVN: bvn}
            const encrypted = auth.encrypt(JSON.stringify(bvn_obj));
            
            const options={
                method: 'POST',
                uri: 'https://innovation-sandbox-backend.herokuapp.com/nibss/bvnr/VerifySingleBVN',
                headers: {
                "Sandbox-Key": process.env.SANDBOX_KEY,
                "OrganisationCode": organisation_code,
                "Authorization": authHeader,
                "SIGNATURE": signatureHeader,
                "SIGNATURE_METH": signatureMethodHeader,
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                },
                body: encrypted            
            }


    await rp.post(options, async(err, response, body)=>{
            const result = auth.decrypt(body);
            if(JSON.parse(result).message){
                const token = req.headers['authorization'];
                const decoded = auth.decodeToken(token);
                const { PhoneNumber, FirstName, LastName } = JSON.parse(result).data;
                console.log(JSON.parse(result).data);
                const user = await db(Queries.getUser, [decoded.userId]);
                if(user && !user.rows.length > 0){
                    return res.status(404).json({'success': false, 'error': 'Error verifying user.'});
                }
                const { firstname, lastname, phone_number } = user.rows[0];
                if(firstname === FirstName && lastname === LastName && phone_number === PhoneNumber ){       
                    const update = await db(Queries.updateUser, [PhoneNumber, BVN, DOB]);
                    return (update&&update.rows[0]) ? Response.successResponse(res, 'BVN Matched.')
                    : Response.serverError(res, 'Error updating user data');
                }
                return res.status(400).json({'success': false, 'error': 'BVN Mismatch'});
            }
            return Response.badrequestError(res, 'Invalid BVN');
        })    
        }catch(error){return Response.serverError(res, 'Something went wrong')}
    }
}