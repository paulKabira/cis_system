module.exports = function(app) {
    app.get('/login', function(req, res) {
        req.session.akash = (req.session.akash || 0) + 1;
        res.render('index', {
            rester: req.session.akash
        });
    });

    app.all('/', function(req, res) {
        if (req.body.uname == undefined || req.body.pass == undefined) {
            res.render('login', {
                links: ['./css/login.css']
            });
        } else {
            require('./modules/login.js')(req.body.uname, req.body.pass, function(answer) {
                if (answer.authe) {
                    res.send('<h1>hello</h1>' + answer.uid + "and you are a " + (answer.type == "s" ? "Student" : "teacher"));
                } else {
                    res.render('login', {
                        error: true,
                        msg: "Wrong Credientials",
                        head: "Error!",
                        links: ['./css/login.css', './css/errordiv.css']
                    });
                }
            });
        }
    });

    app.all('/register', function(req, res) {
      console.log({
          _id: req.body.uid,
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          dob: req.body.dob
      });
        require('./modules/register.js')({
            _id: req.body.uid,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            dob: req.body.dob
        },{
          _id:req.body.uid,
          pass: req.body.password
        },function(ans){
          if(ans.error){
            console.log(ans);
            // res.redirect('/');
          }else{
            res.write("<h1>Successful Registeration</h1>");
            res.write(JSON.stringify(ans));
            res.end();
          }
        });
    })
}
