import { createContext } from 'react';
import {GeneralContextInterface } from '../interfaces/generalInterfaces';



const initialContext: GeneralContextInterface = {

  
  token: '',
  handleSetToken: () => {},

  role: '',
  handleSetRole: () => {},

};

// Creación del contexto con el objeto inicial
const GeneralContext = createContext<GeneralContextInterface>(initialContext);

export default GeneralContext;

