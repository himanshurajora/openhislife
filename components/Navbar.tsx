import "./styles.css"
import LogoutIcon from '../assets/log-out-outline.svg'
import { signOut } from "firebase/auth"
import firebaseApp from '../lib/firebase'
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const auth = getAuth(firebaseApp)
    const route = useNavigate()

    const handleLogOut = () => {
        signOut(auth)
        route("/login")
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
            <div className="navbar-item">
                <a href="#">🔮</a>
                <p>Explore</p>
            </div>
            <div className="navbar-item">
                <a onClick={handleLogOut}>📤</a>
                <p>Logout</p>
            </div>
        </div>
    </>
}