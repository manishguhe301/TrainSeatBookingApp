import React, { useState } from "react";
import SeatData from "./SeatData";

const LoginForm = () => {
  //Storing data in a useState hook variable
  const [data, setData] = useState({
    name: "",
    seats: -1,
    show: false,
  });

  const [Seat, setSeat] = useState();

  //Function for validation/max seat occupancy
  const handleClick = () => {
    if (data.name === "") {
      alert("Enter Name");
    } else if (Seat > 7) {
      alert("You can only book 7 seats at a time");
    } else if (data.seats > 80) {
      alert("All Seats are Booked");
    } else {
      setData({ ...data, show: true });
    }
  };

  //The login Form with name and seat number.
  const Form = () => {
    return (
      <div className="mainLog">
        <div className="login">
          <div className="form">
            <h1 className="Login">Login</h1>
            <input
              type="text"
              placeholder="Enter Passenger Name"
              value={data.name}
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
            <input
              type="number"
              placeholder="Enter No. Of Seats"
              onChange={(e) => {
                setData({
                  ...data,
                  seats: Number(e.target.value) + Number(data.seats),
                });
                setSeat(e.target.value);
              }}
            />
            {/* Book Seats Button to store data in usestate hook and to show the seats in next page */}
            <button
              className="btn btn-primary Loginbutton"
              onClick={handleClick}
            >
              Book Seats
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={data.show === false ? "" : "image"}>
      {data.show === true ? <SeatData data={data} setData={setData} /> : Form()}
      {data.show === true ? (
        <div className="buttonBack">
          <p
            data-toggle="tooltip"
            data-placement="left"
            title="Click here to Book more seats"
            className="BackButton "
            onClick={() => {
              setData({ ...data, show: false });
            }}
          >
            Book More Seats
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginForm;
