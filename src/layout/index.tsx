import React from "react";
import Header from "@/layout/Header";
import ThemeRegistry from "@/styles/ThemeRegistry/ThemeRegistry";
import Footer from "@/layout/Footer";

export interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps) {
    return (
        <ThemeRegistry>

            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </ThemeRegistry>

    );
}
