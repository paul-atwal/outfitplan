import { useState } from "react";

const OutfitManager = ({ outfits, addOutfit, setCurrentOutfit }) => {
  const [newOutfitName, setNewOutfitName] = useState("");

  const handleAddOutfit = () => {
    if (newOutfitName.trim() !== "") {
      addOutfit(newOutfitName);
      setNewOutfitName("");
    }
  };

  return (
    <div>
      <h3>Outfit Manager</h3>
      <input
        type="text"
        placeholder="Outfit Name"
        value={newOutfitName}
        onChange={(e) => setNewOutfitName(e.target.value)}
      />
      <button onClick={handleAddOutfit}>Add Outfit</button>
      <ul>
        {outfits.map((name) => (
          <li key={name} onClick={() => setCurrentOutfit(name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutfitManager;
