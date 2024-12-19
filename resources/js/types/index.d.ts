import { UserType } from "@/features/User";

export type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: UserType;
    }
    assets: string
    appName: string
    storageUrl: string
    session: {
        status: string
    }
};
