import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();

    const path = "http://localhost:5000";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    let b = localStorage.getItem("userid");

    Axios.defaults.withCredentials = true;

    const submitHandle = (e) => {
        e.preventDefault();
    };

    const btnlogin = async (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            setLogin('Please enter the details..')
        } else {
            const res = await Axios.post(path + "/api/login", {
                username: username,
                password: password,
            });

            if (res.status == 200) {
                setLogin(res.data.message)
                console.log(res.data.message)
                let id = res.data[0].id;
                localStorage.setItem("userid", id);
                navigate("/");
            } else {
                console.log("invalid details");
            }
        }
    };

    let remove = () => {
        localStorage.removeItem("userid");
    };

    let LoggedUser = () => {
        return <button onClick={remove}>Logout</button>;
    };

    let UnLogged = () => {
        return (
            <div>
                <div className="container">
                    <h1>Login</h1>
                    <form
                        className="login-frm"
                        onSubmit={submitHandle}>
                        <label htmlFor="username">UserName : </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            placeholder="Username here"
                            required
                        />
                        <br />
                        <label htmlFor="password">PassWord : </label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="password here"
                            required
                        />
                        <br />
                        <button onClick={btnlogin}>Login</button>
                        <br />
                        <Link to="/signup">Don't have an account !</Link>
                        <p>{login}</p>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        );
    };

    useEffect(() => {
        Axios.get(path + "/api/login").then((response) => {
            if (response.data.loggedin == true) {
                setLogin(response.data.user[0].id);
                console.log({ res: response.data });
            }
        });
    }, []);

    return (
        <>
            {b == null ? <UnLogged /> : <LoggedUser />}
            <Outlet />
        </>
    );
};

export default Login;
