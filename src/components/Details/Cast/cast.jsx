import { Card } from 'antd';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import "./index.css";

const { Meta } = Card;
const Cast = () => {
    const [dataAPI, setDataAPI] = useState([]);
    const {id} = useParams()

    const handleAPI = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec65c7958beee32ce8074bd45dacf4b2&language=en-US`)
            .then(response => response.json())
            .then(data => {
            setDataAPI(data.production_companies)
            console.log(dataAPI);
        })
            .catch(err => console.error(err));
    }
    
        useEffect(() => {
        handleAPI();
        }, [])

  return (
      <div className='cast'>
          {
            dataAPI && dataAPI.map((items, id) => {
              const path_cast = `https://image.tmdb.org/t/p/w200/${items.logo_path}`
              return (
                  <>
                    
                        <Card className='card-cast'
                            hoverable
                            style={{
                            width: 140,
                            height: 220,
                            }}
                            key={id}
                            cover={<img alt={items.name} src={path_cast}/>}
                        >
                            <Meta title={items.name} description={items.origin_country} />
                        </Card>

                  </>
              )
            })
          }
      </div>
  );
} 

export default Cast;
