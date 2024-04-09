import "../App.css";

import {  useLocation, } from "react-router-dom";

import { useEffect, useState, } from "react";


import CustomTable from '../components/CustomTable';

const Location = () => {
  const [url, setUrl] = useState('');
  const location = useLocation();


  const getInitialUrl = async () => {
    let url = '';
    if (location.pathname === '/location') {
        url = 'https://rickandmortyapi.com/api/location';
    } else if (location.pathname === '/character') {
        url = 'https://rickandmortyapi.com/api/character';
    } else if (location.pathname === '/episode') {
        url = 'https://rickandmortyapi.com/api/episode';
    }
    setUrl(url);
  };

  useEffect(() => {
    getInitialUrl();
  }, []);

  return (
    <div>
      <div className="title-home">
        <h2>Location</h2>
      </div>
    <CustomTable url={url} />
    </div>
  );
};

export default Location;
