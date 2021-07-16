'use strict';
const express = require('express');
const Data = require('./data-maneger');
const userModel = require('./user-model');

const newData = new Data(userModel);



const route = express.Router();


route.get('/', getuser);
route.get('/:id', getUserById);
route.post('/', createUser);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

async function getuser(req, res, next) {
    try {

        const obj = await newData.read();
        console.log('get', obj);
        res.json({ obj });
        console.log(res.json({ obj }));
    } catch (err) {
        next(err);
    }
}

async function getUserById(req, res, next) {
    try {
        const obj = await newData.read(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function createUser(req, res, next) {
    try {
        const user = req.body;
        const obj = await newData.creat(user);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}


async function updateUser(req, res, next) {
    try {
        const user = req.body;
        const obj = await newData.update(req.params.id, user);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}

async function deleteUser(req, res, next) {
    try {
        const obj = await newData.delete(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}


module.exports = route;