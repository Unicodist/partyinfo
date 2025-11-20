import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="w-full max-w-3xl space-y-8 px-6 py-24">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900">PartyInfo</h1>
          <p className="mt-2 text-lg text-zinc-600">
            Learn about political parties, the principles they stand for, and how they aim to shape society.
          </p>
        </header>

        <section className="rounded-lg bg-white p-8 shadow">
          <h2 className="text-2xl font-semibold text-zinc-900">Find a party</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Browse parties to learn about their history, priorities, and core principles.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/parties"
              className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-95"
            >
              See parties
            </Link>
            <Link
              href="/"
              className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow">
            <h3 className="font-semibold text-zinc-900">Simple</h3>
            <p className="mt-1 text-sm text-zinc-600">Easy-to-read summaries of parties and principles.</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow">
            <h3 className="font-semibold text-zinc-900">Neutral</h3>
            <p className="mt-1 text-sm text-zinc-600">Objective descriptions to help you learn.</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow">
            <h3 className="font-semibold text-zinc-900">Accessible</h3>
            <p className="mt-1 text-sm text-zinc-600">Designed for everyone interested in civics.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
