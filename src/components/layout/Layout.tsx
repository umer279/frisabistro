import { Outlet } from "react-router-dom";
import { RestaurantJsonLd } from "./JsonLd";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <RestaurantJsonLd />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
