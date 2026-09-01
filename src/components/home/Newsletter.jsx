export default function Newsletter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Stay Updated
        </p>

        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
          Get useful business updates
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Subscribe to receive useful information, updates and
          business insights.
        </p>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-full border border-slate-200 px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}
