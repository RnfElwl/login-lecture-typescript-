namespace Register {
  export const id = document.querySelector("#id");
  export const psword = document.querySelector("#psword");
  export const name = document.querySelector("#name");
}

const confirmPsword = document.querySelector("#confirm-psword");

const registerBtn = document.querySelector("#button");

registerBtn?.addEventListener("click", register);

async function register() {
  const req = {
    id: (Register.id as HTMLInputElement).value,
    psword: (Register.psword as HTMLInputElement).value,
  };
  console.log("hii");
  try {
    const data = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    const res = await data.json();
    if (res.success) {
      location.href = "/login";
    } else {
      alert(res.msg);
    }
  } catch (err) {
    console.error(new Error("회원가입 중 에러 발생"));
  }
}
