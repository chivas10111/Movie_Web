import { useState, useEffect } from "react";
import Trending from "./Trending/trending";
import "./index.css";

const Content = () => {
  const [dataAPI, setDataAPI] = useState([]);

  const handleAPI = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec65c7958beee32ce8074bd45dacf4b2&language=en-US&page=1`)
    	.then(response => response.json())
    	.then(data => {
        setDataAPI(data.results)
      })
    	.catch(err => console.error(err));
  }

  useEffect(() => {
    handleAPI();
  }, [])


  return (
    <>
      <br />
      <h2>Trending</h2>
      <div id="content">
            {
              <Trending src={dataAPI}/>
            }
      </div>
      <br /><br />
    </>

  );
}

export default Content;
