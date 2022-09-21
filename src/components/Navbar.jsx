import GoogleButton from "react-google-button";

export default function Navbar() {
    return (
        <nav className="flex justify-between place-items-center">
            <h1 className="text-white text-2xl">Superchat</h1>
            <GoogleButton />
        </nav>
    )
}