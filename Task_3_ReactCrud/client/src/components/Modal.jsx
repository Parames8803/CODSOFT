import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Modal.css";

function Modal({ setOpenModal, track }) {
  return (
    <>
      <div
        className="modalBackground"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <Link
          to="/"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          About
        </Link>
        <Link
          to="/service"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Service
        </Link>
        <Link
          to="/login"
          onClick={() => {
            localStorage.removeItem("userid");
            setOpenModal(false);
          }}
        >
          {track}
        </Link>
        <Link
          to="/signup"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Sign Up
        </Link>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
