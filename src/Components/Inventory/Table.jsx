import React, { useRef, useState } from "react";
import cl from "./Inventory.module.scss";
import item1 from "../../img/item1.png";
import item2 from "../../img/item2.png";
import item3 from "../../img/item3.png";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState();
  const [modalMove, setModalMove] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [itemId, setItemId] = useState(0);
  let amountRef = useRef();
  let items = [
    {
      id: 0,
      name: "item1",
      img: item1,
      description: "Item1 better than the item 2",
      amount: 5,
    },
    {
      id: 1,
      name: "item2",
      img: item2,
      description: "Item1 better than the item 3",
      amount: 3,
    },
    {
      id: 2,
      name: "item3",
      img: item3,
      description: "Item1 better than the item 1",
      amount: 1,
    },
  ];

  localStorage.setItem("items", JSON.stringify(items));
  let itemsAll = JSON.parse(localStorage.getItem("items"));

  function selectItem(id) {
    setShowModal(true);
    setItem(itemsAll.filter((t) => t.id === id));
    setItemId(id);
    if (modalMove !== -252) {
      function move() {
        setModalMove(modalMove - 252);
      }
      setTimeout(move, 100);
    }
  }

  function closeModal() {
    setShowModal(false);
    setModalMove(0);
  }

  function deleteItem() {

    let amount = amountRef.current.value;
  
    item[0].amount =  item[0].amount - amount;
  
    
    if (items.anount <= 0) {
      itemsAll = itemsAll.filter((t) => t === item);
      localStorage.setItem("items", JSON.stringify(itemsAll));
    }
  
    setShowModal(false);
    setModalMove(0);
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
      </div>
      {showModal && (
        <div className={cl.Modal_container}>
          <div
            className={cl.Modal}
            style={{ transform: `translateX(${modalMove}px)` }}
          >
            <div className={cl.Modal__close} onClick={closeModal}>
              x
            </div>

            {item.map((item) => (
              <div>
                <div className={cl.Modal__img}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={cl.Modal__text}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

            {showDelete ? (
              <div className={cl.Modal__button}>
                <input
                  type="text"
                  placeholder="Введите количество..."
                  ref={amountRef}
                  onChange={(e) => e.target.value}
                />
                <div className={cl.Modal__button_delete}>
                  <button
                    type="button"
                    className={cl.cancel}
                    onClick={() => setShowDelete(false)}
                  >
                    Отмена
                  </button>
                  <button
                    type="button"
                    className={cl.delete}
                    onClick={deleteItem}
                  >
                    Подтвердить
                  </button>
                </div>
              </div>
            ) : (
              <div className={cl.Modal__button}>
                <button type="button" onClick={() => setShowDelete(true)}>
                  Удалить предмет
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
