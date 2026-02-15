import React, { useState } from "react";
import "./Event.css";

// local image imports (keep yours)
import event11 from "../assets/event1.1.jpeg"
import event12 from "../assets/event1.2.jpeg";
import event13 from "../assets/event1.3.jpeg";
import event14 from "../assets/event1.4.jpeg";
import event15 from "../assets/event1.5.jpeg";
import event16 from "../assets/event1.6.jpeg";
import event21 from "../assets/event2.1.jpg";
import event22 from "../assets/event2.2.jpg";
import event23 from "../assets/event2.3.jpg";
import event24 from "../assets/event2.4.jpg";
import event25 from "../assets/event2.5.jpg";
import event31 from "../assets/event31.jpeg";
import event32 from "../assets/event32.jpeg";
import event33 from "../assets/event33.jpeg";
import event34 from "../assets/event34.jpeg";
import event35 from "../assets/event35.jpeg";
import Navbar from "../Components/Navbar";

const events = [
  {
    title: "TechQuest 2025",
    images: [event11, event12, event13, event14, event15, event16],
    desc: "TechQuest is DBIT’s annual treasure hunt organized by the Student Council, where every club brings its own creative twist to fun and challenging puzzles. The Maths Domain adds a thrilling edge with logic-driven clues and problem-solving adventures that test wit, teamwork, and speed.",
  },
  {
    title: "Calculator Workshop",
    images: [event21, event22, event23, event24, event25],
    desc: "A hands-on session designed to unlock the full potential of scientific and programmable calculators. Participants learn shortcuts, smart tricks, and advanced functions to solve complex mathematical problems efficiently and elevate their computational skills. Fun Games were also conducted where each and every student participated with great enthusiasm!!",
  },
  {
    title: "National Mathematics Day",
    images: [event31, event32, event33, event34, event35],
    desc: "On the occasion of National Mathematician’s Day, a week-long treasure hunt was organized by the domain. Every day, a new puzzle was published via Instagram stories, and three winners were selected based on the consistency and accuracy of their answers. It was a fun online event that saw enthusiastic participation throughout the week. On the final day, i.e., the 22nd, the last puzzle was released, leading participants to learn about Srinivasa Ramanujan.",
  },
];

const Event = () => {
  // Initialize as an array of zeros matching events length
  const [currentImage, setCurrentImage] = useState(() =>
    events.map(() => 0)
  );

  const handlePrev = (index) => {
    const total = events[index].images.length;
    setCurrentImage((prev) => {
      const next = [...prev];
      // ensure we have a valid number (should be, because we initialized)
      const curr = Number.isInteger(next[index]) ? next[index] : 0;
      next[index] = (curr - 1 + total) % total;
      return next;
    });
  };

  const handleNext = (index) => {
    const total = events[index].images.length;
    setCurrentImage((prev) => {
      const next = [...prev];
      const curr = Number.isInteger(next[index]) ? next[index] : 0;
      next[index] = (curr + 1) % total;
      return next;
    });
  };

  return (
  <>
  <Navbar/>
    <div className="event-page">
      <h1 className="event-title">Events Conducted in 2025 By Domain</h1>
      <div className="event-grid">
        {events.map((event, index) => {
          const current = currentImage[index] ?? 0;
          return (
            <div key={index} className="event-card">
              <div className="carousel-container">
                <button
                  className="arrow left"
                  onClick={() => handlePrev(index)}
                  aria-label={`Previous image for ${event.title}`}
                >
                  ❮
                </button>

                <img
                  src={event.images[current]}
                  alt={`${event.title} ${current + 1}`}
                  className="event-img"
                />

                <button
                  className="arrow right"
                  onClick={() => handleNext(index)}
                  aria-label={`Next image for ${event.title}`}
                >
                  ❯
                </button>
              </div>

              <div className="event-info">
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Event;
