const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn?.addEventListener("click", login);

async function login() {
  const req = {
    id: (id as HTMLInputElement).value,
    psword: (psword as HTMLInputElement).value,
  };

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  console.log(await res.json());
}
