import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-88px)] items-center justify-center px-4 py-12">
      <SignUp />
    </div>
  );
}
