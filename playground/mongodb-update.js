// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //deletemany
  //deleteone
  //findone and deleteone

  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
  //   console.log(result)
  // },(err) =>{
  //   if(err){
  //     console.log('Unable to delete',err)
  //   }
  //
  // });
  // db.collection('Todos').deleteOne({"text" : "Eat lunch"}).then((result) =>{
  //   console.log(result);
  // });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//   console.log(result);
// });

//Remove andrew with deletemany
//deletebyid
db.collection('Users').deleteMany({name:'Andrew'}).then((res) =>{
  console.log('Andrew is removed',res)
})

db.collection('Users').findOneAndDelete(
  {_id:new ObjectID("589bf196ada95a6ad4168130")}).then((res) =>{
  console.log(JSON.stringify(res,undefined,2))

  });
db.collection('Todos').findOneAndUpdate({
  _id : new ObjectID("589bef6bada95a6ad4168065")},{$set:{
    completed:false
  }},{returnOriginal:false}).then((res) =>{
    console.log(JSON.stringify(res));
  });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID("589bf201ada95a6ad4168170")},{$set:{name:'Bethelehem'},$mul:{age:10}},{returnOriginal:false}).then((res) =>{
console.log(JSON.stringify(res ,undefined, 2))
  });

db.close();

});
