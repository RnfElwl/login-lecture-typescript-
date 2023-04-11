namespace Login {
  export const id: any = document.querySelector("#id");
  export const psword: any = document.querySelector("#psword");
  export const loginBtn = document.querySelector("#button");
}
Login.loginBtn?.addEventListener("click", login);

async function login() {
  const req = {
    id: (Login.id as HTMLInputElement).value,
    psword: (Login.psword as HTMLInputElement).value,
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
