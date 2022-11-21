import express from 'express';
import HomeGet from '../controllers/HomeGet.js';
import HomePost from '../controllers/HomePost.js';

import UserGet from '../controllers/UserGet.js';
import UserDelete from '../controllers/UserDelete.js';
import EditGet from '../controllers/EditGet.js';
import EditPost from '../controllers/EditPost.js';

import NewGet from '../controllers/NewGet.js';
import NewPost from '../controllers/NewPost.js';

const router = express.Router();

router.route('/')
    .get(HomeGet)
    .post(HomePost)

router.route('/user')
    .get(UserGet)     // Version en /user?name=Bob

router.route('/delete')
    .get(UserDelete)     // Version en /user?name=Bob

router.route('/edit')// Version en /user?name=Bob
    .get(EditGet)    
    .post(EditPost)    // Version en /user?name=Bob

router.route("/new")
    .get(NewGet)
    .post(NewPost);

export default router