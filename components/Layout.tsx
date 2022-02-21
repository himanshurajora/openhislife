import { Text, Center, LoadingOverlay, Button } from "@mantine/core"
import { useAuthState } from "react-firebase-hooks/auth"
import firebaseApp from '../lib/firebase'
import { getAuth, signOut } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate, } from "react-router-dom"
import Navbar from './Navbar'
import toast, { Toaster } from 'react-hot-toast'

export default function Layout(props: any) {
    const appAuth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(appAuth)
    const router = useNavigate()
    useEffect(() => {
       if(user !== null){
            router("/")
       }else{
            router("/login")
       }
    }, [user])

    return (
        <>
            <div className="container-center">
                <Navbar />
            </div>
            <div className="layout">
                {props.children}
            </div>
            <Center>
            {
                loading ?
                    <LoadingOverlay visible={loading}></LoadingOverlay>
                    : <></>
            }
        </Center>
         
        <Toaster />
        </>
    )
}