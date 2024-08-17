import React from 'react';
import "./Banner.css"
interface CustomCSSProperties extends React.CSSProperties {
  '--quantity'?: number;
  '--position'?: number;
}



const Banner = () => {
  // const handleImageClick = () => {

  // }
  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': 10 } as CustomCSSProperties}>
        <div className="item" style={{ '--position': 1 } as CustomCSSProperties}>
          <img src="/images/Python.png" alt="Python" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 2 } as CustomCSSProperties}>
          <img src="/images/Java.png" alt="Java" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 3 } as CustomCSSProperties}>
          <img src="/images/C.png" alt="C" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 4 } as CustomCSSProperties}>
          <img src="/images/C++.png" alt="C++" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 5 } as CustomCSSProperties}>
          <img src="/images/JS.png" alt="Javascript" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 6 } as CustomCSSProperties}>
          <img src="/images/TS.png" alt="Typescript" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 7 } as CustomCSSProperties}>
          <img src="/images/HTML.png" alt="HTML" />
        </div>
        <div className="item" style={{ '--position': 8 } as CustomCSSProperties}>
          <img src="/images/CSS.png" alt="CSS" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 9 } as CustomCSSProperties}>
          <img src="/images/Swift.png" alt="Swift" className="non-selectable"
            draggable="false" />
        </div>
        <div className="item" style={{ '--position': 10 } as CustomCSSProperties}>
          <img src="/images/Ruby.png" alt="Ruby" className="non-selectable"
            draggable="false" />
        </div>
      </div>
      <div className="content">
        <div className="author">
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Banner;
