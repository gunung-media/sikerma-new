import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { getDocument } from "pdfjs-dist";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

interface DropzoneProps {
    onChange: (file: File) => void;
    value?: string | null;
    className?: string;
    error?: string;
    description?: string;
    disabled?: boolean;
}

export const Dropzone: React.FC<DropzoneProps> = ({
    onChange,
    value,
    className,
    error,
    description = "Hanya menerima pdf,jpg,jpeg,png,doc,docx",
    disabled = false,
}) => {
    const { props } = usePage<PageProps>();

    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [isPDF, setIsPDF] = useState<boolean>(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (disabled) return;
            const file = acceptedFiles[0];
            if (file) {
                const isPdfFile = file.type === "application/pdf";
                setIsPDF(isPdfFile);

                if (isPdfFile) {
                    generatePDFThumbnail(file);
                } else {
                    const previewUrl = URL.createObjectURL(file);
                    setFilePreview(previewUrl);
                }

                setDownloadUrl(URL.createObjectURL(file));
                onChange(file);
            }
        },
        [onChange, disabled]
    );

    const generatePDFThumbnail = (file: File | string) => {
        if (typeof file === "string") {
            fetch(file)
                .then((response) => response.arrayBuffer())
                .then((buffer) => processPDF(new Uint8Array(buffer)));
        } else {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const typedArray = new Uint8Array(fileReader.result as ArrayBuffer);
                processPDF(typedArray);
            };
            fileReader.readAsArrayBuffer(file);
        }
    };

    const processPDF = (typedArray: Uint8Array) => {
        getDocument(typedArray).promise.then((pdf) => {
            pdf.getPage(1).then((page) => {
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                const scale = 0.5;

                if (context) {
                    const viewport = page.getViewport({ scale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    page.render({ canvasContext: context, viewport }).promise.then(() => {
                        const thumbnailUrl = canvas.toDataURL();
                        setFilePreview(thumbnailUrl);
                    });
                }
            });
        });
    };

    useEffect(() => {
        return () => {
            if (filePreview) URL.revokeObjectURL(filePreview);
        };
    }, [filePreview]);

    useEffect(() => {
        if (value) {
            const fullUrl = `${props.storageUrl}/${value}`;
            const isPdf = value.endsWith(".pdf");
            setIsPDF(isPdf);
            setDownloadUrl(fullUrl);

            if (isPdf) {
                generatePDFThumbnail(fullUrl);
            } else {
                setFilePreview(fullUrl);
            }
        }
    }, [value, props.storageUrl]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
            "application/pdf": [],
        },
        multiple: false,
        disabled: disabled,
    });

    return (
        <div>
            <div
                {...getRootProps()}
                className={className}
                style={{
                    border: error ? "2px dashed red" : "2px dashed gray",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: disabled
                        ? "#f9f9f9"
                        : isDragActive
                            ? "#f0f0f0"
                            : "#ffffff",
                    borderRadius: "8px",
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.6 : 1,
                }}
            >
                <input {...getInputProps()} disabled={disabled} />
                {filePreview ? (
                    <div>
                        <img
                            src={filePreview}
                            alt={isPDF ? "PDF Preview" : "Image Preview"}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "150px",
                                display: "block",
                                margin: "10px auto",
                                borderRadius: "8px",
                            }}
                        />
                        {downloadUrl && (
                            <a
                                href={downloadUrl}
                                download
                                style={{
                                    display: "block",
                                    marginTop: "10px",
                                    textDecoration: "none",
                                    color: "#007BFF",
                                }}
                            >
                                Download File
                            </a>
                        )}
                        {!disabled && <p>Klik atau drag dan drop file untuk menganti</p>}
                    </div>
                ) : (
                    !disabled && <p>Drag dan drop file di sini, atau klik untuk memilih file</p>
                )}
                {error && (
                    <div className="form-text" style={{ color: "red" }}>
                        {error}
                    </div>
                )}
            </div>
            {description && <div className="form-text">{description}</div>}
        </div>
    );
};
