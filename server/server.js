module.exports = function(app){
var server = app.listen(8080,/*"192.168.1.107"*/'localhost',function(){
  var port = server.address().port;
  var url = server.address().address;
  console.log("started listening on http://"+url+":"+port+"/");
});
}
