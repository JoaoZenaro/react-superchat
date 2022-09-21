import { auth } from '../firebase'

export default function ChatMessage({ message }) {
    let logged = message.uid === auth.currentUser.uid

    return (
        <div className={!logged ? `flex flex-col items-start` : `flex flex-col items-end`}>
            <div className={!logged ? `bg-slate-100 rounded-b-2xl rounded-r-2xl p-3` : `bg-emerald-400 rounded-b-2xl rounded-l-2xl p-3 text-right`}>
                <p className={!logged ? `font-bold text-sm text-slate-600` : `right-0 font-bold text-sm text-slate-600`}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}