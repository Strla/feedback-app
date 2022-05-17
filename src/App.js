import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Card from "./components/shared/Card";
import Header from "./components/Header/Header";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>
        <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card>

        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
