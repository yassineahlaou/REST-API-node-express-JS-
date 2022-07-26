
import { v4 as uuidv4 } from 'uuid';

let users = [
    
]


export const createUser = (req, res) => {

    const user = req.body
    const userId = uuidv4(); 
    const userWithId = {...user , id: userId}
    users.push(userWithId)
    res.send(`User with the name ${user.firstname} is added to database`)
    //console.log(users)
 }

 export const getUsers = (req, res) =>
 {
     
     res.send(users)
 }

 export const getUser = (req, res)=>{
    const userId = req.params.id
    const foundUser = users.find((user) =>  user.id == userId)

    res.send(foundUser)

}

export const deleteUser = (req, res)=>{
    const userId = req.params.id
    users = users.filter((user) =>  user.id != userId)

    res.send(`User with id ${userId} is deleted from database`)

}

export const editUser =  (req, res) => {
    const userId = req.params.id
    const {firstname, lastname, age} =  req.body // names of parameters should not be different than the names in database
    const foundUser = users.find((user) =>  user.id == userId)
    if(firstname){
        foundUser.firstname = firstname
    }
    if(lastname){
        foundUser.lastname = lastname
    }
    if(age){
        foundUser.age = age
    }

    res.send(`User with id ${userId}  has been updated` )

}
