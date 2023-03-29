import Admin from "components/user/Admin";
import Info from "components/user/Info";
import Leave from "components/user/Leave";
import React from "react";

import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";

const Profile = () => {
    return (
        <ErrorBoundary fallback={Error}>
            <div>
                {/* <Info />
                <Admin />
                <Leave /> */}
            </div>
        </ErrorBoundary>
    );
};

export default Profile;
