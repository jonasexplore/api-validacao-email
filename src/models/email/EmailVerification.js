/**
 * Variável responsável por importa a classe Email.
 */
const Email = require("./Email");

/**
 * Essa é uma classe específica para a verificação de emails.
 * Ela estancia os métodos de sua classe mãe Email e a partir disso
 * passa as propriedades necessárias para a utilização dos métodos.
 */
class EmailVerification extends Email {
  /**
   * O construtor irá receber o e-mail do destinatório e o link que será
   * anexado ao corpo do e-mail para validar as informação do usuário.
   * @param {String} email
   * @param {String} link
   */
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
