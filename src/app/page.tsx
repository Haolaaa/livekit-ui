import GetStartedForm from "@/components/get-started";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "LiveKit Cast",
};

export default function IndexPage() {
    return (
        <section className="items-center justify-center px-6 container mx-auto flex max-w-[680px] flex-1 flex-col pt-6 pb-8">
            <GetStartedForm />
        </section>
    );
}
