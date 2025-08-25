"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import dynamic from "next/dynamic"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setFormData, resetForm } from "@/store/slices/formSlice"
import "react-quill-new/dist/quill.snow.css"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "react-toastify"

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false })

// Zod validation schema
const FormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  shortDesc: z.string().min(10, "Short description must be at least 10 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  image: z.any().nullable(),
  tags: z.string().min(1, "Please enter at least one tag."),
  category: z.string({
    required_error: "Please select a category.",
  }),
})

// Quill custom toolbar + image handler
function imageHandler() {
  const input = document.createElement("input")
  input.setAttribute("type", "file")
  input.setAttribute("accept", "image/*")
  input.click()

  input.onchange = () => {
    const file = input.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const range = this.quill.getSelection()
        this.quill.insertEmbed(range.index, "image", reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
}

const modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike"],
      [{ header: [1, 2, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: { image: imageHandler },
  },
}

export function CreatePostForm() {
  const dispatch = useDispatch()
  const fileInputRef = useRef(null)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      shortDesc: "",
      description: "",
      image: null,
      tags: "",
      category: "",
    },
  })

  // Preview → just dispatch data to Redux
  function handlePreview() {
    const values = form.getValues()
    dispatch(setFormData(values))
  }
const author="Amit Jha";
  // Submit → dispatch + reset
  async function onSubmit(data) {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("shortDesc", data.shortDesc)
    formData.append("description", data.description)
    formData.append("tags", data.tags)
    formData.append("category", data.category)
    formData.append("author", author)

    if (data.image) {
      formData.append("image", data.image)
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    })

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.error || "Failed to create post")
    }
    const result = await res.json()
    toast.success("Post created successfully!")
    dispatch(resetForm()) // also push to Redux if needed

    // reset form fields
    form.reset()
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter post title" {...field} className="h-12"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image Upload */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Upload Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  ref={(el) => {
                    fileInputRef.current = el
                    field.ref(el)
                  }}
                  onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Short Description */}
        <FormField
          control={form.control}
          name="shortDesc"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Short Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter short description" {...field} className="h-12"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Rich Text Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Description</FormLabel>
              <FormControl>
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                      modules={modules}
                      placeholder="Write your description..."
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Tags</FormLabel>
              <FormControl>
                <Input placeholder="e.g. tech, science, AI" {...field} className="h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-2 text-xs">Select Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} className="h-12 w-full">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Cryptocurrency">Cryptocurrency</SelectItem>
                  <SelectItem value="Forex & Currency Markets">Forex & Currency Markets</SelectItem>
                  <SelectItem value="Commodities & Metals">Commodities & Metals</SelectItem>
                  <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                  <SelectItem value="Blockchain & Web3">Blockchain & Web3</SelectItem>
                  <SelectItem value="Fintech Innovations">Fintech Innovations</SelectItem>
                  <SelectItem value="Tech Trends">Tech Trends</SelectItem>
                  <SelectItem value="World Politics">World Politics</SelectItem>
                  <SelectItem value="Geopolitics & Economy">Geopolitics & Economy</SelectItem>
                  <SelectItem value="Policy & Regulation">Policy & Regulation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={handlePreview}>
            Preview
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
