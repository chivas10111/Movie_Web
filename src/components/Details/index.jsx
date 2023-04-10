import DefaultLayout from '../../DefaultLayout'
import "./index.css";
import Trailer from './Trailer/trailer';
import General from './General/general';
import Cast from './Cast/cast'

const Details = () => {

    return <div id="details">
        <DefaultLayout>
            <General/>
            <h3>Cast</h3>
            <Cast/>
        </DefaultLayout>
    </div>
};

export default Details;