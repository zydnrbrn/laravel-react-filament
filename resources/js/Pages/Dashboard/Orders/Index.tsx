import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

function Index({ auth }: PageProps) {
    return (
        <Authenticated user={auth.user} title="Orders">
            Index
        </Authenticated>
    );
}

export default Index;
