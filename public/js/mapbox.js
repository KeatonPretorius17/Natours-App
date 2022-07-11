/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2VhdG9uMTciLCJhIjoiY2wyeG5oZjc2MG9rMzNwcWw4c2MwdXVjeiJ9.Rh-tg5b3BJZJjXS90Rp7OQ';
  
  
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/keaton17/cl2xnpmr2001115poe78dqwm1',
      scrollZoom: false
      // center: [-118.113491, 34.111745],
      // zoom: 10,
      // interactive: false
    });
//   mapboxgl.accessToken = 'pk.eyJ1Ijoia2VhdG9uMTciLCJhIjoiY2wyeG5jc2t2MDRiNDNpcDdmcTUxMHByZSJ9.EwXKNH4w3DYqNMFTOSIBYg';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });
  
    const bounds = new mapboxgl.LngLatBounds();
  
    locations.forEach(loc => {
      // Create marker
      const el = document.createElement('div');
      el.className = 'marker';
  
      // Add marker
      new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
      })
        .setLngLat(loc.coordinates)
        .addTo(map);
  
      // Add popup
      new mapboxgl.Popup({
        offset: 30
      })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
        .addTo(map);
  
      // Extend map bounds to include current location
      bounds.extend(loc.coordinates);
    });
  
    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
      }
    });
  };
  