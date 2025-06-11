import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './page/Landing';
import Choice from './page/Main';
import Entire from './page/Entire'
import Save from './page/Save';

export default function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/entire" element={<Entire />} />
            <Route path="/save" element={<Save />} />
        </Routes>
        </Router>
    );
}
