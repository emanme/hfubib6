    var lang='no';
    function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    
     if(networkState==Connection.NONE)
          return false;
        else
         return true; 
         networkState = null;
         states = null;
    }
    function nav(navi) {
    resetfieldss();
    $.mobile.changePage(navi,{reverse:false,transition:"none"});
    return false;
    }
    function nav2(navi) {
        
    window.location=navi;
    return false;
    }
    function internal(navi) {
            if(checkConnection()){
                 $.mobile.changePage(navi,{reverse:false,transition:"none"});
                  
                  return false;
                }
            else{
                nointernet();
            }
    }
	function internal_url(navi) {
            if(checkConnection()){
               var onInApp = window.open(navi,'_blank','location=no')
                  
                  return false;
                }
            else{
                nointernet();
            }
    }
    function external(navi) {
    
                window.open(navi, '_system'); 
              
    }
    function home(navi){
         $('#searchtextdiv').html('<input type="text" name="search" id="searchtext" maxlength="2" />');
         $('#searchtextdiv2').html('<input type="text" name="search" id="searchtext2" maxlength="2" />');
         $('#searchtextdiv3').html('<input type="text" name="search" id="searchtext3" maxlength="2" />');
          $('#searchtextdiv4').html('<input type="text" name="search" id="opacseach" maxlength="255" />');
         
             $.mobile.changePage(navi,{reverse:false,transition:"none"});
    }
    function onBackKeyDown() {
         $('#searchtextdiv').html('<input type="text" name="search" id="searchtext" maxlength="2" />');
        $('#searchtextdiv2').html('<input type="text" name="search" id="searchtext2" maxlength="2" />');
        $('#searchtextdiv3').html('<input type="text" name="search" id="searchtext3" maxlength="2"/>');
         $('#searchtextdiv4').html('<input type="text" name="search" id="opacseach" maxlength="255" />');
    history.go(-1);
    resetfieldss();
    $('#searchtext').blur();
    $('#searchtext2').blur();
    $('#searchtext3').blur();
     $('#opacseach').blur();
    }
    function onBackKeyDown2() {
       window.history.back()
    }
 function resetfieldss(){
     
        document.getElementById("f_authortext").value = "";
        document.getElementById("f_titletext").value = "";
        document.getElementById("f_isbntext").value = "";
        document.getElementById("f_commentstext").value = "";
        document.getElementById("f_nametext").value = "";
        document.getElementById("f_registrationnotext").value = "";
        document.getElementById("f_emailtext").value = "";
        document.getElementById("s_authortext").value = "";
        document.getElementById("s_titletext").value = "";
        document.getElementById("s_isbntext").value = "";
        document.getElementById("s_commentstext").value = "";
        document.getElementById("s_nametext").value = "";
        document.getElementById("s_registrationnotext").value = "";
        document.getElementById("s_emailtext").value = "";
        document.getElementById("t_authortext").value = "";
        document.getElementById("t_titletext").value = "";
        document.getElementById("t_isbntext").value = "";
        document.getElementById("t_commentstext").value = "";
        document.getElementById("t_nametext").value = "";
        document.getElementById("t_registrationnotext").value = "";
        document.getElementById("t_emailtext").value = "";
}

 function nointernet() {
           
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){
         navigator.notification.alert(
            'Internetzugang notwendig',  // message
            alertDismissed,         // callback
            'Achtung',            // title
            'OK'                  // buttonName
        );
     }
    else{
         navigator.notification.alert(
            'Internet access required',  // message
            alertDismissed,         // callback
            'Attention',            // title
            'OK'                  // buttonName
        );
    }
    
    }
function na(target){ 
}
function langtext(eng,deutsch){
  
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
 //alert( "current_lang: " + current_lang );
    
    if(current_lang=='de'){
          text=deutsch;
            
        }
    else{
          text=eng; 
           
        }
    current_lang=null;
    
    lang=null;
    return text;
}
 
 
function isEmpty(str) {
    return (!str || 0 === str.length);
}
    function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
 function linktomailIcon() {
    var text='' ;
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
  if(current_lang=='de'){ 
           return '<a href="mailto:?subject=App-Empfehlung%3A%20HFU%20Bib%20App&body=Hallo%2C%0AIch%20empfehle%20Dir%20die%20Nutzung%20der%20App%20der%20HFU-Bibliotheken%20f%C3%BCr%20Dein%20Studium.%0ADie%20kostenlose%20App%20findest%20Du%20hier%3A%0A%20%20%0AiOS%3A%0Ahttps%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Fhfu-bib%2Fid692846754%3Fmt%3D8%0A%20%0AAndroid%3A%0Ahttps%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dde.hfubib%26hl%3Dde%0A" style="color:#008D58;"><div class="bgCircle"> <div class="iconSize8" id="idf8">f</div></div></a>';
        }
        else{
         return '<a href="mailto:?subject=App%20recommendation%3A%20HFU%20Bib%20App&body=Hi%2C%0AI%20recommend%20to%20you%20the%20app%20of%20the%20HFU%20libraries%20for%20your%20studies.%0AThe%20free%20app%20can%20be%20found%20here%3A%0A%0AiOS%3A%0Ahttps%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Fhfu-bib%2Fid692846754%3Fmt%3D8%0A%20%0AAndroid%3A%0Ahttps%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dde.hfubib%26hl%3Dde" style="color:#008D58;"><div class="bgCircle"><div class="iconSize8" id="idf8">f</div></div></a>';
        }
 }
function linktomailText() {
 var text='' ;
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
  if(current_lang=='de'){ 
           return '<a href="mailto:?subject=App-Empfehlung%3A%20HFU%20Bib%20App&body=Hallo%2C%0AIch%20empfehle%20Dir%20die%20Nutzung%20der%20App%20der%20HFU-Bibliotheken%20f%C3%BCr%20Dein%20Studium.%0ADie%20kostenlose%20App%20findest%20Du%20hier%3A%0A%20%20%0AiOS%3A%0Ahttps%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Fhfu-bib%2Fid692846754%3Fmt%3D8%0A%20%0AAndroid%3A%0Ahttps%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dde.hfubib%26hl%3Dde%0A" style="color:#000;">HFU Bib App weiterempfehlen</a>';
        }
        else{
         return '<a href="mailto:?subject=App%20recommendation%3A%20HFU%20Bib%20App&body=Hi%2C%0AI%20recommend%20to%20you%20the%20app%20of%20the%20HFU%20libraries%20for%20your%20studies.%0AThe%20free%20app%20can%20be%20found%20here%3A%0A%0AiOS%3A%0Ahttps%3A%2F%2Fitunes.apple.com%2Fde%2Fapp%2Fhfu-bib%2Fid692846754%3Fmt%3D8%0A%20%0AAndroid%3A%0Ahttps%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dde.hfubib%26hl%3Dde" style="color:#000;">recommend HFU Bib App</a>';
        }
}
function back_button() {
   
  var deviceversion=device.version;
        // alert(deviceversion + " 1");
    deviceversion= Math.floor(deviceversion);
        if(deviceversion=='9'){
         return deviceversion;
          $(document).bind("mobileinit", function(){
              $.mobile.hashListeningEnabled = false;
          });
        }else{
          return deviceversion;
        }
   
}



function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
    function showAlert() {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            'Kein Ergebnis gefunden!',  // message
            alertDismissed,         // callback
            'Suchergebnis',            // title
            'OK'                  // buttonName
        );
     }
    else{
         navigator.notification.alert(
            'No results found!',  // message
            alertDismissed,         // callback
            'Search Results',            // title
            'OK'                  // buttonName
        );
    }
  
    }
   function showemailAlertJobstrue() {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            'Bewerbung wurde versandt',  // message
            alertDismissed,         // callback
            'Jobs in der Bibliothek',            // title
            'OK'                  // buttonName
        );
 		 
     }
    else{
         navigator.notification.alert(
            'Application sent successfully',  // message
            alertDismissed,         // callback
            'Jobs in the library',            // title
            'OK'                  // buttonName
        );
    }
  
    }
function showemailAlertJobsfalse() {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            'Anforderungsfehler versuchen Sie es sp&#228;ter erneut',  // message
            alertDismissed,         // callback
            'Jobs in der Bibliothek',            // title
            'OK'                  // buttonName
        );
     }
    else{
         navigator.notification.alert(
            'error try again later',  // message
            alertDismissed,         // callback
            'Jobs in the library',            // title
            'OK'                  // buttonName
        );
    }
  
    }
       function showemailAlerttrue() {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            'Medienwünsche versandt',  // message
            alertDismissed,         // callback
            'Deine Medienwüsche',            // title
            'OK'                  // buttonName
        );
           
     }
    else{
         navigator.notification.alert(
            'request was send',  // message
            alertDismissed,         // callback
            'Your media requests',            // title
            'OK'                  // buttonName
        );
    }
  
    }
    function showemailAlertfalse() {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            'verzoek fout probeer het later opnieuw',  // message
            alertDismissed,         // callback
            'Deine Medienwüsche',            // title
            'OK'                  // buttonName
        );
     }
    else{
         navigator.notification.alert(
            'request error try again later',  // message
            alertDismissed,         // callback
            'Your media requests',            // title
            'OK'                  // buttonName
        );
    }
  
    }
     function showemailAlertSend(english,german) {
        
var text='' ;
var lang = navigator.language.split("-");
var current_lang = (lang[0]);
     if(current_lang=='de'){ 
          navigator.notification.alert(
            german,  // message
            alertDismissed,         // callback
            'Deine Medienwünsche',            // title
            'OK'                  // buttonName
        );
     }
    else{
         navigator.notification.alert(
            english,  // message
            alertDismissed,         // callback
            'Your media requests',            // title
            'OK'                  // buttonName
        );
    }
  
    }