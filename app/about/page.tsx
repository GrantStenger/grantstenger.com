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
                            {"I'm Grant Stenger, the Founder & CEO of Kinetic."}
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                            <li>Kinetic is a multi-chain dex aggregator supporting both fungible and non-fungible token trading.</li>
                            <li>We raised $7.2m from great partners including Jump, Sequoia, SV Angel, Contrary, GBV, K5, dao5, Soma, BoxGroup, and Lux.</li>
                            <li>Built an elite team of world-class engineers from Stanford, MIT, Princeton, etc.</li>
                        </ul>
                        <p className="text-gray-300">
                            Our mission at Kinetic is to create a more efficient, transparent, and accessible financial ecosystem for all.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
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
                                        <li>{"Fullstack work on Erasure's splash page (React + Node.js + GraphQL + Elixir)"}</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <Card className="bg-gray-800 border-gray-700">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Education</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">University of Southern California</h3>
                                        <p className="text-gray-400">B.S. Applied Mathematics, B.S. Computer Science</p>
                                        <p className="text-gray-500">Los Angeles, CA</p>
                                        <ul className="list-disc list-inside text-gray-300 mt-2">
                                            <li>Full tuition merit scholarship</li>
                                            <li>Started PhD level computer science and math courses as a sophomore</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">THINK Global School</h3>
                                        <p className="text-gray-400">High School</p>
                                        <p className="text-gray-500">Hyderabad, Tanzania, Hiroshima</p>
                                        <p className="text-gray-300 mt-2">
                                            {"Attended the world's first traveling high school, living and studying in multiple countries"}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-300">Head-Royce School</h3>
                                        <p className="text-gray-400">High School</p>
                                        <p className="text-gray-500">Oakland, CA</p>
                                        <p className="text-gray-300 mt-2">
                                            Berkeley Math Circle, Student Council (8 years), East Bay Fencers Gym, AwesomeMath, AoPS
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-800 border-gray-700">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">{"Skills & Interests"}</h2>
                                <p className="text-gray-300 mb-4">
                                    I like Jupyter notebooks, primatology, poker theory, Coastal California, chess tactics, Speechify, and old books.
                                </p>
                                {/* <ul className="list-disc list-inside text-gray-300 mb-4">
                                    <li>Quantitative Finance</li>
                                    <li>Artificial Intelligence and Machine Learning</li>
                                    <li>Blockchain Technology</li>
                                    <li>Entrepreneurship</li>
                                    <li>Product Development</li>
                                    <li>Advanced Mathematics</li>
                                </ul> */}
                                <p className="text-gray-300">
                                    {"Fluent in english and python."}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Card className="bg-gray-800 border-gray-700 mt-8">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">{"Projects & Awards"}</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Stanford TreeHacks Winner: Attentional Super Resolution GAN</h3>
                                <p className="text-gray-400">Feb. 2019</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2">
                                    <li>{"Best Computer Vision Prize & IBM's Favorite Health Hack"}</li>
                                    <li>Enhancing low resolution video feeds in real time with a novel GAN architecture</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Silicon Valley Design Thinking Institute (Co-Founder)</h3>
                                <p className="text-gray-400">{"Jun. 2019 – July 2020"}</p>
                                <p className="text-gray-300 mt-2">
                                    Teaching design thinking and product development frameworks.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Optimization Research</h3>
                                <p className="text-gray-400">Apr. 2019 – May 2020</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2">
                                    <li>Asymptotic analysis of the multi-robot routing problem (Professor John Carlsson Ph.D.)</li>
                                    <li>Provided an upper bound on the improvement in efficiency by combining unmanned robotic parcel distribution with traditional truck delivery</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Ph.D. Courses</h3>
                                <p className="text-gray-400">Aug. 2018 – May 2021</p>
                                <p className="text-gray-300 mt-2">Youngest USC student to take Ph.D. level Computer Science courses</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2">
                                    <li>Convex Optimization (CSCI 672)</li>
                                    <li>Combinatorial Optimization (ISE 675)</li>
                                    <li>Stochastic Calculus and Mathematical Finance (MATH 530)</li>
                                    <li>Advanced Analysis of Algorithms (CSCI 670)</li>
                                    <li>Others...</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Stamps Scholarship</h3>
                                <p className="text-gray-400">Stamps Foundation, Apr 2017</p>
                                <p className="text-gray-300 mt-2">
                                    {"USC's most competitive academic scholarship (5 awards per year)."}
                                </p>
                                <p className="text-gray-300 mt-2">Full-tuition scholarship plus access to a $20,000 enrichment fund over 4 years for study abroad, unpaid internships, summer research or other opportunities.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">Best Delegate</h3>
                                <p className="text-gray-400">Model United Nations, Mar 2014</p>
                                <ul className="list-disc list-inside text-gray-300 mt-2">
                                    <li>Best Delegate at a Model United Nations conference in Hyderabad</li>
                                    <li>Honorable Mention at Yale MUN in Seoul</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    )
}