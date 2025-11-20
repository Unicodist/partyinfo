import type { Party } from "@/data/parties";
import PartyCard from "@/components/PartyCard";

export default function PartyList({ parties }: { parties: Party[] }) {
  if (!parties || parties.length === 0) {
    return <p className="text-zinc-600">No parties found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {parties.map((p) => (
        <PartyCard key={p.id} party={p} />
      ))}
    </div>
  );
}

