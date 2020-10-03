import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

const Game = () => {
  let location = useLocation();
  console.log("Dataaaa", location.state.data);
  console.log("All Dataaaa", location.state.allData.lenght)
  return (
    <div>
      <h1 className="text-center text">
        <span
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            window.location = "/";
          }}
        >
          {" "}
          Welcome To Hogwards{" "}
          <span aria-labelledby="img" role="img">
            👋
          </span>
        </span>
      </h1>
      <h1 className="text-center text">
        {" "}
        Hey, {location.state.name}
        <span aria-labelledby="img" role="img">
          🚀
        </span>
      </h1>
      <div className="text-center move">
        <img
          src={location.state.data.image}
          className="photo img-fluid img-thumbnail"
          alt=""
        />
      </div>
      <table class="table table-bordered table-dark text-center">
        <tbody>
          {location.state.data.name ? (
            <tr>
              <td>Your Hogward's Name : </td>
              <td>{location.state.data.name}</td>
            </tr>
          ) : null}
          {location.state.data.house ? (
            <tr>
              <td>Your House : </td>
              <td>{location.state.data.house}</td>
            </tr>
          ) : null}
          {location.state.data.ancestry ? (
            <tr>
              <td>Your Ancestory : </td>
              <td>{location.state.data.ancestry}</td>
            </tr>
          ) : null}
          {location.state.data.patronus ? (
            <tr>
              <td>Your Patronus : </td>
              <td>{location.state.data.patronus}</td>
            </tr>
          ) : null}
          {location.state.data.yearOfBirth ? (
            <tr>
              <td>Your Birthday Year : </td>
              <td>{location.state.data.yearOfBirth}</td>
            </tr>
          ) : null}

          {location.state.data.actor ? (
            <tr>
              <td>Your Actor's : </td>
              <td>{location.state.data.actor}</td>
            </tr>
          ) : null}

          {location.state.data.alive.toString() ? (
            <tr>
              <td>Did you survive in the Books : </td>
              <td>{location.state.data.alive.toString()}</td>
            </tr>
          ) : null}

          {location.state.data.wand.wood ? (
            <tr>
              <td>Your Wand's Contents : </td>
              <td>
                {location.state.data.wand.wood}
                {location.state.data.wand.core
                  ? `-${location.state.data.wand.core}`
                  : null}
               
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Game;
