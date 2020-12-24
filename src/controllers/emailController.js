const EmailValidation = require("../models/email/EmailVerification");

function getAdress(route, hash) {
  return `${process.env.BASE_URL}${route}${hash}`;
}

async function sendEmail(req, res) {
  const { email } = req.body;

  const emailValidation = new EmailValidation(
    email,
    getAdress("/api/user/validation/", "hash")
  );

  emailValidation
    .sendMail()
    .catch((error) =>
      console.log("Ops, tivemos um probleminha!\nErro: " + error.message)
    );
  res.json({
    status: "ok",
    message: "Processo de envio realizado com sucesso. Agora é só aguardar.",
  });
}

module.exports = {
  sendEmail,
};
