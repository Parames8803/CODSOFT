import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import Axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [p, setP] = useState("");
  const [x, setX] = useState(true);
  const [final, setFinal] = useState([]);
  const [editcard, setEditCard] = useState(false);
  const [newtitle, setNewTitle] = useState("");
  const [newdesc, setNewDesc] = useState("");
  const [xcard, setXcard] = useState(true);

  const path = "http://localhost:5000";

  const [card, setCard] = useState(false);
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [loggedinUsers, setLoggedinUsers] = useState({});

  Axios.defaults.withCredentials = true;

  const setCardInput = async (e) => {
    e.preventDefault();
    setCard(false);

    const res = await Axios.post(path + "/api/home", {
      id: localStorage.getItem("userid"),
      title: title,
      description: desc,
    }).then((response) => {
      if (response.data.message) {
        console.log({ res: response.data });
      } else {
        console.log({ res: response.data });
      }
    });

    // console.log(event[0])
    // setFinal(event[0]);
    // console.log(final);
  };

  const setNewCard = async (e) => {
    e.preventDefault();
    setEditCard(false);

    let cardId = localStorage.getItem("cardId");

    const res = await Axios.post(path + "/api/edit", {
      cardId: cardId,
      title: newtitle,
      description: newdesc,
    }).then((response) => console.log(response));
  };

  useEffect(() => {
    getLogUser();
    getUser();
  }, [setCardInput]);

  const getLogUser = async () => {
    const res = await Axios.get(path + "/api/home").then((response) => {
      if (response.data.loggedin === true) {
        // setLogin(response.data.user[0].username)
        // console.log({ res: response.data.user });
        setLoggedinUsers({ res: response.data.user });
      }
    });

    if (localStorage.getItem("userid") != null) {
      setP("Logout");
      setX(false);
    } else {
      setP("Login");
      setX(true);
    }
  };

  const editInfo = async (cardid) => {
    console.log(cardid);
    const cardId = cardid;
    setEditCard(true);
    setCard(false);

    localStorage.setItem("cardId", cardId);
  };

  const delInfo = async (cardid) => {
    // console.log(cardid)
    let cardId = cardid;

    const res = await Axios.post(path + "/api/delete", {
      cardId: cardId,
    }).then((response) => console.log(response));
  };

  const getUser = async () => {
    // setCard(true);
    let id = localStorage.getItem("userid");
    let res = await Axios.post(path + "/api/home/card", {
      userDetails: id,
    });
    setFinal(res.data.result);
  };

  return (
    <>
      <div className="main">
        <div className="intro">
          <h1>We help you be at your best !!!</h1>
          <p>
            There is thing that could remember your things that
            <br />
            you remember on time....
          </p>
          <div className="introbtn">
            <button
              className="login"
              onClick={() => {
                localStorage.removeItem("userid");
              }}
            >
              <Link to="/login">{p}</Link>
              {/* <Link to='/login'>Login</Link> */}
            </button>
            {x && (
              <button className="signup">
                <Link to="/signup">Signup</Link>
              </button>
            )}
          </div>
        </div>
        <div className="bg"></div>
      </div>
      <div className="events">
        <div className="desc">
          <h1>Add your Event description here....</h1>
          <div className="addbtn">
            <button
              onClick={() => {
                setCard(true);
              }}
            >
              <a href="#">
                <i class="fa-solid fa-circle-plus"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      {card && (
        <div className="cards" id="cards">
          <div className="cardinput">
            TITLE :
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Your title here"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            DESCRIPTION :
            <input
              type="text"
              name="desc"
              value={desc}
              placeholder="Your description here"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button onClick={setCardInput}>Check here</button>
          </div>
        </div>
      )}
      {editcard && (
        <div className="cards" id="cards">
          <div className="cardinput">
            NEW TITLE :
            <input
              type="text"
              name="title"
              value={newtitle}
              placeholder="Your title here"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            NEW DESCRIPTION :
            <input
              type="text"
              name="desc"
              value={newdesc}
              placeholder="Your description here"
              onChange={(e) => {
                setNewDesc(e.target.value);
              }}
            />
            <button onClick={setNewCard}>Update</button>
          </div>
        </div>
      )}

      <div className="slide">
        {final &&
          final.length > 0 &&
          final.map((item, index) => (
            <div className="add" key={index}>
              <div className="eventcard">
                <div className="carddetail">
                  <div className="head">
                    {/* <i className="fa-solid fa-pen-to-square"></i> */}
                    <a href="#cards">
                      <button
                        onClick={() => {
                          editInfo(item.cardId);
                        }}
                      >
                        Edit [{index}]
                      </button>
                    </a>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button
                    className="del"
                    onClick={() => {
                      delInfo(item.cardId);
                    }}
                  >
                    Delete [{item.cardId}]
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Outlet />
    </>
  );
};

export default Home;
