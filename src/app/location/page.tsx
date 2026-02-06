"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LocationPage() {
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
              Visit Hillside Ways
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Located on Kaliro Road, Iganga Municipality. We welcome parents and prospective families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50 h-96 lg:h-full"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8223456789012!2d33.501018635005195!3d0.5892956164654007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e6789abcdef01%3A0x1234567890abcdef!2sBulubandi%2C%20Nakigo%2C%20Iganga!5e0!3m2!1sen!2sug!4v1234567890"
                title="Hillside Ways Nursery and Primary School Location"
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700/50">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      School Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Kaliro Road, Iganga Municipality<br />
                      Uganda
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-blue-200 dark:border-blue-700/50">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <a href="tel:0745726350" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      0745 726 350
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-700/50">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a href="mailto:info@hillsideways.ug" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                      info@hillsideways.ug
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-purple-200 dark:border-purple-700/50">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      School Hours
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday<br />
                      8:00 AM - 3:30 PM EAT
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We welcome visits from parents and prospective families. Please contact us to schedule a visit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
