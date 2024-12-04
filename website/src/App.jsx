import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Library from './Components/Library';
import LMS from './Components/LMS';
import About from './Components/About';
import Home from './Components/Home';
import Vlogs from './Components/Vlogs';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/lms" element={<LMS />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/vlogs" element={<Vlogs/>} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
