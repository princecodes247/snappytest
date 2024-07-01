import { cookies } from "next/headers";
import SignUp from "../sign-up";

export default async function RegisterPage() {
	// const token = getToken();
	// console.log({ token });
	return <SignUp />;
}
