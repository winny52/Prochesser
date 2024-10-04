import { BACKEND_URL, FRONTEND_URL } from "./constants";
import { generateToken } from "./utils";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'amansample786@gmail.com',
        pass: 'bgwl hcnd wzjg eqix'
    }
  });
  // Function to send email verification
  export async function EmailVerification(email: string) {
    try {
      const token = generateToken(
        {
          data: email,
        },
        "10m"
      );
  
      const mailConfigurations = {
        from: `amansample786@gmail.com <no-reply@chessbet.com>`,
        to: email,
        subject: "Email Verification",
        html: `<p>Hi! There, You have recently visited 
             our website and entered your email.
             Please follow the given link to verify your email:</p>
             <a href="${BACKEND_URL}/api/auth/verify/${token}">Verify</a>
             Thanks`,
      };
  
      await transporter.sendMail(mailConfigurations);
      console.log("Email Sent Successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
  
  // Function to send the forgot password email with a reset link
  export const SendForgotPassword = async (email: string, token: string) => {
    try {
      const resetLink = `${FRONTEND_URL}/reset-password/${token}`;
  console.log('Sending: ',token);
  
      const mailOptions = {
        from: `amansample786@gmail.com <no-reply@chessbet.com>`,
        to: email,
        subject: "Password Reset Request",
        html: `<p>You requested a password reset. Click the link below to reset your password:</p>
               <a href="${resetLink}">Reset Password</a>
               <p>This link will expire in 10 minutes.</p>`,
      };
  
      await transporter.sendMail(mailOptions);
      console.log("Password reset email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  