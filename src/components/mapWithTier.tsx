import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { WindLayer } from "@maptiler/weather";
import harborIcon from "../Assests/Icons/harbor.png"
import { MapProps, PathCoordinates } from '../Static/types';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import {config, MapStyle } from "@maptiler/sdk";


const Map: React.FC<MapProps> = ({ srcCoordinate, destCoordinate }) => {
    const mapContainer = useRef(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const [zoom] = useState(10);
    const [pathCoordinates, setPathCoordinates] = useState<[[number, number]]>([[0, 0]])

    if (process.env.REACT_APP_MAPTILERSDSK !== undefined) {
        maptilersdk.config.apiKey = process.env.REACT_APP_MAPTILERSDSK;
    } else {
        console.error("REACT_APP_MAPTILERSDSK is undefined");
    }

    const path = useSelector((state: RootState) => state.port as any);

    // const mapStyles = ["MapStyle.BASIC", "MapStyle.SATELLITE", "MapStyle.WINTER", "MapStyle.OUTDOOR", "MapStyle.HYBRID"]

    const originMarker = new maptilersdk.Marker({ color: "#171013" })

    useEffect(() => {
        if (path?.pathCoordinates?.features?.length > 0) {
            setPathCoordinates(path?.pathCoordinates?.features[0]?.geometry?.coordinates);
        }
    }, [path])

    useEffect(() => {
        if (!map.current && mapContainer.current) {
            map.current = new maptilersdk.Map({
                container: mapContainer.current,
                style: MapStyle.BASIC,
                geolocate: maptilersdk.GeolocationType.POINT,
            });
            // const layer = new WindLayer();
            // map.current.on('style.load', () => {
            //     if(map.current){
            //     const typedMap = map.current as maptilersdk.Map;
            //     typedMap.setPaintProperty('Water', 'fill-color', 'rgba(0, 0, 0, 1)');
            //     map.current.addLayer(layer);
            //     }
            //     });
            // map.current.addLayer(layer);

        }
        else {
            map.current?.flyTo({ center: srcCoordinate, zoom: 9 })
            if (map.current && srcCoordinate && srcCoordinate[0] !== 0 && srcCoordinate[1] !== 0) {
                originMarker
                    .setLngLat(srcCoordinate)
            }
        }
        if (srcCoordinate && destCoordinate && pathCoordinates?.length > 3 && map?.current) {
            if (map.current && pathCoordinates?.length > 0) {
                if (map.current.getLayer('route')) {
                    map.current.removeLayer('route');
                }

                if (map.current.getSource('route')) {
                    map.current.removeSource('route');
                }

                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': pathCoordinates
                        }
                    }
                });

                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': '#0BDA51',
                        'line-width': 5
                    }
                });
                map.current.zoomTo(5);
            }
        }
    }, [srcCoordinate, destCoordinate, zoom, pathCoordinates]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}
export default Map;