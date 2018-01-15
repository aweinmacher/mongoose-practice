var mongoose = require('mongoose');

// connection string
// mongodb://{{username}}:{{password}}@{{host}}:{{port}}/{{DBName}}
mongoose.connect('mongodb://localhost/peopleDB');

var Schema = mongoose.Schema;

// var addressSchema = new Schema({
//     city: String,
//     street: String,
//     apartment: Number
// })

// var personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address : addressSchema
//   });

var personSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: String,
    age: { type: Number, min: 10 },
    created_at: Date,
    updated_at: Date
  });

personSchema.pre('save', function(next) {
  
    // get the current date
    var currentDate = new Date();
    
    // change the updated_at field to current date
    this.updated_at = currentDate;
   
    // if created_at doesn't exist, add to that field
    if (!this.created_at) { this.created_at = currentDate; }
     
    next();
  });

var Person = mongoose.model('Person', personSchema);

var david = new Person({ firstName: "David", lastName: "Smith", age: 25 });
// console.log(david);
// david.save();

var aaron = new Person({firstName: "Aaron", lastName: "Katz", age: 29});
// aaron.save();
// console.log(aaron);

var bob = new Person({firstName: "Bob", lastName: "Cohen", age: 30});
// bob.save(function(err, result){
//     if(!err){
//         console.log("saved successfully");
//     }
// });

var query = Person.find();

// Person.find(function (error, result){
//     if(error) { return console.error(error); }
//     console.log (result);
//   });

// Person.find({firstName: "Aaron"}, function (err, rslt){
//     if(err) { return console.error(err); }
//     console.log(rslt);
//   })

// Person.findById(1, function(err, person) {
//     if (err) throw err; // or if you want console.error(err)
//     console.log(person); //otherwise show the result, if any
//   });

// Person.findOneAndUpdate({ age: 30 }, { firstName: 'Paul' }, {new: true}, function(err, person) {
//     if (err) throw err;
//     else console.log(person);
//   });

Person.remove({ firstName: 'David' }, function(err) {
    if (err) throw err;
  
    // we have deleted the person
    console.log('Person deleted!');
  });