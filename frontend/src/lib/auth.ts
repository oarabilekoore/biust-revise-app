import axios from "axios";

export const BASE_URI = "http://127.0.0.1:8080";

export interface LoginPayLoad {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	message: string;
	data: object;
}

async function login(event: React.FormEvent<HTMLFormElement>): Promise<LoginResponse> {
	event.preventDefault();
	const data = new FormData(event.currentTarget);
	const payload: LoginPayLoad = {
		email: data.get("email") as string,
		password: data.get("password") as string,
	};
	const response = await axios.post(BASE_URI + "/api/login/", payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.data as Promise<LoginResponse>;
}

export interface RegistrationPayLoad {
	email: string;
	password: string;
}

export interface RegisterResponse {
	success: boolean;
	message: string;
	data: object;
}

async function register(event: React.FormEvent<HTMLFormElement>): Promise<RegisterResponse> {
	event.preventDefault();
	const data = new FormData(event.currentTarget);
	const payload: RegistrationPayLoad = {
		email: data.get("email") as string,
		password: data.get("password") as string,
	};
	const response = await axios.post(BASE_URI + "/api/register/", payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.data;
}

interface VerificationPayLoad {
	password: string;
}
async function otpVerification(event: React.FormEvent<HTMLFormElement>): Promise<RegisterResponse> {
	event.preventDefault();
	const data = new FormData(event.currentTarget);
	const payload: VerificationPayLoad = {
		password: data.get("otp") as string,
	};
	const response = await axios.post(BASE_URI + "/api/userverification/", payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.data;
}

export const auth = {
	login,
	register,
	otpVerification,
};
