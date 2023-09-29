import { Link } from "react-router-dom";
import "./pages.css";


function HomePage() {
  return (
    <div className="home-page">
      <h2>Enter into Student Info System</h2>
      <Link className="button" to="/chatbot">
        Enroll
      </Link>
    </div>
  );
}

export default HomePage;
