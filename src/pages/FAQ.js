import React, { useState } from "react";

import Navigation from "../components/Navigation";
import Dropdown from "../components/FaqDropDown";

const Faq = () => {
  const [drop, setDrop] = useState([
    {
      title: "Why should I use Kudibar for my events?",
      description:
        "Our platform is ever open 24/7. This means that you can purchase discounted tickets from us anywhere and anytime you want. Thus, you can purchase event tickets at the time that is convenient for you. We verify every event on our platform to reduce the risk of you loosing your money. We only associate our brand with events that create joy.",
    },
    {
      title: "How do I get started?",
      description:
        "Our platform is ever open 24/7. This means that you can purchase discounted tickets from us anywhere and anytime you want. Thus, you can purchase event tickets at the time that is convenient for you. We verify every event on our platform to reduce the risk of you loosing your money. We only associate our brand with events that create joy.",
    },
    {
      title: "How can I buy tickets?",
      description:
        "Our platform is ever open 24/7. This means that you can purchase discounted tickets from us anywhere and anytime you want. Thus, you can purchase event tickets at the time that is convenient for you. We verify every event on our platform to reduce the risk of you loosing your money. We only associate our brand with events that create joy.",
    },
    {
      title: "How many tickets can I buy using kudibar?",
      description:
        "Our platform is ever open 24/7. This means that you can purchase discounted tickets from us anywhere and anytime you want. Thus, you can purchase event tickets at the time that is convenient for you. We verify every event on our platform to reduce the risk of you loosing your money. We only associate our brand with events that create joy.",
    },
  ]);

  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "3.0rem",
              color: "var(--active-color)",
            }}
          >
            FAQS
          </h1>
          <div
            style={{
              width: "495px",
              height: "100%",
              borderRadius: "3px",
              boxShadow: "10px 10px 40px rgba(21, 21, 21, 0.08)",
            }}
          >
            {drop.map((drop, i) => (
              <Dropdown
                title={drop.title}
                description={drop.description}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
