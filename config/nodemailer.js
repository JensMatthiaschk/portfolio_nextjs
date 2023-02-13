import nodemailer from 'nodemailer'
// import "dotenv/config";

let transport = {
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
}

export const transporter = nodemailer.createTransport(transport)