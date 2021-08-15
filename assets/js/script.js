'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Google reCAPTCHA
    |--------------------------------------------------------------------------
    |
    | reCAPTCHA protects you against spam and other types of automated abuse.
    | Please signup for an API key pair and insert your `Site key` value to the
    | following variable.
    |
    | http://www.google.com/recaptcha/admin
    |
    */

    reCaptchaSiteKey:  '6Ldaf0MUAAAAAHdsMv_7dND7BSTvdrE6VcQKpM-n',

    // See available languages: https://developers.google.com/recaptcha/docs/language
    reCaptchaLanguage: '',

    /*
    |--------------------------------------------------------------------------
    | Disable AOS on mobile
    |--------------------------------------------------------------------------
    |
    | If true, the Animate On Scroll animations don't run on mobile devices.
    |
    */

    disableAOSonMobile: true,

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true,

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */



});
function ValidateEmail(email) 
{

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (email.match(mailformat))
  {
    return true;
  }
  else{
    return false;
  }
   
}
function sendEmail() {
  let btnSend = document.getElementById('btnSendMessage');
  let  comment = document.getElementById('message').value;
  let  email = document.getElementById('email').value;
  let  name = document.getElementById('name').value;
  let  spName = document.getElementById('spName');
  let  spEmail = document.getElementById('spEmail');
  let spMessage = document.getElementById('spMessage');
  if(name ==''){
    spName.style.visibility = "visible";
  }
  if(name !==''){
    spName.style.visibility = "hidden";
  }
  if(email ==''){
    spEmail.style.visibility = "visible";
  }
  if(email !==''){
    spEmail.style.visibility = "hidden";
    if(!ValidateEmail(email)){
      spEmail.innerText = "enter valid email";
      spEmail.style.visibility = "visible";
    }
  }
  if(comment ==''){
    spMessage.style.visibility = "visible";
  }
  if(comment !==''){
    spMessage.style.visibility = "hidden";
  }
  if(comment !== '' && name !== '' && email  !== ''  ){
    btnSend.value ='Sending....';
    Email.send({
      Host: "smtp.gmail.com",
      Username: "mekonnenabi@gmail.com",
      Password: "zvykfqibmrliiyfl",
      To: 'mekonnenabi@gmail.com',
      From: email,
      Subject: name,
      Body : comment,
    }) .then(function () {
          btnSend.value ='successfully sent message';
         document.getElementById("sendMess").reset();
          setTimeout(
            function() {
              btnSend.value ='Send Message';
            }, 1000);
      });
  }
}


