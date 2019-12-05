/* eslint-disable consistent-return */
import validate from '../utils/validate';
import * as Schema from '../utils/validate/Schema';
import * as Reply from '../utils/response';

export default class AuthMiddleware {
  static async register(req, res, next) {

    try {
      const isValid = await validate(req.body, Schema.userSchema);
      if (!isValid.details) {
        return next();
      }
      const { message } = isValid.details[0];
      return Reply.badrequestError(res, message);
    } catch (error) {
      return error;
    }
  }

  static async BVN(req, res, next) {
    try {
      const isValid = await validate(req.body, Schema.loginSchema);
      if (!isValid.details) {
        return next();
      }
      const { message } = isValid.details[0];
      return Reply.badrequestError(res, message);
    } catch (error) {
      return error;
    }
  }

  static async sandbox(req, res,next){
    try{
      const isValid = await validate(req.body, Schema.BVN);
      if(!isValid.details){
        return next();
      }
      const { message } = isValid.details[0];
      return Reply.badrequestError(res, message);
    }catch(error){
      return error
    }
  }

}
