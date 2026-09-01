const suppliers = [
  "ENERGY",
  "BT",
  "VIRGIN",
  "BUSINESS",
  "WATER",
  "PAYMENTS",
];

export default function SupplierLogos() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          Working with trusted providers
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">

          {suppliers.map((supplier) => (
            <div
              key={supplier}
              className="text-xl font-black tracking-tight text-slate-300"
            >
              {supplier}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}