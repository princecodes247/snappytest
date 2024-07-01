import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PasswordInput } from "@/components/password-input";

import { Button } from "@/components/ui/button";

interface SignUpFormProps extends HTMLAttributes<HTMLDivElement> { }

const formSchema = z
	.object({
		name: z.string().min(1, { message: "Please enter your name" }),
		email: z
			.string()
			.min(1, { message: "Please enter your email" })
			.email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(1, {
				message: "Please enter your password",
			})
			.min(7, {
				message: "Password must be at least 7 characters long",
			}),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match.",
		path: ["confirmPassword"],
	});

export function SignUpForm({ className, ...props }: SignUpFormProps) {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsLoading(true);
		console.log(data);

		setIsLoading(false);
	}

	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid gap-2">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="name@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<PasswordInput placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<PasswordInput placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="mt-2" disabled={isLoading}>
							Create Account
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
