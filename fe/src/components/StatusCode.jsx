import { useEffect, useRef, useState } from "react";
import { useError } from "../context/ErrorContext";
import "./StatusCode";
import { initializeBoidsAnimation } from "./boidsAnimation";

const imageSrc = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP...";

const StatusCode = () => {
  const canvasRef = useRef(null);
  const { error } = useError();
  const [localError, setLocalError] = useState(error || "404");

  useEffect(() => {
    if (error) {
      console.log("Errore aggiornato:", error);
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanupAnimation = initializeBoidsAnimation(canvas, imageSrc, localError);

    return () => {
      cleanupAnimation();
    };
  }, [localError]);

  return (
    <div className="status-code-container">
      <canvas ref={canvasRef}></canvas>
      <div className="status-code-message">
        <h1>Errore {localError}</h1>
        <p>Qualcosa è andato storto.</p>
      </div>
    </div>
  );
};

export default StatusCode;
