module.exports = function(username, password,callback) {
        var database = require('./mongowebsite.js');
        var url = 'mongodb://localhost:27017/website';
        database(url, function(err, db) {
          if(err){console.log(error);callback({authe:"false"});}
          else{
          var loginDB = db.collection('login');
          loginDB.find({
            _id: username,
            pass: password
          }).toArray(function(err, result) {
            if (err) {
              console.log(err);
            } else {
              if (result.length == 1) {
                console.log(result);
                db.close();
                callback({authe:true , uid:result[0]._id, type:result[0].type});
              } else {
                db.close();
                callback({authe:false});
              }
            }
          });}

        });
      }
        // var loginDB = database.collection('login');
