const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '689d7635d639180f181b25f5';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Todo.find({
  _id:id
}).then((todos) =>{
  console.log('Todos',todos);

});

Todo.findOne({
  _id:id
}).then((todo) =>{
  console.log('Todo',todo);

});

Todo.findById(id).then((todo) =>{
  if(!todo){
    console.log('Id not found');
  }
  console.log('Todo by Id',todo);

}).catch((e) =>console.log(e));

var userId = '6889d0081b09ff603c014102c';
if(!ObjectID.isValid(userId)){

  console.log("user id is not valid")
}

User.find({
  _id:userId
}).then((user) =>{
  console.log("Users",user)

});


User.findOne({
  _id:userId
}).then((user) =>{
  console.log("User",user)

});
User.findById(userId).then((user) =>{
  if(!user){
    console.log('User not found')
  }
  console.log("Users",user)

}).catch((e) =>{
  console.log(e)
});
