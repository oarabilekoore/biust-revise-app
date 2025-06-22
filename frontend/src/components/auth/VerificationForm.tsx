import { auth } from "@/lib/auth";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "../ui/label";
import React from "react";

export function VerificationForm() {
	const [otp, setOTP] = React.useState<string | undefined>(undefined);
	return (
		<div>
			<form onSubmit={auth.login}>
				<Label htmlFor="email">Your Email</Label>
				<InputOTP maxLength={6} name="otp" value={otp} onChange={(value) => setOTP(value)}>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
				<Label>Enter your one-time-password sent to you through email.</Label>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
}
