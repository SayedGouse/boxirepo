import React, { useEffect, useState } from "react";

const RoomDetails = ({ item }) => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [Electronics, setElectronics] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [other, setOther] = useState([]);
  const [boexes, setBoxes] = useState([]);

  useEffect(() => {
    if (item && item.items && item.items.inventory) {
      setInventoryItems(item.items.inventory);
      const furnitureItems = item.items.inventory.map(inventoryItem => inventoryItem.category[0]);
      const electronicsitems = item.items.inventory.map(inventoryItem => inventoryItem.category[1]);
      const vehicleItems = item.items.inventory.map(inventoryItem => inventoryItem.category[2]);
      const Other_appliancesItems = item.items.inventory.map(inventoryItem => inventoryItem.category[3]);
      const BoxesTrolleyItems = item.items.inventory.map(inventoryItem => inventoryItem.category[4]);
      setFurniture(furnitureItems);
      setElectronics(electronicsitems);
      setVehicle(vehicleItems);
      setOther(Other_appliancesItems);
      setBoxes(BoxesTrolleyItems);
    }
  }, [item]);

  console.log("Category Dataqqqqqqqqqqq", inventoryItems);
  console.log("Category Data furniture", furniture);

  return (
    <div className="maindiv">
      <table style={{ width: "70vw" }}>
        <thead>
          {inventoryItems.map((val, index) => (     
                <th  key={index} >{val?.displayName}</th> 
          ))}
        </thead>
        <tbody>
        {furniture.map((val, index) => (
            <tr key={index}>
              <td>
                <span>{val?.displayName}</span>
                <span className="ab">{parseInt(val["order "], 10)}</span>
                <p className="fw-bold">Wooden</p>
              </td>
              <td>
                {Electronics[index] ? (
                  <>
                    <span>{Electronics[index].displayName}</span>
                    <span className="ab">{parseInt(Electronics[index]["order "], 10)}</span>
                    <p className="fw-bold">Electronics</p>
                  </>
                ) : null}
              </td>
              <td>
              {vehicle[index] ? (
                  <>
                    <span>{vehicle[index].displayName}</span>
                    <span className="ab">{parseInt(vehicle[index]["order "], 10)}</span>
                    <p className="fw-bold"></p>
                  </>
                ) : null}
                
              </td>
              <td>
              {other[index] ? (
                  <>
                    <span>{other[index].displayName}</span>
                    <span className="ab">{parseInt(other[index]["order "], 10)}</span>
                    <p className="fw-bold"></p>
                  </>
                ) : null}
              
              </td>
              <td>
              {boexes[index] ? (
                  <>
                    <span>{other[index].displayName}</span>
                    <span className="ab">{parseInt(boexes[index]["order "], 10)}</span>
                    <p className="fw-bold"></p>
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomDetails;
