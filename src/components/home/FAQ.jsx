"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the service work?",
    answer:
      "Tell us about your business requirements and we help you explore suitable solutions.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Complete the quote form with your business information and the service you are interested in.",
  },
  {
    question: "What services are available?",
    answer:
      "We provide solutions across energy, connectivity, water and payment services.",
  },
  {
    question: "Can you help me choose a provider?",
    answer:
      "We can help you understand the available options so you can make an informed decision.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900">
            Frequently asked questions
          </h2>

        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (
              <div key={faq.question}>

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >

                  <span className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>

                  {open ? (
                    <Minus className="shrink-0" />
                  ) : (
                    <Plus className="shrink-0" />
                  )}

                </button>

                {open && (
                  <div className="pb-6 pr-10 leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}