import SignIn from "./SignIn";

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import SignOut from "./SignOut";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function UserProfile() {
    const [user] = useAuthState(auth)

    return (
        <div className="flex items-center gap-5">
            <h2 className="
                    text-white text-lg
                ">{user.displayName.split(' ').map(capitalize).join(' ')}</h2>
            <h3><SignOut /></h3>
        </div>
    )
}

export default function Navbar() {
    const [user] = useAuthState(auth)

    return (
        <nav className="bg-slate-800 p-5 flex justify-between place-items-center">
            <h1 className="text-white text-2xl">Superchat</h1>
            {user ? <UserProfile /> : <SignIn />}
        </nav>
    )
}