import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";

const ProductsSearchFilterMap = props => {
  // console.log(props.tab); // affiche mon objet tab
  // console.log(props.tab && props.products[1].name); // affiche mon objet tab
  // console.log(props.tab && props.tab[1].name);
  // let tabLatitude = [];
  // let tabLongitude = [];
  // // on parcourt l'objet tab
  // for (let key in props.tab) {
  //   if (props.tab.hasOwnProperty(key)) {
  //     // let latitude = props.tab[key].location.lat;
  //     // let longitude = props.tab[key].location.lng;
  //     // console.log(latitude); // récupère les données latitude pour chaque resturant
  //     // console.log(longitude); // idem pour la longitude

  //     tabLatitude.push(props.tab[key].location.lat);
  //     tabLongitude.push(props.tab[key].location.lng);
  //   }
  // }
  // // console.log("tableau latitude : " + tabLatitude);
  // // console.log("tableau longitude : " + tabLatitude);

  // coordonnées du marker
  const [markersData, setMarkersData] = useState([
    {
      latLng: {
        lat: 48.862881,
        lng: 2.351543
      },
      title: 1
    }
  ]);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [48.862881, 2.351543],
      zoom: 13,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).addTo(layerRef.current);
    });
  }, [markersData]);

  return (
    <>
      {/* <div
        onClick={() => {
          console.log(props.tab && props.tab[1].name); // dès que tu as trouvé tab, vas chercher tab[1].name
        }}
      >
        Se connecter
      </div> */}
      <div className="search-filter-map">
        <div id="map"></div>
      </div>
    </>
  );
};

export default ProductsSearchFilterMap;
