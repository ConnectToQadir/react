import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from "./Pages/Blog";
import NavBar from "./components/NavBar/NavBar";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={"404 Page Not Found"} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default App;