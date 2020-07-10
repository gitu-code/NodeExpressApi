var mongoose = require('mongoose');
var schema = mongoose.Schema;

var allSchema = new schema({
    instr: {
        type: String
    },
    bid: {
        type: String
    },
    ask: {
        type: String
    },
    image: {
        type: String
    },
    cue_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Alls', allSchema)