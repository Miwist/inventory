import React from "react";
import cl from "./Inventory.module.scss";
import Table from "./Table";
import Img from "../../img/Img.png";

const Inventory = () => {
  return (
    <div className={cl.container}>
      <div className={cl.Inventory}>
        <div className={cl.Inventory_menu}>
          <img src={Img} alt="img" />
          <div className={cl.Inventory_menu__text}>text</div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Inventory;
