import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const GameDetails = () => {
  const [data, setData] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [players, setPlayers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tournament/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/participants`)
      .then((res) => {
        setPlayers(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/participants/${id}`);
    window.location.reload();
  };

  return (
    <Layout>
      <div className="game-detail container mt-5">
        <div className="d-flex">
          <div className="game ms-3">
            <h1>{data.title}</h1>
            <p className="fs-5">
              Start : {data.start} | End : {data.end}
            </p>
            <img
              width="400px"
              style={{ borderRadius: "5px" }}
              src="https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ydk9vatpnihwfquy6zq3"
              alt=""
            />
            <p>{data.about}</p>
          </div>
          <div style={{ marginLeft: "50%", height: "50px" }} className="btn">
            <Link to="/register-player">
              <button className="btn btn-outline-secondary">Add Player</button>
            </Link>
          </div>
        </div>
        <div className=" container mt-5">
          <h3>Players List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {players.map((player) => (
              <tbody>
                <tr>
                  <td>{player.name}</td>
                  <td>{player.age}</td>
                  <td>{player.email}</td>
                  <td>{player.phone}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(player._id)}
                      className="btn btn-outline-danger"
                    >
                      delete
                    </button>
                    <Link to={`/update-player/${data._id} `}>
                      <button className="btn btn-outline-success ms-2">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default GameDetails;
