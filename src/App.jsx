import React, { useState } from "react";
import Form from "./Components/Form";
import Submission from "./Components/Submission";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
          <Route
            path="Submissions"
            element={<Submission submissions={submissions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
