<<<<<<< HEAD
(function(){
  var fireUrl = "https://popping-fire-9951.firebaseio.com/unacademic";
  var fireRef = new Firebase(fireUrl);
  var waypointRef = new Firebase(fireUrl + "/waypoints");
  var query = waypointRef;

  query.on("value", makeCards);
=======
function makeActionable() {
  $('.content .expandable').hide();
  $('.content .title').click( function() {
    $(this).next(".content .expandable").slideToggle('fast');
  });
} 
>>>>>>> de29cdafbdafc23a8cdef564d10366533fe8e633

  function makeCards(data) {
    var waypoints = data.val();
    var frame = document.querySelector('.cards');

    waypoints.forEach(function(waypoint, index){
      var cardIndex = (index  % 4) + 1;
      var card = document.createElement('div');

      waypoint.cardimage = "../images/Constellations_" + cardIndex + ".png";
      waypoint.category = waypoint.keywords[0].slice(4); ///hack

      card.setAttribute('class', 'card');  
      card.innerHTML = card_template(waypoint);
      frame.appendChild(card);          
    });

    makeActionable();
  };

  function makeActionable() {
    $('.content .expandable').hide();
    $('.content .title').click( function() {
      $(this).next(".content .expandable").slideToggle('fast');
    });
  } 
})();
