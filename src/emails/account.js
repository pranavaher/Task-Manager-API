const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEDNGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "prranavyaher@gmail.com",
    subject: "Welcome to Task Manager App!!🖐",
    text: `We are glad to have you ${name} 🎉. We always offer the best services and we hope you would love them. Thanks you for choosing us. Contact us for any queries.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "prranavyaher@gmail.com",
    subject: "Sorry to see you go!!",
    text: `Goodbye, ${name}. We hope you would consider us again🖐`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
