var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},
    {
        timestamps:true
    }
);

var News = mongoose.model('News', newsSchema);

module.exports = News;