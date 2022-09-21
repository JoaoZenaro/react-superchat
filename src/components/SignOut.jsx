import { auth } from "../firebase"

export default function SignOut() {
    const signOut = () => {
        signOut(auth)
    }

    return (
        <button onClick={() => auth.signOut()} className="bg-slate-300 text-slate-800 py-2 px-5 rounded-lg hover:bg-slate-400">
            Sign out
        </button>
    )
}