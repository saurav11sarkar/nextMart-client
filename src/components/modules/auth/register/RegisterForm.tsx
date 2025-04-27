"use client";
import Logo from "@/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "./RegisterValidation";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  return (
    <div className="border border-gray-200 rounded-2xl grow max-w-md w-full p-8 shadow-lg bg-white">
      <div className="flex items-center gap-4 mb-8">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Register</h1>
          <p className="text-sm text-gray-500">
            Join us today and start exploring the world of AI!
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* conform password */}

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comform Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your conform password"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {confirmPassword &&
                  password &&
                  confirmPassword !== password && (
                    <FormMessage>Password does not match</FormMessage>
                  )}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={Boolean(
              confirmPassword && password && confirmPassword !== password
            )}
            className="w-full"
          >
            Register
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
