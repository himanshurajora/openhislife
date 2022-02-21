import "./styles.css"
import LogoutIcon from '../assets/log-out-outline.svg'
import { signOut } from "firebase/auth"
import firebaseApp from '../lib/firebase'
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Input, Modal } from "@mantine/core"

export default function Navbar() {
    const auth = getAuth(firebaseApp)
    const route = useNavigate()
    const [exploreModalOpen, setExploreModalOpen] = useState(false)
    const handleLogOut = async () => {
        await signOut(auth)
        route("/login")
    }

    const handleExplore = () => {
        setExploreModalOpen(!exploreModalOpen)
    }

    return <>
        <div className="navbar">
            <div className="navbar-item">
                <a href="#">🏡</a>
                <p>Home</p>
            </div>
            <div className="navbar-item">
                <a href="#">🆕</a>
                <p>New File</p>
            </div>
            <div className="navbar-item" onClick={handleExplore}>
                <a>🔮</a>
                <p>Explore</p>
            </div>
            <div className="navbar-item"  onClick={handleLogOut}>
                <a>📤</a>
                <p>Logout</p>
            </div>

            <Modal centered className="explore-modal" opened={exploreModalOpen} size={"md"} hideCloseButton={true} onClose={()=>{handleExplore()}}>
                <Input placeholder="Search a username"></Input>
            </Modal>
        </div>
    </>
}