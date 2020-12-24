const nodemailer = require("nodemailer");

class Email {
  async sendMail() {
    const account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      auth: account,
    });

    const info = await transporter.sendMail(this);
    console.log("URL: ", nodemailer.getTestMessageUrl(info));
  }
}

module.exports = Email;
