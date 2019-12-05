/* eslint-disable consistent-return */
import validate from '../utils/validate';
import * as Schema from '../utils/validate/Schema';
import * as Reply from '../utils/response';

export default class SandBoxMiddleware {
  static async (key, req, res, next) {
      console.log(key, req, res );

//     try {
//       const isValid = await validate(req.body, Schema.userSchema);
//       if (!isValid.details) {
//         return next();
//       }
//       const { message } = isValid.details[0];
//       return Reply.badrequestError(res, message);
//     } catch (error) {
//       return error;
//     }
  }

}
