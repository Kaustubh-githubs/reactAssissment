// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );
      setPosts(response.data);
      setLoading(false);
    }catch(e) {
      console.log(e);
    }
  }

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => {
            // <img src="${item.image}" alt="${product.title}"></img>
            // <h5 key={item.id}>{item.body}</h5>
          <h5 key={item.id}>{item.title}</h5>
        })
      )}
    </div>
  );
}






export default App;
