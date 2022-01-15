import React, { useMemo, useState } from "react";
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapLayerProvider,
  AzureMapsProvider,
  AzureMapPopup,
} from "react-azure-maps";
import {
  AuthenticationType,
  data,
} from "azure-maps-control";
import { key } from "../components/key";
import { carData } from "../data/data";

const renderPoint = (data) => {
  return (
    <AzureMapFeature
      key={data.licensePlate}
      id={data.licensePlate}
      type="Point"
      coordinate={[data.position.longitude, data.position.latitude]}
      properties={{
        id: data.licensePlate,
        popUpProp: data,
      }}
    />
  );
};
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
const MarkersExample = () => {
  const [mapData, setMapData] = useState([...carData]);
  const [popupOptions, setPopupOptions] = useState({});
  const [popupProperties, setPopupProperties] = useState({});

  const option = useMemo(() => {
    return {
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: key,
      },
      center: [-64.188623, -31.420061],
      zoom: 15,
      view: "Auto",
    };
  }, []);

  const memoizedMarkerRender = useMemo(
    () => mapData.map((el) => renderPoint(el)),
    [mapData]
  );
  return (
    <>
      <AzureMapsProvider>
        <div style={{ height: "350px" }}>
          <AzureMap options={option}>
            <AzureMapDataSourceProvider
              id={"MultiplePoint AzureMapDataSourceProvider"}
            >
              <AzureMapLayerProvider
                id={"MultiplePoint AzureMapLayerProvider"}
                options={{
                  iconOptions: {
                    image: "pin-red",
                  },
                }}
                events={{
                  mousemove: (e) => {
                    if (e.shapes && e.shapes.length > 0) {
                      const prop = e.shapes[0];

                      setPopupOptions({
                        ...popupOptions,
                        position: new data.Position(
                          prop.data.geometry.coordinates[0],
                          prop.data.geometry.coordinates[1]
                        ),
                        pixelOffset: [0, -18],
                      });

                      if (prop.data.properties)
                        setPopupProperties({
                          ...prop.data.properties.popUpProp,
                        });
                    }
                  },
                }}
                type="SymbolLayer"
              />
              {memoizedMarkerRender}
            </AzureMapDataSourceProvider>
            <AzureMapPopup
              isVisible={true}
              options={popupOptions}
              popupContent={
                <div style={{ padding: "8px 16px" }}>
                  <h3>{popupProperties.licensePlate}</h3>
                  <p>{popupProperties.model}</p>
                </div>
              }
            />
          </AzureMap>
        </div>
      </AzureMapsProvider>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <MarkersExample />
    </div>
  );
}
