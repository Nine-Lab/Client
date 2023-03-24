// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { DustList } from "components/rank/DustList";
// import SimpleMap from "components/map/map";

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

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

import React, { useState } from "react";
// import "./styles.css";
import Tabs from "./Tabs";
// Tabs Components
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";

type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
    {
        label: "Tab One",
        index: 1,
        Component: TabOne,
    },
    {
        label: "Tab Two",
        index: 2,
        Component: TabTwo,
    },
    {
        label: "Tab Three",
        index: 3,
        Component: TabThree,
    },
];

export default function BasicTabs() {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <br />
            <Tabs
                selectedTab={selectedTab}
                onClick={setSelectedTab}
                tabs={tabs}
            />
        </div>
    );
}
