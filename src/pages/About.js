import React from "react";

import Navigation from "../components/Navigation";

import img from "../assets/about.svg";

import vision from "../assets/vision.svg";

import Footer from "../components/Footer";

import history from "../assets/history.svg";
import history2 from "../assets/history2.svg";
import history3 from "../assets/history3.svg";
import history4 from "../assets/history4.svg";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="about-banner">
        <div className="about-banner-text">
          <h1>ABOUT US</h1>
          <span>
            Confidence in a future Nigeria where individuals, documents and
            products are truly what they claim to be wherever they are in the
            world.
          </span>
        </div>
        <div className="about-ill">
          <img src={img} />
        </div>
      </div>
      <div className="vision">
        <div className="vision-body">
          <div>
            <h1>OUR VISION</h1>
            <p style={{ fontSize: "1.0rem", width: "450px" }}>
              To power a system where the true identity of every individual,
              document and product is revealed on our Platform and through our
              services.
            </p>
          </div>
          <div className="about-ill">
            <img src={vision} />
          </div>
        </div>
      </div>
      <div className="mission">
        <div>
          <h1>OUR MISSION</h1>
          <p>
            To power a system where the true identity of every individual,
            document and product is revealed on our Platform and through our
            services.
          </p>
        </div>
      </div>
      <div className="history">
        <div style={{ width: "500px" }}>
          <h1>HISTORY</h1>
          <p style={{ fontSize: "0.8rem" }}>
            National eAuthentication Limited (NeA) emerged under a backdrop of
            readiness to pursue a period of transformational change in Nigeria.
            The Federal Government of Nigeria was concerned about the country's
            preparedness to deal with issues of privacy and data security on
            entering the digital age. During that time, NeA’s founder, Dr. Felix
            Babatunde Obada, PhD, FloD, FIBA, FInst PS, FMMI, took steps to put
            a Digital Technology Team of notable IT industry players and
            Financial Institutions together to enlist the support of the
            Government for the implementation of eGovernment solutions as a
            National Initiative.
            <br />
            <br />
            Members of the team:
            <br />
            <ul>
              <li>Dr. Olu Agunloye, a co-founder</li>
              <li>Dr (Mrs) C.A.O. Ibru – MD/CEO, Oceanic Bank</li>
              <li>Ms Faith T. Matthews – ED, Standard Trust Bank</li>
              <li>Raji Rasaki – Regional Manager, Wema Bank</li>
              <li>Segun Sopitan – Regional Manager, Oceanic Bank</li>
              <li>Mrs Florence Seriki (deceased) – CEO, Omaket Computers</li>
              <li>Wole Ajisebutu – CEO, 21st Century Technologies</li>
              <li>Harold Anumihe – Orade Corporation, Nigeria</li>
              <li>Emmanuel Ekuwen – CEO, Telecom</li>
            </ul>
            <br />
            On 18 October 2004, the team had the honor of attending a meeting
            chaired by the then President of Nigeria, Chief Olusegun Obasanjo
            GCFR.
            <br /> On the day Dr. Olu Agunloye handled the government interface
            and also made the presentation on behalf of the team; while Dr.
            Felix Babatunde Obada supplied the required kernel for the
            eGovernance solutions on offer.
            <br /> Dr Obada was well placed to speak on eGovernance having just
            successfully pioneered the entrance of Nigeria into the space and
            digital age with the successful launch of the Nigeria-Sat1, a remote
            sensing satellite, delivered into the Lower Earth Orbit (LEO), in
            September 2003 with a Russian Decommissioned Intercontinental
            Ballistic Missile (ICBM), procured for a peaceful purpose. On the
            day the President Obasanjo demanded and secured the cast iron
            commitment of the Digital Technology Team members to make privacy
            and data security issues a matter of national priority.
            <br />
            <br /> Convinced about the seriousness and passion of the team, the
            Federal Government took up the challenge and delivered a three-day
            national workshop at the Banquet hall of the State House. The
            workshop was attended by top government officials, who were charged
            to commence the implementation of eGovernment at all levels and arms
            of governance. Attendees were also informed that solutions must be
            such as to trigger the actualization of other spin-offs that create
            transparency and accountability; without breaching the data security
            and privacy of individuals. This was a momentous day for Nigeria, as
            it signified the arrival of Nigeria’s digital age.
            <br />
            <br />
            The result of the above collaborations was the birth of National
            eGovernment Strategies Limited (NeGst), parent company of National
            eAuthentication Limited (NeA).
          </p>
        </div>{" "}
        <div className="history-img">
          <img src={history} />
          <img style={{ marginTop: "100px" }} src={history2} />
          <img style={{ marginTop: "100px" }} src={history4} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
