import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
  return (
    <Layout>
      <div className="homepage text-center" style={{ height: "50vh" }}>
        <h3 className="py-5">TORMET</h3>
        <h1>Game Changing Way To Organize Tournaments</h1>
        <p className="fs-5 py-3">
          An End-To-End Solution To Create And Manage Your Tournaments
        </p>
        <a href="#body">
          <button className="btn btn-outline-secondary">All Tournament</button>
        </a>
        <Link to="/tournament">
          <button className="btn btn-outline-secondary ms-2">
            Manage Tournaments
          </button>
        </Link>
      </div>
      <div className="tour mt-4" id="body">
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
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
