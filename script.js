function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    var valid = true;

    // Validasi nama (hanya huruf a-z, tanpa spasi)
    var namePattern = /^[A-Za-z]+$/;
    if (!name.match(namePattern)) {
        nameError.textContent = "Nama hanya boleh terdiri dari huruf A-Z.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validasi email (harus mengandung @ dan .com)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Format email tidak valid.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validasi panjang pesan (maksimal 300 kata)
    if (message.length > 300) {
        messageError.textContent = "Pesan tidak boleh lebih dari 300 kata.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    return valid;
}

