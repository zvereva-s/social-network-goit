import React, { useState } from "react";

export default function useHandleValidateInput({ inputValue, keyboardType }) {
  const [errValidation, setErrValidation] = useState(null);

  const handleValidateInput = () => {
    if (inputValue.length < 1) {
      setErrValidation("Too short...");
    }
    switch (keyboardType) {
      case "email":
        if (!inputValue.includes("@")) {
          setErrValidation("Email has to include @");
        } else if (
          !inputValue.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
        ) {
          setErrValidation('Email has to be like "mail@mail.com"');
        } else {
          setErrValidation(null);
        }
        break;
      case "password": {
        if (inputValue.length < 6) {
          setErrValidation("Password length must be more 6...");
        } else if (!inputValue.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
          setErrValidation("Password not match pattern like Gkh$20Fh@");
        } else {
          setErrValidation(null);
        }
        break;
      }
    }
  };

  return { errValidation, setErrValidation, handleValidateInput };
}
