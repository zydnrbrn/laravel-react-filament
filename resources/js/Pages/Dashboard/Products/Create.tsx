import { Input } from "@/Components/ui/input";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";

function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        image: "",
    });

    return (
        <Authenticated user={auth.user} title="Create Product">
            <div className="bg-white">
                <form className="grid grid-cols-1 gap-y-6">
                    <label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <Input
                            type="text"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                    </label>
                    <label>
                        Price
                        <Input
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={(e) =>
                                setData("price", Number(e.target.value))
                            }
                        />
                    </label>
                    <label>
                        Stock
                        <Input
                            type="number"
                            name="stock"
                            value={data.stock}
                            onChange={(e) =>
                                setData("stock", Number(e.target.value))
                            }
                        />
                    </label>
                    <label>
                        Image
                        <Input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) =>
                                setData(
                                    "image",
                                    (e.target.files &&
                                        e.target.files[0]?.name) ||
                                        ""
                                )
                            }
                        />
                    </label>
                </form>
            </div>
        </Authenticated>
    );
}

export default Create;
