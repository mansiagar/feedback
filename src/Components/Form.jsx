import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    rating: "",
    comments: "",
  });
  const [error_msg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMsg({ ...error_msg, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = { username: "", email: "", rating: "", comments: "" };

    if (formData.username.trim() === "") {
      errors.username = "Please enter your name";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      errors.email = "Please enter your email";
      isValid = false;
    } else if (
      !formData.email.includes(".com") ||
      !formData.email.includes("@")
    ) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    if (formData.rating.trim() === "") {
      errors.rating = "Please enter rating";
      isValid = false;
    } else if (!/^[1-5]$/.test(formData.rating)) {
      errors.rating = "Please enter rating between 1 to 5";
      isValid = false;
    }

    if (formData.comments.trim() === "") {
      errors.comments = "Please enter your feedback";
      isValid = false;
    }

    setErrorMsg(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ username: "", email: "", rating: "", comments: "" });
      navigate("/Submissions");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>FEEDBACK FORM</h1>
        <div className="form-item-1">
          <label>Customer Name</label>{" "}
          <input
            className="form-item-2"
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            placeholder="E.g. jon snow"
            value={formData.name}
          />
          {error_msg.username && <p className="error">{error_msg.username}</p>}
        </div>
        <div className="form-item-1">
          {" "}
          <label>Email</label>
          <input
            className="form-item-2"
            type="email"
            name="email"
            placeholder="E.g abc@gmail.com"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          {error_msg.email && <p className="error">{error_msg.email}</p>}
        </div>
        <div className="form-item-1">
          <label>Rating</label>
          <input
            className="form-item-2"
            type="number "
            name="rating"
            min="1"
            max="5"
            onChange={(e) => handleChange(e)}
            value={formData.rating}
          />
          {error_msg.rating && <p className="error">{error_msg.rating}</p>}
        </div>
        <div className="form-item-1">
          <label>Comments</label>
          <textarea
            className="form-item-2"
            name="comments"
            onChange={(e) => handleChange(e)}
            value={formData.comments}
          ></textarea>
        </div>

        <div>
          <button className="button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
