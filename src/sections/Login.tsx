import "../App.css";

import { useNavigate } from "react-router-dom";

import CustomInput from "../components/CustomInput";

import { ChangeEvent, KeyboardEvent, useState, useContext } from "react";

import GENERAL_CONSTANTS from "../constants/generalConstants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import axios from "axios";

import GeneralContext from '../context/context'; 




interface UserInterface {
    user: string;
    pass: string;
  }

  const useFetch = () => {

    const [data, setData] = useState<UserInterface | null>(null);
    const [error, setError] = useState<string | null>(null);
    
  
    const callPostApi = async (url: string, userData: UserInterface) => {
        try {
            const response = await axios.post<UserInterface>(url, userData);
            setData(response.data);
            return response.data; // Confirm that the type of `response.data` is consistent with `UserInterface`.
        } catch (error: any) {
            setError(error.toString());
            setData(null);
            return error;
        }
    };
  
    return { data, error, callPostApi }; // Returns an object with defined properties
};




const CONSTANTS = GENERAL_CONSTANTS.CONSTANTS;

const Login = () => {
  let navigate = useNavigate();

  const { handleSetToken, handleSetRole, } = useContext(GeneralContext);


  const { callPostApi } = useFetch();

  const [user, setUser] = useState<string | null>(null);
  const [pass, setPass] = useState<string | null>(null);

  const validateLoginRequiredFields = (userValue = '', passValue = '') => {
    let isError = false;
    if (userValue === '') {
        isError = true;
    }
    if (passValue === '') {
        isError = true;
    }
    return isError;
  }

  const onClickLogin = () => {
      const userValue = user === null ? '' : user.trim();
      const passValue = pass === null ? '' : pass.trim();
    if (validateLoginRequiredFields(userValue, passValue)) {
        alert("Favor de llenar los campos requeridos");
    } else {
        onClickSuccess(userValue, passValue);
    }
  };

  const onClickSuccess = async (userValue: string, passValue: string) => {
    const userData: UserInterface = { user: userValue, pass: passValue };
    const response = await callPostApi(`${GENERAL_CONSTANTS.BASE_URL_SERVER}${CONSTANTS.URL.POST_LOGIN}`, userData);
    if (response.response && response.response.status) {
        alert("Usuario o contraseña invalido");
        return 
    } else {
        handleSetToken(response.token);
        handleSetRole(response.role);
        navigate(`${CONSTANTS.ROUTES.HOME_ROUTE}`);
    }
  };


  return (
    <div>
      <div className="title-home">
        <h2>Bienvenido</h2>
        <p className="clear-margin-top">Iniciar sesión</p>
      </div>

      <div className="login-inputs-container">
        <CustomInput
          defaultValue={""}
          type="text"
          disabled={false}
          readOnly={false}
          placeholder={"Usuario *"}
          className={"search-input"}
          style={{}}
          onBlur={(e: ChangeEvent<HTMLInputElement>, value: string) => {
            setUser(value);
          }}
          onKeyPress={(
            e: KeyboardEvent<HTMLInputElement>,
            value: string | null
          ) => {
            if (e.charCode === 13) {
            }
          }}
        />

        <br/>

        <CustomInput
          defaultValue={""}
          type="text"
          disabled={false}
          readOnly={false}
          placeholder={"Contraseña *"}
          className={"search-input"}
          style={{}}
          onBlur={(e: ChangeEvent<HTMLInputElement>, value: string) => {
            setPass(value);
          }}
          onKeyPress={(
            e: KeyboardEvent<HTMLInputElement>,
            value: string | null
          ) => {
            if (e.charCode === 13) {
            }
          }}
        />

        <br />

        <div
              className="login-button"
              onClick={onClickLogin}
            >
            Iniciar sesión &nbsp; 
              <FontAwesomeIcon
                style={{
                  height: "12px",
                  width: "12px",
                  color: "#a7a790",
                }}
                icon={faUser}
              />
            </div>

      </div>
    </div>
  );
};

export default Login;
