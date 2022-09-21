import GoogleButton from "react-google-button";
import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function signInWithGoogle() {
    const prov = new GoogleAuthProvider()
    signInWithPopup(auth, prov)
}

export default function SignIn() {
    return (
        <div>
            <GoogleButton onClick={signInWithGoogle} />
        </div>
    )
}