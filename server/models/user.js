var mongoose = require('mongoose');


var User = mongoose.model('User',{
  username:{
    type:String,
    required:true,
    minlength:1,
    trim:true

  },
email:{
  type:String,
  required:true,
  minlength:1,
  trim:true

}
});

var newUser = new User({
  username:'Desalegn            ',
  email:'  desalegn@gmail.com'

});

// newUser.save().then((doc) =>{
//   console.log(JSON.stringify(doc,undefined,2))
//
// },(e) =>{
//     console.log("Unable to save" ,e)
// })
module.exports = {
   User
 }
