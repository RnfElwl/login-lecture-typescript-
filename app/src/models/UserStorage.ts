type ObjType = {
  [index: string]: string[];
  id: string[];
  psword: string[];
  names: string[];
};
class UserStorage {
  private static users: ObjType = {
    id: ["1234", "1020", "tmdduq"],
    psword: ["1234", "1020", "tmdduq"],
    names: ["ELvm", "RnfElwl", "qortmdduq"],
  };
  static getUsers(...fields: string[]) {
    const users = this.users;
    const newUsers = fields.reduce((newUsers: any, field: string): object => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id: any) {
    const users = this.users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser: any, info: any) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

export default UserStorage;
