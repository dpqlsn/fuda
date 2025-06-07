import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/page/landing';
import Choice from '../src/page/choice';
import Entire from '../src/page/entire'

export default function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/entire" element={<Entire />} />
        </Routes>
        </Router>
    );
}
