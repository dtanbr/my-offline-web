const HomeContent = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "hero-slider" },
      React.createElement(
        "div",
        { className: "slide slide1 active" },
        React.createElement(
          "video",
          { autoPlay: true, muted: true, loop: true, playsInline: true },
          React.createElement("source", { src: "images/fujiview.mp4", type: "video/mp4" })
        )
      ),
      React.createElement("div", { className: "slide slide2" },
        React.createElement(
          "video",
          { autoPlay: true, muted: true, loop: true, playsInline: true },
          React.createElement("source", { src: "images/japantrain.mp4", type: "video/mp4" })
        )
      ),
      React.createElement("div", { className: "slide slide3" },
        React.createElement("img", { 
          src: "images/sakurablossom.png", 
          alt: "Cherry Blossoms in Japan",
          style: { width: "100%", height: "100%", objectFit: "cover" }
        })
      ),
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
      }, "Experience Japan"),
      React.createElement(
        "div",
        { className: "slider-dots" },
        React.createElement("span", { className: "dot active" }),
        React.createElement("span", { className: "dot" }),
        React.createElement("span", { className: "dot" })
      )
    ),
    React.createElement(
      "div",
      { className: "about-section" },
      React.createElement("h2", null, "About Us"),
      React.createElement("p", { className: "bold-intro" }, "Discover the whole of Japan, Seamlessly"),
      React.createElement("p", null, "Your ultimate companion for exploring Japan like never before. From hidden food gems to world-famous attractions, from navigating local transport with ease to getting real-time updates on events and weather, this app is designed to make every moment of your trip effortless and unforgettable."),
      React.createElement("p", null, "Packed with detailed, insider information and smart tools, it helps you plan, explore, and enjoy Japan without the stress—so you can focus on creating memories, not searching for them.")
    )
  );
};