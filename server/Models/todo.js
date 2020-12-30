const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {type : String, require:true, trim:true , unique:true },
    sdate:  {type : Date, require:true, trim:true },
    description:  {type : String, require:true, trim:true },
    is_active:  { type: Boolean, default: true },
    doe:{type:Date,default:Date.now}
});

module.exports = mongoose.model('User', UserSchema);