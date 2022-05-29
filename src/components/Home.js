import React from "react";
import { useState } from "react";

import img1 from "../../src/images/BAUST-logo-1.png";
import Popup from "./Popup";
import Hall from "../../src/images/image0.jpeg";
import AssP from "../../src/images/Associate-Professor.png";
import AssP_Pic from "../../src/images/AssP-Pic.jpg";
import Cor from "../../src/images/Cor.png";
import Cor_Pic from "../../src/images/Cor-Pic2.jpg";
import Adib from "../../src/images/Adib.png";
import Un from "../../src/images/Fahim.png";
import threeSixty from "../../src/images/481752076.jpg";
import field from "../../src/images/hall field.jpeg";
import Menu from "../../src/images/Meal Menu.pdf";
import VC from "../../src/images/Brig-Gen-Professor-Dr.-Md-Lutfor-Rahman.jpg";

function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);

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
            <ul style={{ marginTop: "15px" }}>
              <li
                style={{
                  background: "white",
                  padding: "6px",
                  borderRadius: "5px",

                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                }}
              >
                <a href="https://docs.google.com/spreadsheets/d/1QSWWrJhEjp6mIRTxlbPKowOydXzwO_VZ-j4vbhA2k1g/edit?usp=sharing">
                  <p
                    style={{
                      paddingTop: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    {" "}
                    Meal Sheet
                  </p>
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} href={Menu}>
                  Meal Menu
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} href="#ins">
                  Provosts
                </a>
              </li>
              <li>
                <button
                  onClick={() => setButtonPopup(true)}
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "black",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                  href=""
                >
                  Hall Facilities
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 15,
                    }}
                  >
                    In our hall, there are various facilities for the students
                    staying in our hall.There are facilities for only 3 people
                    per room which is not available anywhere else in Bangladesh.
                    Our room is large enough for 3 people, with 3 beds, 3
                    reading tables and a large shelf with 3 partitions where
                    students can keep their necessary things as well as their
                    many important valuables.Our halls are monitored 24 hours a
                    day by CCTV cameras and are controlled by skilled people.
                    Each portion of our hall has 2 filters to supply pure water
                    and each portion has 4 bathrooms, 4 urine pans, and 4
                    latrines, and a hot water bath with geyser and a large front
                    of the hall.There is a playground where we have sports
                    facilities and we have a cultural program and a grand feast
                    every month. In addition to this, we are surrounded by many
                    more facilities.
                  </p>
                  <img
                    style={{
                      borderRadius: "2%",
                      width: 560,
                      height: 280,
                      margin: 10,
                      marginTop: 30,
                    }}
                    src={threeSixty}
                    alt=""
                  />
                  <h5
                    style={{
                      color: "rgb(3, 35, 102)",
                      fontWeight: "bold",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Inside of a hall room
                  </h5>
                  <a href={field} target="_blank">
                    <h2
                      style={{
                        marginTop: "10px",
                        color: "rgb(8, 201, 8)",
                        fontWeight: "bold",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Watch the view of the hall field
                    </h2>
                  </a>
                </Popup>
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
                  color: "rgba(7, 43, 121, 0.767)",
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
                marginTop: "70px",
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
                Bangladesh Army University of Science and Technology . Being a
                reputed private university in Bangladesh, it is considered as an
                excellent example of discipline and rule. New hall one of our
                varsity's residence, established on December 14, 2019.Our hall
                is 5 storey building with a total of around 140 rooms, dining,
                prayer rooms and many other facilities that make our hall
                special from other halls in Bangladesh!Here we have, hall
                committee that works for the welfare of the students of the
                residential students.Here we have well & expert cheif, well
                trained guard, cleaners and mess worker.Besides, we have two
                teachers who are here for the students to observe us.This
                facilities defined our hall as the most nicest residentials.This
                is one of the brightest examples of discipline, injunction &
                rules.
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
                Honorable Vice Chancellor
              </h2>
              <div className="bottom-line " />
              <img
                style={{
                  borderRadius: "50%",
                  width: 260,
                  height: 260,
                  margin: 30,
                }}
                src={VC}
                alt=""
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Brig Gen Professor Dr. Engr. Md Lutfor Rahman (Retired)
              </p>
              <h2
                style={{
                  marginTop: "50px",
                  color: "rgb(77, 179, 226)",
                  fontWeight: "bold",
                }}
                className="section-title"
              >
                Provosts
              </h2>
              <div className="bottom-line " />
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "rgb(11, 53, 145)",
                }}
              >
                Provost
              </h1>
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
                  width: 280,
                  height: 240,
                  margin: 30,
                }}
                src={AssP}
                alt=""
              />
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "rgb(11, 53, 145)",
                }}
              >
                Assistant Provost
              </h1>
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
                  width: 280,
                  height: 240,
                  margin: 30,
                }}
                src={Cor}
                alt=""
              />
              {/* <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontWeight: "bold" }}>
                Mehedi Hasan Lecturer (Economics) & Department Program
                Coordinator Department of Business Administration (DBA)
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /> */}
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
                  height: 290,
                  margin: 40,
                  border: "2px solid",
                  borderColor: "rgb(3, 35, 102)",
                }}
                src={Un}
                alt=""
              />{" "}
              {/* <p
                style={{
                  fontWeight: "bold",
                  color: "rgb(11, 53, 145)",
                }}
              >
                {" "}
                Fahim Faisal <br /> ME 10TH BATCH
              </p> */}
              <img
                style={{
                  borderRadius: "10%",
                  width: 260,
                  height: 290,
                  margin: 40,
                  border: "2px solid",
                  borderColor: "rgb(3, 35, 102)",
                }}
                src={Adib}
                alt=""
              />
              {/* <p
                style={{
                  fontWeight: "bold",
                  color: "rgb(11, 53, 145)",
                }}
              >
                {" "}
                Md. Sadman Adib Khan <br /> CSE 11TH BATCH
              </p> */}
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
            color: "white",
            fontWeight: "bold",
            fontSize: "13px",
          }}
          className="footer-content "
        >
          <p style={{}}>Saidpur Cantonment,Saidpur 5311, Bangladesh</p>
          <a
            style={{ color: "white" }}
            href="https://www.baust.edu.bd/"
            target="”_blank”"
          >
            Official Website : https://www.baust.edu.bd/
          </a>

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
