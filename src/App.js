import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

const Index = () => {
  const [users, setUser] = useState([]);

  const getuser = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9"
    );
    const finaldata = await res.json();
    console.log(finaldata)
    setUser(finaldata);
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="container">
      <h3 className="Header">
        A collective list of free APIs for use in software and web development
      </h3>
      <div className="search-bar">
        <button className="icon">
          <SearchIcon />
        </button>
        <input type="search" placeholder="Find development,games,images APIs" />
      </div>
      <div className="card-header">
        <h3 className="card-h">Featured APIs of this week </h3>
      </div>
      <div className="card-container">
        <div className="card">
          {users.map((user,id) => (
            <div className="card-inner" key={id}>
              <img src={user.thumbnailUrl} width={100} />
              <span className="card-title" >{user.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
