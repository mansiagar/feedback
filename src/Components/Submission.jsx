import React from "react";
import "./Submission.css";

const Submission = ({ submissions }) => {
  console.log(submissions);
  return (
    <div>
      <table className="table">
        <thead className="theading">
          <tr className="th">
            <td>index</td>
            <td>Customer Name</td>
            <td>EmailId</td>
            <td>Rating</td>
            <td>Comments</td>
          </tr>
        </thead>

        <tbody className="tbody">
          {submissions.map((submission, index) => (
            <tr className="tr" key={index}>
              <td>{index}</td>
              <td>{submission.username}</td>
              <td>{submission.email}</td>
              <td>{submission.rating}</td>
              <td>{submission.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submission;
