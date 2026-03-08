import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
    title: 'About — Grant Stenger',
    description: 'About Grant Stenger, Founder & CEO of Kinetic.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
            {children}
        </section>
    )
}

function Role({ title, role, location, children }: { title: string; role: string; location: string; children?: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{role} &middot; {location}</p>
            {children && <ul className="mt-2 space-y-1 text-gray-300 text-sm">{children}</ul>}
        </div>
    )
}

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />

            <main className="flex-grow px-4 md:px-6 lg:px-12 py-12 max-w-3xl mx-auto w-full">
                <h1 className="text-5xl font-bold mb-4 text-white">Grant Stenger</h1>
                <p className="text-gray-400 mb-12 text-lg">
                    {"Founder & CEO of Kinetic — a multi-chain dex aggregator supporting both fungible and non-fungible token trading. We raised $7.2m from Jump, Sequoia, SV Angel, Contrary, and others."}
                </p>

                <Section title="Experience">
                    <Role title="Polychain" role="Quant Research" location="San Francisco">
                        <li>Delta-neutral trading models for liquid crypto derivatives markets</li>
                        <li>DeFi protocol research — whitepapers, founder calls, code reviews</li>
                    </Role>
                    <Role title="Jane Street" role="Quant Trading" location="New York City">
                        <li>Equities-focused quant research</li>
                        <li>Analysis of the price impact of large block trades reported on the TRF</li>
                        <li>1st place winner of internal automated trading competition</li>
                    </Role>
                    <Role title="Midjourney" role="AI Research" location="San Francisco">
                        <li>Tools for thought</li>
                        <li>Psychometric embedding research</li>
                    </Role>
                    <Role title="QuantRes" role="Quant Research" location="Nassau, Bahamas">
                        <li>Advanced time series modeling</li>
                        <li>Equities ETF market making</li>
                    </Role>
                    <Role title="Numerai" role="Machine Learning Engineer" location="San Francisco">
                        <li>High dimensional stats for meta-model improvements</li>
                        <li>ML pipeline for detecting malicious users</li>
                        <li>{"Fullstack work on Erasure's splash page (React + Node.js + GraphQL + Elixir)"}</li>
                    </Role>
                </Section>

                <Section title="Education">
                    <Role title="University of Southern California" role="B.S. Applied Mathematics, B.S. Computer Science" location="Los Angeles, CA">
                        <li>Full tuition merit scholarship</li>
                        <li>Started PhD level computer science and math courses as a sophomore</li>
                    </Role>
                    <Role title="THINK Global School" role="High School" location="Hyderabad, Tanzania, Hiroshima">
                        <li>{"Attended the world's first traveling high school, living and studying in multiple countries"}</li>
                    </Role>
                    <Role title="Head-Royce School" role="High School" location="Oakland, CA">
                        <li>Berkeley Math Circle, Student Council (8 years), East Bay Fencers Gym, AwesomeMath, AoPS</li>
                    </Role>
                </Section>

                <Section title="Projects & Awards">
                    <Role title="Stanford TreeHacks Winner: Attentional Super Resolution GAN" role="Best Computer Vision Prize" location="Feb. 2019">
                        <li>{"Best Computer Vision Prize & IBM's Favorite Health Hack"}</li>
                        <li>Enhancing low resolution video feeds in real time with a novel GAN architecture</li>
                    </Role>
                    <Role title="Silicon Valley Design Thinking Institute" role="Co-Founder" location="Jun. 2019 – July 2020">
                        <li>Teaching design thinking and product development frameworks</li>
                    </Role>
                    <Role title="Optimization Research" role="Prof. John Carlsson Ph.D." location="Apr. 2019 – May 2020">
                        <li>Asymptotic analysis of the multi-robot routing problem</li>
                        <li>Upper bound on efficiency improvement combining robotic and truck delivery</li>
                    </Role>
                    <Role title="Ph.D. Courses" role="Youngest USC student in PhD-level CS" location="Aug. 2018 – May 2021">
                        <li>Convex Optimization, Combinatorial Optimization, Stochastic Calculus and Mathematical Finance, Advanced Analysis of Algorithms</li>
                    </Role>
                    <Role title="Stamps Scholarship" role="Stamps Foundation" location="Apr. 2017">
                        <li>{"USC's most competitive academic scholarship (5 awards per year)"}</li>
                        <li>Full-tuition scholarship plus $20,000 enrichment fund</li>
                    </Role>
                </Section>

                <section className="mb-12">
                    <p className="text-gray-400">
                        I like Jupyter notebooks, primatology, poker theory, Coastal California, chess tactics, Speechify, and old books. Fluent in english and python.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    )
}
