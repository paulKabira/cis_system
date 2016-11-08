module.exports = function(datar,datal,callback){
  var msg = ""; var errorgenerated = false;
  console.log("data R");
  console.log(datar);
  console.log("data L");
  console.log(datal);
  if(!(datar._id || 0)){msg = msg+"Unique ID, ";errorgenerated = true; }
  if(!(datar.fname || 0)){msg = msg+"First Name, ";errorgenerated = true;}
  if(!(datar.lname || 0)){msg = msg+"Last Name, ";errorgenerated = true;}
  if(!(datar.dob || 0)){msg = msg+"Date of Birth, ";errorgenerated = true;}
  if(!(datar.email || 0)){msg = msg+"Email, ";errorgenerated = true;}
  if(!(datal.pass || 0)){msg = msg+"Password ";errorgenerated = true;}
  if(errorgenerated){var errmsg = "No "+msg+" provided!";
  callback({error:true , msg:errmsg});}
  else{
    require('./mongowebsite.js')("mongodb://localhost:27017/website",function(err, db){
      if(err){console.log(err);callback({error:true});}
      else{
        var loginDB = db.collection('login');
        var infoDB = db.collection('infoDB');
        infoDB.insertOne(datar , function(err, result){
          if(err){console.log("Opps! Something went wrong "+err );callback({error:true , msg:"Error Inserting in info"});}
          else{
            loginDB.insertOne(datal, function(err, ans){
                if(err){console.log("Opps! Something went wrong "+err );callback({error:true , msg:"Error Insertion in Login"});}
                else{
                  callback({error:false});
                }
            });
          }
        })
      }
    });
  }
}
