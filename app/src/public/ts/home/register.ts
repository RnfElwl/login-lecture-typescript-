namespace Register {
  export const id = document.querySelector("#id");
  export const psword = document.querySelector("#psword");
  export const name = document.querySelector("#name");
  export const confirmPsword = document.querySelector("#confirm-psword");
  export const registerBtn = document.querySelector("#button");
}

Register.registerBtn?.addEventListener("click", register);

async function register() {
  if (!(Register.id as HTMLInputElement).value)
    return alert("아이디를 입력해주세요");

  if (
    (Register.psword as HTMLInputElement).value !==
    (Register.confirmPsword as HTMLInputElement).value
  )
    return alert("비밀번호가 일치하지 않습니다");

  const req = {
    id: (Register.id as HTMLInputElement).value,
    psword: (Register.psword as HTMLInputElement).value,
  };
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
