import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

function Index({ auth }: PageProps) {
    return (
        <Authenticated user={auth.user} title="Customers">
            Customers page
        </Authenticated>
    );
}

export default Index;
