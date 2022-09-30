const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    alunoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Aluno',
        required: true
    },
    dias: {
        type: [Number],
        required: true
    },
    inicio: {
        type: Date,
        required: true
    },
    fim: {
        type: Date,
        required: true
    },
    
});

module.exports = mongoose.model('Agendamento', agendamento);