import { Card, CardContent } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-['Anonymous_Pro',_sans-serif]">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold mb-12 text-center text-blue-400">About Me</h1>

                <Card className="bg-gray-800 border-gray-700 mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">Kinetic</h2>
                        <p className="text-gray-300 mb-4">
                            I'm Grant Stenger, the Founder & CEO of Kinetic, a company shaping the future of exchange. At Kinetic, we're revolutionizing the exchange industry with innovative solutions and cutting-edge technology.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Successfully raised $7.2m from prominent investors including Jump, Sequoia, SV Angel, and more</li>
                            <li>Developing next-generation exchange technology</li>
                            <li>Building a team of top-tier engineers and finance professionals</li>
                        </ul>
                        <p className="text-gray-300">
                            Our mission at Kinetic is to create a more efficient, transparent, and accessible financial ecosystem for all participants.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">Experience</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300">Polychain</h3>
                                    <p className="text-gray-400">Quant Research</p>
                                    <p className="text-gray-500">San Francisco</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>Delta-neutral trading models for liquid crypto derivatives markets</li>
                                        <li>DeFi protocol research –– whitepapers, founder calls, code reviews</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300">Jane Street</h3>
                                    <p className="text-gray-400">Quant Trading</p>
                                    <p className="text-gray-500">New York City</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>Equities-focused quant research</li>
                                        <li>Analysis of the price impact of large block trades reported on the TRF</li>
                                        <li>1st place winner of internal automated trading competition</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300">Midjourney</h3>
                                    <p className="text-gray-400">AI Research</p>
                                    <p className="text-gray-500">San Francisco</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>Tools for thought</li>
                                        <li>Psychometric embedding research</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300">QuantRes</h3>
                                    <p className="text-gray-400">Quant Research</p>
                                    <p className="text-gray-500">Nassau, Bahamas</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>Advanced time series modeling</li>
                                        <li>Equities ETF market making</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-300">Numerai</h3>
                                    <p className="text-gray-400">Machine Learning Engineer</p>
                                    <p className="text-gray-500">San Francisco</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>High dimensional stats for meta-model improvements</li>
                                        <li>ML pipeline for detecting malicious users</li>
                                        <li>Fullstack work on Erasure's splash page (React + Node.js + GraphQL + Elixir)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">Education</h2>
                        <p className="text-gray-300 mb-4">
                            I attended the University of Southern California, pursuing a dual degree in Applied Mathematics and Computer Science. During my time there, I:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Received a full tuition merit scholarship (Stamps Scholarship)</li>
                            <li>Took PhD level computer science and math courses</li>
                            <li>Served as Vice President of USC's Center for AI in Society's undergraduate branch</li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            Prior to USC, I attended THINK Global School, the world's first traveling high school, living and studying in Hyderabad, Tanzania, and Hiroshima.
                        </p>
                        <p className="text-gray-300">
                            I've also been involved in numerous global service trips, including building homes in the Dominican Republic, schools in Kenya, and teaching English in India.
                        </p>
                    </div>
                </div>

                <Card className="bg-gray-800 border-gray-700 mt-8">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">Projects</h2>
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-4">
                            <li>
                                <span className="font-bold">Kinetic:</span> Founded and currently leading a company that's revolutionizing the exchange industry.
                            </li>
                            <li>
                                <span className="font-bold">Silicon Valley Design Thinking Institute:</span> Established an institute to teach design thinking and product development methodologies.
                            </li>
                            <li>
                                <span className="font-bold">AI Research at Midjourney:</span> Contributed to cutting-edge AI research in image generation.
                            </li>
                            <li>
                                <span className="font-bold">Quantitative Trading Systems:</span> Developed sophisticated trading algorithms at Jane Street and QuantRes.
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 mt-8">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">Skills & Interests</h2>
                        <p className="text-gray-300 mb-4">
                            My expertise spans across various fields:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Quantitative Finance</li>
                            <li>Artificial Intelligence and Machine Learning</li>
                            <li>Blockchain Technology</li>
                            <li>Entrepreneurship</li>
                            <li>Product Development</li>
                            <li>Advanced Mathematics</li>
                        </ul>
                        <p className="text-gray-300">
                            I'm passionate about leveraging technology to solve complex problems and create innovative solutions that shape the future of finance and beyond.
                        </p>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    )
}