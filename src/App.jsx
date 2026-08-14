import { BrowserRouter, Route, Routes } from 'react-router';
import Page from './components/Page';

import Homepage from './pages/Homepage';
import MenuPage from './pages/MenuPage';
import FeedPage from './pages/FeedPage';
import Error404Page from './pages/Error404Page';
import ContactPage from './pages/ContactPage';
import DropsPage from './pages/DropsPage';
import VisitPage from './pages/VisitPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AllergenePage from './pages/AllergenePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
            Jede Route bekommt dieselbe Seitenhülle. Dadurch bleiben Header und Footer konsistent. 
            Der Seiteninhalt wird als Komponente in die Page Komponente als Prop importiert.
            Darum wird Content mit großem C geschrieben.
        */}
        <Route
          path="/"
          element={<Page header footer Content={Homepage} />}
        />
        <Route
          path="/menu"
          element={<Page header footer Content={MenuPage} />}
        />
        <Route
          path="/feed"
          element={<Page header footer Content={FeedPage} />}
        />
        <Route
          path="/contact"
          element={<Page header footer Content={ContactPage} />}
        />
        <Route
          path="/drops"
          element={<Page header footer Content={DropsPage} />}
        />
        <Route
          path="/visit"
          element={<Page header footer Content={VisitPage} />}
        />
        <Route
          path="/impressum"
          element={<Page header footer Content={ImpressumPage} />}
        />
        <Route
          path="/datenschutz"
          element={<Page header footer Content={DatenschutzPage} />}
        />
        <Route
          path="/allergene"
          element={<Page header footer Content={AllergenePage} />}
        />
        {/* Fängt unbekannte URLs ab und zeigt eine eigene 404-Seite an. */}
        <Route
          path="*"
          element={<Page header footer Content={Error404Page} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
