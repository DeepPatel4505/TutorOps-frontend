import React from 'react';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return <div>
        <Outlet />
    </div>;
};

export default HomePageLayout;
