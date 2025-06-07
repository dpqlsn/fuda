import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/page/landing';
import Choice from '../src/page/choice';

export default function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/choice" element={<Choice />} />
        </Routes>
        </Router>
    );
}
