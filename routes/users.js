import express from 'express';
import { createUser , getUser, getUsers, deleteUser, editUser} from '../controllers/users.js';
const router = express.Router()





//get all users

router.get('/', getUsers)


//add user
router.post('/', createUser )

//get one user
router.get('/:id', getUser)

//delete user

router.delete('/:id', deleteUser)

//update user
router.patch('/:id' ,editUser)
export default router;