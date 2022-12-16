import React, { useState } from "react";
import cl from "./Inventory.module.scss";

import Img from "../../img/Img.png";
import { items } from "./items";
import Table from "./Table/Table";
import Panel from "./Panel/Panel";

const Inventory = () => {
  let light = "#f1f1f1";
  let black = "#1e1e1e";
 
  const [color, setColor] = useState(light);
  const [tableColor, setTableColor] = useState();
  const [borderColor, setBorderColor] = useState();
  const [textColor, setTextColor] = useState();

  function addItems() {
    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload();
  }

  function changeTheme() {
    if (color === light) {
      darkTheme();
    } else {
      lightTheme();
    }
    function lightTheme() {
      setColor(light);
      document.body.style.backgroundColor = color;
      setTableColor("#262626");
      setBorderColor("#4e4e4e");
      setTextColor("#4e4e4e");
    }
    function darkTheme() {
      setColor(black);
      document.body.style.backgroundColor = color;
      setTableColor("#4e4e4e");
      setBorderColor("#262626");
      setTextColor("#6e6e6e");
    }
  }

  return (
    <div className={cl.Inventory}>
      <div className={cl.row}>
        <div
          className={cl.Inventory_menu}
          style={{ backgroundColor: `${tableColor}` }}
        >
          <img src={Img} alt="img" />
          <div
            className={cl.Inventory_menu__text}
            style={{ backgroundColor: `${textColor}` }}
          ></div>
          <div
            className={cl.Inventory_menu__text}
            style={{ backgroundColor: `${textColor}` }}
          ></div>
          <div
            className={cl.Inventory_menu__text}
            style={{ backgroundColor: `${textColor}` }}
          ></div>
          <button type="button" onClick={addItems}>
            Добавить объекты
          </button>
          <button type="button" onClick={changeTheme}>
            Сменить тему
          </button>
        </div>
        <Table borderColor={borderColor} tableColor={tableColor} />
      </div>

      <Panel
        borderColor={borderColor}
        tableColor={tableColor}
        textColor={textColor}
      />
    </div>
  );
};

export default Inventory;
