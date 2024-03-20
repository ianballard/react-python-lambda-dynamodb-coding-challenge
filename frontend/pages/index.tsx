import React from "react";
import type {NextPage} from "next";
import "../app/globals.css";
import Link from "next/link";
import Container from "@/components/ui/Container";

const Index: NextPage = () => {
    return (
        <div className={"pt-5"}>
            <Container>
                <Link href={"/list"}>Lists</Link>
                <Link href={"/feed"}>Feed</Link>
            </Container>
        </div>
    );
};

export default Index;
