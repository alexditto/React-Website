const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

//Character model
const Character = require("../models/Character.models");

//GET All characters
router.get('/', verifyToken, (req, res)=> {
    jwt.verify(req.token, "Vorpal Blade", (err, authData)=> {
        if(err){
            res.sendStatus(403)
        } else {
            Character.find()
                .then(character=> res.json(character))
        }
    })
});

//Get Assosiated Characters
router.get('/all', verifyToken, (req, res) => {
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            console.log(authData.user._id);
            Character.find({user : authData.user._id})
                .then(character=> res.json(character))
                .catch(err => res.status(404).json({message: "No character found."}))
        }
    })
})

//GET One character
router.get('/:id', verifyToken, (req, res)=> {
    jwt.verify(req.token, "Vorpal Blade", (err, authData)=> {
        if(err) {
            res.send(403)
        } else {
            console.log(authData);
            Character.findById(req.params.id)
                .then(character => {
                    character.user === authData.user._id ? res.json(character) : res.sendStatus(401)
                })
                .catch(err => res.status(404).json({message: "No character found."}))
        }
    })
});

//POST New Character
router.post('/', verifyToken, (req, res)=> {
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            console.log(err)
            res.sendStatus(403)
        } else {
            console.log(req.body)
            const newCharacter = new Character({
                character: req.body.character,
                type: req.body.type,
                user: authData.user._id
            });
            newCharacter.save().then(character=>res.json(character))
        }
    })
});

//PATCH Update Character
router.patch('/:id', verifyToken, (req, res)=>{
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            Character.findById(req.params.id)
                .then(character => {
                    if(character.user === authData.user._id){
                        Character.updateOne({_id: req.params.id}, {
                            character : req.body.character,
                            hp : req.body.hp,
                            type : req.body.type,
                            attack : req.body.attack,
                            armor : req.body.armor,
                            level: req.body.level,
                            xp: req.body.xp,
                            gold: req.body.gold,
                            inventory: req.body.inventory,
                            alive : req.body.alive,
                            victory : req.body.victory
                        })
                            .exec()
                            .then(result => {res.status(200).json({"Save" : true})})
                            .catch(err => {
                                console.log(err)
                                res.status(404).json(err)
                            })
                    } else {
                        res.status(401).send()
                    }
                })
        }
    })
})

//PATCH Dead Character
router.patch('/:id/dead', verifyToken, (req, res)=>{
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            Character.findById(req.params.id)
                .then(character => {
                    if(character.user === authData.user._id){
                        Character.updateOne({_id: req.params.id}, {
                            alive: false
                        })
                            .exec()
                            .then(res => {res.json(res)})
                            .catch(err => {res.status(404).json(err)})
                    }
                })
                .catch(err => res.status(404).json(err))
        }
    })
})

//PATCH Add Item to Inventory
router.patch('/:id/:item/add', verifyToken, (req, res)=> {
    jwt.verify(req.token, "Vorpal Blade", (err, authData)=> {
        if(err) {
            res.sendStatus(403)
        } else {
            let inventory = [];

            Character.findById(req.params.id)
                .then(character => {
                    if(character.user === authData.user._id){
                        if(character.gold >= req.body.cost){
                            inventory = character.inventory;
                            inventory.push(req.body.item);
                            let currentGold = character.gold - req.body.cost;
                            Character.updateOne({_id: req.params.id}, {
                                inventory: inventory,
                                gold: currentGold
                            })
                                .exec()
                                .then(res => {res.json(res)})
                                .catch(err => {res.status(404).json(err)})
                            } else {
                                res.json({message: "Insufficent Gold"})
                            }
                    }
                })
                .catch(err => res.status(404).json(err))
        }
    })
})

//PATCH Remove Item to Inventory
router.patch('/:id/:item/remove', verifyToken, (req, res)=> {
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            let inventory = [];

            Character.findById(req.params.id)
                .then(character => {
                    if(character.user === authData.user._id){
                        inventory = character.inventory;
                        inventory.remove(req.body.item);
                        Character.updateOne({_id: req.params.id}, {
                            inventory: inventory
                        })
                            .exec()
                            .then(res => {res.json(res)})
                            .catch(err => {res.status(404).json(err)})
                        }
                })
                .catch(err => res.status(404).json(err))
                }
    })
})

//DELETE Delete Character
router.delete('/:id', verifyToken, (req, res)=>{
    jwt.verify(req.token, "Vorpal Blade", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            Character.findById(req.params.id)
                .then(character => {
                    if(character.user === authData.user._id){
                        character.remove().then(()=>res.json({success: true}))
                    } else {
                        res.sendStatus(403)
                    }
                })
                .catch(err => res.status(404).json({success: false}))
        }
    })
})

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