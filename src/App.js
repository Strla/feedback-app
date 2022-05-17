import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackList from "./components/FeedbackList/FeedbackList";

import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
