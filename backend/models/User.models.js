const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//create schema
const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        trim : true,
        minlength : 3
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

//authenticate
UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({email : email})
        .exec((error, user)=>{
            if(error){
                return callback(error)
            } else if (!user) {
                const err = new Error("User not found.")
                return callback(err);
            }
            bcrypt.compare(password, user.password, (error, result)=>{
                if(result === true){
                    return callback(null, user)
                } else {
                    return callback();
                }
            })
        })
}

//salt and hashed 
UserSchema.pre("save", function(next){
    let user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err)
        }
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
