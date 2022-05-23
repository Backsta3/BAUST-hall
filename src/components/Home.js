import React from "react";

import img1 from "../../src/images/BAUST-logo-1.png";

import Hall from "../../src/images/image0.jpeg";
import AssP from "../../src/images/Associate-Professor.png";
import AssP_Pic from "../../src/images/AssP-Pic.jpg";
import Cor from "../../src/images/Cor.png";
import Cor_Pic from "../../src/images/Cor-Pic2.jpg";
import Adib from "../../src/images/Adib.jpg";
import Un from "../../src/images/Un.jpg";

function Home() {
  return (
    <div>
      <link rel="shortcut icon" href="../../src/images/BAUST-logo-1.png" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />
      <link href="http://fonts.cdnfonts.com/css/fast-hand" rel="stylesheet" />

      <link rel="stylesheet" href="css/main.css" />

      <header id="header-home">
        <div style={{ fontWeight: "bold" }} className="">
          <nav id="main-nav">
            <a style={{ borderBottom: "none" }} href="index.html">
              <img src={img1} alt="" id="logo" />
            </a>
            <ul>
              <li>
                <a
                  style={{
                    background: "rgba(7, 43, 121, 0.767)",
                    padding: "6px",
                    borderRadius: "5px",
                    color: "white",
                  }}
                  href="https://docs.google.com/spreadsheets/d/1QSWWrJhEjp6mIRTxlbPKowOydXzwO_VZ-j4vbhA2k1g/edit?usp=sharing"
                >
                  Sheet
                </a>
              </li>
              <li>
                <a href="">Students</a>
              </li>
              <li>
                <a href="#ins">Faculties</a>
              </li>
              <li>
                <a href="#footer">Info</a>
              </li>
            </ul>
          </nav>
          <div style={{ alignItems: "center", marginTop: 60 }}>
            <div style={{}}>
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "lightgreen",
                }}
              >
                Welcome To BAUST New Hall
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="secoundBg">
        <section id="home-a" className="text-center py-2">
          <div className="container">
            {/* <div className="bottom-line " /> */}
            <div
              style={{
                alignItems: "center",
                marginBottom: "30px",
                marginTop: "-30px",
              }}
            >
              <img
                style={{
                  borderRadius: "2%",
                  width: 360,
                  height: 220,
                  margin: 10,
                }}
                src={Hall}
                alt=""
              />
              <p
                style={{
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                BAUST New Hall, a residence of Bangladesh Army University of
                Science and Technology run by the Army ....Established on
                December 14, 2019, this is a 5 storey building with a total of
                around 140 rooms, dining, prayer rooms and many other facilities
                that make our hall special from other halls in Bangladesh ...!
                .This is one of the brightest examples of discipline, discipline
                and so on.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="secoundBg">
        <section id="ins" className="text-center py-2">
          <div className="container">
            <div
              style={{
                marginBottom: "30px",
                marginTop: "-30px",
              }}
            >
              <h2
                style={{ color: "rgb(77, 179, 226)", fontWeight: "bold" }}
                className="section-title"
              >
                Professor And Coordinator
              </h2>
              <div className="bottom-line " />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 260,
                  margin: 30,
                }}
                src={AssP_Pic}
                alt=""
              />
              <img
                style={{
                  borderRadius: "20%",
                  width: 260,
                  height: 240,
                  margin: 30,
                }}
                src={AssP}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 260,
                  margin: 30,
                }}
                src={Cor_Pic}
                alt=""
              />
              <img
                style={{
                  borderRadius: "20%",
                  width: 260,
                  height: 240,
                  margin: 30,
                }}
                src={Cor}
                alt=""
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h2
                style={{ color: "rgb(77, 179, 226)", fontWeight: "bold" }}
                className="section-title"
              >
                Managed By
              </h2>
              <div className="bottom-line " />
              <img
                style={{
                  borderRadius: "10%",
                  width: 260,
                  height: 260,
                  margin: 40,
                  border: "2px solid",
                  borderColor: "rgb(243, 144, 30)",
                }}
                src={Adib}
                alt=""
              />
              <img
                style={{
                  borderRadius: "10%",
                  width: 260,
                  height: 260,
                  margin: 40,
                  border: "2px solid",
                  borderColor: "rgb(243, 144, 30)",
                }}
                src={Un}
                alt=""
              />
              <p
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Both are the students of BAUST
              </p>
            </div>
          </div>
        </section>
      </section>
      <footer id="main-footer">
        <div
          id="footer"
          style={{
            alignItems: "center",
            margin: "20px",
            padding: "10px",
            color: "black",
            fontWeight: "bold",
            fontSize: "13px",
          }}
          className="footer-content "
        >
          <p style={{}}>Saidpur Cantonment,Saidpur 5311, Bangladesh</p>
          <a
            style={{ color: "black" }}
            href="https://www.baust.edu.bd/"
            target="”_blank”"
          >
            Official Website : https://www.baust.edu.bd/
          </a>
          <p style={{}}>Developed By Fardin Bin Taher</p>

          <p style={{}}>Copyright © BAUST New Hall 2022, All Rights Reserved</p>
          <div className="social">
            <a href="https://www.facebook.com/baust.edu.bd" target="”_blank”">
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
