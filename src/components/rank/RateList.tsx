import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import data from "../../api/data/rate.json";

interface Location {
    rank: any;
    gu: string;
    rate: any;
}

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
};

console.log(data);
export const RateList = () => {
    return (
        <>
            <div>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    {data.map((location: Location) => {
                        return (
                            <div>
                                <ListItem
                                    key={location.rank}
                                    value={location.rank}
                                >
                                    <ListItemText
                                        primary={location.gu}
                                        secondary={`
                                        ${location.rank} 
                                        등 
                                        만족도:  
                                        ${location.rate}                                        
                                    `}
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
            </div>
        </>
    );
};
