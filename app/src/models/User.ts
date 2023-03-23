import UserStorage from "./UserStorage";
type test = {
  id?: any;
  psword?: any;
  name?: any;
};

class User {
  private body: test = {};
  constructor(body: any) {
    this.body = body;
  }
  login() {
    const body = this.body;
    const { id, psword } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다." };
  }
}

export { User };
