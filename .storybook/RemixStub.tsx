import React from "react";
import { RemixBrowser } from "@remix-run/react";

interface RemixStubProps {
  children: React.ReactNode;
}

export function RemixStub({
  children
}: RemixStubProps) {
  const win = window as any;

  win.__remixManifest = {
    routes: {
      "routes/$": {
        id: "routes/$",
        path: "*",
      },
    },
  };

  win.__remixRouteModules = {
    "routes/$": {
      default: React.useCallback(() => children, []),
      // it doesn't update when switching to another story with an empty dependency array, hence the globalState plumbing
    },
  };

  win.__remixContext = {
    appState: {},
    future: {},
    matches: [],
    routeData: {},
    state: {}
  };

  return (
    <RemixBrowser>
      {children}
    </RemixBrowser>
  );
};
