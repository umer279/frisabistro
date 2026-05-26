import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import { events } from "./data/events";

export async function prerender(data: { url: string }) {
  const html = renderToString(
    <HelmetProvider>
      <MemoryRouter initialEntries={[data.url]}>
        <AppRoutes />
      </MemoryRouter>
    </HelmetProvider>,
  );

  const eventLinks = events.map((e) => `/eventi/${e.slug}`);

  return {
    html,
    links: new Set([
      "/menu",
      "/eventi",
      "/prenota",
      "/contatti",
      "/privacy",
      ...eventLinks,
    ]),
  };
}
