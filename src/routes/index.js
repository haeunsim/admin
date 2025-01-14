import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Root from "./Root";
import PrivateRoute from "./privateRoute.js";
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";

const Login = React.lazy(() => import("../pages/Login.jsx"));
// const LessonPrep = React.lazy(() => import("../pages/LessonPrep.jsx"));
// const LessonDB = React.lazy(() => import("../pages/LessonDB.jsx"));
// const LessonCustom = React.lazy(() => import("../pages/LessonCustom.jsx"));
// const LessonMonitor = React.lazy(() => import("../pages/LessonMonitor.jsx"));
// const LessonManage = React.lazy(() => import("../pages/LessonManage.jsx"));
// const ChatHistory = React.lazy(() => import("../pages/ChatHistory.jsx"));
// const ClassChange = React.lazy(() => import("../pages/ClassChange.jsx"));
const Preparing = React.lazy(() => import("../pages/Preparing.jsx"));

const Home = React.lazy(() => import("../pages/Home.jsx"));
const Account = React.lazy(() => import("../pages/Account.jsx"));
const SchoolRegistration = React.lazy(() => import("../pages/SchoolRegistration.jsx"));
const AccountIssuance = React.lazy(() => import("../pages/AccountIssuance.jsx"));
const AccountSettings = React.lazy(() => import("../pages/AccountSettings.jsx"));
const AccountAddition = React.lazy(() => import("../pages/AccountAddition.jsx"));
const Content = React.lazy(() => import("../pages/Content.jsx"));
const ContentDB = React.lazy(() => import("../pages/ContentDB.jsx"));
const ContentCreation = React.lazy(() => import("../pages/ContentCreation.jsx"));
const ContentViewing = React.lazy(() => import("../pages/ContentViewing.jsx"));

const loading = () => <div className=""></div>;

const LoadComponent = ({ component: Component }) => (
  <Suspense fallback={loading()}>
    <Component />
  </Suspense>
);

const AllRoutes = () => {

  return useRoutes([
    { path: "/", element: <Root /> },
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "login",
          element: <LoadComponent component={Login} />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute component={VerticalLayout} />,
      // PrivateRoute 는 로그인해야만 진입할 수 있는 페이지들, sidebar가 있는 레이아웃
      children: [
        {
          path: "home",
          element: <LoadComponent component={Home} />,
        },
        {
          path: "account",
          children: [
            {
              path: "",
              element: <LoadComponent component={Account} />,
            },
            {
              path: "school-registration",
              element: <LoadComponent component={SchoolRegistration} />,
            },
            {
              path: "issuance",
              element: <LoadComponent component={AccountIssuance} />,
            },
            {
              path: "settings",
              element: <LoadComponent component={AccountSettings} />,
            },
            {
              path: "addition",
              element: <LoadComponent component={AccountAddition} />,
            },
          ],
        },
        {
          path: "content",
          children: [
            {
              path: "",
              element: <LoadComponent component={Content} />,
            },
            {
              path: "database",
              element: <LoadComponent component={ContentDB} />,
            },
            {
              path: "creation",
              element: <LoadComponent component={ContentCreation} />,
            },
            {
              path: "viewing",
              element: <LoadComponent component={ContentViewing} />,
            },
          ],
        },
        {
          path: "comingsoon",
          element: <LoadComponent component={Preparing} />,
        },
      ],
    },
  ]);
};

export { AllRoutes };
