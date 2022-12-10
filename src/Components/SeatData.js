import React from "react";

const SeatData = ({ data }) => {
  // Total Seats
  const totalSeats = Array.from({ length: 10 * 8 }, (_, i) => i + 1);
  //The current selected seats
  let selectedItem = Number(data.seats);

  return (
    <div className="">
      <ul className="ShowCase">
        <div className="seat selected"></div>
        <li className="seatdesc">Booked Seats</li>
        <div className="seat notSelected"></div>
        <li className="seatdesc">Available Seats</li>
      </ul>
      <div className="showSeats">
        <div className="seats">
          {/* Showing the seats by mapping through the total seats */}
          {totalSeats.map((value, index) => {
            return (
              <div
                key={index}
                className={
                  index <= selectedItem ? "seat selected" : "seat notSelected"
                }
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatData;
