import { DocumentType, DocumentDto } from "@/features/Document"
import { AuthenticatedLayout } from "@/layouts/Authenticated"
import { PageProps } from "@/types"
import { FormEventHandler, useState } from "react"
import DataTable from "datatables.net-react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { CustomOffcanvas } from "@/components/Offcanvas";
import { router, usePage } from "@inertiajs/react";
import { basicErrorToast, errorToast, successToast } from "@/utils/Toast";
import { confirmationDelete } from "@/utils/Swal";
import { Dropzone } from "@/components/Dropzone";

export default function Document({ data }: PageProps & {
    data: DocumentType[],
}) {
    const { errors, storageUrl, auth: { user } } = usePage<PageProps>().props
    const [showForm, setShowForm] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [pathType, setPathType] = useState<string>('');
    const [document, setDocument] = useState<DocumentDto>({
        name: '',
        path: null,
    })

    const cols = ["#", "Name", "File", "Action"];

    const handleEdit = (index: number) => {
        const document = data[index]
        setDocument(document)
        setPathType((document.path as string).startsWith('http') ? 'url' : 'file')
        setSelectedId(document.id)
        setShowForm(true);
    };

    const isEditing = selectedId !== null;

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        if (isEditing) {
            if (pathType === "file" && document.path instanceof File) {
                formData.append("path", document.path);
            } else {
                formData.append("path", document.path as string);
            }
            formData.append("name", document.name);
            formData.append("_method", "PUT");

            router.post(route("master.documents.update", selectedId), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onError: (errors) => {
                    errorToast(errors.error ? errors.error : "Maaf, terjadi kesalahan.");
                },
                onSuccess: () => {
                    successToast("Berhasil mengubah data");
                    setSelectedId(null);
                    setShowForm(false);
                    setTimeout(() => router.visit(route("master.documents.index")), 500);
                },
            });
            return;
        }

        if (pathType === "file" && document.path instanceof File) {
            formData.append("path", document.path);
        } else {
            formData.append("path", document.path as string);
        }
        formData.append("name", document.name);

        router.post(route("master.documents.store"), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onError: (errors) => {
                console.error(errors);
                basicErrorToast(errors);
            },
            onSuccess: () => {
                successToast("Berhasil menambahkan data");
                setShowForm(false);
                setTimeout(() => router.visit(route("master.documents.index")), 500);
            },
        });
    };

    const handleDelete = async (index: number) => {
        await confirmationDelete(() => {
            router.delete(route('master.documents.destroy', data[index].id), {
                onSuccess: () => {
                    successToast('Berhasil menghapus data')
                }
            })
        })
    }


    return (
        <AuthenticatedLayout title="Document">
            <h4 className="mb-1">List Document</h4>

            <p className="mb-6">List document yang ada di aplikasi ini</p>

            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <div className="card-title mb-0">
                    </div>
                    {user.is_super_admin && (
                        <Button value="Tambah Document" type="primary" icon="bx-plus" onClick={() => setShowForm(true)} />
                    )}
                </div>
                <div className="card-datatable table-responsive">
                    <DataTable
                        className="datatables-basic table border-top"
                        data={data.map((item, index) => [
                            index + 1, item.name, index, index
                        ])}
                        options={{
                            responsive: true,
                        }}
                        slots={{
                            2: (value: number) => {
                                const path = data[value].path as string | null;

                                if (!path) return <>-</>;

                                const isYoutube = path.includes('youtube.com') || path.includes('youtu.be');
                                const isPdf = path.endsWith('.pdf');
                                const isFullUrl = path.startsWith('http');
                                const fileUrl = isFullUrl ? path : `${storageUrl}/${path}`;

                                if (isYoutube) {
                                    // Get embed URL
                                    const videoId = path.includes('youtu.be')
                                        ? path.split('youtu.be/')[1]
                                        : new URLSearchParams(new URL(path).search).get('v');
                                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                                    return (
                                        <iframe
                                            width="300"
                                            height="200"
                                            src={embedUrl}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    );
                                }

                                if (isPdf) {
                                    return (
                                        <iframe
                                            src={fileUrl}
                                            width="100%"
                                            height="400px"
                                            title="PDF Preview"
                                            style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                                        />
                                    );
                                }

                                return (
                                    <a
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Open File
                                    </a>
                                );
                            },
                            [cols.length - 1]: (value: number) => user.is_super_admin ? (
                                <div className="d-flex align-items-end gap-2">
                                    <Button value="Edit" type="warning" icon="bx-edit" isIcon onClick={() => handleEdit(value)} />
                                    <Button value="Edit" type="danger" icon="bx-trash" isIcon onClick={() => handleDelete(value)} />
                                </div>
                            ) : (
                                <><p>-</p></>),
                        }}
                    >
                        <thead>
                            <tr>{cols.map((col, index) => <th key={index}>{col}</th>)}</tr>
                        </thead>
                    </DataTable>
                </div>
            </div>


            <CustomOffcanvas
                show={showForm}
                handleClose={() => {
                    setSelectedId(null)
                    setDocument({ name: '', path: null })
                    setPathType('')
                    setShowForm(false)
                }}
                title={selectedId ? "Edit Document" : "Tambah Document"}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Input
                        label="Nama"
                        name="name"
                        placeholder="Nama Dokumen"
                        value={document?.name}
                        errorMessage={errors.name}
                        onChange={(val) => setDocument({ ...document, name: val.target.value })}
                        className="mb-3"
                    />

                    <div className="mb-3">
                        <label>Jenis File</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="pathTypeUrl"
                                name="pathType"
                                value="url"
                                checked={pathType === "url"}
                                onChange={() => setPathType("url")}
                            />
                            <label className="form-check-label" htmlFor="pathTypeUrl">
                                URL
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="pathTypeFile"
                                name="pathType"
                                value="file"
                                checked={pathType === "file"}
                                onChange={() => setPathType("file")}
                            />
                            <label className="form-check-label" htmlFor="pathTypeFile">
                                File
                            </label>
                        </div>
                    </div>

                    {pathType === "url" ? (
                        <Input
                            label="URL"
                            name="url"
                            placeholder="Masukan URL"
                            value={typeof document?.path === "string" ? document.path : ""}
                            errorMessage={errors.path}
                            onChange={(val) => setDocument({ ...document, path: val.target.value })}
                            className="mb-3"
                        />
                    ) : (
                        <div>
                            <label htmlFor="path">Upload File</label>
                            <Dropzone
                                className="mt-2"
                                value={typeof document.path === "string" && !document.path.startsWith('http') ? document.path : null}
                                onChange={(file) => {
                                    setDocument({ ...document, path: file });
                                }}
                            />
                            <div className="invalid-feedback">{errors.path}</div>
                        </div>
                    )}

                    <Button value="Save" type="primary" className="mt-4" isSubmit />
                </form>
            </CustomOffcanvas>
        </AuthenticatedLayout >
    )
}
