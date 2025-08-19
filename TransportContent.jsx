const TransportContent = () => {
  const sections = [
    {
      id: "transport-hero",
      content: React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "hero-slider" },
          React.createElement("div", { 
            className: "slide active",
            style: { backgroundImage: "url('images/transport.png')" }
          }),
          React.createElement("h2", { 
            className: "hero-title",
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "3rem",
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontWeight: "300",
              letterSpacing: "2px",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              zIndex: "10",
              margin: "0"
            }
          }, "Travel Japan")
        ),
        React.createElement(
          "div",
          { className: "about-section" },
          React.createElement("p", { className: "bold-intro" }, "Seamless Mobility"),
          React.createElement("p", null, "Experience the world's most efficient and punctual transportation system. Japan's legendary shinkansen bullet trains, comprehensive rail networks, and meticulous bus services connect every corner of the archipelago with precision timing and unmatched comfort."),
          React.createElement("p", null, "Search for routes, check schedules, pricing with real time updates. Navigate through urban centers and remote countryside with ease, discovering hidden gems and iconic destinations alike. From the lightning-fast travel between major cities to the scenic local routes through mountain villages, every journey becomes part of your adventure.")
        )
      )
    },
    {
      id: "transport-train",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Train"),
          React.createElement("p", null, "Experience Japan's world-renowned railway system, including the famous bullet trains that connect major cities with speed and efficiency.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/train.jpeg", alt: "Train Travel" })
        )
      )
    },
    {
      id: "transport-bus",
      content: React.createElement("section", { className: "submenu-section reverse" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Bus"),
          React.createElement("p", null, "Explore Japan's comprehensive bus network for convenient travel between cities and rural areas, offering scenic routes and affordable transportation.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/bus.jpg", alt: "Bus Travel" })
        )
      )
    },
    {
      id: "transport-ridehailing",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Ride-hailing services"),
          React.createElement("p", null, "Convenient and reliable ride-hailing services available throughout Japan's major cities, offering door-to-door transportation with modern apps and professional drivers.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/taxi.jpg", alt: "Ride-hailing services" })
        )
      )
    }
  ];

  return React.createElement(
    React.Fragment,
    null,
    ...sections.map(section =>
      React.createElement(
        "div",
        { key: section.id, id: section.id },
        section.content
      )
    )
  );
};