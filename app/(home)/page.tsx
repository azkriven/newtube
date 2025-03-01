import { HydrateClient, trpc } from "@/trpc/server";
import { ClientGreeting } from "./client";
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from "react";
export default async function Home() {
    void trpc.hello.prefetch({ text: "word" });
    return (
        <HydrateClient>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ClientGreeting />
                </Suspense>
            </ErrorBoundary>
        </HydrateClient>
    );
}
