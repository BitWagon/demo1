"use client";

import { useEffect, useRef } from "react";

const suppliers = [
  {
    name: "Worldpay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Worldpay_logo.svg/512px-Worldpay_logo.svg.png",
  },
  {
    name: "Paynt",
    logo: "https://paynt.com/wp-content/uploads/2024/03/paynt-logo.png",
  },
  {
    name: "Drax",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Drax_Group_logo.svg/512px-Drax_Group_logo.svg.png",
  },
  {
    name: "BT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/BT_logo_2019.svg/512px-BT_logo_2019.svg.png",
  },
  {
    name: "E.ON",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/E.ON_Logo.svg/512px-E.ON_Logo.svg.png",
  },
  {
    name: "British Gas Lite",
    logo:
      "https://www.britishgas.co.uk/content/dam/images/logos/british-gas-logo.svg",
  },
  {
    name: "Daisy Communications",
    logo:
      "https://www.daisyuk.tech/wp-content/uploads/2023/09/daisy-logo.png",
  },
  {
    name: "Greenolite",
    logo:
      "https://greenolite.co.uk/wp-content/uploads/2024/01/greenolite-logo.png",
  },
];

export default function SupplierLogos() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let position = 0;
    let animationFrame;

    const animate = () => {
      position += 0.5;

      if (position >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedSuppliers = [...suppliers, ...suppliers];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <p className="text-center text-sm font-medium text-slate-900 md:text-base">
          We provide a carefully selected panel of reliable and trusted
          business suppliers in the UK.
        </p>

        {/* Moving Logos */}
        <div className="relative mt-8 overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-16"
          >
            {duplicatedSuppliers.map((supplier, index) => (
              <div
                key={`${supplier.name}-${index}`}
                className="flex h-28 w-48 shrink-0 items-center justify-center rounded-xl bg-white px-5"
              >
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="max-h-20 max-w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}