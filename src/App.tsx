import { BrowserRouter, Route, Routes } from "react-router-dom"

import './styles.css';

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import HomePage from "./components/HomePage/HomePage";
import GalleryGrid from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import RoomSingle from "./components/RoomSingle/RoomSingle-Family";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room-single" element={<RoomSingle />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/gallery" element={<GalleryGrid />} />
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App