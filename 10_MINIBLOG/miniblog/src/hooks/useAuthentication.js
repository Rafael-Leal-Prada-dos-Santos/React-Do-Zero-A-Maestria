import { app, db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {

    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(null);

    //cleanup
    //lidar com memoryleak

    const[cancelled, setCancelled] = useState(false);

    const auth = getAuth(app);

    function checkIfIsCancelld(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelld();

        setLoading(true);
        setError(null);
        try {
            const {user} = 
            await createUserWithEmailAndPassword (
                auth, 
                data.email, 
                data.password
            );

            await updateProfile(user, {displayName: data.displayName});

            setLoading(false);

            return user;
        }
        catch(error) 
        {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres";
            }
            else if (error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado";
            }
            else
            {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."   
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    }

    //logout
    const logout = () => {

        checkIfIsCancelld();
        signOut(auth)
    }

    const login = async(data) => {
        checkIfIsCancelld();

        setLoading(true);
        setError(null);

        try
        {
            console.log(data)
            // console.log(auth);
            await signInWithEmailAndPassword(auth, data.email, data.password);
        }
        catch(error)
        {
            console.log(error.message);

            let systemErrorMessage;

             if(error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado.";
            }
            else if(error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta.";
            }
            else if(error.message.includes("invalid-credential")) {
                systemErrorMessage = "Credencial inválida.";
            }
            else {
                 systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde";
            }

            setLoading(false);
            console.log(systemErrorMessage)
            setError(systemErrorMessage);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    } , [])

    return {
        auth,
        createUser,
        error,
        loading,
        login,
        logout
    }
}