import HomeLayout from "@/modules/home/ui/layouts/home-layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return <HomeLayout>{children}</HomeLayout>;
}
