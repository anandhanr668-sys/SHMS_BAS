import React from "react";
import heroImage from "../assets/images/hospital-hero.jpg";
import dashboardIcon from "../assets/icons/dashboard.svg";
import formsIcon from "../assets/icons/forms.svg";
import rulesIcon from "../assets/icons/rules.svg";
import reportsIcon from "../assets/icons/reports.svg";
import "./HeroSection.css";

const features = [
  { icon: dashboardIcon, title: "Smart Dashboard" },
  { icon: formsIcon, title: "Low-Code Forms" },
  { icon: rulesIcon, title: "Rules Engine" },
  { icon: reportsIcon, title: "Report Designer" },
];

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Smart Hospital Management System</h1>
        <p>
          A modern low-code platform to manage hospitals, patients,
          workflows, and analytics — all in one place.
        </p>

        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <img src={f.icon} alt={f.title} />
              <span>{f.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Hospital Management" />
      </div>
    </section>
  );
};

export default HeroSection;
