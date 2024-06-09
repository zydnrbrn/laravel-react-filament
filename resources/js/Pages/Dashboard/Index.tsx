import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    function getGreeting() {
        const currentHour = new Date().getHours();
        switch (true) {
            case currentHour >= 5 && currentHour < 11:
                return "Good Morning! 🌄";
            case currentHour >= 11 && currentHour < 16:
                return "Good Day! 🌞";
            case currentHour >= 16 && currentHour < 18:
                return "Good Afternoon! 🌇";
            default:
                return "Good Night! 🎑";
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title="Dashboard">
            <h1 className="text-2xl font-bold">
                {getGreeting()} {auth.user.name}
            </h1>
        </AuthenticatedLayout>
    );
}
