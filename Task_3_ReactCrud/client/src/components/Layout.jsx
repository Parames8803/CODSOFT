import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../styles/Layout.css";
import Modal from "../components/Modal";

const Layout = () => {
    const [modalOpen, setModalOpen] = useState(false);
    let [a, setA] = useState("");

    return (
        <>
            <div className="header">
                <div className="brand">
                    <h1>
                        <span style={{ color: "red" }}>U</span>ser
                        <span style={{ color: "purple" }}>O</span>n
                    </h1>
                </div>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/parameswaran-eswaran/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/home">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/parameswaran.eshwaran/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
                <div className="menu">
                    <button
                        className="openModalBtn"
                        onClick={() => {
                            if (localStorage.getItem("userid") != null) {
                                // console.log()
                                setA("Logout");
                            } else {
                                setA("Login");
                            }
                            setModalOpen(true);
                        }}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            {modalOpen && (
                <Modal
                    setOpenModal={setModalOpen}
                    track={a}
                />
            )}
            <Outlet />
        </>
    );
};

export default Layout;
