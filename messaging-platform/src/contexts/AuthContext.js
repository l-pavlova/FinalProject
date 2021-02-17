import React, { useState, useContext, useEffect } from 'react'

import { auth } from  '../utils/firebase'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({
    children
}) => {
    const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log(user);
            if(user && user.metadata.creationTime !== user.metadata.lastSignInTime) {
                setCurrentUser(user);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
