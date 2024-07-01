import { HTMLAttributes, useState } from "react";

import { z } from "zod";
import { IconBrandFacebook, IconBrandGithub } from "@tabler/icons-react";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PasswordInput } from "@/components/password-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> { }

const formSchema = z.object({
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
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsLoading(true);
		console.log(data);
		;

		setIsLoading(false);

	}

	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid gap-2">
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
									<div className="flex items-center justify-between">
										<FormLabel>Password</FormLabel>
									</div>
									<FormControl>
										<PasswordInput placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="mt-2" disabled={isLoading}>
							Login
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
