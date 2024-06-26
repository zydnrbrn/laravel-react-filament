import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { PropsWithChildren } from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LayoutDashboard, PackageIcon } from "lucide-react";
import { PageProps } from "@/types";
import BadgeCart from "@/Components/BadgeCart";
import { Button } from "@/Components/ui/button";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
];

interface GuestPageProps {
    children: React.ReactNode;
    title: string;
}

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

export const GuestPageLayout: React.FC<GuestPageProps> = ({
    children,
    title,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title={title} />
            <div>
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <Link
                                href="/"
                                className="flex -m-1.5 p-1.5 items-center gap-2"
                            >
                                <PackageIcon className="h-8 w-auto" />
                                <span className="font-bold hidden md:block">
                                    Authentic Store
                                </span>
                            </Link>
                        </div>
                        <div className="flex gap-2 lg:hidden justify-center items-center">
                            {auth.user && <BadgeCart />}
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                            {auth.user ? (
                                <>
                                    <BadgeCart />
                                    <Link
                                        href="/dashboard"
                                        className="text-sm font-semibold leading-6 text-gray-900 justify-center"
                                    >
                                        <Button className="flex gap-2">
                                            <LayoutDashboard />
                                            Dashboard
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Log in
                                    </a>
                                    <a
                                        href="/register"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Register
                                    </a>
                                </>
                            )}
                        </div>
                    </nav>
                    <div className="lg:hidden bg-red-200">
                        <Dialog
                            open={mobileMenuOpen}
                            onClose={setMobileMenuOpen}
                        >
                            <div className="fixed inset-0 z-50" />
                            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href="/"
                                        className="flex -m-1.5 p-1.5 items-center gap-2"
                                    >
                                        <PackageIcon className="h-8 w-auto" />
                                        <span className="font-bold hidden md:block">
                                            Authentic Store
                                        </span>
                                    </Link>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="py-6">
                                            {auth.user ? (
                                                <Link
                                                    href="/dashboard"
                                                    className="text-sm font-semibold leading-6 text-gray-900"
                                                >
                                                    Dashboard
                                                </Link>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <a
                                                        href="/login"
                                                        className="text-sm font-semibold leading-6 text-gray-900"
                                                    >
                                                        Log in
                                                    </a>
                                                    <a
                                                        href="/register"
                                                        className="text-sm font-semibold leading-6 text-gray-900"
                                                    >
                                                        Register
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    </div>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    {children}
                </div>
                <footer className="py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-500">
                            ©{new Date().getFullYear()} Authentic Store. All
                            rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};
