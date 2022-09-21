import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="mx-auto max-w-[800px] mt-6 shadow-lg bg-slate-800 p-5 rounded-lg">
      <Navbar />
      <Chat />
    </div>
  )
}