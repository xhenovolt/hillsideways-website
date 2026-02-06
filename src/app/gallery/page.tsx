"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    src: "/HillsideWays/hillsideways main.jpg",
    alt: "Hillside Ways Nursery and Primary School main entrance and campus view",
    title: "Main Campus",
    category: "Campus"
  },
  {
    src: "/HillsideWays/Hillside ways comppund.jpg",
    alt: "Hillside Ways Nursery and Primary School compound with school buildings",
    title: "School Compound",
    category: "Facilities"
  },
  {
    src: "/HillsideWays/Hillsideways area.jpg",
    alt: "Hillside Ways Nursery and Primary School surrounding area",
    title: "School Area",
    category: "Location"
  },
  {
    src: "/HillsideWays/Hillsideways class session.jpg",
    alt: "Hillside Ways Nursery and Primary School classroom session with students learning",
    title: "Class Session",
    category: "Academic"
  },
  {
    src: "/HillsideWays/Hillside ways learners.jpg",
    alt: "Hillside Ways Nursery and Primary School learners in classroom",
    title: "Our Learners",
    category: "Students"
  },
  {
    src: "/HillsideWays/toddlershillside ways.jpg",
    alt: "Hillside Ways Nursery and Primary School toddlers and young learners",
    title: "Toddlers",
    category: "Early Education"
  },
  {
    src: "/HillsideWays/Hillsideways staff.jpg",
    alt: "Hillside Ways Nursery and Primary School dedicated staff members",
    title: "Our Staff",
    category: "Team"
  },
  {
    src: "/HillsideWays/Hillsideways  cover.jpg",
    alt: "Hillside Ways Nursery and Primary School cover view",
    title: "School Cover",
    category: "Campus"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HillsideWays/Hillsideways  cover.jpg"
            alt="Hillside Ways Nursery and Primary School campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-blue-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hillside Ways Gallery
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our world-class facilities and vibrant school life
            </p>
          </motion.div>

          {/* Gallery Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-emerald-200 text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TikTok Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Latest: Learners Dancing to "Long Time Ago" by Teacher Hassan
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.tiktok.com/embed/7480706123801054469"
                className="w-full max-w-[400px] h-[700px] rounded-2xl border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="TikTok Video - Learners Dancing"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 border border-emerald-200 dark:border-emerald-700/50 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Photos Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're continuously capturing and sharing moments from our vibrant school community. Check back regularly for updates!
            </p>
            <a href="/location" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
