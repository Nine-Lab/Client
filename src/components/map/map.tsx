import { useState } from "react";
import { SimpleSouthKoreaMapChart } from "react-simple-south-korea-map-chart";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

import seoulMap from "../../api/data/seoul.json";

const data = seoulMap;

// const config: {
//     test: [(a: number) => {}, (a: number, b: string) => {}];
// };
// let sub9: Array<{ a: string; b: number }> = [{ a: "", b: 1 }];

type Props = {
    zoom: any;
};

const SimpleMap = () => {
    const [currentState, setCurrentState] = useState({
        map: seoulMap,
        // center: [126.986:number, 37.561],
    });
    return (
        <div>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
            >
                <ZoomableGroup center={[126.986, 37.561]}>
                    <Geographies geography={data}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke={"#F5F5F5"}
                                    fill={"#E4E5E9"}
                                    style={{
                                        default: {
                                            outline: "none",
                                        },
                                        hover: {
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "fff",
                                            outline: "#333",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default SimpleMap;
