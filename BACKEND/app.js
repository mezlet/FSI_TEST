import 'dotenv/config';
import express from 'express';
// import request from 'request';
import rp from 'request-promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import Auth from './controllers/auth';
import * as Response from './utils/response'
import sandbox from './middleware/AuthMiddleware'


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const organisation_code = Buffer.from(process.env.SANDBOX_ORGANIZATION_CODE).toString('base64');
const sandbox_key = process.env.SANDBOX_KEY;
let ivkey;
let aes_key;
let password;



app.get('/', (req, res)=>{
    res.send('Welcome to WENTWORTHS')
})


const options = {
    method: 'POST',
    uri: 'https://innovation-sandbox-backend.herokuapp.com/nibss/bvnr/Reset',
    headers: {  "Sandbox-Key": sandbox_key, "OrganisationCode": organisation_code },
    json: true
} 

const Reset = () =>{
    return rp(options, (err, res, body)=>{
        if(!err){
            password = res.headers.password;
            ivkey = res.headers.ivkey;
            aes_key = res.headers.aes_key;
                }
            return 'Could not connect to server';
    });   
}
routes(app, password, ivkey, aes_key);


app.use(function(req, res, next){
  return Response.pageNotFoundError(res, 'Page not found');
});

app.use((err, req, res, next) => res.status(err.status || 500).send(err.error_message));

app.listen(port, async ()=>{  
    console.log(`Starting on port ${port}`);
    Reset();
});

export {
    password,
    ivkey,
    aes_key,
    organisation_code
}