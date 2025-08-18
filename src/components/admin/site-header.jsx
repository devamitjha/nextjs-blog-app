import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { SearchForm } from "@/components/admin/search-form"
import { NavUser } from "@/components/admin/nav-user"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/author.webp",
  },
}

export function SiteHeader() {
  return (
    <header className="flex sticky top-0 z-10 h-14 shrink-0 items-center gap-2 border-b bg-gray-50 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SearchForm />
        <div className="logo w-6/12 text-center text-sm uppercase font-semibold">        
          <Link href="/">Dev Blog</Link>
        </div>        
        <div className="ml-auto flex items-center gap-2">
          <NavUser user={data.user} />
        </div>        
      </div>
    </header>
  )
}
