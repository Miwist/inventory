import React from "react";
import cl from "./Panel.module.scss";

const Panel = ({ borderColor, tableColor, textColor }) => {
  return (
    <div
      className={cl.Panel}
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${tableColor}`,
      }}
    >
      <div className={cl.Panel__text} style={{ backgroundColor: `${textColor}` }}></div>
      <div className={cl.Panel__close}>
        <p>X</p>
      </div>
    </div>
  );
};

export default Panel;
