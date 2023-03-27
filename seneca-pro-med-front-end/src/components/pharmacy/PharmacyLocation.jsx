import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";


const PharmacyLocation = () => {
  const { id } = useParams();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const center = useMemo(() => ({ lat: 43.7967304, lng: -79.34937740361715 }), []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/admin/pharmacy/${id}`)
       .then((res) => res.json())
       .then((result) => {
          setMarker(result.data);
       });
 }, [id]);


  if (!isLoaded) return <h2 className="text-3xl font-bold text-headingColor text-center py-8">Loading...</h2>;
  if (marker) {
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-headingColor text-center">
        {marker.pharmacyName}
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
          
            <Marker
              key={marker._id}
              position={marker.position}
              onClick={() => {handleActiveMarker(marker._id)}}
            >
              {activeMarker ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div className="text-headingColor">
                    {marker.street}, {marker.city}, {marker.postalCode}
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          
        </GoogleMap>
      </div>
    </section>
  );
              }
};

export default PharmacyLocation;
