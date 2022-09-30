const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aluno = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    endereco: {
        rua: {
            type: String,
            required: [true, 'Rua é obrigatório']
        },
        bairro: {
            type: String,
            required: [true, 'Bairro é obrigatório']},
        numero: {
            type: String,
            required: [true, 'Número é obrigatório']},
        complemento:{
            type: String,
        } 
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório']
    },
    telefone: {
        type: String,
        required: [true, 'Telefone é obrigatório']
    },
    dataDeInclusao: {
        type: Date,
        default: Date.now,
    },
    diaDeAula: {
        type: Date,
        required: [true, 'O dia de aula é obrigatório']
    },
    online: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Aluno', aluno);