import React from 'react';

const Panel = ({ title, description, imgSrc, reverse }) => {
  return (
    <section className={`panel ${reverse ? 'reverse' : ''}`}>
      <div className="panel-content">
        {!reverse && (
          <>
            <div className="text-content fade-in">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="image-content">
              <img src={imgSrc} alt={`Panel - ${title}`} />
            </div>
          </>
        )}
        {reverse && (
          <>
            <div className="image-content">
              <img src={imgSrc} alt={`Panel - ${title}`} />
            </div>
            <div className="text-content fade-in">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Panel;
