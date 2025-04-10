import '../css/app.css'
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-responsive-bs5';
import { GlobalWorkerOptions } from "pdfjs-dist";

createInertiaApp({
    resolve: (name: string) => {
        console.log(name);
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true }) as Record<string, any>
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        DataTable.use(DT);
        GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.9.155/pdf.worker.min.mjs'
        createRoot(el).render(<App {...props} />)
    },
})
