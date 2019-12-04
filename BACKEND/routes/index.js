import authRouter from './auth';

const router =(app, password, ivkey, aes_key)=>{
    app.use('/api/v1/auth', authRouter)
}

export default router;