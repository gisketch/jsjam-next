import { cn } from "@/lib/utils";

export default function SectionTitle({ 
    className,
    children 
}: { 
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <h2 className={cn("font-euro text-h1 md:text-h1-desktop", className)}>
            {children}
        </h2>
    );
}   