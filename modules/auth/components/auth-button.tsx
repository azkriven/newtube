import { Button } from "@/components/ui/button";
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

export default function AuthButton() {
    return (
        <>
            <SignedIn>
                <UserButton />
                {/* TODO: */}
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
