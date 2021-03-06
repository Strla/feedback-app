import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

function AboutPage(props) {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
