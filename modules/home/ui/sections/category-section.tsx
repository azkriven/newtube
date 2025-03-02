"use client";

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import FilterCarousel from "@/components/filter-carousel";
import { useRouter } from "next/navigation";

interface Props {
    categoryId?: string;
}

export default function CategoriesSection({ categoryId }: Props) {
    return (
        <Suspense fallback={<CategoriesSkeleton />}>
            <ErrorBoundary fallback={<div>Error...</div>}>
                <CategoriesSectionSuspense categoryId={categoryId} />
            </ErrorBoundary>
        </Suspense>
    );
}

function CategoriesSkeleton() {
    return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
}

function CategoriesSectionSuspense({ categoryId }: Props) {
    const router = useRouter();
    const [categories] = trpc.categories.getMany.useSuspenseQuery();

    const data = categories.map(({ name, id }) => ({ value: id, label: name }));

    const onSelect = (value: string | null) => {
        const url = new URL(window.location.href);
        if (value) {
            url.searchParams.set("categoryId", value);
        } else {
            url.searchParams.delete("categoryId");
        }
        router.push(url.toString());
    };
    return (
        <FilterCarousel
            // isLoading
            onSelect={onSelect}
            value={categoryId}
            data={data}
        />
    );
}
