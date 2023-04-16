import React from "react";
import Layout from "../layout/layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tournament = () => {
  const [tournament, setTournament] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/tournament")
      .then((res) => {
        setTournament(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/tournament/${id}`);
    window.location.reload();
  };

  return (
    <Layout>
      <div className="tournaments container">
        {tournament.map((data) => (
          <div className="tournament border  border-dark-subtle d-flex justify-content-evenly  py-3 mb-3 mx-5 px-5 rounded">
            <div className="img">
              <img
                width="400px"
                style={{ borderRadius: "5px" }}
                src="https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ydk9vatpnihwfquy6zq3"
                alt=""
              />
            </div>

            <div className="title ms-5 ">
              <h1>{data.title}</h1>
              <p className="fs-5">
                Start : {data.start} | End : {data.end}
              </p>
              <p>{data.about}</p>
            </div>

            <div className="button d-flex flex-column">
              <Link to={`/game-detail/${data._id} `}>
                <button className="btn btn-outline-dark my-2">More</button>
              </Link>
              <Link to={`/update-tournament/${data._id} `}>
                <button className="btn btn-outline-success my-2">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(data._id)}
                className="btn btn-outline-danger my-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Tournament;

//
