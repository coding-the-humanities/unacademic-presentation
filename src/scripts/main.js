//note: the following code requires 
//  1. firebase.js -- 'https://cdn.firebase.com/js/client/1.0.15/firebase.js
//  2. handlebars.js -- http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v2.0.0.js
//  3. jquery.js - http://code.jquery.com/jquery-1.11.2.min.js

function makeActionable() {
  $('.expandable').hide();
  $('.expander').click( function() {
    $(this).next(".expandable").slideToggle('fast');
  });
} 

// api call (firebase)
var fireUrl = "https://popping-fire-9951.firebaseio.com/unacademic";
var fireRef = new Firebase(fireUrl);

// query all the waypoints
var waypointRef = new Firebase(fireUrl + "/waypoints");
var query = waypointRef;
query.on("value", function(snap) {
    var val = snap.val();
    var frame = document.querySelector('.cards');


   // iterate through the waypoints
  var j = 0;

  for(var i = 0; i < val.length; i++) {

    var waypoint = val[i];           
    console.log(waypoint);

    if(j < 4){
      j++;
    }
    else {
      j = 1;
    }

    waypoint.cardimage = "../images/Constellations_" + j + ".png";
    waypoint.category = waypoint.keywords[0].slice(4); ///hack

    // create a new div
    var d = document.createElement('div');
    d.setAttribute('class', 'card');  

    // ** magic - handlerbars.js
    d.innerHTML = card_template(waypoint);
    frame.appendChild(d);          
    }
      makeActionable();
  });

