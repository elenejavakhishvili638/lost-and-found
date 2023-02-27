import React, { useEffect, useRef } from 'react'
import { mapProps } from '../types/propsTypes';
import "./mapModal.css"

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Circle, Fill, Icon, Stroke, Style } from 'ol/style.js';
import LayerGroup from 'ol/layer/Group';
import VectorLayer from 'ol/layer/Vector';
import { Feature, Overlay } from 'ol';
import { BsPinFill } from "react-icons/bs"
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';

import Pin from "../assets/images/660624.png"
import { toSize } from 'ol/size';




const MapModal: React.FC<mapProps> = ({ center, zoom }) => {

    const mapRef = useRef<HTMLDivElement>(null);
    // const imageRef = useRef<HTMLImageElement>(null)


    useEffect(() => {
        if (!mapRef.current) return;
        // if (!imageRef.current) return;

        const map = new Map({
            target: mapRef.current?.id,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([center.longitude, center.latitude]),
                zoom: zoom
            }),

        })

        // Create an image to represent the pin
        const icon = new Icon({
            // anchor: [0.5, 1],
            color: "#c92c6d",

            // img: imageRef.current,
            // imgSize: toSize([0.2, 0.2])
            src: 'https://openlayers.org/en/latest/examples/data/icon.png'
        });

        // Create a new Feature object with a Point geometry
        const pin = new Feature({
            geometry: new Point(fromLonLat([center.longitude, center.latitude]))
        });

        // Set the style of the pin using the icon
        pin.setStyle(new Style({
            image: icon
        }));

        // Create a new VectorLayer and add the pin Feature to it
        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [pin]
            })
        });

        // Add the VectorLayer to the map
        map.addLayer(vectorLayer);


        return () => {
            map?.setTarget(undefined);
        };

    }, [center, zoom]);

    return (
        <div className='map-container'>
            <div
                ref={mapRef}
                className="map"
                // style={{ width: "100%", height: "400px", backgroundColor: "gray" }}
                id="map"
            >
            </div>
            {/* <img src={Pin} ref={imageRef} style={{ position: "fixed", width: "50px", height: "50px" }} /> */}
        </div>

    );
}

export default MapModal


 // const fill = new Fill({
        //     color: 'rgba(255,255,255,0.4)',
        // });
        // const stroke = new Stroke({
        //     color: '#3399CC',
        //     width: 1.25,
        // });

        // const styleLayerGroup = new LayerGroup({
        //     layers: [
        //         new VectorLayer({
        //             style: new Style({
        //                 image: new Circle({
        //                     fill: fill,
        //                     stroke: stroke,
        //                     radius: 5,
        //                 }),
        //                 fill: fill,
        //                 stroke: stroke,
        //             })
        //         })
        //     ]
        // });

           // map.setLayerGroup(new LayerGroup({
        //     layers: [
        //         new TileLayer({
        //             source: new OSM()
        //         }),
        //         styleLayerGroup
        //     ]
        // }))