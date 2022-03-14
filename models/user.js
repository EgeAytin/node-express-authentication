var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    roles: [{
        type: String,
        required: true
    }],
    attributes: [{
        type: String,
        required: false
    }],
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);