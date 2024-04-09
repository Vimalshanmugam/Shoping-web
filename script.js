$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });

  function formvalidaion(){
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var textarea = document.getElementById('message').value;

   document.getElementById('error-mes').innerHTML='';
   document.getElementById('error-mess').innerHTML='';
   document.getElementById('error-messs').innerHTML='';

   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(name===''){
    document.getElementById('error-mes').innerHTML='*Name is required*';
    // return false
   }else if (!emailRegex.test(email)){
    document.getElementById('error-mess').innerHTML='*Email is invalid*';
    // return false;
   }else if (textarea===''){
    document.getElementById('error-messs').innerHTML='*Text is Required*';
    return false;
   }

  }
  