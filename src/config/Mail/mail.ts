import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '69f76e69be3404',
    pass: '9647dbde00879c',
  },
});

const mailOptions: nodemailer.SendMailOptions = {
  from: 'EquipeEasyMealReservation@gmail.com',
  to: 'manuelfuele@icloud.com',
  subject: 'Nova Reserva ',
  text: 'Novo Reserva Efectuada',
};

export {transporter,mailOptions}