# Email Server
It is a simple server that is used for sending email.
If you are using varcel's Hobby Plan then you can face trouble in sending email because Varcel's Hobby Plan does not support sending email for this you to do a small setup.

## Steps to setup
<ol>
    <li>Go to Your Google Account and Get App Password</li>
    <li>Add EMAIL, PASS in Environment Variables</li>
    <li>Download or clone this repo and upload on render or anyother hosting platform that has free service and host as a webservice</li>
    <li>Copy the url or endpoint url and add in your nextjs app.</li>
    <li>Start Sending Your Emails effeicently.</li>
</ol>

## NextJS Code
Here is code that you can add in your endpoints where you wants to send email:

```javascript

import axios from 'axios'
const sendEmail = async (to, subject, text) => {
    try {
        const data = {
            to: to,
            subject: subject,
            text: text
        }
        const response = await axios.post(process.env.EMAIL_SERVER, data);
        if (response.status == 200) {
            return true;
        }
    } catch (error) {
        return false;   
    }
}
module.exports = sendEmail;

```

Need Any Help Just connect me on Linkedin. https://linkedin.com/in/sarfarazunar
