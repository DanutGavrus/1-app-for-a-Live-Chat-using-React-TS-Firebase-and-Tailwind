import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LiveChat from "./pages/LiveChat";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LiveChat />} />
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
