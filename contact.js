
  const form = document.getElementById("contactForm");
  const message = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    const nom = inputs[0].value.trim();
    const prenom = inputs[1].value.trim();
    const numero = inputs[2].value.trim();
    const email = inputs[3].value.trim();
    const texte = inputs[4].value.trim();

    let isValid = true;

    inputs.forEach(input => {
      input.classList.remove("border-red-500");
    });

    if (nom === "") {
      inputs[0].classList.add("border-red-500");
      isValid = false;
    }

    if (prenom === "") {
      inputs[1].classList.add("border-red-500");
      isValid = false;
    }

    if (texte === "") {
      inputs[4].classList.add("border-red-500");
      isValid = false;
    }

    if (numero === "" && email === "") {
      inputs[2].classList.add("border-red-500");
      inputs[3].classList.add("border-red-500");
      isValid = false;
    }

    
    if (isValid) {
      message.textContent = "✅ Message sent successfuly !";
      message.classList.remove("hidden");

      form.reset();

      setTimeout(() => {
        message.classList.add("hidden");
      }, 3000);
    } else {
      message.textContent = "❌ Make sure to complete correctly.";
      message.classList.remove("hidden");
      message.classList.remove("text-green-600");
      message.classList.add("text-red-600");
    }
  });
