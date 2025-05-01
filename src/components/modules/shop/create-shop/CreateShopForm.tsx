"use client";

import Logo from "@/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import NMImageUploder from "@/components/ui/core/NMImageUploder";
import ImagesPreviewer from "@/components/ui/core/NMImageUploder/ImagesPreviewer";
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
import { createShop } from "@/services/shop";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateShopForm() {
  const form = useForm();

  const [imageFiles, setImageFiles] = React.useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = React.useState<string[] | []>([]);

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const servicesOffered = data?.servicesOffered
      .split(",")
      .map((service: string) => service.trim())
      .filter((service: string) => service !== "");

    const modifiedData = {
      ...data,
      servicesOffered,
      establishedYear: Number(data?.establishedYear),
    };

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(modifiedData));
      formData.append("logo", imageFiles[0] as File);

      const res = await createShop(formData);
    
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold">Create Your Shop</h1>
          <p className="text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Inputs */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: "shopName", label: "Shop Name" },
              {
                name: "businessLicenseNumber",
                label: "Business License Number",
              },
              { name: "address", label: "Address" },
              { name: "contactNumber", label: "Contact Number" },
              { name: "website", label: "Website" },
              { name: "establishedYear", label: "Established Year" },
              {
                name: "taxIdentificationNumber",
                label: "Tax Identification Number",
              },
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
              {imagePreview.length > 0 ? (
                <ImagesPreviewer
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  imagePreview={imagePreview}
                />
              ) : (
                <NMImageUploder
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Click to upload or drag and drop"
                />
              )}
            </FormItem>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full text-base py-6 mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Shop"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
