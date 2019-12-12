import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";

const ProductsSearchFilterMap = ({ tab, loading }) => {
  // console.log(tab); // affiche mon objet tab

  // Pour afficher les données contenus dans les clés du tableau 'tab', on doit parcourir l'objet
  // 1. On initialise un tableau à vide au départ
  // let newTab = [];
  // 2. On parcourt l'objet
  const keys = Object.keys(tab);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // console.log(tab[key].location); // {lng: 2.358393, lat: 48.861446}
    let coord = tab[key].location;
    console.log(coord);
    // newTab.push(tab[key].location);
  }

  // coordonnées du marker
  const markersData = [
    {
      latLng: {
        lat: 48.862881,
        lng: 2.351543
      }
    }
  ];

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
      L.marker(marker.latLng).addTo(layerRef.current);
    });
  }, [markersData]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
