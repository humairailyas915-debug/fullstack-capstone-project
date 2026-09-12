import React from 'react';
async function handleRegister(user) {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    return response.json();
}
export default handleRegister;
