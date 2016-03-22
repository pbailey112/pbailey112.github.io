

/*
 * declare map as a global variable
 */
var map;


/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(41.555439, -72.658839),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  map.setHeading(270);


  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }


  var lat;
  var lon;

  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      mainFunction();
    }, function() {
      lat = "error";
      lon = "error";
      mainFunction();
    });
  } else {
    lat = "blank";
    lon = "blank";
    mainFunction();
  };

  
  



  function mainFunction() {

    if (lat >= 30 && lat <= 50 && lon >= -300 && lon <= -10) {
      
      /*
      var marker0 = createMarker({
        position: new google.maps.LatLng(41.555439, -72.658839),
        map: map
      }, "<div id='info'><h1>Foss Hill</h1><p>This is the home marker.</p><p>Your location is:</p> <p>"+ lat + ", " + lon +"</p> <br> <center><img src='images/mainPic/foss-hill.jpg' width=200></img></center></div>");
      */

      var marker1 = createMarker({
        position: new google.maps.LatLng(41.555800, -72.658928),
        map: map,
        icon: "images/markers/sugarMarker.png" 
      }, "<h1>Sugar Maple</h1><center><img src='images/mainPic/sugarMaple1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

      var marker2 = createMarker({
        position: new google.maps.LatLng(41.555770, -72.659050),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");
      
      var marker3 = createMarker({
        position: new google.maps.LatLng(41.555819, -72.658677),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

      var marker4 = createMarker({
        position: new google.maps.LatLng(41.556014, -72.658722),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak3.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

      var marker5 = createMarker({
        position: new google.maps.LatLng(41.555940, -72.658762),
        map: map,
        icon: "images/markers/sugarMarker.png"
      }, "<h1>Sugar Maple</h1><center><img src='images/mainPic/sugarMaple2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

      var marker6 = createMarker({
        position: new google.maps.LatLng(41.555085, -72.658552),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak4.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

      var marker7 = createMarker({
        position: new google.maps.LatLng(41.555250, -72.658861),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");
      
      var marker8 = createMarker({
        position: new google.maps.LatLng(41.555146, -72.658907),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");
      
      var marker9 = createMarker({
        position: new google.maps.LatLng(41.555166, -72.658835),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock3.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");
      
      var marker10 = createMarker({
        position: new google.maps.LatLng(41.555154, -72.658745),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock4.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pageHTML.html>Click here for this tree's page</a></div>");

     
    };
  };
});