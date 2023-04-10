import ContentJoinToday from "./ContentJoinToday/contentJoinToday";
import ListJoinToday from "./ListJoinToday/listJoinToday";
import ButtonSignUp from "./ButtonSignUp/buttonSignUp";
import joinToday_img from '../../assets/joinToday_img.jpg';
import "./index.css";

const JoinToday = () => {
    return <div id="join_today">
        <img src={joinToday_img} alt="join-today-img"></img>
        <h2>Join Today</h2>
        <ContentJoinToday/>
        <ListJoinToday/>
        <ButtonSignUp/>
    </div>
};

export default JoinToday;