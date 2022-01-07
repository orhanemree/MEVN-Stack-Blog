import express from "express";
import User from "../models/user.js"
import Post from "../models/post.js"
const router = express.Router();

// routes
router.get("/explore", (req, res) => {
    Post.find({}, "-_id -__v", (err, data) => {
        if (!err && data.length !== 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({"message": "404 Not Found"});
        }
    });
});

router.get("/user/:user", (req, res) => {
    Post.find({}, "-_id -__v", (err, data) => {
        const userPosts = data.filter(o => o.author === req.params.user);
        if (userPosts.length !== 0){
            res.status(200).json(userPosts);
        } else {
            res.status(404).json({"message": "404 Not Found"});
        }
    });
});

router.get("/user/:user/:post", (req, res) => {
    Post.find({}, "-_id -__v", (err, data) => {
        const post = data.filter(o => o.author === req.params.user && o.title.replace(/\s+/g, '-').toLowerCase() === req.params.post);
        if (post.length !== 0){
            res.status(200).json(post);
        } else {
            res.status(404).json({"message": "404 Not Found"})
        }
    });
});

router.post("/login", (req, res) => {
    User.find({"username": req.body.username}, (err, data) => {
        if (data.length === 0){
            res.status(401).json({"message": "401 Unauthorized", "el": "username", "error": "User does not exist."});
        } else if (data[0].password !== req.body.password) {
            res.status(401).json({"message": "401 Unauthorized", "el": "password", "error": "Username and password does not match."});
        } else {
            res.status(200).json({"message": "200 OK"});
        }
    });
});

router.post("/signup", (req, res) => {
    User.find({"username": req.body.username}, (err, data) => {
        if (data.length === 0){
            User.find({"email": req.body.email}, (err2, data2) => {
                if (data2.length === 0){
                    User.create(req.body);
                    res.status(201).json({"message": "201 Created"});
                } else {
                    res.status(409).json({"message": "409 Conflict", "el": "email", "error": "Email already in use."});
                }
            });
        } else {
            res.status(409).json({"message": "409 Conflict", "el": "username", "error": "Username already in use."});
        }
    });
});

router.post("/create", (req, res) => {
    User.find({"username": req.body.author}, (err, data) => {
        if (data.length !== 0){
            for (let i = 0; i < data.length; i++){
                if (data[i].title === req.body.title){
                    res.status(409).json({"message": "409 Conflict", "error": "Post title already exist."});
                    break
                } else {
                    Post.create(req.body);
                    res.status(201).json({"message": "201 Created"});
                    break
                }
            }
        } else {
            res.status(401).json({"message": "401 Unauthorized", "error": "User does not exist."})
        }
    });
});



export default router