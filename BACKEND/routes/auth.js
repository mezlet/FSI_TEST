import { Router} from 'express';
import auth from '../controllers/auth';
import AuthMiddleware from '../middleware/AuthMiddleware';

const router = new Router();
router.post('/signup', AuthMiddleware.register, auth.Signup);
router.post('/bvn', AuthMiddleware.sandbox, auth.BVN);

export default router;