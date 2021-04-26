import React, { useState } from "react";

const Accordion = props => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = index => {
    setActiveIndex(index);
  };

  const renderedItems = props.theItems.map((obj, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={obj.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {obj.title}
        </div>
        <div className={`content ${active}`}>{obj.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
