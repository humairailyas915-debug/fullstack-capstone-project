import React from 'react';

const handleLogin = async (credentials) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        },
        body: JSON.stringify(credentials)
    });
    return await response.json();
};

export default handleLogin;
