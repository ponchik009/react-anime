import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimePage from "../../pages/AnimePage/AnimePage";
import HomePage from "../../pages/HomePage/HomePage";
import WaifuPage from "../../pages/WaifuPage/WaifuPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anime" element={<AnimePage />} />
      <Route path="/waifu" element={<WaifuPage />} />
    </Routes>
  );
};

export default AppRouter;
