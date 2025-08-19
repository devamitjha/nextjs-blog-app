"use client";
import { SiteHeader } from "@/components/admin/site-header"
import { AppSidebar } from "@/components/admin/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
       <SidebarInset>
        <SiteHeader />    
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
        </SidebarInset>
    </SidebarProvider>
  );
}
