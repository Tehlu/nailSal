maptilersdk.config.apiKey = 'ysst1HtIkOCNlCvkf67B';
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: "streets-v2",
        center: [-122.4194, 37.7749], // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      const marker = new maptilersdk.Marker()
                                    .setLngLat([-122.4194, 37.7749])
                                    .addTo(map);

  /* Documentation: https://docs.maptiler.com/sdk-js/api/ */
  /* Integration example and api key https://docs.maptiler.com/sdk-js/?key=ysst1HtIkOCNlCvkf67B&mapId=streets-v2&_gl=1*lfew6*_ga*MTc4OTE4MjU4Ny4xNzMwMzg4NDg5*_ga_K4SXYBF4HT*MTczMDM4ODQ4OS4xLjEuMTczMDM4OTE3OC4wLjAuMA. 
  */