import { useState } from "react";

const Outfit = ({ items, setItems }) => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("tops");

  const handleNewItem = (event) => {
    setItem(event.target.value);
  };

  const handleButtonClick = () => {
    if (item === "") {
      console.log("Item cannot be empty");
    } else {
      setItems({ ...items, [category]: [...items[category], item] });
      setItem("");
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h3>Add Items to Outfit</h3>
      <div>
        <h4>Tops</h4>
        <ul>
          {items.tops.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Bottoms</h4>
        <ul>
          {items.bottoms.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Shoes</h4>
        <ul>
          {items.shoes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Accessories</h4>
        <ul>
          {items.accessories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={handleNewItem}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="tops">Tops</option>
        <option value="bottoms">Bottoms</option>
        <option value="shoes">Shoes</option>
        <option value="accessories">Accessories</option>
      </select>
      <button onClick={handleButtonClick}>Add Item</button>
    </div>
  );
};

export default Outfit;
