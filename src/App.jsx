import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import FeedPage from './pages/FeedPage';
import Error404Page from './pages/Error404Page';
import ContactPage from './pages/ContactPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
