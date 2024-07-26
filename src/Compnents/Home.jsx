import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBoxes } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import ViewDetails from "./ViewDetails";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToggleDetails = (index) => {
    setSelectedDetailIndex(selectedDetailIndex === index ? null : index);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://test.api.boxigo.in/sample-data/`);
      console.log(res.data.Customer_Estimate_Flow);
      setData(res.data.Customer_Estimate_Flow);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <h4 className="loading">Loading....</h4>
        ) : (
          <div>
            <h4 className="fw-bold pt-3">MY MOVES</h4>
            {data
              ? data.map((val, index) => (
                  <div key={index}>
                    <div className="mbox">
                      <div>
                        <h6 className="fw-bold">From</h6>
                        <p style={{ width: "300px" }}>{val?.moving_from}</p>
                      </div>
                      <div>
                        <div className="arrow">
                          <FaLongArrowAltRight size={24} color="#F97300" />
                        </div>
                      </div>
                      <div>
                        <h6 className="fw-bold">To</h6>
                        <p style={{ width: "300px" }}>{val?.moving_to}</p>
                      </div>
                      <div>
                        <h6 className="fw-bold">Request#</h6>
                        <p className="fw-bold" style={{ color: "#F97300" }}>
                          {val.estimate_id}
                        </p>
                      </div>
                    </div>

                    <div className="mbox1">
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <IoMdHome size={24} color="#F97300" />
                        <p className="pl">{val.property_size}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <FaBoxes size={24} color="#F97300" />
                        <p className="pl">{val.total_items}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <GrMapLocation size={24} color="#F97300" />
                        <p className="pl">{val.distance}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <FaCalendarDays size={24} color="#F97300" />
                        <p className="pl">{val.date_created}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <IoIosCheckbox size={24} color="#F97300" />
                        <p className="pl">Is flexible</p>
                      </div>
                      <div>
                        <button
                          className={
                            selectedDetailIndex === index ? "btnnV" : "btnn"
                          }
                          onClick={() => handleToggleDetails(index)}
                        >
                          View More Detail
                        </button>
                      </div>
                      <div>
                        <button className="btn1">Quotes Awaited</button>
                      </div>
                    </div>

                    <div className="pt-5">
                      <IoIosWarning color="#F97300" />
                      <span className="fw-bold p-2">Disclaimer:</span>Please
                      update your move date before two days of shifting
                    </div>
                    <hr />
                    {selectedDetailIndex === index && (
                      <>
                        <ViewDetails
                          estimate_id={val?.estimate_id}
                          item={val}
                        />
                        <div className="pt-5">
                          <IoIosWarning color="#F97300" />
                          <span className="fw-bold p-2">Disclaimer:</span>
                          Please update your move date before two days of
                          shifting
                        </div>
                        <hr />
                      </>
                    )}
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
