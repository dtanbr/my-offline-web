const FoodContent = () => {
  const sections = [
    {
      id: "food-hero",
      content: React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "hero-slider" },
          React.createElement("div", { 
            className: "slide active",
            style: { backgroundImage: "url('images/japanfood.png')" }
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
          }, "Japanese Cuisine")
        ),
        React.createElement(
          "div",
          { className: "about-section" },
          React.createElement("p", { className: "bold-intro" }, "Discover Japan's Hidden Eats — Menus, Hours & More, All in One App"),
          React.createElement("p", null, "Tired of only finding the same touristy restaurants online? Our app helps you uncover Japan's hidden culinary gems — from cozy neighborhood ramen shops to family-run cafés tucked away in backstreets — even the ones that are hard find on Google."),
          React.createElement("p", null, "Browse detailed ", React.createElement("strong", null, "menus"), ", check ", React.createElement("strong", null, "real-time opening hours"), ", and explore insider-only listings so you can plan every meal with confidence. Whether you're hunting for the perfect sushi spot, a late-night izakaya, or a café with the fluffiest pancakes in Tokyo, our app puts Japan's best-kept food secrets right at your fingertips.")
        )
      )
    },
    {
      id: "food-tsukemen",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Tsukemen"),
          React.createElement("p", null, "Indulge in the savory delight of Tsukemen, a Japanese noodle dish where noodles are served separately from a concentrated broth.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/tsukemen.jpg", alt: "Tsukemen" })
        )
      )
    },
    {
      id: "food-ramen",
      content: React.createElement("section", { className: "submenu-section reverse" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Ramen"),
          React.createElement("p", null, "Ramen is a popular Japanese noodle dish known for its rich, flavorful broth made from meat, seafood, or vegetables.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/ramen.jpg", alt: "Ramen" })
        )
      )
    },
    {
      id: "food-sushi",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Sushi"),
          React.createElement("p", null, "Experience the artistry of sushi, featuring fresh raw fish and seasoned rice, meticulously crafted by skilled chefs who have perfected this iconic Japanese cuisine.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/sushi.jpg", alt: "Sushi" })
        )
      )
    },
    {
      id: "food-udon",
      content: React.createElement("section", { className: "submenu-section reverse" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Udon"),
          React.createElement("p", null, "Savor the comforting taste of udon, thick wheat noodles served in a flavorful dashi broth, often topped with tempura, green onions, and other traditional ingredients.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/udon.jpg", alt: "Udon" })
        )
      )
    },
    {
      id: "food-donburi",
      content: React.createElement("section", { className: "submenu-section" },
        React.createElement("div", { className: "submenu-text" },
          React.createElement("h3", null, "Donburi"),
          React.createElement("p", null, "Enjoy donburi, a satisfying rice bowl dish topped with various ingredients like beef, chicken, tempura, or fresh sashimi, creating a complete and delicious meal.")
        ),
        React.createElement("div", { className: "submenu-image" },
          React.createElement("img", { src: "images/donburi.jpg", alt: "Donburi" })
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