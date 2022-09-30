const express = require('express')
const router = express.Router();
const Alunos = require('../models/aluno')

router.post('/', async(req,res) => {
    try {
        const aluno = await new Alunos(req.body).save();
        res.json(aluno);
    } catch (error) {
        res.json({error: true, message: error.message})
    }
})

module.exports = router;