import Image from "next/image";
import type { Party } from "@/data/parties";
import { principleInfo } from "@/data/parties";
import Link from "next/link";

export default function PartyDetail({ party }: { party: Party }) {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow">
      <div className="flex items-start gap-6">
        {party.image ? (
          <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
            <Image src={party.image} alt={party.name} width={112} height={112} />
          </div>
        ) : null}
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">{party.name}</h1>
          <p className="mt-1 text-sm text-zinc-600">Founded: {party.founded ?? "—"}</p>
          <p className="mt-1 text-sm text-zinc-600">Location: {party.location}</p>
          <p className="mt-4 text-zinc-700">{party.description}</p>

          <div className="mt-4">
            <h4 className="mb-2 text-sm font-semibold text-zinc-900">Principles</h4>
            <div className="flex flex-col gap-2">
              {party.principles.map((p) => (
                <div key={p} className="rounded border bg-zinc-50 p-3">
                  <div className="text-sm font-medium text-zinc-900">{p.replace(/_/g, " ")}</div>
                  <div className="mt-1 text-sm text-zinc-600">{principleInfo[p] ?? "—"}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-500">{party.attendees ?? 0} followers</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/parties" className="text-sm text-zinc-700 underline">
          ← Back to parties
        </Link>
        <button
          type="button"
          className="ml-auto rounded-full bg-foreground px-4 py-2 text-sm text-background"
        >
          Follow
        </button>
      </div>
    </div>
  );
}
