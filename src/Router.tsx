import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Success />} />
      </Route>
    </Routes>
  );
}
