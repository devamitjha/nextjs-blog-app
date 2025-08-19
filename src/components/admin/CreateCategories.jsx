"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Zod schema for validation
const CategorySchema = z.object({
  name: z.string().min(3, "Category name must be at least 3 characters."),
  picture: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Please upload an image file.",
    }),
  description: z
    .string()
    .min(10, "Short description must be at least 10 characters."),
});

export default function CreateCategories() {
  const fileRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    const file = data.picture?.[0];
    console.log("Submitted:", {
      ...data,
      picture: file
        ? { name: file.name, type: file.type, size: file.size }
        : null,
    });

    // Reset text fields
    reset({
      name: "",
      description: "",
    });

    // Clear file input manually
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="mx-4">
      <h3 className="mb-6 text-xl">Create categories</h3>

      <form
        className="w-full space-y-6 mt-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="category-form grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Category Name */}
          <div className="grid max-w-sm items-center gap-3">
            <Label htmlFor="name">Category Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter Category Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Picture */}
          <div className="grid items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              {...register("picture")}
              ref={(e) => {
                register("picture").ref(e);
                fileRef.current = e;
              }}
            />
            {errors.picture && (
              <p className="text-sm text-red-500">{errors.picture.message}</p>
            )}
          </div>
        </div>

        {/* Short Description */}
        <div className="grid gap-3">
          <Label htmlFor="description">Short Description</Label>
          <Textarea
            placeholder="Type short description here."
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
