import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BookPage } from "./pages/BookPage";
import { ContactPage } from "./pages/ContactPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="eventi" element={<EventsPage />} />
        <Route path="eventi/:slug" element={<EventDetailPage />} />
        <Route path="prenota" element={<BookPage />} />
        <Route path="contatti" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
