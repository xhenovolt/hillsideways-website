"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Users, Globe, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const features = [
	{
		icon: <Zap className="w-8 h-8" />,
		title: "Nursery Education",
		description: "Comprehensive early childhood education program focusing on foundational skills, social development, and love for learning.",
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Primary Excellence",
		description: "Rigorous primary curriculum delivered by qualified teachers, ensuring students excel in all core subjects.",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Holistic Development",
		description: "Students develop into confident, disciplined learners with strong academic foundation and life skills.",
	},
	{
		icon: <Globe className="w-8 h-8" />,
		title: "Character Building",
		description: "Emphasis on values, respect, and personal growth to prepare students for future success.",
	},
];

const testimonials = [
	{
		name: "Mary Nakiganda",
		role: "Parent, Hillside Ways Student",
		text: "My child has flourished at Hillside Ways. The teachers are caring and the curriculum is excellent.",
		rating: 5,
	},
	{
		name: "John Ssebaana",
		role: "Education Consultant",
		text: "Hillside Ways represents quality education in Iganga. The commitment to academic excellence is remarkable.",
		rating: 5,
	},
	{
		name: "Sarah Namuyanja",
		role: "Parent & Community Leader",
		text: "Hillside Ways students stand out for their discipline and academic performance. Highly recommended.",
		rating: 5,
	},
	{
		name: "David Mukisa",
		role: "Parent & Business Owner",
		text: "The values and education at Hillside Ways are excellent. It's a great investment in my child's future.",
		rating: 5,
	},
	{
		name: "Grace Nabukeera",
		role: "Primary Three Parent",
		text: "My daughter loves going to school every day. The environment is nurturing and supportive.",
		rating: 5,
	},
	{
		name: "Robert Wanjala",
		role: "Parent & Teacher",
		text: "As an educator, I can say Hillside Ways has the best teaching methods in the region.",
		rating: 5,
	},
];

const solutions = [
	{
		title: "Nursery Section",
		description: "Early childhood education for ages 3-5, focusing on foundational skills, play-based learning, and social development.",
		features: [
			"Play-Based Learning",
			"Social Skills Development",
			"Basic Literacy & Numeracy",
		],
	},
	{
		title: "Primary Section",
		description: "Comprehensive primary education from Primary One to Seven, covering all core subjects with qualified teachers.",
		features: [
			"English & Mathematics",
			"Science & Social Studies",
			"Creative Arts",
		],
	},
	{
		title: "After-School Programs",
		description: "Additional support and enrichment activities to help students reach their full potential.",
		features: [
			"Homework Support",
			"Reading Club",
			"Sports Activities",
		],
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />
			
			{/* Hero Section */}
			<section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden relative">
				{/* Hero Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/HillsideWays/Hillside Ways compound.jpeg"
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
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
								<span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
									Building Bright
								</span>
								<br />
								<span className="text-white drop-shadow-lg">
									Futures Together
								</span>
							</h1>
							<p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
								Hillside Ways Nursery and Primary School is a quality educational institution dedicated to nurturing young minds and building strong foundations for lifelong learning.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="/admissions"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
									>
										Apply Now
										<ArrowRight className="w-5 h-5" />
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto"
								>
									<Link
										href="#why-hillside-ways"
										className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-emerald-900 transition-all duration-300"
									>
										Learn More
									</Link>
								</motion.div>
							</div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative"
						>
							<div className="relative z-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Nursery</div>
										<div className="text-sm text-emerald-700 dark:text-emerald-300">to Primary 7</div>
									</div>
									<div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl text-center">
										<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">Quality</div>
										<div className="text-sm text-blue-700 dark:text-blue-300">Education</div>
									</div>
								</div>
								<div className="flex items-center gap-2 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
									<span className="text-white ml-2">Trusted by families in Iganga</span>
								</div>
								<p className="text-white/90 italic">
									"Hillside Ways provides excellent education for our children."
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

		{/* Features Section */}
		<section className="py-12 sm:py-16 md:py-20" id="why-hillside-ways">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Why Hillside Ways?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						We provide quality education that shapes bright futures. Here's what sets us apart.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05, y: -10 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center hover:shadow-3xl transition-all duration-500"
							>
								<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
									{feature.icon}
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		{/* Solutions Showcase */}
		<section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 sm:mb-16"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
						Our Academic Programs
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
						Comprehensive educational programs designed for young learners from nursery to primary school.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
						{solutions.map((solution, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500"
							>
								<h3 className="text-2xl font-bold text-white mb-4">
									{solution.title}
								</h3>
								<p className="text-white/80 mb-6 leading-relaxed">
									{solution.description}
								</p>
								<ul className="space-y-3 mb-6">
									{solution.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3 text-white/90">
											<CheckCircle className="w-5 h-5 text-green-400" />
											{feature}
										</li>
									))}
								</ul>
								<Link
									href="/academics"
									className="inline-flex items-center text-white hover:text-emerald-300 transition-colors duration-300 gap-2"
								>
									Explore Program
									<ArrowRight className="w-4 h-4" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<TeamSection />

		{/* CTA Section */}
		<section className="py-12 sm:py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center"
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
						Ready to Shape Your Child's Future?
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
						Join Hillside Ways Nursery and Primary School and give your child the best start in education. Enroll today and watch them thrive.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/admissions"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
							>
								Apply Now
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto"
						>
							<Link
								href="/location"
								className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
							>
								Visit Us Today
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>			
		
		<Footer />
		</main>
	);
}
