import { Route, Routes } from "react-router-dom";
import { authRoutes, appRoutes } from "../routes/";
import ErrorBoundary from "./errorBoundary";
import AppLayout from "../layouts/Applayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Containers() {
  const queryClient = new QueryClient();
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {authRoutes.map(({ path, element }) => (
              <Route key={`auth-${path}`} path={path} element={element} />
            ))}
            {appRoutes.map(({ path, element }) => (
              <Route
                key={`auth-${path}`}
                path={path}
                element={<AppLayout>{element}</AppLayout>}
              />
            ))}
            <Route path="*" element={<>NOt found</>} />
          </Routes>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default Containers;
