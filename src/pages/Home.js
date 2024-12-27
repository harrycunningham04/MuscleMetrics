import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HomePage from './HomePage';
import UserMain from './UserMain';

const Home = () => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');

    axios.defaults.withCredentials = true;
 
    useEffect(() => {
        axios.get('http://localhost:8081/auth', { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                }
            })
            .catch(err => {
                console.error("Error verifying authentication:", err);
                setAuth(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    

    if (loading) {
        return <p>Loading...</p>; 
    }
        
        

    return (
        <div>
            {auth ? (
                <UserMain name={name} />
            ) : (
                <HomePage />
            )}
        </div>
    );
};

export default Home;
