import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  Root,
  ErrorPage,
  RepoList,
  SingleRepo,
  ErrorBoundary,
  ErrorBoundaryTest,
} from "./routes";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "repo-list",
    element: <RepoList />,
    children: [
      {
        path: ":repoId",
        element: <SingleRepo />,
      },
    ],
  },
  {
    path: "error-boundary-test",
    element: <ErrorBoundaryTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ErrorBoundary>
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
