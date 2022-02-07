import { useEffect, useState } from "react";
import "./ShowData.css";
export const ShowData = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("http://localhost:3001/games")
      .then((d) => d.json())
      .then((res) => {
        res.sort((a,b)=>{
           if(a.gamename>b.gamename)return -1;
           else if(a.gamename<b.gamename)return  1;
           else return 0;
        })
        setData(res);
      });
  };

  return (
    <div>
      <table id="table">
        <thead>
          <tr>
            <td>game name</td>
            <td>game author</td>
            <td>game tags</td>
            <td>
              game price
              <button
                onClick={() => {
                 let s= data.sort((a, b) => {
                    return a.gameprice - b.gameprice;
                  });

                }}
                id="sortbyprice"
              >
                sort price
              </button>
            </td>
            <td>is for kids</td>
            <td>
              rating <button id="sortbyrating">sort </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              gamename,
              gameauthor,
              gametags,
              gameprice,
              forkids,
              gamedesc,
              gamerating,
            }) => {
              return (
                <tr className="gamerow">
                  <td className="gamename">{gamename}</td>
                  <td className="gameauthor">{gameauthor}</td>
                  <td>{gametags}</td>
                  <td className="gameprice">{gameprice}</td>
                  <td className="gamerating">{forkids}</td>
                  <td>{gamerating}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
