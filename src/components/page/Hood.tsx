import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";
import { BackGroundContainer } from "./Main";
import SimpleMap from "components/map/map";
import { RateList } from "components/rank/RateList";
import { DustList } from "components/rank/DustList";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// import BasicTabs from "components/tab/MapOnTab";
import BasicTabs from "components/tab/MapOnTab";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
};

const Hood = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BackGroundContainer>
            <CarouselContainer>
                <InfoContainer>
                    <TabPanel value={value} index={0}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ paddingTop: "3rem" }}
                        >
                            미세먼지 순위
                        </Typography>
                        <DustList />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ paddingTop: "3rem" }}
                        >
                            침수위험지구 순위
                        </Typography>
                        <DustList />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ paddingTop: "3rem" }}
                        >
                            생활환경 만족도 순위
                        </Typography>
                        <RateList />
                    </TabPanel>
                </InfoContainer>
                <MapContainer>
                    {/* <Box sx={{ maxWidth: 120, marginLeft: "auto" }}> */}
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <SimpleMap />
                    </TabPanel>
                </MapContainer>
            </CarouselContainer>
        </BackGroundContainer>
    );
};

export default Hood;

const CarouselContainer = styled("div")`
    width: 100%;
    display: flex;
    align-items: center;
    display: flex;
    /* justify-content: ; */
    /* position: relative; */
`;

const InfoContainer = styled("div")`
    width: 20%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 100px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-align: center;
    overflow-y: scroll;
`;

const MapContainer = styled("div")`
    width: 70%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 100px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { DustList } from "components/rank/DustList";
// import SimpleMap from "components/map/map";

// function a11yProps(index: number) {
//     return {
//         id: `simple-tab-${index}`,
//         "aria-controls": `simple-tabpanel-${index}`,
//     };
// }

// export default function BasicTabs() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ width: "100%" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     aria-label="basic tabs example"
//                 >
//                     <Tab label="Item One" {...a11yProps(0)} />
//                     <Tab label="Item Two" {...a11yProps(1)} />
//                     <Tab label="Item Three" {...a11yProps(2)} />
//                 </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//                 <SimpleMap />

//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 <DustList />
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 <SimpleMap />
//             </TabPanel>
//         </Box>
//     );
// }
