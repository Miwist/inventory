import React, { useEffect, useState } from "react";
import cl from "./Table.module.scss";
import { items } from "../items";
import Modal from "../Modal/Modal";

const Table = ({ borderColor, tableColor }) => {
  const [item, setItem] = useState();
  const [modalMove, setModalMove] = useState(525);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState();
  const [count, setCount] = useState(0);

  let itemsAll = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    itemsAll = JSON.parse(localStorage.getItem("items"));
  }, [count]);

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
        setModalMove((prev) => prev - 225);
      }
      setTimeout(move, 100);
    }
  }

  function dragStartHandler(e, item) {
    setCurrentItem(item);
  }

  function dragLeaveHandler(e) {
    e.target.style.background = "#262626";
    e.target.style.boxShadow = "none";
  }

  function dragEndHandler(e) {
    e.preventDefault();
    e.target.style.background = "#262626";
    e.target.style.boxShadow = "none";
  }
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className == "cell") {
      e.target.style.boxShadow = "0 2px 3px gray";
    }
    e.target.style.background = "#2e2e2e";
  }

  function dropHandler(e, item) {
    e.preventDefault();

    const indexItem = itemsAll.indexOf(item);
    let res = itemsAll.filter((e) => e.id === currentItem.id);
    const indexCurrent = itemsAll.indexOf(res[0]);
    itemsAll[indexCurrent] = indexCurrent;
    itemsAll[indexItem] = currentItem;

    itemsAll.map((b) => {
      if (b.id === item.id) {
        return item;
      }
      if (b.id === currentItem.id) {
        return currentItem;
      }
      return b;
    });

    localStorage.setItem("items", JSON.stringify(itemsAll));
    setCount((prev) => prev + 1);
  }

  return (
    <div className={cl.Table_container}>
      <div className={cl.Table} style={{ backgroundColor: `${tableColor}` }}>
        {itemsAll.map((item) =>
          item.amount ? (
            <div
              className={cl.cell}
              onClick={() => selectItem(item.id)}
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => dragLeaveHandler(e, item)}
              onDragEnd={(e) => dragEndHandler(e, item)}
              onDragOver={(e) => dragOverHandler(e, item)}
              onDrop={(e) => dropHandler(e, item)}
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
          ) : (
            <div
              className={cl.cell}
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => dragLeaveHandler(e, item)}
              onDragEnd={(e) => dragEndHandler(e, item)}
              onDragOver={(e) => dragOverHandler(e, item)}
              onDrop={(e) => dropHandler(e, item)}
              style={{ borderColor: `${borderColor}` }}
            >
              <div></div>
            </div>
          )
        )}
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
