import { axiosInstance } from '@services/API/axiosConfig';
import React, { useEffect, useState } from 'react';

const TestAPI = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get("/test");
            setData(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? "Loading..." : <div>{data.data.data}</div>}
        </div>
    );
};

export default TestAPI;
