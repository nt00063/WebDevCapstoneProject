document.addEventListener("DOMContentLoaded", () => {
  const tipsButton = document.querySelector("#site-tips-btn");
  if (tipsButton) {
    tipsButton.addEventListener("click", () => {
      alert(
        "Tip: Start on the Meal Plans page to download your weekly planner, then browse Recipes to fill in your week!"
      );
    });
  }

  const feedbackForm = document.querySelector("#feedback-form");
  if (feedbackForm) {
    const errorBox = document.querySelector("#form-errors");

    feedbackForm.addEventListener("submit", (event) => {
      let messages = [];

      const nameField = feedbackForm.querySelector("#name");
      const emailField = feedbackForm.querySelector("#email");

      if (nameField && nameField.value.trim() === "") {
        messages.push("• Please enter your name.");
      }

      if (emailField) {
        const emailValue = emailField.value.trim();
        if (emailValue === "") {
          messages.push("• Please enter your email address.");
        } else {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailValue)) {
            messages.push("• Please enter a valid email address.");
          }
        }
      }

      if (messages.length > 0) {
        event.preventDefault();
        if (errorBox) {
          errorBox.innerHTML = messages.join("<br>");
          errorBox.style.color = "#c62828";
        } else {
          alert(messages.join("\n"));
        }
      } else if (errorBox) {
        errorBox.textContent = "";
      }
    });
  }

  const cartPopup = document.querySelector("#cart-popup");
  const cartItemName = document.querySelector("#cart-item-name");
  const cartButtons = document.querySelectorAll(".add-btn, .add-cart-btn");

  if (cartPopup && cartItemName && cartButtons.length > 0) {
    cartButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemName =
          btn.getAttribute("data-item") || btn.textContent.trim();

        cartItemName.textContent = itemName;
        cartPopup.style.display = "block";

        setTimeout(() => {
          cartPopup.style.display = "none";
        }, 2000);
      });
    });
  }
});
