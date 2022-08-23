import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  // const getlistings = async () => {
  //   const getdata = await fetch("https://localhost:7084/api/CountryItems");
  //   const source = await getdata.json();
  //   setCountry(source);
  //   console.log(source);
  // };

  // useEffect(() => {
  //   console.log("se ejecuto effect por send");
  //   getlistings();
  //   //console.log(state);
  // }, [send]);

  const onChange = (e) => {
    //const obj={[e.target.country]:e.target.valuecountry,[e.target.description]:e.target.valuedescription,[e.target.name]:e.target.valuename}
    setnewcountry({ ...newcountry, [e.target.name]: e.target.value });
    setsend(false);
    console.log(newcountry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onClick = () => {
    // state.push(newcountry)
    setnewcountry({ ...newcountry, id: uuidv4() });
    setsend(false);
    console.log("este" + send);
    const postgetlistings = async () => {
      const getdata = await fetch("https://localhost:7084/api/CountryItems", {
        method: "POST",
        mode: "cors",
        cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer-when-downgrade", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(newcountry), // body data type must match "Content-Type" header
      });
      const source = await getdata.json();
      console.log(source);
      console.log(JSON.stringify(newcountry));
      setCountry([...Country, source])
    };
    postgetlistings();
    //setsend(send+1);
  };




  const onClickDelete = (e) => {
    setsend(false);
    const Deletegetlistings = async () => {
      const getdata = await fetch(
        `https://localhost:7084/api/CountryItems/${e.target.id}`,
        {
          method: "DELETE",
          mode: "cors",
          cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          /*headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.JSON(newcountry) // body data type must match "Content-Type" header*/
        }
      );
      const source = await getdata.json();

      console.log(source);
    };
    setsend(send+1);
    Deletegetlistings(e);
    
    setnewcountry({ ...newcountry, id: uuidv4() });
  };
  const onClickPut = (e) => {
    setnewcountry({ ...newcountry, [e.target.name]: e.target.id });
    console.log(newcountry);
    const putgetlistings = async () => {
      const getdata = await fetch("https://localhost:7084/api/CountryItems", {
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
      setCountry([...Country, source]);
    };
    putgetlistings(e);
    //setnewcountry({...newcountry, id:uuidv4(),})
  };
  
  useEffect(() => {
    //getlistings();
    fetch("https://localhost:7084/api/CountryItems").then(response => response.json()).then(data => { console.log(data); setCountry(data)})
    console.log("se esta escuchando")

  }, [send]);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="Apibody">
        Insert your <span>name, description and country</span>
      </h1>
      <ul className="Apih1">
        {Country.map((item) => (
          <li key={item.id}>
            {item.country}----{item.description}---{item.name}---
            <button onClick={onClickDelete} className="apitext" id={item.id}>
              Delete
            </button>
            <button
              onClick={onClickPut}
              className="apitext"
              name="id"
              id={item.id}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add country"
        className="apitext"
        value={newcountry.Country}
        name="country"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="add description"
        className="apitext"
        name="description"
        value={newcountry.description}
        onChange={onChange}
      ></input>
      <input
        type="text"
        placeholder="addd name"
        className="apitext"
        name="name"
        value={newcountry.name}
        onChange={onChange}
      ></input>
      <br />
      <br />
      <button onClick={onClick} className="apitext">
        Insert
      </button>
      <button
        onClick={() => {
          setsend(true);
        }}
        className="apitext"
      >
        Update all
      </button>
    </form>
  );
};
export default Api;
