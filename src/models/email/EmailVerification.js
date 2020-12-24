const Email = require("./Email");

class EmailVerification extends Email {
  constructor(email, link) {
    super();
    this.from = '"Remetente do email" <noreply@email.com.br>';
    this.to = email;
    this.subject = "Verificação de Email";
    this.text = `Olá! Verifique seu email aqui: ${link}`;
    this.html = `<h1>Olá!</h1> Verifique seu email aqui: <a href="${link}">${link}</a>`;
  }
}

module.exports = EmailVerification;
