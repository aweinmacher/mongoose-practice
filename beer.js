var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beersDB');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
    name: String,
    abv: Number,
    style: String
})

var Beer = mongoose.model('Beer', beerSchema);

var goldstar = new Beer({name:"Goldstar", abv:12, style:"lager"});
console.log(goldstar);
goldstar.save();