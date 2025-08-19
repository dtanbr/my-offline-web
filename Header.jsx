const Header = ({ activeGroup, setActiveGroup, groups, getDisplayName }) => {
  return React.createElement(
    "header",
    { className: "header" },
    React.createElement(
      "div",
      { 
        className: "logo",
        onClick: e => {
          e.preventDefault();
          setActiveGroup("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        style: { cursor: "pointer" }
      },
      React.createElement("img", { src: "images/companylogo.jpg", alt: "Dariru Logo" }),
      React.createElement("span", null, "Dariru")
    ),
    React.createElement(
      "nav",
      { className: "nav" },
      React.createElement(
        "ul",
        null,
        Object.keys(groups).map(item =>
          React.createElement(
            "li",
            { key: item },
            React.createElement(
              "a",
              {
                href: "#",
                className: activeGroup === item ? "active" : "",
                onClick: e => {
                  e.preventDefault();
                  setActiveGroup(item);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              },
              item.charAt(0).toUpperCase() + item.slice(1)
            ),
            groups[item].length > 1
              ? React.createElement(
                  "div",
                  { className: "dropdown" },
                  groups[item].filter(sub => !sub.id.includes("-hero")).map(sub =>
                    React.createElement(
                      "a",
                      {
                        key: sub.id,
                        href: `#${sub.id}`,
                        onClick: e => {
                          e.preventDefault();
                          setActiveGroup(item);
                          setTimeout(() => {
                            const element = document.getElementById(sub.id);
                            if (element) {
                              const headerHeight = 80; // Fixed header height
                              const elementPosition = element.offsetTop - headerHeight;
                              window.scrollTo({
                                top: elementPosition,
                                behavior: "smooth"
                              });
                            }
                          }, 100);
                        }
                      },
                      getDisplayName(sub.id)
                    )
                  )
                )
              : null
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "app-store-icons" },
      React.createElement(
        "a",
        { href: "#", target: "_blank" },
        React.createElement("img", { 
          src: "images/applestoredownload.png", 
          alt: "Download on App Store" 
        })
      ),
      React.createElement(
        "a",
        { href: "#", target: "_blank" },
        React.createElement("img", { 
          src: "images/googleplaydownload.png", 
          alt: "Get it on Google Play" 
        })
      )
    )
  );
};