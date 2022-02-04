import { Text, Center, LoadingOverlay, Button } from "@mantine/core"
import { useAuthState } from "react-firebase-hooks/auth"
import firebaseApp from '../lib/firebase'
import { getAuth, signOut } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate, } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'
export default function Home() {
    const appAuth = getAuth(firebaseApp)
    const [user, loading, error] = useAuthState(appAuth)
    const router = useNavigate()
    useEffect(() => {
        if (!user) {
            router("/login")
        }
    }, [user])

    const handleLogOut = () => {
        signOut(appAuth)
    }

    return (<>
        <Center>
            {
                loading ?
                    <LoadingOverlay visible={loading}></LoadingOverlay>
                    : <></>
            }
        </Center>
        <Center>
            {
                user ?
                    <Button onClick={handleLogOut} color="yellow">Logout</Button>
                    : <></>}
        </Center>


        <Toaster />
    </>)
}