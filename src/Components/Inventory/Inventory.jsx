import React from 'react'
import cl from "./Inventory.module.scss"
import Table from './Table'

const Inventory = () => {
  return (
    <div className={cl.container}>
        <div className={cl.Inventory}>
            <div className={cl.Inventory_menu}></div>
            <Table />
        </div>
        
    </div>
  )
}

export default Inventory