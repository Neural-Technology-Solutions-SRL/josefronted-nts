import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CgInsertAfter } from "react-icons/cg";
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";

/*const  getlistings = ()=>{
    fetch("https://localhost:7084/api/CountryItems").then(response =>response.json()).then(data => console.log(data))
  }
  getlistings()*/

let state = {
  id: uuidv4(),
  country: "",
  description: "",
  name: "",
  isDone: false,
};

const Api = () => {
  const [Country, setCountry] = useState([]);

  const [newcountry, setnewcountry] = useState(state);

  const [send, setsend] = useState(0);
  const getlistings = async () => {
    const getdata = await fetch("https://www.todoapi.somee.com/api/Countryitems");
    const source = await getdata.json();
    setCountry(source);
  };

  useEffect(() => {
    getlistings();
    //console.log(state);
  }, [send]);

  const onChange = (e) => {
    setnewcountry({ ...newcountry, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    setnewcountry({ ...newcountry, id: uuidv4() });
    const postgetlistings = async () => {
      const getdata = await fetch("https://www.todoapi.somee.com/api/Countryitems", {
        method: "POST",
        mode: "cors",
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer-when-downgrade", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(newcountry), // body data type must match "Content-Type" header
      });
      const source = await getdata.json();
      setsend(send + 1);
    };
    postgetlistings();
    
  };
  const onClickDelete = (item) => {
    const { id } = item;
    const Deletegetlistings = async () => {
      const getdata = await fetch(
        `https://www.todoapi.somee.com/api/Countryitems/${id}`,
        {
          method: "DELETE",
          mode: "cors",
          cache: "reload", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          /*headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.JSON(newcountry) // body data type must match "Content-Type" header*/
        }
      );
      // const source = getdata.json();

      // console.log(source);
      setsend(send + 1);
    };
    Deletegetlistings(id);

    setnewcountry({ ...newcountry, id: uuidv4() });
  };
  const onClickPut = (item) => {
    const { id, description, country, name } = item;
    console.log("I've recive", id, description, country, name);
    newcountry.id = id;
    console.log(newcountry);
    const putgetlistings = async () => {
      const getdata = await fetch("https://www.todoapi.somee.com/api/Countryitems", {
        method: "PUT",
        mode: "cors",
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer-when-downgrade", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(newcountry), // body data type must match "Content-Type" header
      });
      const source = await getdata.json();
      if (!!source) {
        setsend(send + 1);
        setnewcountry({ ...newcountry, id: uuidv4() });
        console.log(source);
      }
    };
    putgetlistings();
  };

  return (
    <form>
      <h1 className="Apibody">
        Insert your <span>: name, description and country</span>
      </h1>
      <ul className="Apih1">
        {Country.map((item) => (
          <li key={item.id} className="itemlist">
            <div>
              <h2>{item.name}</h2>
            </div>
            <div>
              <h3>{item.country}</h3>
            </div>
            <div>
              <h4 className="Spacedescription">{item.description}</h4>
            </div>
            <div className="ApiButtonList">
              <button
                value={item.id}
                onClick={() => onClickPut(item)}
                width="50px"
                height="40px"
              >
                <MdEdit
                  style={{ color: "#fff", width: "40px", height: "40px" }}
                />
              </button>
              <button onClick={() => onClickDelete(item)}>
                <MdDelete
                  style={{ color: "#fff", width: "40px", height: "40px" }}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex-container">
        <div className="apiInput">
          <input
            type="text"
            placeholder="add country"
            className="apitext"
            value={newcountry.Country}
            name="country"
            onChange={onChange}
            width="200px"
          />
        </div>
        <div className="apiInput">
          <input
            type="text"
            placeholder="add description"
            className="apitext"
            name="description"
            value={newcountry.description}
            onChange={onChange}
          ></input>
        </div>
        <div className="apiInput">
          <input
            type="text"
            placeholder="addd name"
            className="apitext"
            name="name"
            value={newcountry.name}
            onChange={onChange}
          ></input>
        </div>
        <br />
        <br />
        <div className="ApiButton">
          <button onClick={onClick} value="2" className="Button">
            <CgInsertAfter
              style={{ color: "#fff", width: "40px", height: "40px" }}
            />
          </button>
          <button
            onClick={() => {
              setnewcountry({ ...newcountry, id: uuidv4() });
              setsend(send + 1);
            }}
            className="Button"
          >
            <MdUpdate
              style={{ color: "#fff", width: "40px", height: "40px" }}
            />
          </button>
        </div>
      </ul>
    </form>
  );
};
export default Api;
