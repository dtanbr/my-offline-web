const { useState, useEffect } = React;

function App() {
  const [activeGroup, setActiveGroup] = useState("home");
  const [selectedCountry, setSelectedCountry] = useState("us");

  // Country data with flags and codes
  const countries = {
    us: { flag: "🇺🇸", code: "+1", name: "United States" },
    sg: { flag: "🇸🇬", code: "+65", name: "Singapore" },
    jp: { flag: "🇯🇵", code: "+81", name: "Japan" },
    gb: { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
    au: { flag: "🇦🇺", code: "+61", name: "Australia" }
  };

  // Dropdown hover effect
  useEffect(() => {
    const dropdownParents = document.querySelectorAll(".nav li");
    dropdownParents.forEach(parent => {
      const dropdown = parent.querySelector(".dropdown");
      if (!dropdown) return;

      let hideTimeout;
      parent.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        dropdown.style.display = "block";
      });
      parent.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
          dropdown.style.display = "none";
        }, 150);
      });
    });
  }, []);

  // Hero slider effect
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showSlide(n) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === n);
        dots[i].classList.toggle("active", i === n);
      });
    }

    function nextSlide() {
      if (activeGroup !== "home") return;
      index = (index + 1) % slides.length;
      showSlide(index);
    }

    const interval = setInterval(nextSlide, 8000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    return () => clearInterval(interval);
  }, [activeGroup]);

  // Function to get display name for dropdown items
  const getDisplayName = (id) => {
    const parts = id.split("-");
    if (parts.length >= 2) {
      const secondPart = parts[1];
      // Handle special cases
      if (id === "contact-contactUs") {
        return "Contact Us";
      }
      if (id === "transport-ridehailing") {
        return "Ride-hailing";
      }
      // Capitalize first letter of the second part
      return secondPart.charAt(0).toUpperCase() + secondPart.slice(1);
    }
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  // Groups data structure - restored for dropdown functionality
  const groups = {
    home: [
      {
        id: "home",
        content: React.createElement(HomeContent)
      }
    ],
    food: [
      { id: "food-hero" },
      { id: "food-tsukemen" },
      { id: "food-ramen" },
      { id: "food-sushi" },
      { id: "food-udon" },
      { id: "food-donburi" }
    ],
    attractions: [
      { id: "attractions-hero" },
      { id: "attractions-shrines" },
      { id: "attractions-citylife" },
      { id: "attractions-mountains" },
      { id: "attractions-hotsprings" },
      { id: "attractions-lakes" }
    ],
    transport: [
      { id: "transport-hero" },
      { id: "transport-train" },
      { id: "transport-bus" },
      { id: "transport-ridehailing" }
    ],
    contact: [
      {
        id: "contact-contactUs",
        content: React.createElement(ContactContent, {
          selectedCountry,
          setSelectedCountry,
          countries
        })
      }
    ]
  };

  // Render active group content
  const renderActiveContent = () => {
    if (activeGroup === "home") {
      return React.createElement(
        "div",
        { key: "home", id: "home" },
        React.createElement(HomeContent)
      );
    } else if (activeGroup === "food") {
      return React.createElement(FoodContent);
    } else if (activeGroup === "attractions") {
      return React.createElement(AttractionsContent);
    } else if (activeGroup === "transport") {
      return React.createElement(TransportContent);
    } else if (activeGroup === "contact") {
      return React.createElement(ContactContent, {
        selectedCountry,
        setSelectedCountry,
        countries
      });
    }
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, {
      activeGroup,
      setActiveGroup,
      groups,
      getDisplayName
    }),
    React.createElement(
      "div", 
      { className: "content-group active" }, 
      renderActiveContent()
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));