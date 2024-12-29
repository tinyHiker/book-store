import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/firebase.config';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth); // Corrected 'cont' to 'const'

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            UserProfile
            {user ? (
                <div>
                    <p>Logged in as {user.email}</p>
                    <p>User ID: {user.uid}</p>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}

export default UserProfile;