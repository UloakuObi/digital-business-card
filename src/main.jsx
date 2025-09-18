import { createRoot } from "react-dom/client"
import About from "../components/About.jsx"
import Interests from "../components/Interests.jsx"

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <About />
    <Interests />
  </main>
)
