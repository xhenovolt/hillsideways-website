"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchoolLifePage() {
  const activities = [
    {
      title: "Early Learning Activities",
      description: "Play-based learning and developmental activities for nursery students",
      color: "from-emerald-600 to-green-600"
    },
    {
      title: "Academic Classes",
      description: "Quality instruction in English, Mathematics, Science, and Social Studies",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Sports & Recreation",
      description: "Physical education and sporting activities for holistic development",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Creative Arts",
      description: "Music, art, and craft activities that nurture creativity",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Character Development",
      description: "Activities that build discipline, respect, and good values",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Social Activities",
      description: "Events and activities that promote teamwork and friendship",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              School Life at Hillside Ways
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A nurturing, supportive environment designed for the holistic development of young learners
            </p>
          </motion.div>

          {/* Nursery Facilities Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-12"
          >
            <Image
              src="/HillsideWays/Hillside Ways Nursery classes.jpeg"
              alt="Hillside Ways Nursery and Primary School classroom facilities"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nursery & Early Childhood Education</h2>
              <p className="text-white/90">Safe, nurturing environment for our youngest learners</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 text-white shadow-lg`}
              >
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="opacity-90">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-12 border border-emerald-200 dark:border-emerald-700/50"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our School Values
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Integrity and honesty in all actions",
                "Excellence in all endeavors",
                "Respect and discipline",
                "Cooperation and teamwork",
                "Continuous improvement and growth",
                "Love for learning"
              ].map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✦</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
