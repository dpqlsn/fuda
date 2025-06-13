import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './page/landing';
import Choice from './page/Main';
import Entire from './page/All';
import Save from './page/save';
import Character from './page/Character';
import CS from './page/CS';
import Backend from './page/Backend';
import Frontend from './page/Frontend';
import Framework from './page/Framework'


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/entire" element={<Entire />} />
            <Route path="/save" element={<Save />} />
            <Route path="/character" element={<Character />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/cs" element={<CS />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/framework" element={<Framework />} />
        </Routes>
        </BrowserRouter>
    );
}
