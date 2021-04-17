var name=[ "Brayan (1st biggest brother)", "Erez (2nd biggest brother)", "Aaron (Erwin's biggest brother)", "Erwin (baby brother)", "Serge (Dad)", "Dorée (Mom)" ];
var images=[ "Capturebrayan.PNG", "CaptureErez.PNG", "CaptureAaron.PNG", "CaptureErwin.PNG", "CaptureDad.PNG", "CaptureMom.PNG" ];
var i=0;
function onclick()
{document.getElementById("name").innerHTML= reason[i];
 document.getElementById("album").src= images[i];
 i++;}