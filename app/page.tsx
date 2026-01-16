export default function Home() {
  const currentYear = () => new Date().getFullYear();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            MCU Ranker
          </h1>
          <p className="text-zinc-300">
            Rank movies, build tiers, and argue with friends.
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow">
            <h2 className="text-lg font-medium">Start a ranking</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Create a list and drag titles into order.
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200">
              New list
            </button>
          </div>
        </section>

        <footer className="mt-12 text-s text-zinc-500">
          © Copyright {currentYear()}, Lost Boys Technologies 
        </footer>
      </div>
    </main>
  );
}
