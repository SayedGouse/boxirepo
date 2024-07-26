import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import RoomDetails from "./RoomDetails";

const ViewDetails = ({ estimate_id, item }) => {
  const [id, setId] = useState(estimate_id);
  const [newItem, setNewItem] = useState(item);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);

  const handleToggleRoom = (index) => {
    setSelectedRoomIndex(selectedRoomIndex === index ? null : index);
  };

  console.log("cus", newItem);

  const totalCountFurniture = newItem?.items?.inventory?.[0]?.category?.reduce((total, category) => {
    const itemCount = category.items?.length || 0;
    return total + itemCount;
  }, 0);
  const totalCountelectronic = newItem?.items?.inventory?.[1]?.category?.reduce((total, category) => {
    const itemCount = category.items?.length || 0;
    return total + itemCount;
  }, 0);
  const totalCountvehicle = newItem?.items?.inventory?.[2]?.category?.reduce((total, category) => {
    const itemCount = category.items?.length || 0;
    return total + itemCount;
  }, 0);
  const totalCountother = newItem?.items?.inventory?.[3]?.category?.reduce((total, category) => {
    const itemCount = category.items?.length || 0;
    return total + itemCount;
  }, 0);



  const rooms = [
    { name: "Living Room", count: totalCountFurniture },
    { name: "Bed Room", count: totalCountelectronic },
    { name: "Kitchen Room", count: totalCountvehicle},
    { name: "Bathroom", count:totalCountother }
  ];

  return (
    <div>
      <h6 className="fw-bold pt-3">
        Inventory Details
        <button className="btnedit">Edit Inventory</button>
      </h6>
      {rooms.map((room, index) => (
        <div key={index}>
          <div className="rmdtl">
            <div style={{ display: "flex", justifyContent: "center" }}>
              {room.name} <div className="inside">{room?.count}</div>
            </div>
            <div>
              {selectedRoomIndex === index ? (
                <IoIosArrowUp size={28} onClick={() => handleToggleRoom(index)} />
              ) : (
                <MdKeyboardArrowDown size={28} onClick={() => handleToggleRoom(index)} />
              )}
            </div>
          </div>
          {selectedRoomIndex === index && <RoomDetails item={newItem} />}
        </div>
      ))}
      <h6 className="fw-bold pt-3">
        House Details
        <button className="btnedit">Edit House Details</button>
      </h6>
      <h6 className="fw-bold pt-3" style={{ color: "#F97300" }}>
        Existing House Details
      </h6>
      <div className="mbox">
        <div>
          <h6 className="fw-bold">Floor No</h6>
          <p>{newItem?.old_floor_no}</p>
        </div>
        <div>
          <h6 className="fw-bold">Elevator Available</h6>
          <p>{newItem?.old_elevator_availability}</p>
        </div>
        <div>
          <h6 className="fw-bold">Packing Required</h6>
          <p>{newItem?.packing_service}</p>
        </div>
        <div>
          <h6 className="fw-bold">Distance from truck to door</h6>
          <p>{newItem?.old_parking_distance}</p>
        </div>
      </div>
      <div className="mbox">
        <div>
          <h6 className="fw-bold">Additional information</h6>
          <p>{newItem?.old_house_additional_info}</p>
        </div>
      </div>
      <hr />
      <h6 className="fw-bold pt-3" style={{ color: "#F97300" }}>
        New House Details
      </h6>
      <div className="mbox">
        <div>
          <h6 className="fw-bold">Floor No</h6>
          <p>{newItem?.new_floor_no}</p>
        </div>
        <div>
          <h6 className="fw-bold">Elevator Available</h6>
          <p>{newItem?.new_elevator_availability}</p>
        </div>
        <div>
          <h6 className="fw-bold">Packing Required</h6>
          <p>{newItem?.unpacking_service}</p>
        </div>
        <div>
          <h6 className="fw-bold">Distance from truck to door</h6>
          <p>{newItem?.new_parking_distance}</p>
        </div>
      </div>
      <div className="mbox">
        <div>
          <h6 className="fw-bold">Additional information</h6>
          <p>{newItem?.new_house_additional_info}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ViewDetails;
