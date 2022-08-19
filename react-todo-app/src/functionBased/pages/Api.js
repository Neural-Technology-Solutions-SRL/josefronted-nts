import React, { useEffect, useState } from "react";


/*const  getlistings = ()=>{
    fetch("https://localhost:7084/api/CountryItems").then(response =>response.json()).then(data => console.log(data))
  }
  getlistings()*/
const Api =()=>{
    
    const [Country,setCountry]=useState([]);
   const [newcountry, setnewcountry]=useState({
   country:"",
   })

    const  getlistings = async()=>{
        const getdata = await fetch("https://localhost:7084/api/CountryItems");
        const source = await getdata.json();
        setCountry(source)
        console.log(source);
      }
   useEffect(()=>{
    console.log("se ejecuto")
    getlistings();
   }, [])
   const onChange = e =>{
    //const obj={[e.target.country]:e.target.valuecountry,[e.target.description]:e.target.valuedescription,[e.target.name]:e.target.valuename}
    console.log([e.target.getAttribute("country")]);
    setnewcountry({...newcountry, [e.target.country]:e.target.value, })
    
   }
   const handleSubmit = e => {
    e.preventDefault()
    if (newcountry) {
      setnewcountry({
        country:"dfdddd",
      })
    } else {
      alert("Please write item")
    }
  }

    return (
        <form onSubmit={handleSubmit}>
    <h1 className="Apibody">Insert your <span>name, description and country</span></h1>
    <ul className="Apih1">
        {Country.map(item =>(
            <li key={item.id}>{item.country}----{item.description}---{item.name}</li>
        ))}
    </ul>
    
    <input type="text" 
    placeholder="add country" 
    className="apitext" 
    value= {newcountry.country}
    country ="country"
    onChange={onChange}/>
    <button onClick={()=>{
        console.log("esto funciona")
    }} className="apitext">insertar todos los campos
    </button>
    </form>

)}
export default Api;