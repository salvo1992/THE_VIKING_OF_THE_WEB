import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }

  const navigate = useNavigate();

  const triggerError = (errorCode) => {
    context.setError(errorCode);
    navigate("/error"); // Naviga alla pagina errore
  };

  return { ...context, triggerError };
};
