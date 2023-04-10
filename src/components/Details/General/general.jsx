import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import "./index.css";

const General = () => {
  const [dataAPI, setDataAPI] = useState({});
  const [dataGenres, setDataGenres] = useState([]);
  const {id} = useParams()

  const handleAPI = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec65c7958beee32ce8074bd45dacf4b2&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setDataAPI(data)
          setDataGenres(data.genres)
      })
        .catch(err => console.error(err));
  }
  
    useEffect(() => {
      handleAPI();
    }, [])

    const path_poster = `https://image.tmdb.org/t/p/w300/${dataAPI.poster_path}`;

    return <div className="general">
        <div >

            <img src={path_poster}/>
        </div>
        <div id="overview">

            <h2>{dataAPI.original_title}</h2>            
            <h3>{dataAPI.release_date}</h3>
            {
                dataGenres.map((items, id) => {
                    return (
                        <span key={id}>{items.name}&nbsp;&nbsp;&nbsp;</span>
                    )
                })
            }
            <br /><br />
            <h4>Overview</h4>
            <p>{dataAPI.overview}</p>
        </div>
    </div>
}

export default General;