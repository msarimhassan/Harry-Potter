import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Header = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [apiData, setApiData] = useState([]);
  const [randomCharac, setRandomCharac] = useState([]);
  // const [houseCharac, setHouseCharac] = useState("");
  // const [actorCharac, setActorCharac] = useState("");
  // const [patronusCharac, setPatronusCharac] = useState("");
  // const [ancestoryCharac, setAncestoryCharac] = useState("");
  // const [imageCharac, setImageCharac] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        "https://hp-api.herokuapp.com/api/characters"
      );
      setApiData(data);
    };

    fetch();
  }, []);

  const randomCharactor = () => {
    let randomNo = Math.floor(Math.random() * 25);
    console.log("random index is ", randomNo);
    let characterSelected = apiData[randomNo];
    setRandomCharac(characterSelected);
    console.log("Character Selected Randomy !", characterSelected);
  };

  console.log("The name is", name);
  console.log("Random Selected data...", randomCharac);
  return (
    <div className="container-fluid head text-center">
      <h1>
        Welcome To Hogwards{" "}
        <span aria-labelledby="img" role="img">
          👋
        </span>
      </h1>

      <h1 className="text-center text">
        {" "}
        Hey Muggle! Enter your name to see some Magic
        <span aria-labelledby="img" role="img">
          🚀
        </span>
      </h1>

      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push({
              pathname: `/hogwards/${name}`,
              state: {
                name: name,
                data: randomCharac,
                allData: apiData,
              },
            });
            window.location.href = `/hogwards/${name}`;
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name Muggle"
            aria-label="Enter your Name Muggle"
            aria-describedby="button-addon2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              randomCharactor();
            }}
          />

          <Button type="submit">Enter</Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
