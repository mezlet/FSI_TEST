/* eslint-disable consistent-return */
import * as Response from '../utils/response';
import db from '../config/db';
import auth from '../utils/auth';
import * as Queries from '../utils/queries';

export default class BVNMiddleware {

  static async checkToken (req, res, next) {
if(!req.headers['authorization']) Response.badrequestError(res, 'Please provide a token');
    try {
      const token = req.headers['authorization'];
      const decoded = auth.decodeToken(token);
      if(!decoded){
        return Response.serverError(res, 'Error decoding token')
      }

      const user = await db(Queries.getUser, [decoded.userId]);
      console.log(user);
      if(!user && !user.rows > 0){
        return Response.badrequestError(res, 'Invalid token')
      }
      delete user.rows[0].password;
      req.user = {
        ...user.rows[0]
      }

     return  next();

    } catch (error) {
      return Response.serverError(res, error);
    }
  }

}
