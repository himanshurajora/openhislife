import { Text, Center, LoadingOverlay, Button } from "@mantine/core"
import { useAuthState } from "react-firebase-hooks/auth"
import firebaseApp from '../lib/firebase'
import { getAuth, signOut } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate, } from "react-router-dom"
import Navbar from './Navbar'
import Layout from './Layout'
import toast, { Toaster } from 'react-hot-toast'
export default function Home() {
 

    return (<>

        <Layout></Layout>

    </>)
}