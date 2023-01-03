import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { GameDetails } from '../pages/GameDetails';

export function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<GameDetails />} />
        </Routes>
    );
}