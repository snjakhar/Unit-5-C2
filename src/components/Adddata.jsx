import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export const Adddata = () => {



  const [formdata, setFormdata] = useState({});
  const handleChange = (e) => {
    const key = e.target.name;
    if (key === "forkids") {
      e.target.value = e.target.checked;
    }
    setFormdata({
      ...formdata,
      [key]: e.target.value,
    });
  };
  const addToDb = () => {
    fetch("http://localhost:3001/games", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formdata);
          if (
            formdata.gamename &&
            formdata.gameauthor &&
            formdata.gametags &&
            formdata.gameprice &&
            formdata.forkids &&
            formdata.gamedesc &&
            formdata.gamerating
          ) {
            addToDb();
          } else {
            alert("Missing ! , Check fields again");
          }
          document.getElementById("addgame").reset();
        }}
        id="addgame"
      >
        <input
          onChange={handleChange}
          type="text"
          name="gamename"
          placeholder="game name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="gameauthor"
          placeholder="game author"
        />
        <input
          onChange={handleChange}
          type="text"
          name="gametags"
          placeholder="gametags"
        />
        <input
          onChange={handleChange}
          type="number"
          name="gameprice"
          placeholder="price"
        />
        <input onChange={handleChange} type="checkbox" name="forkids" />
        <textarea
          onChange={handleChange}
          name="gamedesc"
          id=""
          cols="5"
          rows="1"
          placeholder="enter desc"
        ></textarea>
        <select onChange={handleChange} name="gamerating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};
