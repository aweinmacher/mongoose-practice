var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/postsDB');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
    text: String,
    username: String,
  })
  
var postSchema = new mongoose.Schema({
    text: String,
    username: String,
    comments: [commentSchema]
  })

var Post = mongoose.model('Post', postSchema);
var Comment = mongoose.model('Comment', commentSchema);

// var aPost = new Post({
//     text: 'My first post',
//     username: 'Bill'
// });

// aPost.save(function(err, result){
//     if (err) throw err;
//     else console.log("post saved successfully");
//     });

// aPost.comments.push({ username: "Bob", text: "Great Post!" });
// aPost.save(function(err, data){
//     if (err) throw err;
//     else console.log(data);
// });

//to retrieve a comment that has a specific _id from aPost
// var aComment = aPost.comments._id('5a5b60427a405309eca7ad48');

// // to remove a comment with a specific _id from aPost

 Post.findById("5a5b60427a405309eca7ad47", function(err, data){
    if (err) throw err;
    data.comments.id("5a5b60427a405309eca7ad48").remove();
    data.save(function (err) {
      if (err) throw err;
      console.log('the subdocs were removed');
    });
})


