import { createRoot } from "react-dom/client"
import Info from "../components/Info.jsx"
import About from "../components/About.jsx"
import Interests from "../components/Interests.jsx"
import Footer from "../components/Footer.jsx"

const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <main>
            <Info />
            <About />
            <Interests />
        </main>
        <Footer />
    </>
)
