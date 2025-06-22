import { LoginForm } from "@/components/auth/LoginForm";
import { VerificationForm } from "@/components/auth/VerificationForm";
import React from "react";

export function LoginPage() {
	const [loginStage, setLoginStage] = React.useState<string>("credentials");
	const [error, setError] = React.useState<string | undefined>(undefined);

	return (
		<div className="grid lg:grid-cols-2 justify-center min-w-screen min-h-screen w-full h-full">
			<div className="bg-muted relative hidden lg:block  justify-center"></div>
			<div className="flex flex-col gap-4 p-6 md:p-10">
				{loginStage === "credentials" ? <LoginForm /> : <VerificationForm />}
			</div>
		</div>
	);
}
