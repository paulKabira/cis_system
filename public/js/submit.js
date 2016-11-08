  var FormSubmit = function() {
      if (document.getElementById("user").value == "") {
          setTimeout(ani1, 0);
          setTimeout(ani2, 200);
          setTimeout(ani3, 300);
          var flag = 'o';
      }
      if (document.getElementById("passwd").value == "") {
          setTimeout(function() {
              document.getElementById("pname").style.transform = 'translateX(5px)';

          }, 0);
          setTimeout(function() {
              document.getElementById("pname").style.transform = 'translateX(-50px)';
          }, 200);
          setTimeout(function() {
              document.getElementById("pname").style.transform = 'translateX(0px)';
              document.getElementById("pname").style.boxShadow = '0px 0px 1px 1px #f00';
              document.getElementById('passimage').style.filter = 'hue-rotate(150deg)';
          }, 300);
          var flag = 'o';
      }
      if (flag != 'o') {
          document.getElementById("passwd").setAttribute("type", "password");
          document.getElementById("loginform").submit();
      }
  }

  var ani1 = function() {
      document.getElementById("uname").style.transform = 'translateX(5px)';
      /*alert("ani1");*/
  }
  var ani2 = function() {
      document.getElementById("uname").style.transform = 'translateX(-50px)';
      /*  alert("ani2");*/
  }
  var ani3 = function() {
      document.getElementById("uname").style.transform = 'translateX(0px)';
      document.getElementById("uname").style.boxShadow = '0px 0px 1px 1px #f00';
      document.getElementById('idimage').style.filter = 'hue-rotate(150deg)';

      /*  alert("ani3");*/
  }
  var toogle = function() {
      var lodiv = document.getElementById('lodiv');
      if (lodiv.style.transform != "translateX(-50em)") {
          // lodiv.style.visibility = "hidden";
          // lodiv.style.height = "0em";
          // lodiv.style.width = "0em";
          lodiv.style.transform = "translateX(-50em)";
          document.getElementById('regdiv').style.transform = "translateX(-40em)";
      } else {
          // lodiv.style.visibility= "visible";
          // lodiv.style.height = "28em";
          // lodiv.style.width = "22em";
          lodiv.style.transform = "translateX(0em)";
          document.getElementById('regdiv').style.transform = "translateX(0em)";
          // document.getElementById('regdiv').style.marginLeft = "3em";
      }
  }

  /*$('#pass').on('input', function(){
      $('input[type="password"]').val(this.value);
  })*/

  var anim1 = function(ele) {
      ele.parentElement.style.transform = 'translateX(5px)';
      /*alert("ani1");*/
  }
  var anim2 = function(ele) {
      ele.parentElement.style.transform = 'translateX(-50px)';
      /*  alert("ani2");*/
  }
  var anim3 = function(ele) {
      ele.parentElement.style.transform = 'translateX(0px)';
      ele.parentElement.style.boxShadow = '0px 0px 1px 1px #f00';

      /*  alert("ani3");*/
  }

  var register = function() {
      var uid = document.getElementById('uid');
      var fname = document.getElementById('fname');
      var lname = document.getElementById('lname');
      var dob = document.getElementById('dob');
      var email = document.getElementById('email');
      var valid = 'y';
      if (uid.value == "") {
          setTimeout(function() {
              anim1(uid);
          }, 0);
          setTimeout(function() {
              anim2(uid);
          }, 200);
          setTimeout(function() {
              anim3(uid);
          }, 300);
          valid = 'o';
      }
      if (fname.value == "") {
          setTimeout(function() {
              anim1(fname)
          }, 0);
          setTimeout(function() {
              anim2(fname)
          }, 200);
          setTimeout(function() {
              anim3(fname)
          }, 300);
          valid = 'o';
      }
      if (lname.value == "") {
          setTimeout(function() {
              anim1(lname)
          }, 0);
          setTimeout(function() {
              anim2(lname)
          }, 200);
          setTimeout(function() {
              anim3(lname)
          }, 300);
          valid = 'o';
      }
      if (dob.value == "") {
          setTimeout(function() {
              anim1(dob)
          }, 0);
          setTimeout(function() {
              anim2(dob)
          }, 200);
          setTimeout(function() {
              anim3(dob)
          }, 300);
          valid = 'o';
      }
      if (email.value == "") {
          setTimeout(function() {
              anim1(email)
          }, 0);
          setTimeout(function() {
              anim2(email)
          }, 200);
          setTimeout(function() {
              anim3(email)
          }, 300);
          valid = 'o';
      }
      if (valid != 'o') {
          document.getElementById('regform').submit();
      }
  }
