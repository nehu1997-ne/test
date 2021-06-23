import React, { useState, useEffect } from "react";
function Api() {
  const [userdata, setData] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2").then((result) => {
      result.json().then((res) => {
        console.log("response api", res);
        setData(res.data);
      });
    });
  }, []);
  //  console.warn("api data",userdata)
  return (
    <div className="api">
      <h1> 2. Question Api call</h1>

      {/* {data.map((elem,ind) =>{
       <p>{elem.first_name}</p>
     })} */}

      <table border="1">
        <tr>
          <td>ID</td>
          <td>email</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Avatar</td>
        </tr>
        {userdata.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>
              <img src={item.avatar} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Api;
