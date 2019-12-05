import bycrpt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import { password, aes_key, ivkey, organisation_code } from '../../app'


const secret = process.env.SECRET;
const username = process.env.SANDBOX_ORGANIZATION_CODE;

const Helpers = {
  hash(password) {
    return bycrpt.hashSync(password, 10);
  },

  comparePassword(password, hash) {
    return bycrpt.compareSync(password, hash);
  },

  generateToken(id) {
    return jwt.sign({ userId: id }, secret, { expiresIn: '1hr' });
  },

  decodeToken(token) {
    return jwt.verify(token, secret);
  },

  encrypt(text){
    let cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(aes_key), ivkey);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');   
  },

  decrypt(text){
    let textParts = text.split(':');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(aes_key), ivkey);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
   
  },

  BVNData(bvn){
    const date = moment.utc().format('YYYYMMDD');
    const signatureHeader = crypto.createHash('sha256').update(`${username}${date}${password}`).digest('hex');
    const authHeader = Buffer.from(`${username}:${password}`).toString('base64');
    const signatureMethodHeader = 'SHA256';
    const encrypted = Helpers.encrypt(JSON.stringify({BVN: bvn}));
    
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
    return options;
  }
};

export default Helpers;