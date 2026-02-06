"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, ArrowRight, Heart, Trophy, GraduationCap, Users, Award } from "lucide-react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const testimonials = [
	{
		name: "Mary Nakiganda",
		role: "Parent, Primary Four Student",
		school: "Hillside Ways Nursery and Primary School",
		text: "My child has flourished at Hillside Ways. The teachers are caring and the curriculum is excellent. I've seen tremendous growth in both academics and character development.",
		rating: 5,
		program: "Primary Education",
		location: "Iganga, Uganda",
	},
	{
		name: "John Ssebaana",
		role: "Education Consultant",
		school: "Hillside Ways Nursery and Primary School",
		text: "Hillside Ways represents quality education in Iganga. The commitment to academic excellence is remarkable. The school's holistic approach prepares students well for future challenges.",
		rating: 5,
		program: "Education Excellence",
		location: "Iganga, Uganda",
	},
	{
		name: "Sarah Namuyanja",
		role: "Parent & Community Leader",
		school: "Hillside Ways Nursery and Primary School",
		text: "Hillside Ways students stand out for their discipline and academic performance. As a community leader, I highly recommend this school to all parents seeking quality education.",
		rating: 5,
		program: "Primary Education",
		location: "Iganga, Uganda",
	},
	{
		name: "David Mukisa",
		role: "Parent & Business Owner",
		school: "Hillside Ways Nursery and Primary School",
		text: "The values and education at Hillside Ways are excellent. It's a great investment in my child's future. The balance between academics and character building is outstanding.",
		rating: 5,
		program: "Primary Education",
		location: "Iganga, Uganda",
	},
	{
		name: "Grace Nabukeera",
		role: "Parent, Primary Three Student",
		school: "Hillside Ways Nursery and Primary School",
		text: "My daughter loves going to school every day. The environment is nurturing and supportive. The teachers truly care about each student's success and development.",
		rating: 5,
		program: "Primary Education",
		location: "Iganga, Uganda",
	},
	{
		name: "Robert Wanjala",
		role: "Parent & Teacher",
		school: "Hillside Ways Nursery and Primary School",
		text: "As an educator, I can say Hillside Ways has the best teaching methods in the region. The emphasis on both academics and character development sets it apart.",
		rating: 5,
		program: "Primary Education",
		location: "Iganga, Uganda",
	},
];

// Featured testimonial
const featuredTestimonial = {
	name: "Aisha Nantongo",
	role: "Parent, Primary Five & Primary Two",
	school: "Hillside Ways Nursery and Primary School",
	text: "Both my children attend Hillside Ways and I couldn't be happier. The nursery foundation prepared my oldest perfectly for primary school. The discipline and love for learning here is exceptional.",
	rating: 5,
	program: "Nursery to Primary Education",
	location: "Iganga, Uganda",
	satisfaction: "100%",
	impact: "Two children thriving academically"
};

const stats = [
	{ number: "100%", label: "Parent Satisfaction" },
	{ number: "Nursery to P7", label: "Complete Education" },
	{ number: "Quality", label: "Curriculum" },
	{ number: "Iganga", label: "Trusted Location" },
];

export default function TestimonialsPage() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
			<Navbar />

			{/* Hero Section with Cover Image */}
			<section className="pt-32 pb-16 overflow-hidden relative">
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
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<div className="inline-flex items-center gap-3 bg-emerald-100/90 dark:bg-emerald-900/30 px-6 py-3 rounded-full mb-6">
							<GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
							<span className="font-semibold text-emerald-700 dark:text-emerald-300">Hillside Ways Family</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
							What Our Parents Say
						</h1>
						<p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
							Hear from parents and community members about their experience with Hillside Ways 
							Nursery and Primary School.
						</p>
					</motion.div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-6 pb-16">
				{/* Featured Testimonial Spotlight */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-3 bg-yellow-100 dark:bg-yellow-900/30 px-6 py-3 rounded-full mb-4">
							<Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
							<span className="font-bold text-yellow-800 dark:text-yellow-300">Featured Testimonial</span>
							<Heart className="w-6 h-6 text-red-500 fill-current" />
						</div>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							A Parent's Testimonial
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							From the Hillside Ways family
						</p>
					</div>

					<div className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-3xl p-12 border-2 border-emerald-200 dark:border-emerald-700/50 shadow-2xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
							<div className="lg:col-span-2">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
										AN
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
											{featuredTestimonial.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 text-lg">
											{featuredTestimonial.role}
										</p>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium">
											{featuredTestimonial.school}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
											📍 {featuredTestimonial.location}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-6">
									{[...Array(featuredTestimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-8 h-8 text-yellow-400 fill-current"
										/>
									))}
									<span className="ml-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
										{featuredTestimonial.satisfaction} Satisfaction!
									</span>
								</div>

								<div className="relative mb-6">
									<Quote className="absolute -top-2 -left-2 w-10 h-10 text-emerald-300 dark:text-emerald-600" />
									<blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-8">
										"{featuredTestimonial.text}"
									</blockquote>
								</div>

								<div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4">
									<div className="flex items-center gap-2 mb-2">
										<CheckCircle className="w-5 h-5 text-green-500" />
										<span className="font-medium text-gray-900 dark:text-white">
											Program: {featuredTestimonial.program}
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Heart className="w-5 h-5 text-red-500" />
										<span className="text-gray-600 dark:text-gray-300">
											Impact: {featuredTestimonial.impact}
										</span>
									</div>
								</div>
							</div>

							<div className="text-center">
								<div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl">
									<div className="text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
										100%
									</div>
									<div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Parent Satisfaction
									</div>
									<div className="text-gray-600 dark:text-gray-300 mb-6">
										From our Hillside Ways family!
									</div>
									<div className="space-y-3">
										<div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-lg p-3">
											<div className="text-emerald-800 dark:text-emerald-300 font-semibold">Trusted</div>
											<div className="text-emerald-600 dark:text-emerald-400 text-sm">By Parents in Iganga</div>
										</div>
										<div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
											<div className="text-blue-800 dark:text-blue-300 font-semibold">Quality</div>
											<div className="text-blue-600 dark:text-blue-400 text-sm">Education Guaranteed</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Stats Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center"
							>
								<div className={`text-4xl md:text-5xl font-bold mb-2 ${
									stat.label === "Parent Satisfaction" 
										? "text-emerald-600 dark:text-emerald-400" 
										: "bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
								}`}>
									{stat.number}
								</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Other Testimonials */}
				<section className="mb-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full mb-4">
							<Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							<span className="font-semibold text-blue-700 dark:text-blue-300">More Reviews</span>
						</div>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							More Happy Parents
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Here's what more parents and community members say about Hillside Ways
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500"
							>
								<div className="flex items-center gap-2 mb-6">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>

								<div className="relative mb-8">
									<Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200 dark:text-emerald-800" />
									<p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 text-lg">
										"{testimonial.text}"
									</p>
								</div>

								<div className="flex items-start gap-4 mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
											{testimonial.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-400 mb-1">
											{testimonial.role}
										</p>
										<p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
											{testimonial.school}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-500">
											📍 {testimonial.location}
										</p>
									</div>
								</div>

								<div className="pt-4 border-t border-gray-200 dark:border-gray-600">
									<div className="flex items-center gap-2">
										<CheckCircle className="w-5 h-5 text-green-500" />
										<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
											Program: {testimonial.program}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Featured Testimonial Quote */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
						<div className="text-center max-w-4xl mx-auto">
							<Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
							<blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
								&ldquo;Hillside Ways Nursery and Primary School is dedicated to providing 
								quality education that nurtures young minds and builds strong foundations 
								for lifelong learning.&rdquo;
							</blockquote>
							<div className="flex items-center justify-center gap-4">
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
									HW
								</div>
								<div className="text-left">
									<div className="text-xl font-semibold">Hillside Ways</div>
									<div className="text-white/80">
										Nursery and Primary School - Building Bright Futures
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Why Parents Choose Us */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/30 px-6 py-3 rounded-full mb-4">
							<Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
							<span className="font-semibold text-emerald-700 dark:text-emerald-300">Our Promise</span>
						</div>
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Why Parents Choose Hillside Ways
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Dedicated to excellence in education since our establishment in Iganga
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ item: "Nursery to P7", label: "Complete Education", icon: "📚" },
							{ item: "Qualified", label: "Teachers & Staff", icon: "👩‍🏫" },
							{ item: "Holistic", label: "Development Focus", icon: "🌟" },
							{ item: "Safe", label: "Safe Learning Environment", icon: "🛡️" },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="text-center bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 backdrop-blur-sm"
							>
								<div className="text-4xl mb-4">{item.icon}</div>
								<div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
									{item.item}
								</div>
								<div className="text-gray-700 dark:text-gray-300 font-medium">
									{item.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* CTA Section */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/50 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
							Join the Hillside Ways Family
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Enroll your child today and give them the best start in education. 
							Experience the difference that quality education makes.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.a
								href="/admissions"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
							>
								Apply Now
								<ArrowRight className="w-5 h-5" />
							</motion.a>
							<motion.a
								href="/location"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
							>
								Visit Our School
							</motion.a>
						</div>
					</div>
				</motion.section>
			</div>

			<Footer />
		</main>
	);
}
