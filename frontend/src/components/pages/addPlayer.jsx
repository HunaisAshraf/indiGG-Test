import React, { useState } from 'react'
import Layout from '../layout/layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPlayer = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      await axios
        .post("http://localhost:8000/participants", {
          name,age,phone,email
        })
        .then((res) => {
          console.log(res);
          navigate("/")
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

export default AddPlayer