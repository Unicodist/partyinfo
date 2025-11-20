'use client';

import {notFound, useParams} from "next/navigation";
import PartyDetail from "@/components/PartyDetail";
import {parties} from "@/data/parties";

export default function PartyPage() {
    const params = useParams();
    const {id} = params;
    console.log(id);
    const party = parties.find((p) => p.id === id);
    if (!party) return notFound();

    return (
        <div className="flex min-h-screen items-start justify-center bg-zinc-50 py-16">
            <main className="w-full max-w-5xl px-6">
                <PartyDetail party={party}/>
            </main>
        </div>
    );
}

