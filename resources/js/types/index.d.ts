export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    image?: string | null;
    role: string;
    status: number;
    dob: Date;
    phone: string;
    address: string;
    register_status: number;
    gender: string;
    cv: string
    note?: string
}

export interface Activity {
    id: number;
    title: string;
    banner: string;
    category: string;
    created_at: string;
    updated_at: string;
    deadline: Date;
    description: string;
    domicile: string;
    status_daftar?: number;
    jobdesk: string;
    location: string;
    max: number;
    publised_by: number;
    requirement: string;
    schedule: Date;
    addtional_information?: string;
    publised_name: string;
    publised_image?: string;
}

export interface newActivity {
    id: number;
    title: string;
    banner: string;
    category: string;
    created_at: string;
    updated_at: string;
    deadline: string;
    description: string;
    domicile: string;
    jobdesk: string;
    location: string;
    max: number;
    publised_by: number;
    requirement: string;
    schedule: string;
    addtional_information?: string;
    publised_name: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    title: string;
};
