import { Router} from 'express';
import auth from '../controllers/auth';
import AuthMiddleware from '../middleware/AuthMiddleware';
import BVNMiddleware from '../middleware/BVNMiddleware';

const router = new Router();
router.post('/signup', AuthMiddleware.register, auth.Signup);
router.post('/bvn', AuthMiddleware.sandbox, BVNMiddleware.checkToken,auth.BVN);

export default router;