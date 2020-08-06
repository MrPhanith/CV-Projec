const express = require("express");
const app = express();

app.use(express.static("public"));
// Home Section
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//Blog Section
app.get("/Blog", function(req, res){
  res.sendFile(__dirname + "/Blog.html");
});

//Project Section
app.get("/Project", function(req, res){
  res.sendFile(__dirname + "/Projects.html");
});

//About Section
app.get("/About", function(req, res){
  res.sendFile(__dirname + "/Contact.html");
});
app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
