"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, BookOpen, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
	{
		icon: <Heart className="w-8 h-8" />,
		title: "Quality Education",
		description: "We are committed to providing excellent education that prepares students for success in secondary school and beyond.",
	},
	{
		icon: <BookOpen className="w-8 h-8" />,
		title: "Academic Excellence",
		description: "Our rigorous curriculum and dedicated teachers ensure students achieve their full academic potential.",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Holistic Development",
		description: "We develop confident, disciplined students with strong character and life skills.",
	},
	{
		icon: <Sparkles className="w-8 h-8" />,
		title: "Nurturing Environment",
		description: "Our supportive environment helps children grow academically, socially, and emotionally.",
	}
];

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />

			{/* Hero Section */}
			<section className="pt-24 pb-12 md:pt-32 md:pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
							About Hillside Ways Nursery and Primary School
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Building bright futures through quality education
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
								Our Story
							</h2>
							<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
								Hillside Ways Nursery and Primary School is a quality educational institution located on Kaliro Road in Iganga Municipality. We are dedicated to providing excellent education for young learners from nursery to primary school level.
							</p>
							<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
								Our mission is to create a nurturing learning environment where children develop academically, socially, and emotionally. We believe in building strong foundations that will serve our students throughout their educational journey.
							</p>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								Located conveniently on Kaliro Road in Iganga Municipality, we provide quality education that prepares students for success in secondary school and beyond.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src="/HillsideWays/Hillside Ways Admin block.jpeg"
									alt="Hillside Ways Nursery and Primary School campus"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
									quality={85}
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
									<p className="text-white font-semibold text-lg">Quality Education in Iganga</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-12 md:py-20 bg-white/50 dark:bg-gray-800/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700"
						>
							<Target className="w-12 h-12 text-emerald-600 mb-4" />
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								Our Mission
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								To provide quality education that nurtures young minds, builds strong foundations, and prepares students to become confident, successful individuals who contribute positively to their communities.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-blue-200 dark:border-blue-700"
						>
							<Eye className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								Our Vision
							</h3>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								To be a leading nursery and primary school in Iganga and the surrounding region, recognized for academic excellence, character development, and producing well-rounded students.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Our Core Values
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Guiding principles that define who we are and what we do
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all"
							>
								<div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
									{value.icon}
								</div>
								<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
									{value.title}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* What Makes Our Students Different */}
			<section className="py-12 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							What Makes Our Students Different
						</h2>
						<p className="text-white/90 text-lg">
							Shaped by quality education and strong character
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							"Strong academic foundation",
							"Critical thinking skills",
							"Confidence and self-esteem",
							"Discipline and respect",
							"Good communication skills",
							"Teamwork and cooperation",
							"Creativity and innovation",
							"Character and integrity",
							"Preparation for secondary school"
						].map((characteristic, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.05 }}
								className="flex items-center gap-3 text-white"
							>
								<CheckCircle className="w-6 h-6 flex-shrink-0" />
								<span>{characteristic}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 text-center border border-emerald-200 dark:border-emerald-700/50"
					>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Ready to Join Hillside Ways?
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Give your child the best start in education. Enroll today and watch them thrive.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/admissions" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
								Apply Now
								<ArrowRight className="w-5 h-5" />
							</a>
							<a href="/location" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition">
								Visit Us
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
