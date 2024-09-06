export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    image?: string;
    role: string;
    dob: Date;
    phone: number;
    address: string;
}

export interface Activity {
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
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    title: string;
};
