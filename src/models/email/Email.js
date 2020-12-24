const nodemailer = require("nodemailer");

const emailConfigProduction = {
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
};

const emailConfigTest = (account) => ({
  host: "smtp.ethereal.email",
  auth: account,
});

async function createEmailConfiguration() {
  if (process.env.NODE_ENV === "production") {
    return emailConfigProduction;
  } else {
    const account = await nodemailer.createTestAccount();
    return emailConfigTest(account);
  }
}

class Email {
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
