// src/components/Shop/Shop.jsx

// CSS
import './Shop.css'

// npm Modules
import { useState } from 'react';

// Components
import InventoryList from '../../components/InventoryList/InventoryList';

// Data
import { inventoryData } from "../../data/data";

// Create state variable and pass new inventory state to the InventoryList component

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);                             // Add to User Inventory
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));    // Remove from Shop Inventory
  };

  const handleRemoveItem = (item) => {
      setShopInventory([...shopInventory, item]);                             // Add to Shop Inventory
      setUserInventory(userInventory.filter((el) => el._id !== item._id));    // Remove from User Inventory
  };

  return (
    <main>
      <section className='shop-section'>
        <InventoryList title="Shop Inventory" inventory={shopInventory} handleAddItem={handleAddItem}/>
        <InventoryList title="User Inventory" inventory={userInventory} handleRemoveItem={handleRemoveItem}/>
      </section>
    </main>
  );
};

export default Shop;