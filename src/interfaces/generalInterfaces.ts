import React, {
  ChangeEvent,
  KeyboardEvent,
} from "react";

export interface CustomInputProps {
  defaultValue: string;
  onBlur: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>, value: string) => void; // Corregido a KeyboardEvent.
  className: string;
  disabled: boolean;
  readOnly: boolean;
  style: React.CSSProperties; // Correcto para los estilos.
  placeholder: string;
  type: string;
}

  export interface GeneralContextInterface {
  
    token: string | null;
    handleSetToken: (value: string | null) => void;

    role: string | null;
    handleSetRole: (value: string | null) => void;

  }


