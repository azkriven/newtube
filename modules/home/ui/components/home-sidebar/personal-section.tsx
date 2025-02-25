"use client";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    FlameIcon,
    HistoryIcon,
    HomeIcon,
    ListVideoIcon,
    PlaySquareIcon,
    ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "History",
        url: "/playlist/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Liked Videos",
        url: "/playlist/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlist",
        url: "/playlist",
        icon: ListVideoIcon,
    },
];
export default function PersonalSection() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} //TODO:
                                onClick={() => {}} //TODO:
                            >
                                <Link
                                    href={item.url}
                                    className="flex items-center gap-4"
                                >
                                    <item.icon />
                                    <span className="text-sm">
                                        {item.title}
                                    </span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
