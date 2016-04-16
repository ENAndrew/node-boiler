const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/users');
const app = express();
const port = 3333;

mongoose.connect('mongodb://localhost/27017');
const router = express.Router();

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(cors());


//use your data from your app to pass through to this post. 
router.route('/users')
  .post(function(req, res) {
    var user = new User();
    console.log(req.body)
    //data comes through as the req.body so format it accordingly.
    user.name = req.body.name;
    user.password = req.body.password;
    user.company = req.body.company;
    user.password2 = req.body.password2;
    user.email = req.body.email;
    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User Created!' });
    }); 
  })

  //set up your get request from your client to hit this endpoint
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  });
router.get('/', function(req, res){
  res.json({ message: 'hooray! Welcome to your new API!' });
});
app.use('/api', router);
app.listen(port, function(){
  console.log('app listening on port: ', port);
});
