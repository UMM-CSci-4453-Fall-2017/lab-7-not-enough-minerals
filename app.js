var express=require('express'),
app = express(),
port = process.env.PORT || 1337;

app.use(express.static('/home/fossx229/databases/lab-7-not-enough-minerals' + '/public'));
app.get("/buttons",function(req,res){
  res.send("Hello World!  May I interest you in some... <em>buttons</em>?");
});

app.listen(port);