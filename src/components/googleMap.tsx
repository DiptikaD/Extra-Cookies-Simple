import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin
} from '@vis.gl/react-google-maps';

// PoiMarkers component
const PoiMarkers = (props: { pois: Poi[] }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};


type Poi = { key: string, location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  { key: 'Eggs', location: { lat: 39.793676640886524, lng: -75.47040780686093 } },
  { key: 'chocolate cupcakes', location: { lat: 39.798686196166244, lng: -75.48263939523204 } },
  { key: 'extra wedding favours', location: { lat: 39.81779298035111, lng:  -75.47287111840367 } },
  { key: 'backyard gourds', location: { lat: 39.88563509030423, lng: -75.54879780369569 } },
  { key: 'home made fruit punch kombucha', location: { lat: 39.77631093659912,lng:  -75.5643738295946  } },
  { key: 'home made banana bread loaf', location: { lat: 39.74747622260709,lng:  -75.56245732792229  } },
  { key: 'fresh slaughtered goat (price per lb)', location: { lat: 39.72165900516061,lng:  -75.59004154316445  } },
  { key: 'giant bundles of bokchoy from the backyard', location: { lat: 39.74927278600378,lng:  -75.54828576611003  } },
  { key: 'extra cake pops from bday party', location: { lat:39.745595670123926,  lng: -75.54264321923986 } },
  { key: 'bulk 50lb bags of flour', location: { lat: 39.74769153736812,lng:  -75.55472792298451  } },
  { key: 'icecream home made', location: { lat:39.74301067944079,lng:   -75.54936703940464 } },
  { key: 'unwanted birthday cake', location: { lat:39.746603040176616,lng:  -75.55322175867849  } },
];

// GoogleMap component
const GoogleMap = (props: { pois: Poi[] }) => (
  <APIProvider apiKey={'AIzaSyA65foMmHiR8oAOUOlvMynfbnsBa-4vtiM'} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
      defaultZoom={14}
      defaultCenter={{ lat:39.74520, lng:  -75.54562 }}
      mapId='7ac02024e07fa942'
      style={{ height: '300px', width: '100%' }} //has to have a distinct size to appear on the page
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }
    >
      <PoiMarkers pois={props.pois} />
    </Map>
  </APIProvider>
);

export default () => <GoogleMap pois={locations} />;
