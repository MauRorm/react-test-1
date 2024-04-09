import React, { useState } from "react";
import "./App.css";

import Header from "./sections/Header";
import Home from "./sections/Home";
import Location from "./sections/Location";
import Character from "./sections/Character";
import Episode from "./sections/Episode";
import Login from "./sections/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import GeneralContext from "./context/context";

import GENERAL_CONSTANTS from "./constants/generalConstants";

interface ProtectedRoutesInterface {
  children: React.ReactNode;
  token: string | null;
}

const ProtectedRoute: React.FC<ProtectedRoutesInterface> = ({
  children,
  token,
}) => {
  if (token === null || token.trim() === "") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

interface ProtectedRouteLocationByRoleInterface {
  children: React.ReactNode;
  token: string | null;
  role: string | null;
}

const ProtectedRouteLocation: React.FC<
  ProtectedRouteLocationByRoleInterface
> = ({ children, token, role }) => {
  if (token === null || token.trim() === "" || role !== "1") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const ProtectedRouteCharacter: React.FC<
  ProtectedRouteLocationByRoleInterface
> = ({ children, token, role }) => {
  if (token === null || token.trim() === "") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const ProtectedRouteEpisode: React.FC<
  ProtectedRouteLocationByRoleInterface
> = ({ children, token, role }) => {
  if (token === null || token.trim() === "" || role !== "2") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const CONSTANTS = GENERAL_CONSTANTS.CONSTANTS;

const App = () => {
  const [token, setToken] = useState<string | null>("");
  const handleSetToken = (value: string | null) => {
    setToken(value);
  };
  const [role, setRole] = useState<string | null>("");
  const handleSetRole = (value: string | null) => {
    setRole(value);
  };

  return (
    <>
      <GeneralContext.Provider
        value={{
          token,
          handleSetToken,
          role,
          handleSetRole,
        }}
      >
        <div className="container">
          <Router>
            <Header />
            <main className="container-screen">
              <Routes>
                <Route
                  index
                  path={`${CONSTANTS.ROUTES.BASE_ROUTE}`}
                  element={<Login />}
                />

                <Route
                  index
                  path={`${CONSTANTS.ROUTES.HOME_ROUTE}`}
                  element={
                    <ProtectedRoute token={token}>
                      <Home />
                    </ProtectedRoute>
                  }
                />

                <Route
                  index
                  path={`${CONSTANTS.ROUTES.LOCATION_ROUTE}`}
                  element={
                    <ProtectedRouteLocation token={token} role={role}>
                      <Location />
                    </ProtectedRouteLocation>
                  }
                />

                <Route
                  index
                  path={`${CONSTANTS.ROUTES.EPISODE_ROUTE}`}
                  element={
                    <ProtectedRouteEpisode token={token} role={role}>
                      <Episode />
                    </ProtectedRouteEpisode>
                  }
                />

                <Route
                  index
                  path={`${CONSTANTS.ROUTES.CHARACTER_ROUTE}`}
                  element={
                    <ProtectedRouteCharacter token={token} role={role}>
                      <Character />
                    </ProtectedRouteCharacter>
                  }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </Router>
        </div>
      </GeneralContext.Provider>
    </>
  );
};

export default App;
