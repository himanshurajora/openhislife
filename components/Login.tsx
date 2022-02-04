import { Button, Center, Grid, Text, Container, LoadingOverlay } from "@mantine/core";
import {useAuthState} from 'react-firebase-hooks/auth'
import firebaseApp from '../lib/firebase'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import toast, {Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

export default function Login(){
    const router = useNavigate()
    const [user, loading, error] = useAuthState(getAuth(firebaseApp))

    // useEffect for authState
    useEffect(()=>{
        if(user){
            router("/")
        }else{
            if(!loading){
                toast('I Think You Need To Login First', {
                    icon: "🤔"
                })
            }
        }
    }, [user])

    const handleLogin = async () => {
       try{
        var provider = new GoogleAuthProvider()
        const result = await signInWithPopup(getAuth(firebaseApp), provider)
        if(result.user){
            toast.success("Logged In Successfully!!", {
                icon: "👀"
            })
            router('/')
        }else{
            toast.error("Login Failed", {
                "icon": "👹"
            })
        } 
       }catch(err){
        toast.error("Login Failed")
       }
    }   
    return (
        <>
            <LoadingOverlay visible={loading}/>
            <Container>
                <Center my={"30px"} style={{ height: "70vh" }}>
                    <div>
                        <Center>
                            <Text component="span" style={{ fontSize: "2.5rem" }} variant={"text"} color={"yellow"} weight={"bolder"} align="center">
                                Open His Life (Dev)
                            </Text>
                        </Center>
                        <Center my={"30px"}>
                            <Button color="yellow" radius="lg" size="lg" onClick={handleLogin}>
                                Login With Google
                            </Button>
                        </Center>
                    </div>
                </Center>
                <footer>
                    <Center my={"10px"}>
                        <Text color="yellow" component="span" align="center">
                            &copy; No Copyrights At All 2022 - Whatever
                        </Text>
                    </Center>
                    <Center my={"10px"}>
                        <Text color="yellow" size={"xs"} component="span" align="center">
                            And we are not racists, "His" can be replaced with "Her"
                        </Text>
                    </Center>

                </footer>
            </Container>
            <Toaster></Toaster>
        </>

    )


}