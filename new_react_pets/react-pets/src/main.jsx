import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import { index, show } from "./services/petsService.js";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import PetsPage from "./pages/PetsPage.jsx";
import OnePetPage from "./pages/OnePetPage.jsx";

const queryClient = new QueryClient();
localStorage.debug = "pets:*";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path: "/pets",
    element: (
    <Suspense fallback={<progress />}>
      <PetsPage/>
    </Suspense>
    ),
    loader: index,
  }, 
  {path: "pets/:petId",
    element: <OnePetPage/>,
    loader: ({params}) => {
      const {petId} = params
      return show(petId);
    }
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </RouterProvider>
      </QueryClientProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
);
