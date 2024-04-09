import "../App.css";

import {  useLocation } from "react-router-dom";

import {  useEffect, useState } from "react";


import CustomLoader from "../components/CustomLoader";

import useFetch from "../customHooks/useFetch";

const Location = (props: any) => {
  const { url } = props;
  const [elements, setElements] = useState([]);
  const [data, error, callApi] = useFetch();
  const location = useLocation();

  const getInitialData = async () => {
    let url = "";
    if (location.pathname === "/location") {
      url = "https://rickandmortyapi.com/api/location";
    } else if (location.pathname === "/character") {
      url = "https://rickandmortyapi.com/api/character";
    } else if (location.pathname === "/episode") {
      url = "https://rickandmortyapi.com/api/episode";
    }
    const responseList = await (callApi as (url: string) => Promise<any>)(url);
    setElements(responseList.results);
    return responseList.results;
  };

  useEffect(() => {
    if (url !== "" && elements.length === 0) {
      getInitialData();
    }
  }, [url]);
  if (elements.length === 0) {
    return <CustomLoader />;
  } else {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="table-head">name</th>
            </tr>
          </thead>

          <tbody>
            {elements.map((item: any, key) => {
              return (
                <tr key={key}>
                  <td> {item.name} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Location;
