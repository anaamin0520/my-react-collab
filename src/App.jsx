import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Jobs from './pages/Jobs.jsx';
import Help from './pages/Help.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Help" element={<Help />} />
        </Routes>
    );
}

export default App;

//necessary downloads:
//npm install bootstrap
//npm install react-router-dom framer-motion react-spring