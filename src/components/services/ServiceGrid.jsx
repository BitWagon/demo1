"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      {services.map((service, index) => (

        <motion.div
          key={service.id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <ServiceCard service={service} />
        </motion.div>

      ))}

    </div>
  );
}