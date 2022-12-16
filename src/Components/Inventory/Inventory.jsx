import React from "react";
import cl from "./Inventory.module.scss";
import Table from "./Table";
import Img from "../../img/Img.png";
import { items } from "./items";

const Inventory = () => {
  function addItems() {
    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload();
  }
  return (
    <div className={cl.container}>
      <div className={cl.Inventory}>
        <div className={cl.Inventory_menu}>
          <img src={Img} alt="img" />
          <div className={cl.Inventory_menu__text}>text</div>
          <button type="button" onClick={addItems}>
            Добавить объекты
          </button>
        </div>
        <Table />
      </div>
      
    </div>
  );
};

export default Inventory;
