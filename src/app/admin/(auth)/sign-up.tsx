"use client";
import { Card } from "@/components/ui/card";
import { SignUpForm } from "./components/sign-up-form";
// import { Icons } from "@/components/icons";
import Link from "next/link";

export default function SignUp() {
	return (
		<>
			<div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
					<div className="mb-4 flex items-center justify-center">
						{/* <Icons.logo /> */}
					</div>
					<Card className="p-6">
						<div className="mb-2 flex flex-col space-y-2 text-left">
							<h1 className="text-lg font-semibold tracking-tight">
								Create an account
							</h1>
							<p className="text-sm text-muted-foreground">
								Enter your email and password to create an account. <br />
								Already have an account?{" "}
								<Link
									href="/login"
									className="underline underline-offset-4 hover:text-primary"
								>
									Sign In
								</Link>
							</p>
						</div>
						<SignUpForm />
					</Card>
				</div>
			</div>
		</>
	);
}
