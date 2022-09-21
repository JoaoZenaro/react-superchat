import { useEffect, useRef, useState } from "react";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from '../firebase'
import ChatMessage from "./ChatMessage";
import SendMessage from "./SendMessage";

export default function Chat() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        async function getData() {
            const q = query(collection(db, "messages"), orderBy("timestamp"));

            const querySnapshot = await getDocs(q);
            let msgs = []
            querySnapshot.forEach((doc) => {
                msgs.push({ ...doc.data(), id: doc.id })
            });
            setMessages(msgs)
        }

        getData()
            .catch(console.error)

    })

    return (
        <main>
            <section className="max-h-[80vh] overflow-auto scrollbar-thumb-gray-900 scrollbar-thin">
                <div className="flex flex-col gap-3 flex-wrap p-3 relative">
                    {messages && messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {messages && messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {messages && messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {messages && messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {messages && messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    <span ref={scroll}></span>
                </div>
            </section>
            <SendMessage scroll={scroll} />

        </main>
    )
}