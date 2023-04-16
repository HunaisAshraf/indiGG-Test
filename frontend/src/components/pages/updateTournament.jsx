import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateTourNament = () => {
  const [data,setData] = useState({
    title: "",
    start: "",
    end:""
  })
  const {id} = useParams()
  
  const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/tournament/${id}`)
        .then((res)=>setData(res.data))
        .catch((error)=>console.log(error))
    },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:8000/tournament/${id}`, data)
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
              Title
            </label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData(e.target.value)}
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
              value={data.start}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputStartDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEndDate" className="form-label">
              End Date
            </label>
            <input
              value={data.end}
              onChange={(e) => setData(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEndDate"
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

export default UpdateTourNament;
