"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

export default function StudioUploadModal() {
    const utils = trpc.useUtils();
    const create = trpc.videos.create.useMutation({
        onSuccess: () => {
            toast.success("Video created");
            utils.studio.getMany.invalidate();
        },
        onError: (error) => {
            toast.error("Failed to create video");
            console.error(error.message);
        },
    });
    return (
        <Button
            onClick={() => create.mutate()}
            variant="secondary"
            disabled={create.isPending}
        >
            {create.isPending ? (
                <Loader2Icon className="animate-spin" />
            ) : (
                <PlusIcon />
            )}
            Create
        </Button>
    );
}
