import express from 'express';
const router = express.Router();
import {signinPage , signin} from '../controller/admin.controller.js';



router.get('/sign-in',signinPage)
router.post('/sign-in',signin)



export default router;