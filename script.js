function updatePrice() {
    const select = document.getElementById("roomType");
    const display = document.getElementById("priceDisplay");

    if (!select || !display) {
        return;
    }

    const option = select.options[select.selectedIndex];
    const price = option.getAttribute("data-price");

    if (price) {
        display.textContent = "₹" + Number(price).toLocaleString("en-IN") + " / night";
    } else {
        display.textContent = "₹0 / night";
    }
}

function makeReservation(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const room = document.getElementById("roomType").value;

    if (name && room) {
        alert(
            "Reservation Confirmed!\n\n" +
            "Guest: " + name +
            "\nRoom: " + room
        );
    }
}

function showCustomerLogin() {
    document.getElementById("customerLoginForm").classList.remove("hidden");
    document.getElementById("adminLoginForm").classList.add("hidden");

    document.getElementById("customerTab").classList.add("active");
    document.getElementById("adminTab").classList.remove("active");
}

function showAdminLogin() {
    document.getElementById("customerLoginForm").classList.add("hidden");
    document.getElementById("adminLoginForm").classList.remove("hidden");

    document.getElementById("customerTab").classList.remove("active");
    document.getElementById("adminTab").classList.add("active");
}

function togglePassword(id) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function customerLogin(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const password = document.getElementById("customerPassword").value;

    if (phone.length === 10 && password === "1111") {
        alert("Customer Login Successful!");
        window.location.href = "booking.html";
    } else {
        alert("Use a 10 digit phone number and password 1111.");
    }
}

function adminLogin(event) {
    event.preventDefault();

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "1234") {
        alert("Admin Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Admin Login.\nUsername: admin\nPassword: 1234");
    }
}