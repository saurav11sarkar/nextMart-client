"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
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
import ImagesPreviewer from "@/components/ui/core/NMImageUploder/ImagesPreviewer";
import NMImageUploader from "@/components/ui/core/NMImageUploder";
import { createCategory } from "@/services/category";
import { toast } from "sonner";

const CreateCategoryModel = () => {
  const form: UseFormReturn<FieldValues> = useForm();
  const [imageFiles, setImageFiles] = React.useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = React.useState<string[] | []>([]);

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("icon", imageFiles[0] as File);

      const res = await createCategory(formData);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }

      console.log("Submitted data:", data);
    } catch (error: any) {
      console.error("Submission error:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Category</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product Category</DialogTitle>
          <DialogDescription className="read-only:hidden">
            Create product Discription
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Services and Image Uploader */}
            <div className="grid gap-4 md:grid-cols-3 items-start mt-4">
              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
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
                <FormLabel>Icon</FormLabel>
                {imagePreview.length > 0 ? (
                  <ImagesPreviewer
                    setImageFiles={setImageFiles}
                    setImagePreview={setImagePreview}
                    imagePreview={imagePreview}
                  />
                ) : (
                  <NMImageUploader
                    setImageFiles={setImageFiles}
                    setImagePreview={setImagePreview}
                    label="Click to upload "
                  />
                )}
              </FormItem>
            </div>

            <Button type="submit" className="mt-6 w-full">
              {isSubmitting ? "Creating..." : "Create"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModel;
