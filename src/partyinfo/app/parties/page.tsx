import PartyList from "@/components/PartyList";
import { parties } from "@/data/parties";

export default function PartiesPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 py-16">
      <main className="w-full max-w-5xl px-6">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-zinc-900">Political Parties</h1>
          <p className="mt-1 text-sm text-zinc-600">Learn about parties and the principles they stand for</p>
        </header>

        <PartyList parties={parties} />
      </main>
    </div>
  );
}

