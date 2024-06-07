import { Link } from "@inertiajs/react";
import { PackageIcon } from "lucide-react";
import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <Link
            href="/"
            className="flex -m-1.5 p-1.5 items-center gap-2 text-black dark:text-white"
        >
            <PackageIcon className="h-10 w-auto" />
            <span className="font-bold text-2xl">Authentic Store</span>
        </Link>
    );
}
