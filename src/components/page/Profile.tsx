import Admin from "components/user/Admin";
import Info from "components/user/Info";
import Leave from "components/user/Leave";
import React from "react";

const Profile = () => {
    return (
        <div>
            <Info />
            <Admin />
            <Leave />
        </div>
    );
};

export default Profile;