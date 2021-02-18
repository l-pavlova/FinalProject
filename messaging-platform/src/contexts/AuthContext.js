import React, { useState, useContext, useEffect } from 'react'

import userService from '../services/userService'
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

    const getUserByEmail = async (user) => setCurrentUser((await userService.getUserByEmail(user.email))[0]);
    
    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged(user => {
            if(user) {
                if(!user.emailVerified) {
                    user.sendEmailVerification();
                } else {
                    getUserByEmail(user);
                    //setCurrentUser(user);
                }
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
