import React, { useState, useEffect } from 'react';
import TetrahedronLoader from './TetrahedronLoader';

function Loader() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setData("Data loaded!");
            setLoading(false);
        }, 10000);
    }, []);

    return (
        <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {loading ? (
                <TetrahedronLoader />
            ) : (
                <h1>{data}</h1>
            )}
        </div>
    );
}

export default Loader;