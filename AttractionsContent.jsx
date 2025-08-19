const AttractionsContent = () => {
  const sections = [
    {
      id: "attractions-hero",
      content: React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "hero-slider" },
          React.createElement("div", { 
            className: "slide active",
            style: { backgroundImage: "url('images/attractions.png')" }
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
          }, "Discover Japan")
        ),
        React.createElement(
          "div",
          { className: "about-section" },
          React.createElement("p", { className: "bold-intro" }, "Timeless Wonders"),
          React.createElement("p", null, "Explore Japan smarter with real-time attraction pages. Whether it's shopping, museums, mountains, or lakes, see all updates in one place—live opening hours, crowd levels, and weather—right where you are viewing the attraction."),
          React.createElement("p", null, "Experience Japan's timeless harmony—where ancient temples, tea ceremonies, and historic streets meet neon cities and modern marvels.")
        )
      )
    },
    {
      id: "attractions-shrines",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Shrines"),
          React.createElement("p", null, "Discover Japan's historic shrines, where tradition meets tranquility.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/shrine.jpg", alt: "Shrines" })
        )
      )
    },
    {
      id: "attractions-citylife",
      content: React.createElement("section", { className: "submenu-section reverse" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "City Life"),
          React.createElement("p", null, "Experience the vibrant cityscapes of Tokyo and Osaka with bustling nightlife and shopping.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/citylife.jpg", alt: "City Life" })
        )
      )
    },
    {
      id: "attractions-mountains",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Mountains"),
          React.createElement("p", null, "Explore Japan's majestic mountain ranges, from the iconic Mount Fuji to the dramatic peaks of the Japanese Alps.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/mountains.jpeg", alt: "Mountains" })
        )
      )
    },
    {
      id: "attractions-hotsprings",
      content: React.createElement("section", { className: "submenu-section reverse" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Hot Springs"),
          React.createElement("p", null, "Relax and rejuvenate in Japan's natural hot springs, nestled in scenic locations throughout the country.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/hotsprings.jpg", alt: "Hot Springs" })
        )
      )
    },
    {
      id: "attractions-lakes",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Lakes"),
          React.createElement("p", null, "Discover the serene beauty of Japan's pristine lakes, offering peaceful retreats and stunning reflections of surrounding landscapes.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/lakes.jpg", alt: "Lakes" })
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