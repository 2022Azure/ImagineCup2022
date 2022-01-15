var xpos, ypos;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  xpos = 45.4211;
  ypos = -75.6903;
}

function showPosition(position) {
  xpos = position.coords.latitude;
  ypos = position.coords.longitude;
}
export const carData = [
    {
      licensePlate: "Patio Olmos",
      model: "Vision",
      position: {
        heading: 304,
        longitude: -64.188623,
        latitude: -31.420061,
        speed: null,
  
        timestamp: "2021-04-14T09:43:54Z"
      }
    }
  ];
  