document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("positionError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "WAJIB DIISI !!!";
        isValid = false;
    }

    const position = document.getElementById("position").value.trim();
    if (position === "") {
        document.getElementById("positionError").textContent = " WAJIB DIISI !!!";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "WAJIB DIISI !!!";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = " ";
        isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
        document.getElementById("phoneError").textContent = "WAJIB DIISI !!!";
        isValid = false;
    }

    const salaryCheckboxes = document.querySelectorAll('input[name="salary"]');
    const isSalaryChecked = Array.from(salaryCheckboxes).some(checkbox => checkbox.checked);
    if (!isSalaryChecked) {
        document.getElementById("salaryError").textContent = " WAJIB DIISI !!!";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("employeeForm").reset();
    }
});