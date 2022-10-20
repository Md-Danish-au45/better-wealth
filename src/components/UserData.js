import React, { useState, useEffect } from "react";
import "./UserData.css"


function UserData() {
    const [data, setData] = useState([]);  
    //Get Method
    const apiGet = () => {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };
      useEffect(() => {
        apiGet();
      }, []);
  
    return (
      <div className="API"><br/>
        <button className="button" onClick={apiGet}>User</button>
        <br />
        <pre>{JSON.stringify(data, null, 2)}</pre>
        
      </div>
    );
  }
  
export default UserData;