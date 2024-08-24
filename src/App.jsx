import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Component/Form";
import Submission from "./Component/Submission";

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
        <Route
          path="/submission"
          element={<Submission submissions={submissions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
