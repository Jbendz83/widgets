import React, { useState, useEffect, useRef } from "react";

const DropDown = props => {
  const [active, setActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setActive(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = props.options.map(o => {
    if (o.value === props.selected.value) {
      return null;
    }

    return (
      <div
        key={o.value}
        className="item"
        onClick={() => props.onSelectChange(o)}
      >
        {o.label}
      </div>
    );
  });

  const isActive = active ? "visible" : "";

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{props.label}</label>
        <div
          onClick={() => setActive(!active)}
          className={`ui selection dropdown ${isActive} active`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${isActive} transition`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
