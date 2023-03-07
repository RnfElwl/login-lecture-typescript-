var id = document.querySelector("#id");
var psword = document.querySelector("#psword");
var loginBtn = document.querySelector("button");
loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener("click", login);
function login() {
    var req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req);
}
