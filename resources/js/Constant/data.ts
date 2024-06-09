import { User } from "@/types";

export const NavData = (user: User) => [
    {
        title: "Dashboard",
        name: "dashboard",
        shouldShow: true,
    },
    {
        title: "Orders",
        name: "orders",
        shouldShow: true,
    },
    {
        title: "Products",
        name: "products.list",
        shouldShow: user.role === "admin",
    },
    {
        title: "Customers",
        name: "customers",
        shouldShow: user.role === "admin",
    },
];
