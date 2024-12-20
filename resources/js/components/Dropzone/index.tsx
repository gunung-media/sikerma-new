import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { getDocument } from "pdfjs-dist";

interface DropzoneProps {
    onChange: (file: File) => void;
    value?: string | null;
}

export const Dropzone: React.FC<DropzoneProps> = ({ onChange, value }) => {
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [isPDF, setIsPDF] = useState<boolean>(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const isPdfFile = file.type === "application/pdf";
            setIsPDF(isPdfFile);

            if (isPdfFile) {
                generatePDFThumbnail(file); // Generate thumbnail for PDF files
            } else {
                const previewUrl = URL.createObjectURL(file);
                setFilePreview(previewUrl); // Set preview for other files like images
            }

            onChange(file); // Send the file to the parent component
        }
    }, [onChange]);

    const generatePDFThumbnail = (file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const typedArray = new Uint8Array(fileReader.result as ArrayBuffer);
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
        fileReader.readAsArrayBuffer(file);
    };

    useEffect(() => {
        return () => {
            if (filePreview) URL.revokeObjectURL(filePreview);
        };
    }, [filePreview]);

    useEffect(() => {
        if (value) {
            setFilePreview(value);
        }
    }, [value]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
            "application/pdf": [], // Accept PDFs
        },
        multiple: false,
    });

    return (
        <div
            {...getRootProps()}
            style={{
                border: "2px dashed gray",
                padding: "20px",
                textAlign: "center",
                backgroundColor: isDragActive ? "#f0f0f0" : "#ffffff",
                borderRadius: "8px",
                cursor: "pointer",
            }}
        >
            <input {...getInputProps()} />
            {filePreview ? (
                <div>
                    {isPDF ? (
                        <img
                            src={filePreview}
                            alt="PDF Preview"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "150px",
                                display: "block",
                                margin: "10px auto",
                                borderRadius: "8px",
                            }}
                        />
                    ) : (
                        <img
                            src={filePreview}
                            alt="Image Preview"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "150px",
                                display: "block",
                                margin: "10px auto",
                                borderRadius: "8px",
                            }}
                        />
                    )}
                    <p>Click or drag to replace the file</p>
                </div>
            ) : (
                <p>Drag and drop a file here, or click to select one</p>
            )}
        </div>
    );
};
