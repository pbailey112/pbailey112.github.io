


var map;



google.maps.event.addDomListener(window, "load", function () {


  var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(41.555439, -72.658839),
    zoom: 18,
    minZoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    heading: 270,
    streetViewControl: false,
  });
  //map.setHeading(270);

  var infoWindow = new google.maps.InfoWindow();


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

    if (lat >= 41.554841 && lat <= 41.556455 && lon >= -72.659073 && lon <= -72.658372) {
    

      var marker1 = createMarker({
        position: new google.maps.LatLng(41.555800, -72.658928),
        map: map,
        icon: "images/markers/sugarMarker.png" 
      }, "<h1>Sugar Maple</h1><center><img src='images/mainPic/sugarMaple1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/sugarMaple1.html>Click here for this tree's page</a></div>");

      var marker2 = createMarker({
        position: new google.maps.LatLng(41.555770, -72.659050),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/redOak1.html>Click here for this tree's page</a></div>");
      
      var marker3 = createMarker({
        position: new google.maps.LatLng(41.555819, -72.658677),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/redOak2.html>Click here for this tree's page</a></div>");

      var marker4 = createMarker({
        position: new google.maps.LatLng(41.556014, -72.658722),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak3.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/redOak3.html>Click here for this tree's page</a></div>");

      var marker5 = createMarker({
        position: new google.maps.LatLng(41.555940, -72.658762),
        map: map,
        icon: "images/markers/sugarMarker.png"
      }, "<h1>Sugar Maple</h1><center><img src='images/mainPic/sugarMaple2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/sugarMaple2.html>Click here for this tree's page</a></div>");

      var marker6 = createMarker({
        position: new google.maps.LatLng(41.555085, -72.658552),
        map: map,
        icon: "images/markers/redOakMarker.png"
      }, "<h1>Red Oak</h1><center><img src='images/mainPic/redOak4.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/redOak4.html>Click here for this tree's page</a></div>");

      var marker7 = createMarker({
        position: new google.maps.LatLng(41.555250, -72.658861),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock1.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/hemlock1.html>Click here for this tree's page</a></div>");
      
      var marker8 = createMarker({
        position: new google.maps.LatLng(41.555146, -72.658907),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock2.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/hemlock2.html>Click here for this tree's page</a></div>");
      
      var marker9 = createMarker({
        position: new google.maps.LatLng(41.555166, -72.658835),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock3.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/hemlock3.html>Click here for this tree's page</a></div>");
      
      var marker10 = createMarker({
        position: new google.maps.LatLng(41.555154, -72.658745),
        map: map,
        icon: "images/markers/hemlockMarker.png"
      }, "<h1>Hemlock</h1><center><img src='images/mainPic/hemlock4.jpg' height=175></img></center><br><div class='buttDiv'><a class='myButton' href=pages/hemlock4.html>Click here for this tree's page</a></div>");

     
    } else {
      var marker11 = createMarker({
        position: new google.maps.LatLng(41.555439, -72.658839),
        map: map
      }, "<h1>You're not on Foss!</h1><p>Head over to Foss, try turning on your GPS/location services, or check out the 'About' page in the mean time.</p>");
    };

  };
});