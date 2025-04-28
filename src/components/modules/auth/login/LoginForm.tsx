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
import { loginSchema } from "./loginValidation";
import { loginUser } from "@/services/authservice";
import { toast } from "sonner";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    //   console.log(res);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl grow max-w-md w-full p-8 shadow-lg bg-white">
      <div className="flex items-center gap-4 mb-8">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <p className="text-sm text-gray-500">
            Join us today and start exploring the world of AI!
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {isSubmitting ? "Logging..." : "Login"}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
