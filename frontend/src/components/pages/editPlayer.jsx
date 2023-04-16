import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPlayer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/participants/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:8000/participants/${id}`, data)
      .then((res) => {
        console.log(res);
        navigate("/tournament");
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
              Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={data.age}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Phone
            </label>
            <input
              type="number"
              value={data.phone}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
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

export default EditPlayer;
