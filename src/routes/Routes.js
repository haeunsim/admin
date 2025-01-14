import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./index";
import Sidebar from "../components/Sidebar";

// layouts/DefaultLayout.js
// const DefaultLayout = () => {
//   return (
//     <main>
//       <AllRoutes />
//     </main>
//   );
// };

// layouts/VerticalLayout.js
// const VerticalLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div style={{ flex: 1, overflow: "auto" }}>
//         <main>
//           <AllRoutes />
//         </main>
//       </div>
//     </div>
//   );
// };

const Routes = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
};

export default Routes;
