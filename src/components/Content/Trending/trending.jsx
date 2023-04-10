import { Card } from 'antd';
import { Link } from 'react-router-dom';
import "./index.css";

const { Meta } = Card;
const Trending = ({src}) => {
  return (
      <>
          {
            src && src.map((items, id) => {
              const path = `details/${items.id}`;
              const path_poster = `https://image.tmdb.org/t/p/w500/${items.poster_path}`
              return (
                  <>
                    <Link to={path} style={{ textDecoration: 'none' }}>
                    
                            <Card className='card'
                              hoverable
                              style={{
                                width: 240,
                              }}
                              key={id}
                              cover={<img alt={items.name || items.title} src={path_poster}/>}
                            >
                              <Meta title={items.name || items.title} description={items.release_date || items.first_air_date} />
                            </Card>

                    </Link>
                  </>
              )
            })
          }
      </>
  );
} 

export default Trending;
