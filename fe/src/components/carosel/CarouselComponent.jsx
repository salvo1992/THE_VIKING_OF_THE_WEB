import React, { useEffect, useRef, useState } from "react";
import styles from "./CarouselComponent.module.css";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const spinnerRef = useRef(null);

  const facesData = [
    {
      id: "iceland",
      title: "ICELAND",
      subtitle: "EUROPE",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg",
      description: "As I flew north to begin my third circuit of Iceland...",
    },
    {
      id: "china",
      title: "CHINA",
      subtitle: "ASIA",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg",
      description: "Its modern face is dazzling, but China is no one-trick pony...",
    },
    {
      id: "usa",
      title: "USA",
      subtitle: "NORTH AMERICA",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg",
      description: "When it comes to travel, America has always floored me...",
    },
    {
      id: "peru",
      title: "PERU",
      subtitle: "SOUTH AMERICA",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg",
      description: "For me, Peru is the molten core of South America...",
    },
  ];

  // Rotazione del carosello
  const spin = (direction) => {
    let newIndex = activeIndex + direction;
    if (newIndex >= facesData.length) newIndex = 0;
    if (newIndex < 0) newIndex = facesData.length - 1;
    setActiveIndex(newIndex);
  };

  // Navigazione con frecce su/giù
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 38) spin(-1);
      else if (e.keyCode === 40) spin(1);
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [activeIndex]);

  return (
    <div className={styles.carousel}>
      {/* Controlli */}
      <div className={styles.carouselControl}>
        <button className={styles.controlButton} onClick={() => spin(-1)}>⬆ Prev</button>
        <button className={styles.controlButton} onClick={() => spin(1)}>Next ⬇</button>
      </div>

      {/* Contenitore del carosello */}
      <div className={styles.carouselStage}>
        <div
          ref={spinnerRef}
          className={styles.spinner}
          style={{ transform: `rotateX(${activeIndex * -90}deg)` }}
        >
          {facesData.map((face, index) => (
            <div key={index} className={`${styles.spinnerFace} ${index === activeIndex ? styles.active : ""}`}>
              <div className={styles.content} data-type={face.id}>
                <div className={styles.contentLeft} style={{ backgroundImage: `url(${face.imageUrl})` }}>
                  <h1>{face.title}<br /><span>{face.subtitle}</span></h1>
                </div>
                <div className={styles.contentRight}>
                  <div className={styles.contentMain}>
                    <p>{face.description}</p>
                  </div>
                  <h3 className={styles.contentIndex}>{String(index + 1).padStart(2, '0')}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;




