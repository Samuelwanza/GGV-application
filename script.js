let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.9634, lng: 30.1349 },
    zoom: 12,
    
  });
  const m1=new google.maps.Marker({
    position:{lat: -1.9634, lng: 30.1349},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }




  })

  var circle = new google.maps.Circle({
    center:m1.position,
    radius:4000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4

  });
  circle.setMap(map)
  const m2=new google.maps.Marker({
    position:{lat: -1.9300, lng: 30.1349},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }


  })
  var circle1 = new google.maps.Circle({
    center:m2.position,
    radius:4000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4

  });
  circle1.setMap(map)
  const m3=new google.maps.Marker({
    position:{lat: -1.9000, lng: 30.1349},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }


  })
  var circle2 = new google.maps.Circle({
    center:m3.position,
    radius:4000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4

  });
  circle2.setMap(map)
  const m4=new google.maps.Marker({
    position:{lat: -1.9300, lng: 30.1000},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }


  })
  var circle3 = new google.maps.Circle({
    center:m4.position,
    radius:4000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4

  });
  circle3.setMap(map)

  const m5=new google.maps.Marker({
    position:{lat: -1.8800, lng: 30.0800},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }


  })
  var circle4 = new google.maps.Circle({
    center:m5.position,
    radius:4000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4

  });
  circle4.setMap(map)

  const m6=new google.maps.Marker({
    position:{lat: -1.7000, lng: 30.0100},
    map:map,
    draggable:false,

    icon: {
      url: "maps.png",
      size: new google.maps.Size(36, 50),
      scaledSize: new google.maps.Size(36, 50),
      anchor: new google.maps.Point(0, 50)
     }


  })
  circle.setMap(map);
}

window.initMap = initMap;