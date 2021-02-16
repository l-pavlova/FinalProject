import { auth } from  './firebase'

export const login = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        await auth.currentUser.getIdToken().then(test => {
            document.cookie = `token=${test}`
        });
    } catch (error) {
        console.log(error);
        logout();
        return error;
    }
};

export const signup = async (email, password) => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const refreshToken = () => {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(async user => {
            let newToken;

            if (user) {
                newToken = await user.getIdToken(true);
                document.cookie = `token=${newToken}`
            }

            resolve(newToken);
        });
    });
}

export const logout = async () => {
    await auth.signOut();
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/authorization'
};