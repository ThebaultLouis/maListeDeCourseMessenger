var mongoose = require('mongoose')


var UserSchema = new mongoose.Schema({
    family: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
})

var User = mongoose.model('User', UserSchema)
module.exports = {
    User
}