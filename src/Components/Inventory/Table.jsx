import React, { useEffect, useRef, useState } from "react";
import cl from "./Inventory.module.scss";
import item1 from "../../img/item1.png";
import item2 from "../../img/item2.png";
import item3 from "../../img/item3.png";
import { items } from "./items";
import Modal from "./Modal";

const Table = () => {
  const [item, setItem] = useState();
  const [modalMove, setModalMove] = useState(0);
  const [showModal, setShowModal] = useState(false);

  let itemsAll = JSON.parse(localStorage.getItem("items"));

  function onLoad() {
    localStorage.setItem("items", JSON.stringify(items));
  }

  if (itemsAll === null) {
    onLoad();
  } 

  function selectItem(id) {
    setShowModal(true);
    setItem(itemsAll.filter((t) => t.id === id));

    if (modalMove !== -252) {
      function move() {
        setModalMove((prev) => prev - 252);
      }
      setTimeout(move, 100);
    }
  }

  return (
    <div className={cl.Table_container}>
      <div className={cl.Table}>
        {itemsAll.map(({ img, name, id, amount }) => (
          <div className={cl.cell} onClick={() => selectItem(id)}>
            <img src={img} alt={name} />
            <div className={cl.amount}>{amount}</div>
          </div>
        ))}

        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
        <div className={cl.cell}></div>
      </div>

      {showModal && (
        <Modal
          setModalMove={setModalMove}
          modalMove={modalMove}
          item={item}
          itemsAll={itemsAll}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default Table;
