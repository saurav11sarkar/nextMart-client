"use client";

import Logo from "@/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import NMImageUploder from "@/components/ui/core/NMImageUploder";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function CreateShopForm() {
  const form = useForm();

  const [imageFiles, setImageFiles] = React.useState<File[] | []>([]);

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold">Create Your Shop</h1>
          <p className="text-sm text-gray-600">Join us today and start your journey!</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Inputs */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: "shopName", label: "Shop Name" },
              { name: "businessLicenseNumber", label: "Business License Number" },
              { name: "address", label: "Address" },
              { name: "contactNumber", label: "Contact Number" },
              { name: "website", label: "Website" },
              { name: "establishedYear", label: "Established Year" },
              { name: "taxIdentificationNumber", label: "Tax Identification Number" },
              { name: "socialMediaLinks.facebook", label: "Facebook" },
              { name: "socialMediaLinks.twitter", label: "Twitter" },
              { name: "socialMediaLinks.instagram", label: "Instagram" },
            ].map((fieldData) => (
              <FormField
                key={fieldData.name}
                control={form.control}
                name={fieldData.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fieldData.label}</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          {/* Services and Image Uploader */}
          <div className="grid gap-4 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="servicesOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[120px]"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormItem>
              <FormLabel>Shop Image</FormLabel>
              <NMImageUploder imageFiles={imageFiles} setImageFiles={setImageFiles} />
            </FormItem>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full text-base py-6 mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Shop"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
