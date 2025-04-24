const { contactUsEmail } = require("../Mail/Template/ContactForm");
const mailSender = require("../Util/MailSender");

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } =
    req.body;
  console.log(req.body);
  try {
    // Send confirmation email to user
    await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    );

    // Send notification email to admin
    const adminEmail = process.env.MAIL_USER; // Using the same email as configured in .env
    const adminSubject = "New Contact Form Submission";
    const adminMessage = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    await mailSender(
      adminEmail,
      adminSubject,
      adminMessage
    );

    return res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
