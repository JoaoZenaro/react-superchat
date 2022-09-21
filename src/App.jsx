import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

export default function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="mx-auto max-w-[800px] mt-6 shadow-lg bg-slate-800 p-5 rounded-lg">
      <Navbar />
      {user ? <Chat /> : null}
    </div>
  )
}