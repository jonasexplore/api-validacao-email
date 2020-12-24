/**
 * Importanto o Router do express para gerenciar as rotas da aplicação.
 */
const { Router } = require("express");
/**
 * Importando a classe EmailValidation para implementar seus métodos.
 */
const EmailValidation = require("../models/email/EmailVerification");

/**
 * Essa função é responsável por montar o link de validação,
 * onde concatenará o URL_BASE do site, a rota e um hash que será
 * responsável por identificar o usuário e validar seu e-mail.
 * @param {String} route
 * @param {String} hash
 */
function getAdress(route, hash) {
  return `${process.env.BASE_URL}${route}${hash}`;
}

/**
 * Essa função instanciará nossa class EmailVerification passando
 * os dados necessários que são recebidos através da requisição http.
 * A função funciona de forma sincrona, pois, o serviço de e-mail pode
 * demorar algum tempo até ser concluído. Por fim, caso algum erro seja encontrado
 * será retornado no console e a requisição será encerrada com um
 * status 200.
 * @param {Request} req
 * @param {Response} res
 *
 * @return {Response} Será retornado em um arquivo no formato JSON.
 * @throw {error} Geralmente os erros estão relacionados a problemas de autenticação
 * com o servidor de emails.
 */
function sendEmail(req, res) {
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
