"use client"
import { useSelector } from "react-redux"

export default function AddPostPreview() {
  const formData = useSelector((state) => state.form)

  if (!formData) return null

  return (
    <div className="w-full mt-4">     
      <p><strong>Title:</strong> {formData.title}</p>
      {formData.image && (
        <div className="mt-2">
          <img
            src={URL.createObjectURL(formData.image)}
            alt="preview"
            className="max-h-40 rounded-md"
          />
        </div>
      )}
      <p><strong>Short Description:</strong> {formData.shortDesc}</p>
      <p><strong>Tags:</strong> {formData.tags}</p>
      <p><strong>Category:</strong> {formData.category}</p>      
      <div>
        <strong>Description:</strong>
        <div dangerouslySetInnerHTML={{ __html: formData.description }} />
      </div>
    </div>
  )
}
