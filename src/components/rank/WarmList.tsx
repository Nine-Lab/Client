import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import data from "../../api/data/wram.json";

interface Location {
    rank: any;
    gu: string;
    budget: any;
}

const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
};

console.log(data);
export const WarmList = () => {
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
                                        수치:  
                                        ${location.budget}                                        
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
