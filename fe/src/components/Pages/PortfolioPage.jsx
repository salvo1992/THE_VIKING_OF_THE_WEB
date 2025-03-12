import React from 'react';
import './PortfolioPage.css';
import CarouselComponent from '../carosel/CarouselComponent';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const PortfolioPage = () => {

  return (
    <div className="portfolio-page">
      <h2>My Latest Projects</h2>
   
        
        <CarouselComponent />
        {/* Aggiungi altri progetti come sopra */}
        <h3>Altre Immagini</h3>
        <Carousel autoPlay infiniteLoop>
      <div>
        <img src="https://th.bing.com/th/id/R.4bf932d187ab5e18cffa7873b6d811fd?rik=d0exiV5WNcowOw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-pLi0bs3J8hI%2fU77S-hEVjzI%2fAAAAAAAABLs%2fWNj1PDu-5pA%2fs1600%2fjapo%C5%84ska%2bk%C5%82adka%2bz%2bodbiciem.JPG&ehk=5ZD1GQHA5xllT8sp13cKdxdkOetESMA1JN9aax308nA%3d&risl=&pid=ImgRaw&r=0" alt="Immagine 1" />
        <p className="legend">Descrizione 1</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/R.4bf932d187ab5e18cffa7873b6d811fd?rik=d0exiV5WNcowOw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-pLi0bs3J8hI%2fU77S-hEVjzI%2fAAAAAAAABLs%2fWNj1PDu-5pA%2fs1600%2fjapo%C5%84ska%2bk%C5%82adka%2bz%2bodbiciem.JPG&ehk=5ZD1GQHA5xllT8sp13cKdxdkOetESMA1JN9aax308nA%3d&risl=&pid=ImgRaw&r=0" alt="Immagine 2" />
        <p className="legend">Descrizione 2</p>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/R.4bf932d187ab5e18cffa7873b6d811fd?rik=d0exiV5WNcowOw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-pLi0bs3J8hI%2fU77S-hEVjzI%2fAAAAAAAABLs%2fWNj1PDu-5pA%2fs1600%2fjapo%C5%84ska%2bk%C5%82adka%2bz%2bodbiciem.JPG&ehk=5ZD1GQHA5xllT8sp13cKdxdkOetESMA1JN9aax308nA%3d&risl=&pid=ImgRaw&r=0" alt="Immagine 3" />
        <p className="legend">Descrizione 3</p>
      </div>
    </Carousel>
      </div>
   
  );

 
};
export default PortfolioPage;

