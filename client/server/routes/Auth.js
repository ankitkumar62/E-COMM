const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const Jwt = require('jsonwebtoken');


router.post('/signup', async (req, res) => {
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, process.env.KEY, { expiresIn: '48h' }, (err, token) => {
        if (err) {
            res.send("Invalid Data")
        }
        res.send({ result, token: token })
    })
})


router.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        const user = await User.findOne(req.body).select('-password');
        if (user) {
            Jwt.sign({ user }, process.env.KEY, { expiresIn: "48h" }, (err, token) => {
                if (err) {
                    res.status.send(201);
                }
                res.send({ user, token: token })
            })

        }
        else {
            res.status(404).send('Not Found');
        }
    } else {
        res.status(201).send('Not Found');
    }

})

module.exports = router;