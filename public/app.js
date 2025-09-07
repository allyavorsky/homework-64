const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

const protectedBtn = document.getElementById("protected-btn");
const logoutBtn = document.getElementById("logout-btn");

const statusMessage = document.getElementById("status-message");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    email: registerEmail.value,
    password: registerPassword.value,
  };

  const response = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const message = await response.text();
  statusMessage.textContent = message;
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    email: loginEmail.value,
    password: loginPassword.value,
  };

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const message = await response.text();
  statusMessage.textContent = message;
});

protectedBtn.addEventListener("click", async () => {
  const response = await fetch("/protected", {
    method: "GET",
  });

  const message = await response.text();
  statusMessage.textContent = message;
});

logoutBtn.addEventListener("click", async () => {
  const response = await fetch("/logout", {
    method: "POST",
  });

  const message = await response.text();
  statusMessage.textContent = message;
});
