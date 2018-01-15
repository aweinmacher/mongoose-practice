var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booksDB',{useMongoClient:true});
var Schema = mongoose.Schema;

var bookSchema = mongoose.Schema({
    name: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})
var criticSchema = mongoose.Schema({
    name: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})
var reviewSchema = mongoose.Schema({
    text: String,
    book: {type: Schema.Types.ObjectId, ref: 'Book'},
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'}
})

var Book = mongoose.model('Book', bookSchema);
var Critic = mongoose.model('Critic', criticSchema);
var Review = mongoose.model('Review', reviewSchema);


// CREATION CODE !!! CREATION CODE !!! CREATION CODE !!! CREATION CODE !!! CREATION CODE !!! CREATION CODE !!! 
// var book1 = new Book({
//     name: 'Book 1',
//     author: 'Author 1',
//     reviews: []
// });
// var critic1 = new Critic({
//     name: 'Critic 1',
//     reviews: []
// });
// var review = new Review({
//     text: 'Wonderful book!',
//     book: book1._id,
//     critic: critic1._id
// });
// review.save();

// book1.reviews.push(review);
// critic1.reviews.push(review);

// book1.save();
// critic1.save();
// END OF CREATION CODE !!! END OF CREATION CODE !!! END OF CREATION CODE !!! END OF CREATION CODE !!!


// 'FIND ONE' POPULATION
// Book.findOne({name:"Book 1"}).populate('reviews').exec(function(err, book){
//     console.log(book);
//   }); 

// Critic.findOne({name:"Critic 1"}).populate('reviews').exec(function(err, critic){
//     console.log(critic);
//   });

// Review.find({}).populate('critic book').exec(function(err, review){
//     console.log(review[0]);
//   });

// Critic.findOne({name:"Critic 1"}).populate('reviews','text').exec(function(err, critic){
//     console.log(critic.reviews);
//   });

// Critic.findOne({ name: "Critic 1" }).populate('reviews', 'text -_id').exec(function(err, critic) {
//     console.log(critic.reviews);
//   });
// END OF 'FIND ONE' POPULATION  

// POPULATING A DOCUMENT
// Critic.findOne({ name: "Critic 1" }, function(err, critic) {
//     //now we have a single critic
//     critic.populate('reviews', function() {
//       console.log(critic.reviews);
//     });
//   });

// POPULATING AN ARRAY OF DOCUMENTS
// Critic.find(function(err, critics) {
//     //now we have an array of critics
//     Critic.populate(critics, { path: 'reviews' }, function(err, data) {
//       //now data is an array of populated critics
//       console.log(data);
//     });
//   });