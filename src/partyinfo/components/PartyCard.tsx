import Link from "next/link";
import Image from "next/image";
import type { Party } from "@/data/parties";

export default function PartyCard({ party }: { party: Party }) {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-start gap-4">
        {party.image ? (
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
            <Image src={party.image} alt={party.name} width={64} height={64} />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col">
          <h3 className="text-lg font-semibold text-zinc-900">{party.name}</h3>
          <p className="text-sm text-zinc-600">{party.location} • {party.founded ?? ""}</p>
          <p className="mt-2 text-sm text-zinc-700 line-clamp-2">{party.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {party.principles.map((p) => (
              <span key={p} className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
                {p.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-zinc-500">{party.attendees ?? 0} followers</span>
        <Link
          href={`/parties/${party.id}`}
          className="rounded-full bg-foreground px-3 py-1 text-sm text-background hover:opacity-90"
        >
          View
        </Link>
      </div>
    </article>
  );
}
