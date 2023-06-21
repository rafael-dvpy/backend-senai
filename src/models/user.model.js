// Classe para representar um usuário
export class User {
    constructor(id, name, email, password, campos = []) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.campos = campos;
      this.createdAt = Date.now();
    }
  }
