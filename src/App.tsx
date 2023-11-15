import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { HighScore } from "./pages/HighScore";
import NoPage from "./pages/NoPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Game } from "./pages/Game";

// this is temporary until I figure out a better way to do this
import eeveeImg from "./img/eevee.jpg";
import eeveeSilhoutteImg from "./img/eeveeSil.jpg";

library.add(fab, fas, far);

export default function App() {
  const gameCharacter = {
    id: 1,
    name: "Eevee",
    show: "Pokemon",
    img: eeveeImg,
    silhoutteImg: eeveeSilhoutteImg,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/highscore" element={<HighScore />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/game" element={<Game {...gameCharacter} />} />
      </Routes>
    </BrowserRouter>
  );
}
