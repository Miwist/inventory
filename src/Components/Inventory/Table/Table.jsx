import React, { useState } from "react";
import cl from "./Table.module.scss";
import { items } from "../items";
import Modal from "../Modal/Modal";

const Table = ({ borderColor, tableColor }) => {
  const [item, setItem] = useState();
  const [modalMove, setModalMove] = useState(525);
  const [showModal, setShowModal] = useState(false);

  let itemsAll = JSON.parse(localStorage.getItem("items"));

  function onLoad() {
    localStorage.setItem("items", JSON.stringify(items));
  }

  if (itemsAll === null) {
    onLoad();
  }

  let emptyCells = [];

  for (let i = 0; i < 30; i++) {
    emptyCells.push(i);
  }

  function selectItem(id) {
    setShowModal(true);
    setItem(itemsAll.filter((t) => t.id === id));

    if (modalMove !== -252) {
      function move() {
        setModalMove((prev) => prev - 225);
      }
      setTimeout(move, 100);
    }
  }

  function dragStartHandler(e) {}
  function dragLeaveHandler(e) {}
  function dragEndHandler(e, cell) {
    console.log(cell);
    e.preventDefault();
  }
  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dragDropHandler(e, cell) {
    console.log(cell);
  }

  return (
    <div className={cl.Table_container}>
      <div className={cl.Table} style={{ backgroundColor: `${tableColor}` }}>
        {itemsAll.map((item) => (
          <div
            className={cl.cell}
            onClick={() => selectItem(item.id)}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragDrop={(e) => dragDropHandler(e)}
            draggable={true}
            style={{ borderColor: `${borderColor}` }}
          >
            <img src={item.img} alt={item.name} />
            <div
              className={cl.amount}
              style={{ borderColor: `${borderColor}` }}
            >
              {item.amount}
            </div>
          </div>
        ))}

        {emptyCells.map((item) => (
          <div
            className={cl.cell}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragDrop={(e) => dragDropHandler(e)}
            draggable={true}
            style={{ borderColor: `${borderColor}` }}
          ></div>
        ))}
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
