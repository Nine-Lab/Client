import { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";

import seoulMap from "../../api/data/seoul.json";
import ReactTooltip from "react-tooltip";
// ooltip, TooltipProvider, TooltipWrapper

// type Props = {
//     zoom: any;
// };

const SimpleMap = ({ currentState }) => {
    const [tooltipName, setTooltipName] = useState("");
    return (
        <div>
            <ReactTooltip type="light"> {tooltipName}</ReactTooltip>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ rotate: [-60, 0, 5], scale: 38000 }}
                data-tip=""
            >
                <ZoomableGroup
                    center={currentState.center}
                    zoom={currentState.zoom}
                    // minZoom={currentState.zoom - 1}
                    // maxZoom={currentState.zoom + 1}
                >
                    <Geographies geography={currentState.map}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                return (
                                    <Geography
                                        className="tansition"
                                        // fill={
                                        //     currentState.currentView !==
                                        //     "ranking"
                                        //     // : mapColor(currentState)(cur ? cur.VALUE : "#E4E5E9")
                                        // }
                                        stroke={"#F5F5F5"}
                                        strokeWidth={
                                            currentState.isZoom ? 0 : 0.4
                                        }
                                        onMouseEnter={() => {
                                            // if (currentState.currentView === "ranking") {
                                            const { name } = geo.properties;
                                            setTooltipName(name);
                                            // }
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipName("");
                                        }}
                                        fill={"#E4E5E9"}
                                        key={geo.rsmKey}
                                        geography={geo}
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
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default SimpleMap;
