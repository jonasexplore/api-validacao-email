/**
 * Variável responsável por importar os métodos e propriedades do componente nodemailer
 */
const nodemailer = require("nodemailer");

/**
 * Objeto contendo as configurações de login na
 * plataforma de emails escolhida.
 * @return {Object}
 */
const emailConfigProduction = {
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
};

/**
 * Função responsável por criar um conta de testes
 * no nodemailer para verificar seu funcionamento.
 * @param {*} account
 */
const emailConfigTest = (account) => ({
  host: "smtp.ethereal.email",
  auth: account,
});

/**
 * Função responsável por retornar as configurações de
 * acesso ao servidor de emails no ambiente de produção.
 * @return {Object}
 */
async function createEmailConfiguration() {
  if (process.env.NODE_ENV === "production") {
    return emailConfigProduction;
  } else {
    const account = await nodemailer.createTestAccount();
    return emailConfigTest(account);
  }
}

/**
 * A classe Email é responsável por fornecer o método
 * de transporte de email.
 */

class Email {
  /**
   * Esse método é responsável por receber as configurações
   * de acesso de suas classes filhas e a partir disso
   * realizar a comunicação com o servidor SMTP e proceder
   * com o envio.
   */
  async sendMail() {
    const configEmail = await createEmailConfiguration();
    const transporter = nodemailer.createTransport(configEmail);
    const info = await transporter.sendMail(this);
    if (!process.env.NODE_ENV !== "production") {
      console.log("URL: ", nodemailer.getTestMessageUrl(info));
    }
  }
}

module.exports = Email;
