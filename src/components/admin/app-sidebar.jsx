"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/admin/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Posts",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All Posts",
          url: "/admin/all-posts",
          isActive: true,
        },
        {
          title: "Add New Post",
          url: "/admin/add-post",
        },
        {
          title: "Categories",
          url: "/admin/categories",
        },
        {
          title: "Tags",
          url: "/admin/tags",
        },
      ],
    },
    {
      title: "Media",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Media Library",
          url: "/admin/media",
        }
      ],
    },
    {
      title: "Comments",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Manage Comments (Approve/Reject/Spam)",
          url: "/admin/comments",
        }
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "All Users",
          url: "/admin/all-user",
        },
        {
          title: "Add New User",
          url: "/admin/add-user",
        }
      ],
    },
    {
      title: "User Profile",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Edit Profile",
          url: "/admin/profile",
        },
        {
          title: "Change Password",
          url: "/admin/change-password",
        },
        {
          title: "Logout",
          url: "/admin/logout",
        }
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h2 className="text-center">Admin</h2>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
