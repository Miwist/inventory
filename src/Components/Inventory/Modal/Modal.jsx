import React, { useRef, useState } from "react";
import cl from "./Modal.module.scss";

const Modal = ({ item, setModalMove, itemsAll, modalMove, setShowModal }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [valid, setValid] = useState(false);
  const [colorValid, setColorValid] = useState("#4d4d4d");
  const [textValid, setTextValid] = useState("Введите количество...");

  let amountRef = useRef();

  function closeModal() {
    setModalMove(525);
    function close() {
      setShowModal(false);
    }
    setTimeout(close, 800);
  }
  function validItem() {
    let amount = amountRef.current.value;

    if (amount <= item[0].amount && amount > 0) {
      setValid(true);
      deleteItem();
    } else {
      setValid(false);
      setColorValid("#e24d4d");
      amountRef.current.value = "";
      setTextValid("Неверное количество");
    }
  }

  function deleteItem() {
    let amount = amountRef.current.value;
    let Id = item[0].id;

    item[0].amount = item[0].amount - amount;

    itemsAll.forEach((element) => {
      if (element.id === Id) {
        element.amount = item[0].amount;
      }
      if (element.amount <= 0) {
        itemsAll = itemsAll.filter((t) => t.id !== Id);
      }
    });

    localStorage.setItem("items", JSON.stringify(itemsAll));

    setShowModal(false);
    setModalMove(525);
  }

  return (
    <div className={cl.Modal_container}>
      <div
        className={cl.Modal}
        style={{ transform: `translateX(${modalMove}px)` }}
      >
        <div className={cl.Modal__close}>
          <p onClick={closeModal}>x</p>
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
              type="number"
              min={1}
              placeholder={textValid}
              ref={amountRef}
              onChange={(e) => e.target.value}
              style={{ borderColor: `${colorValid}` }}
            />
            <button
              type="button"
              className={cl.delete__all}
              onClick={() => (amountRef.current.value = item[0].amount)}
            >
              все
            </button>
            <div className={cl.Modal__button_delete}>
              <button
                type="button"
                className={cl.cancel}
                onClick={() => setShowDelete(false)}
              >
                Отмена
              </button>
              <button type="button" className={cl.delete} onClick={validItem}>
                Подтвердить
              </button>
            </div>
          </div>
        ) : (
          <div className={cl.Modal__button}>
            <button type="button" onClick={() => setShowDelete(true)} style={{margin: "60px"}}>
              Удалить предмет
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
