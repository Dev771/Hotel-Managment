import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './styles.css';

const Footer = lazy(() => import("./components/Footer/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const GalleryGrid = lazy(() => import("./components/Gallery/Gallery"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const RoomSingle = lazy(() => import("./components/RoomSingle/RoomSingle"));
const Banquet = lazy(() => import("./components/Banquet/Banquet"));
const Restaurant = lazy(() => import("./components/Restaurant/Restaurant"));
const RoomGrid = lazy(() => import("./components/RoomGrid/RoomGrid"));
const WhatsappFloater = lazy(() => import("./components/WhatsappFloater/WhatsappFloater"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./components/TermsAndCondition/TermsAndCondition"));
const RefundPolicy = lazy(() => import("./components/RefundPolicy/RefundPolicy"));
import Loader from "./components/Loader/Loader";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/room-single/:id" element={<RoomSingle />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/banquet" element={<Banquet />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/gallery" element={<GalleryGrid />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/room-grid" element={<RoomGrid />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
                    <Route path="/refund-and-cancellation" element={<RefundPolicy />} />
                </Routes>
                <WhatsappFloater />
                <Footer />
            </Suspense>
        </BrowserRouter>
    )
}

export default App