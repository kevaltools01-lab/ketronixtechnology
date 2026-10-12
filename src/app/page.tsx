
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-4xl font-bold text-blue-400 md:text-6xl">
        KETRONIX TECHNOLOGY
      </h1>

      <p className="mt-5 text-xl text-green-400">
        ENGINEERING BEYOND REQUIREMENTS
      </p>

      <p className="mt-8 text-lg text-gray-300">
        Next.js 16 + React + TypeScript + Tailwind CSS
      </p>

      <div className="mt-8 rounded-xl border border-green-500 p-5">
        <p className="font-semibold text-green-400">
          Deployment Test Successful!
        </p>

        <p className="mt-2 text-sm text-gray-400">
          VS Code → GitHub → Vercel
        </p>
      </div>
    </main>
  );
}
