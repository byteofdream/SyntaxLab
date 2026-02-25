import { Navigate, Route, Routes } from 'react-router-dom';
import HomeEn from './pages/HomeEn';
import HomeRu from './pages/HomeRu';
import TutorialPage from './pages/TutorialPage';

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/en" element={<HomeEn />} />
      <Route path="/ru" element={<HomeRu />} />
      <Route path="/en/languages/:slug" element={<TutorialPage locale="en" />} />
      <Route path="/ru/languages/:slug" element={<TutorialPage locale="ru" />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
};

export default AppRouter;
