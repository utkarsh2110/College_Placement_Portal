const fs = require('fs')
const nodemailer = require('nodemailer')
const Email = process.env.EMAIL
const Pass = process.env.EMAIL_PASS


const sendMail = (email, StudentName) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Email,
            pass: Pass
        }
    });
    let emailData = fs.readFileSync('email/emailResponse.html', 'utf8');
    emailData = emailData.replace("studentname", StudentName);

    var mailOptions = {
        from: Email,
        to: email,
        subject: 'Registration for final placements | NMIMS PlaceComm',
        html: emailData
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


const recoverPass = (email, name, pass) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Email,
            pass: Pass
        }
    });


    let emailData = fs.readFileSync('email/passRecover.html', 'utf8');
    emailData = emailData.replace("studentname", name);
    emailData = emailData.replace("userPassword", pass)

    var mailOptions = {
        from: Email,
        to: email,
        subject: 'Password Recovery | NMIMS PlaceComm',
        html: emailData
    }


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}


module.exports={
    sendMail,
    recoverPass
}