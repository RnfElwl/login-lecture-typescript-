const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn?.addEventListener("click", login);

async function login() {
  const req = {
    id: (id as HTMLInputElement).value,
    psword: (psword as HTMLInputElement).value,
  };

  try {
    const data = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    const res = await data.json();
    if (res.success) {
      location.href = "/";
    } else {
      alert(res.msg);
    }
  } catch (err) {
    console.error(new Error("로그인 중 에러 발생"));
  }
}
