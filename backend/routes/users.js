const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//User model
let User = require('../models/User.models');

// GET All users
router.get('/', verifyToken, (req, res)=>{
    jwt.verify(req.token, "Vorpal Blade", (err, authData)=> {
        if(err){
            res.sendStatus(403)
        } else {
            console.log(authData)
            User.find()
                .then(user => res.json(user))
        }
    })
});

// POST Login
router.post('/login', (req, res)=> {
    if(req.body.email && req.body.password){
        User.authenticate(req.body.email, req.body.password, function(error, user){
            if( error || !user ){
                let err = new Error("Invaild login")
                err.status = 401;
                return err;
            } else {
                jwt.sign({user}, "Vorpal Blade", { expiresIn : "2 days"}, (err, token)=> {
                    return res.status(200)
                        .cookie('token', token, {httpOnly: true})
                        .json({token})
                })
            }
        })
    } else {
        let err = new Error("Email and Password are required.");
        err.status = 401;
        return err
    }
})

// GET One user
router.get('/:id', (req, res)=> {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({message: "No user found"}))
})

// POST New User
router.post('/register', (req, res)=>{
    const newUser = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(user => jwt.sign({user}, "Vorpal Blade", { expiresIn : "2 days"}, (err, token)=>{
            res.json({token})
        }))
        .catch(err => res.json(err))
})

// DELETE Delete User
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

function verifyToken( req, res, next){
    //Get Auth header
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token
        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = router;