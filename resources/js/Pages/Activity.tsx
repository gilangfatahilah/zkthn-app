import HomeLayout from "@/Layouts/HomeLayout";
import { PageProps } from "@/types";
import React from "react";

const Activity = ({ auth }: PageProps) => {
    return (
        <HomeLayout user={auth.user}>
            <p>halo</p>
        </HomeLayout>
    );
};

export default Activity;
