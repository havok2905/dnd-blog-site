import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import designSystem from '~/design-system/design-system.css';
import designSystemReset from '~/design-system/reset.css';
import global from '~/styles/global.css';

export const links = () => {
  return [
    { rel: "stylesheet", href: designSystemReset },
    { rel: "stylesheet", href: designSystem },
    { rel: "stylesheet", href: global }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Havok's Corner",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
