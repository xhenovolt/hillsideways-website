"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";

export default function TeamSection() {
	return (
		<section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/30 px-6 py-3 rounded-full mb-6">
						<Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
						<span className="font-semibold text-emerald-700 dark:text-emerald-300">Coming Soon</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Meet Our Leadership Team
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						We are currently finalizing our dedicated team of educators and administrators who will 
						be joining Hillside Ways Nursery and Primary School. Our team will be committed to 
						delivering exceptional education and nurturing young minds.
					</p>
				</motion.div>

				{/* Coming Soon Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center max-w-2xl mx-auto"
				>
					<div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
						<Users className="w-12 h-12 text-white" />
					</div>
					
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
						Team Profiles Coming Soon
					</h3>
					
					<p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
						Our leadership team profiles will be published here shortly. We are excited to introduce 
						our Headteacher, School Directors, and Directors of Studies who bring decades of 
						combined experience in education.
					</p>

					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
							<Star className="w-5 h-5 text-yellow-400 fill-current" />
							<span>Qualified Educators</span>
						</div>
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
							<Star className="w-5 h-5 text-yellow-400 fill-current" />
							<span>Experienced Leaders</span>
						</div>
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
							<Star className="w-5 h-5 text-yellow-400 fill-current" />
							<span>Dedicated Staff</span>
						</div>
					</div>

					<div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-xl p-4">
						<p className="text-emerald-700 dark:text-emerald-300 font-medium">
							📅 Team profiles will be available shortly. Stay tuned!
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
