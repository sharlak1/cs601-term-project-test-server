'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
        email: {
        type: String,
        Required: 'Please enter'
    },
    msg: {
        type: String,
        Required: 'Please enter'
    },

});

module.exports = mongoose.model('Users', UserSchema);