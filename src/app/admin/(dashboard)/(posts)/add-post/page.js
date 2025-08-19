
import {CreatePostForm} from "@/components/admin/CreatePostFrom"
import AddPostPreview from "@/components/admin/AddPostPreview"
export default function AddPost() {
  return (
      <div className="px-2 py-4">        
        <div className="flex justify-between gap-4">
          <div className="w-[50%] border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] rounded-xl p-4">
            <h3>Add Posts</h3>
            <CreatePostForm/>
          </div>
          <div className="w-[48%] border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] rounded-xl p-4">
            <h3>Preview</h3>
            <AddPostPreview/>          
          </div>
        </div>        
      </div>
  )
}
