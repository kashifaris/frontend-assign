import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ThanksPage() {
    const data = useSelector(state=>state.data);
    return ( <div className="thanks-page">
        <div>"Thanks Your name <b>{data.name}</b> aged <b>{data.age}</b> has been added to student system. You may now exit."</div>
        <Link to='/' className="button">home</Link>
    </div> );
}

export default ThanksPage;