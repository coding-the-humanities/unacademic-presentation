(function(){
  var fireUrl = "https://popping-fire-9951.firebaseio.com/unacademic";
  var fireRef = new Firebase(fireUrl);
  var waypointRef = new Firebase(fireUrl + "/waypoints");
  var query = waypointRef;

  query.on("value", makeCards);

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

    makeExpandable();
  };

  function makeExpandable() {
    $('.card .content').hide();
    $('.card .title').click( function() {
      $(this).next(".card .content").slideToggle('fast');
    });
  } 
})();
