import { transporter } from "../../config/nodemailer"


const handler = async (req, res) => {
    console.log("EMAIL", req.body)
    if (req.method === "POST") {
        const name = req.body.from_name
        const email = req.body.reply_to
        const message = req.body.message
        if (!name || !email || !message) {
            return res.status(400).send({ message: "Bad request" });
        }
        const content = `
    from: ${name} 
    <br> 
    email: ${email} 
    <br> 
    message: ${message}`

        var mail = {
            to: process.env.RECEIVING_EMAIL_ADDRESS,
            subject: 'Email from Homepage via Contact Form',
            html: content
        }

        try {
            await transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.status(400).send({
                        msg: 'fail',
                        success: false
                    })
                } else {
                    res.status(200).send({
                        msg: 'success',
                        success: true
                    })
                }
            })
        } catch (error) { return error }
    }
}

export default handler;