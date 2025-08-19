const ContactContent = ({ selectedCountry, setSelectedCountry, countries }) => {
  return React.createElement("section", { 
    id: "contact-contactUs",
    className: "contact-section", 
    style: { padding: "60px 20px", backgroundColor: "#f8f9fa" } 
  },
    React.createElement("div", { 
      className: "contact-container", 
      style: { 
        maxWidth: "800px", 
        margin: "0 auto", 
        backgroundColor: "white", 
        borderRadius: "24px", 
        padding: "60px 40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      } 
    },
      React.createElement("h1", { 
        style: { 
          fontSize: "3rem", 
          textAlign: "center", 
          color: "#333", 
          marginBottom: "70px",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "300"
        } 
      }, "Contact Us"),
      
      // Form fields container
      React.createElement("div", { className: "form-fields" },
        
        // Row 1: Inquiry Type and Name
        React.createElement("div", { className: "form-row" },
          React.createElement("div", { className: "form-field" },
            React.createElement("label", { className: "form-label" }, 
              "Inquiry Type", React.createElement("span", { style: { color: "#e74c3c" } }, "*")
            ),
            React.createElement("div", { className: "select-wrapper" },
              React.createElement("select", { className: "form-input" },
                React.createElement("option", { value: "" }, "Select an option"),
                React.createElement("option", { value: "general" }, "🏯 General Inquiry"),
                React.createElement("option", { value: "support" }, "🍜 Technical Support"),
                React.createElement("option", { value: "payment" }, "💵 Payment related issues"),
                React.createElement("option", { value: "feedback" }, "🙏️ Feedback"),
                React.createElement("option", { value: "business" }, "⛰️ Business/Partnership inquiries"),
                React.createElement("option", { value: "other" }, "✨ Others (Please state in description)")
              )
            )
          ),
          React.createElement("div", { className: "form-field" },
            React.createElement("label", { className: "form-label" }, 
              "Name ", React.createElement("span", { style: { color: "#e74c3c" } }, "*")
            ),
            React.createElement("input", { 
              type: "text", 
              placeholder: "Your full name",
              className: "form-input"
            })
          )
        ),
        
        // Row 2: Email and Phone
        React.createElement("div", { className: "form-row" },
          React.createElement("div", { className: "form-field" },
            React.createElement("label", { className: "form-label" }, 
              "Email ", React.createElement("span", { style: { color: "#e74c3c" } }, "*")
            ),
            React.createElement("input", { 
              type: "email", 
              placeholder: "your.email@example.com",
              className: "form-input"
            })
          ),
          React.createElement("div", { className: "form-field" },
            React.createElement("label", { className: "form-label" }, 
              "Phone (Optional)"
            ),
            React.createElement("div", { className: "phone-input-container" },
              React.createElement("div", { className: "select-wrapper country-code-select" },
                React.createElement("select", { 
                  className: "form-input",
                  value: selectedCountry,
                  onChange: (e) => setSelectedCountry(e.target.value)
                },
                  Object.entries(countries).map(([code, country]) =>
                    React.createElement("option", { key: code, value: code }, 
                      `${country.flag} ${country.name} ${country.code}`
                    )
                  )
                )
              ),
              React.createElement("input", { 
                type: "tel", 
                placeholder: "Your phone number",
                className: "form-input",
                style: { borderRadius: "0 10px 10px 0" }
              })
            )
          )
        ),
        
        // Message
        React.createElement("div", { className: "form-field-full" },
          React.createElement("label", { className: "form-label" }, 
            "Message", React.createElement("span", { style: { color: "#e74c3c" } }, "*")
          ),
          React.createElement("textarea", { 
            placeholder: "Tell us about it here. If you selected Others, please state more",
            rows: 6,
            className: "form-textarea"
          })
        ),
        
        // Attachments
        React.createElement("div", { className: "form-field-full" },
          React.createElement("label", { className: "form-label" }, 
            "Upload files"
          ),
          React.createElement("div", { className: "file-upload-area" },
            React.createElement("p", { style: { fontSize: "2.2rem", marginBottom: "18px", opacity: "0.8" } }, "🗾 📷 📋"),
            React.createElement("p", { style: { fontSize: "1.1rem", color: "#666", marginBottom: "8px" } }, "Drag to drop is available"),
            React.createElement("p", { style: { fontSize: "0.9rem", color: "#999", marginBottom: "20px" } }, "Upload your image here in only (JPG, PNG, JPEG, PDF) Max size: 2MB"),
            React.createElement("button", { className: "file-browse-btn" }, "Choose Files")
          )
        ),
        
        // Submit Button
        React.createElement("div", { className: "form-submit" },
          React.createElement("button", { 
            className: "submit-btn",
            onClick: (e) => {
              e.preventDefault();
              alert("Your inquiry has been sent! We will respond to you as soon as possible");
            }
          }, "Click to Submit")
        )
      )
    )
  );
};