var mongoose = require('mongoose')


var FamilySchema = new mongoose.Schema({
    list: [{
        type: String
    }]
})

var Family = mongoose.model('Family', FamilySchema)
module.exports = {
    Family
}