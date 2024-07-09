import { useState } from "react";
import "./App.css";
import Outfit from "./components/Outfit";
import OutfitManager from "./components/OutfitManager";

function App() {
  const [outfits, setOutfits] = useState({});
  const [currentOutfit, setCurrentOutfit] = useState("");

  const addOutfit = (name) => {
    setOutfits((prevOutfits) => ({
      ...prevOutfits,
      [name]: { tops: [], bottoms: [], shoes: [], accessories: [] },
    }));
    setCurrentOutfit(name);
  };

  const updateOutfitItems = (name, newItems) => {
    setOutfits((prevOutfits) => {
      const updatedOutfit = { ...prevOutfits[name] };

      for (const category in newItems) {
        updatedOutfit[category] = [
          ...updatedOutfit[category],
          ...newItems[category],
        ];
      }

      return {
        ...prevOutfits,
        [name]: updatedOutfit,
      };
    });
  };

  const setItems = (newItems) => {
    updateOutfitItems(currentOutfit, newItems);
  };

  return (
    <div className="App">
      <OutfitManager
        outfits={Object.keys(outfits)}
        addOutfit={addOutfit}
        setCurrentOutfit={setCurrentOutfit}
      />
      {currentOutfit && (
        <Outfit items={outfits[currentOutfit]} setItems={setItems} />
      )}
    </div>
  );
}

export default App;
