var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
text:{
  type:String,
  required:true,
  minlength:1,
  trim:true
},
completed:{
  type:Boolean,
  default:false

},
completedAt:{
  type:Number,
  default:null
}
});


//
// var newTodo = new Todo({
//   text:'Taking react course',
//   completed:false,
//   completedAt:10
// });
//
// newTodo.save().then((doc)=>{
//   console.log('SaveD todo',doc);
// },(e)=>{
//   console.log('Unable to save todo');
// });

module.exports = {Todo}
