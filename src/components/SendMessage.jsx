import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { auth, db } from '../firebase'

export default function SendMessage({ scroll }) {
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            return
        }

        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <form onSubmit={sendMessage} className="flex mt-4">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message"
                className="flex-grow pl-6 bg-slate-800 text-white" />
            <button type="submit" className="px-12 py-3 bg-emerald-500 text-white font-semibold">Send</button>
        </form>
    )
}