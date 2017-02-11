// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    console.log('Unable to connect MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count) =>{
  //   console.log('Todos',count);
  //   // console.log(JSON.stringify(docs, undefined,2))
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos',error);
  // })
db.collection('Users').find({name:'Asabeneh'}).toArray().then((result) =>{
  console.log('Print result',result);
  console.log(JSON.stringify(result,undefined,2))
},(err) =>{
  if(err){
    console.log('unable to fetch value',err)
  }
});
db.close();

});
