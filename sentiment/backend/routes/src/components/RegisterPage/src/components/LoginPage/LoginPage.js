import React from 'react';
async function handleLogin(credentials) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token_here'
        },
        body: JSON.stringify(credentials)
    });
    return response.json();
}
export default handleLogin;
