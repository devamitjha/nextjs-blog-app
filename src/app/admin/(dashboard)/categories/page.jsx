import AllCategories from "@/components/AllCategories";
import CreateCategories from "@/components/admin/CreateCategories";
import { Separator } from "@/components/ui/separator"

export default function Categories() {
  return (
    <div className="mt-4 w-full border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] rounded-xl p-4">
      <h3 className="ms-4 mb-4 text-xl">Categories</h3>
      <AllCategories />
      <Separator/>
      <div className="create-category mt-6">
        <CreateCategories/>       
      </div>
    </div>
  )
}
