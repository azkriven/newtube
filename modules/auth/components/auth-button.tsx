"use client";

import { Button } from "@/components/ui/button";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";

export default function AuthButton() {
    return (
        <>
            <ClerkLoading>
                <Button
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
                >
                    <UserCircleIcon />
                    Loading...
                </Button>
            </ClerkLoading>
            <SignedIn>
                <ClerkLoaded>
                    <UserButton>
                        {/* TODO: */}
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="Studio"
                                href="/studio"
                                labelIcon={
                                    <ClapperboardIcon className="size-4" />
                                }
                            />
                            <UserButton.Action label="manageAccount" />
                        </UserButton.MenuItems>
                    </UserButton>
                </ClerkLoaded>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
                    >
                        <UserCircleIcon />
                        <ClerkLoading>Loading...</ClerkLoading>
                        <ClerkLoaded>Sign in</ClerkLoaded>
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
}
