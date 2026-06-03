import { redirect } from "next/navigation";

export default function SignOutPage() {
  // In production this would clear session/cookies
  redirect("/dashboard");
}
