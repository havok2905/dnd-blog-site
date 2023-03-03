import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import global from '~/styles/global.css';
import vanilla from '~/styles/vanilla.css';

export const links = () => {
  return [
    { rel: "stylesheet", href: vanilla },
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
