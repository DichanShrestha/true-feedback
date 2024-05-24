import { resend } from "@/lib/reSend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "miniyt8.com",
      to: email,
      subject: "Mystery message Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Success sending verfication email" };
  } catch (emailError) {
    console.error("error sending verification email");
    return { success: false, message: "Failed sending verfication email" };
  }
}
