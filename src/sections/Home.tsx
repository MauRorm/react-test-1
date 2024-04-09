import "../App.css";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import GeneralContext from "../context/context";

import GENERAL_CONSTANTS from "../constants/generalConstants";

const CONSTANTS = GENERAL_CONSTANTS.CONSTANTS;

const Home = () => {
  let navigate = useNavigate();
  const { role } = useContext(GeneralContext);

  const getUser = () => {
    return role === "1" ? "Admin" : "User";
  };

  return (
    <div>
      <div className="title-home">
        <h2>Bienvenido {getUser()}</h2>
        <p className="clear-margin-top">¡Encuentra lo que estás buscando!</p>
      </div>

      <div className="buttons-container">
        <button
          onClick={() => {
            navigate(`${CONSTANTS.ROUTES.CHARACTER_ROUTE}`);
          }}
          className="my-button"
        >
          Ir a la pantalla Character
        </button>
        &nbsp;
        {role === "1" ? (
          <button
            onClick={() => {
              navigate(`${CONSTANTS.ROUTES.LOCATION_ROUTE}`);
            }}
            className="my-button"
          >
            Ir a la pantalla Location
          </button>
        ) : (
          <button
            onClick={() => {
              navigate(`${CONSTANTS.ROUTES.EPISODE_ROUTE}`);
            }}
            className="my-button"
          >
            Ir a la pantalla de Episode
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
