import React from "react";
import Layout from "../layout/layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterTournament = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [about, setAbout] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/tournament", {
        title,
        start,
        end,
        about,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="container p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputStartDate" className="form-label">
              Start Date
            </label>
            <input
              value={start}
              onChange={(e) => setStart(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputStartDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEndDate" className="form-label">
              End Date
            </label>
            <input
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputEndDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              About
            </label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterTournament;
