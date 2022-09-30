const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const aluno = require('../models/aluno')


router.post('/', async (req,res) => {
    const db = mongoose.connection
    const session = await db.startSession()
    session.startTransaction()

    try {
        
    } catch (error) {
        
    }
})