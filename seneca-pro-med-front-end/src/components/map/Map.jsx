import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const center = useMemo(() => ({ lat: 43.7967304, lng: -79.34937740361715 }), []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacies/all_pharmacies`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No pharmacies are available in db");
        }
      })
      .then((json) => {
        setMarkers(json.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  if (!isLoaded) return <h2 className="text-3xl font-bold text-headingColor text-center py-8">Loading...</h2>;
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">
        Our Pharmacy Locations
      </h1>

      <div className="p-8 flex gap-8 items-center my-5 border rounded-3xl justify-around">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
          options={{
            fullscreenControl: false,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              onClick={() => handleActiveMarker(index)}
            >
              {activeMarker === index ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div className="text-headingColor">
                    {marker.pharmacyName}
                    <br />
                    {marker.street}, {marker.city}, {marker.postalCode}
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
      </div>
    </section>
  );
};

export default Map;
