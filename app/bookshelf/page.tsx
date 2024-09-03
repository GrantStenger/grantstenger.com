import { Card, CardContent } from "@/components/ui/card"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Bookshelf() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-['Anonymous_Pro',_sans-serif]">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold mb-12 text-center text-blue-400">My Bookshelf</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <BookCard
                        title="The Innovator's Dilemma"
                        author="Clayton M. Christensen"
                        description="A classic on disruptive innovation in business."
                    />
                    <BookCard
                        title="Zero to One"
                        author="Peter Thiel"
                        description="Notes on startups, or how to build the future."
                    />
                    <BookCard
                        title="Thinking, Fast and Slow"
                        author="Daniel Kahneman"
                        description="An exploration of the two systems that drive the way we think."
                    />
                    <BookCard
                        title="The Road to Reality: A Complete Guide to the Laws of the Universe"
                        author="Roger Penrose"
                        description="An extensive guide to the fundamental laws of the universe, blending physics and mathematics."
                    />
                    <BookCard
                        title="Map and Territory"
                        author="Eliezer Yudkowsky"
                        description="A collection of essays on rationality and cognitive biases."
                    />
                    <BookCard
                        title="Accelerando"
                        author="Charles Stross"
                        description="A science fiction novel exploring the acceleration of technological development."
                    />
                    <BookCard
                        title="Atlas Shrugged"
                        author="Ayn Rand"
                        description="A novel that presents Rand's philosophy of Objectivism through a dystopian narrative."
                    />
                    <BookCard
                        title="Blood Meridian"
                        author="Cormac McCarthy"
                        description="A brutal, poetic novel set in the American West, exploring themes of violence and survival."
                    />
                    <BookCard
                        title="Walden Two"
                        author="B. F. Skinner"
                        description="A utopian novel exploring the possibilities of behavioral science in creating a better society."
                    />
                    <BookCard
                        title="The Antichrist"
                        author="Friedrich Nietzsche"
                        description="A critical examination of Christianity and its influence on Western culture."
                    />
                    <BookCard
                        title="The Elephant in the Brain: Hidden Motives in Everyday Life"
                        author="Kevin Simler and Robin Hanson"
                        description="An exploration of the hidden motives that drive human behavior."
                    />
                    <BookCard
                        title="The Laws of Trading: A Trader's Guide to Better Decision-Making for Everyone"
                        author="Agustin Lebron"
                        description="A guide to improving decision-making in trading and beyond, based on principles from game theory and behavioral science."
                    />
                    <BookCard
                        title="Candide"
                        author="Voltaire"
                        description="A satirical novel that critiques optimism and explores the absurdities of the human condition."
                    />
                    <BookCard
                        title="The Republic"
                        author="Plato"
                        description="A Socratic dialogue exploring justice, the ideal state, and the philosopher-king concept."
                    />
                    <BookCard
                        title="On the Origin of Species"
                        author="Charles Darwin"
                        description="Darwin's groundbreaking work on evolution and natural selection."
                    />
                    <BookCard
                        title="Sapiens: A Brief History of Humankind"
                        author="Yuval Noah Harari"
                        description="An exploration of the history and impact of Homo sapiens from ancient to modern times."
                    />
                    <BookCard
                        title="The Mathematical Theory of Communication"
                        author="Claude E. Shannon"
                        description="A foundational text in information theory, exploring the mathematical basis of communication."
                    />
                    <BookCard
                        title="How to Actually Change Your Mind"
                        author="Eliezer Yudkowsky"
                        description="A guide on rational thinking and decision-making, focusing on changing beliefs when presented with new evidence."
                    />
                    <BookCard
                        title="Harry Potter and the Methods of Rationality"
                        author="Eliezer Yudkowsky"
                        description="A fanfiction novel reimagining Harry Potter in a world where rationality and scientific thinking are key themes."
                    />
                    <BookCard
                        title="Advances in Financial Machine Learning"
                        author="Marcos Lopez De Prado"
                        description="A book on applying machine learning techniques to financial markets and trading."
                    />
                    <BookCard
                        title="Influence: The Psychology of Persuasion"
                        author="Robert B. Cialdini"
                        description="A classic exploration of the psychological principles that influence people's decisions."
                    />
                    <BookCard
                        title="Iliad"
                        author="Homer"
                        description="An ancient epic poem recounting the events of the Trojan War."
                    />
                    <BookCard
                        title="Man's Search For Meaning"
                        author="Viktor E. Frankl"
                        description="A memoir and exploration of finding purpose in life, based on Frankl's experiences in Nazi concentration camps."
                    />
                    <BookCard
                        title="Shoe Dog"
                        author="Phil Knight"
                        description="A memoir by the founder of Nike, detailing the company's early days and growth."
                    />
                    <BookCard
                        title="The Brothers Karamazov"
                        author="Fyodor Dostoyevsky"
                        description="A philosophical novel exploring morality, faith, and family dynamics in 19th-century Russia."
                    />
                    <BookCard
                        title="The Intelligent Investor"
                        author="Benjamin Graham"
                        description="A classic guide to value investing, emphasizing a disciplined and risk-averse approach."
                    />
                    <BookCard
                        title="Siddhartha"
                        author="Hermann Hesse"
                        description="A novel about a man's spiritual journey and quest for enlightenment."
                    />
                    <BookCard
                        title="Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail"
                        author="Ray Dalio"
                        description="An analysis of global economic history and principles for navigating change."
                    />
                    <BookCard
                        title="The Foundation"
                        author="Isaac Asimov"
                        description="A science fiction novel about the rise and fall of civilizations in a galactic empire."
                    />
                    <BookCard
                        title="Superintelligence"
                        author="Nick Bostrom"
                        description="An examination of the potential risks and opportunities posed by artificial intelligence."
                    />
                    <BookCard
                        title="The Mathematics of Gambling"
                        author="Edward Thorp"
                        description="A guide to the mathematical principles underlying gambling strategies and decision-making."
                    />
                    <BookCard
                        title="A Man for All Markets"
                        author="Edward O. Thorp"
                        description="A memoir and guide to investing and probability, by a pioneering mathematician and investor."
                    />
                    <BookCard
                        title="The Stranger"
                        author="Albert Camus"
                        description="A novel exploring existentialism and the absurdity of human life."
                    />
                    <BookCard
                        title="What It Takes: Lessons in the Pursuit of Excellence"
                        author="Stephen Schwarzman"
                        description="A memoir by the founder of Blackstone, sharing lessons from his career in finance and leadership."
                    />
                    <BookCard
                        title="Sam Walton: Made in America"
                        author="John Huey"
                        description="A biography of Walmart's founder, offering insights into his business philosophy and strategies."
                    />
                    <BookCard
                        title="The Everything Store: Jeff Bezos and the Age of Amazon"
                        author="Brad Stone"
                        description="A comprehensive account of Amazon's rise and Jeff Bezos' vision."
                    />
                    <BookCard
                        title="Dune"
                        author="Frank Herbert"
                        description="A science fiction novel set on a desert planet, exploring themes of power, religion, and survival."
                    />
                    <BookCard
                        title="More Money Than God: Hedge Funds and the Making of a New Elite"
                        author="Sebastian Mallaby"
                        description="A history of hedge funds and their impact on the financial world."
                    />
                    <BookCard
                        title="Margin of Safety: Risk-Averse Value Investing Strategies for the Thoughtful Investor"
                        author="Seth Klarman"
                        description="A guide to value investing, emphasizing capital preservation and long-term thinking."
                    />
                    <BookCard
                        title="Six Easy Pieces"
                        author="Richard Feynman"
                        description="A collection of lectures on fundamental physics, delivered by a renowned physicist."
                    />
                    <BookCard
                        title="Benjamin Franklin: An American Life"
                        author="Walter Isaacson"
                        description="A biography of Benjamin Franklin, exploring his life as a statesman, inventor, and thinker."
                    />
                    <BookCard
                        title="Conics"
                        author="Apollonius of Perga"
                        description="A foundational work on the study of conic sections."
                    />
                    <BookCard
                        title="On the Sphere and Cylinder"
                        author="Archimedes"
                        description="Archimedes' treatise on geometry, focusing on the properties of spheres and cylinders."
                    />
                    <BookCard
                        title="Summa de arithmetica"
                        author="Luca Pacioli"
                        description="A comprehensive book on arithmetic, geometry, and accounting, laying the groundwork for modern mathematics."
                    />
                    <BookCard
                        title="Ars Magna"
                        author="Gerolamo Cardano"
                        description="A pioneering work in algebra, introducing the solutions to cubic and quartic equations."
                    />
                    <BookCard
                        title="La Géométrie"
                        author="René Descartes"
                        description="A work that laid the foundation for analytical geometry, bridging algebra and geometry."
                    />
                    <BookCard
                        title="Introductio in analysin infinitorum"
                        author="Leonhard Euler"
                        description="An influential book introducing the concept of functions and laying the groundwork for mathematical analysis."
                    />
                    <BookCard
                        title="Elements of Algebra"
                        author="Leonhard Euler"
                        description="A foundational text in algebra, offering a systematic introduction to the subject."
                    />
                    <BookCard
                        title="Mécanique analytique"
                        author="Joseph-Louis Lagrange"
                        description="A seminal work on analytical mechanics, laying the foundation for modern theoretical physics."
                    />
                    <BookCard
                        title="Disquisitiones Arithmeticae"
                        author="Carl Friedrich Gauss"
                        description="A foundational text in number theory, introducing many key concepts and methods."
                    />
                    <BookCard
                        title="General Investigations of Curved Surfaces"
                        author="Carl Friedrich Gauss"
                        description="A mathematical treatise exploring the geometry of curved surfaces."
                    />
                    <BookCard
                        title="Essays on the Theory of Numbers"
                        author="Richard Dedekind"
                        description="A collection of essays on number theory, including the theory of ideals and the definition of irrational numbers."
                    />
                    <BookCard
                        title="The Principles of Mathematical Physics"
                        author="Henri Poincaré"
                        description="A work discussing the foundations and principles underlying mathematical physics."
                    />
                    <BookCard
                        title="Cours d'analyse"
                        author="Camille Jordan"
                        description="A comprehensive text on mathematical analysis, providing rigorous foundations for calculus."
                    />
                    <BookCard
                        title="A Treatise on Probability"
                        author="John Maynard Keynes"
                        description="A foundational text in probability theory, exploring the philosophical implications of probability."
                    />
                    <BookCard
                        title="On Formally Undecidable Propositions of Principia Mathematica and Related Systems"
                        author="Kurt Gödel"
                        description="A groundbreaking paper proving the incompleteness of formal mathematical systems."
                    />
                    <BookCard
                        title="Foundations of the Theory of Probability"
                        author="Andrey Kolmogorov"
                        description="A foundational text establishing the axiomatic basis for probability theory."
                    />
                    <BookCard
                        title="Principles of Mathematical Analysis"
                        author="Walter Rudin"
                        description="A classic text on mathematical analysis, often used as a textbook in advanced calculus courses."
                    />
                    <BookCard
                        title="Dynamic Programming"
                        author="Richard Bellman"
                        description="A seminal work introducing the concept of dynamic programming and its applications."
                    />
                    <BookCard
                        title="Mathematical Methods of Classical Mechanics"
                        author="Vladimir Arnold"
                        description="A comprehensive text on the mathematical foundations of classical mechanics."
                    />
                    <BookCard
                        title="Elements of Information Theory"
                        author="Thomas M. Cover and Joy A. Thomas"
                        description="A comprehensive introduction to the field of information theory and its applications."
                    />
                    <BookCard
                        title="Reinforcement Learning: An Introduction"
                        author="Andrew Barto and Richard S. Sutton"
                        description="A foundational text on reinforcement learning, a key area in machine learning and artificial intelligence."
                    />
                    <BookCard
                        title="Artificial Intelligence: A Modern Approach"
                        author="Peter Norvig and Stuart J. Russell"
                        description="A widely-used textbook covering the principles and techniques of artificial intelligence."
                    />
                    <BookCard
                        title="Dynamic Hedging"
                        author="Nassim Taleb"
                        description="A comprehensive guide on risk management and option pricing, with a focus on dynamic strategies."
                    />
                    <BookCard
                        title="The Elements of Statistical Learning"
                        author="Jerome H. Friedman, Robert Tibshirani, and Trevor Hastie"
                        description="A comprehensive guide to statistical learning, providing a theoretical foundation and practical applications."
                    />
                    <BookCard
                        title="Stochastic Calculus for Finance II"
                        author="Steven Shreve"
                        description="An advanced textbook on stochastic calculus and its applications in finance."
                    />
                    <BookCard
                        title="Convex Optimization"
                        author="Lieven Vandenberghe and Stephen Boyd"
                        description="A comprehensive guide to convex optimization, including theory, algorithms, and applications."
                    />
                    <BookCard
                        title="Prediction, Learning, and Games"
                        author="Nicolo Cesa-Bianchi and Gábor Lugosi"
                        description="A textbook on machine learning and game theory, focusing on prediction and decision-making."
                    />
                    <BookCard
                        title="The Kelly Capital Growth Investment Criterion: Theory and Practice"
                        author="Leonard C. MacLean, Edward O. Thorp, and William T. Ziemba"
                        description="A detailed examination of the Kelly criterion and its applications in finance and gambling."
                    />
                    <BookCard
                        title="Networks, Crowds, and Markets: Reasoning about a Highly Connected World"
                        author="David Easley and Jon Kleinberg"
                        description="An interdisciplinary textbook on networks, exploring their economic and social implications."
                    />
                    <BookCard
                        title="An Introduction to Measure Theory"
                        author="Terence Tao"
                        description="A comprehensive introduction to measure theory, providing the mathematical foundation for probability and analysis."
                    />
                    <BookCard
                        title="High-Dimensional Probability: An Introduction with Applications in Data Science"
                        author="Roman Vershynin"
                        description="A textbook on high-dimensional probability, emphasizing applications in data science and machine learning."
                    />
                    <BookCard
                        title="Statistical Consequences of Fat Tails: Real World Preasymptotics, Epistemology, and Applications"
                        author="Nassim Taleb"
                        description="A book discussing the statistical implications of fat-tailed distributions in real-world data."
                    />
                    <BookCard
                        title="A Graduate Course in Applied Cryptography"
                        author="Dan Boneh and Victor Shoup"
                        description="A comprehensive textbook on applied cryptography, covering both theoretical foundations and practical applications."
                    />
                    <BookCard
                        title="Almagest"
                        author="Ptolemy"
                        description="A comprehensive treatise on astronomy, laying out the geocentric model of the universe."
                    />
                    <BookCard
                        title="Dialogue Concerning the Two Chief World Systems"
                        author="Galileo Galilei"
                        description="A work comparing the Copernican system with the traditional Ptolemaic system."
                    />
                    <BookCard
                        title="Discourses and Mathematical Demonstrations Relating to Two New Sciences"
                        author="Galileo Galilei"
                        description="A foundational text on physics, discussing the science of motion and materials."
                    />
                    <BookCard
                        title="De Revolutionibus Orbium Coelestium"
                        author="Nicolaus Copernicus"
                        description="A revolutionary work proposing the heliocentric model of the solar system."
                    />
                    <BookCard
                        title="Astronomia Nova"
                        author="Johannes Kepler"
                        description="A work detailing Kepler's first two laws of planetary motion."
                    />
                    <BookCard
                        title="Harmonices Mundi"
                        author="Johannes Kepler"
                        description="A work exploring the harmony of the cosmos, presenting Kepler's third law of planetary motion."
                    />
                    <BookCard
                        title="Novum Organum"
                        author="Francis Bacon"
                        description="A philosophical work proposing a new method of scientific inquiry."
                    />
                    <BookCard
                        title="Mécanique céleste"
                        author="Pierre-Simon Laplace"
                        description="A comprehensive treatise on celestial mechanics, applying Newtonian physics to the motions of celestial bodies."
                    />
                    <BookCard
                        title="Experimental Researches in Electricity, vols. i. and ii"
                        author="Michael Faraday"
                        description="A collection of groundbreaking experiments and discoveries in electromagnetism."
                    />
                    <BookCard
                        title="Experimental Researches in Chemistry and Physics"
                        author="Michael Faraday"
                        description="A compilation of Faraday's work in chemistry and physics, including discoveries in electrochemistry and magnetism."
                    />
                    <BookCard
                        title="Treatise on Thermodynamics"
                        author="Max Planck"
                        description="A foundational text on the principles of thermodynamics, laying the groundwork for quantum theory."
                    />
                    <BookCard
                        title="Annus Mirabilis"
                        author="Albert Einstein"
                        description="A collection of Einstein's papers from 1905, introducing the theory of relativity and quantum theory."
                    />
                    <BookCard
                        title="Science and Method"
                        author="Henri Poincaré"
                        description="A philosophical work discussing the methods of science and the philosophy of mathematics."
                    />
                    <BookCard
                        title="The Physical Principles of the Quantum Theory"
                        author="Werner Heisenberg"
                        description="A foundational text on quantum mechanics, introducing the uncertainty principle."
                    />
                    <BookCard
                        title="The Principles of Quantum Mechanics"
                        author="Paul Dirac"
                        description="A foundational work on quantum mechanics, introducing the Dirac equation and bra-ket notation."
                    />
                    <BookCard
                        title="The Theory of Groups and Quantum Mechanics"
                        author="Hermann Weyl"
                        description="A comprehensive text on the mathematical foundations of quantum mechanics and group theory."
                    />
                    <BookCard
                        title="Introduction to Quantum Mechanics with Applications to Chemistry"
                        author="Linus Pauling"
                        description="An introduction to quantum mechanics with a focus on its applications in chemistry."
                    />
                    <BookCard
                        title="Thermodynamics"
                        author="Enrico Fermi"
                        description="A textbook on the principles of thermodynamics, written by a leading physicist."
                    />
                    <BookCard
                        title="Statistical Thermodynamics"
                        author="Erwin Schrödinger"
                        description="A text on the statistical foundations of thermodynamics and its connection to quantum mechanics."
                    />
                    <BookCard
                        title="Philosophic Foundations of Quantum Mechanics"
                        author="Hans Reichenbach"
                        description="A philosophical exploration of the implications of quantum mechanics."
                    />
                    <BookCard
                        title="Mathematical Foundations of Quantum Mechanics"
                        author="John von Neumann"
                        description="A foundational work establishing the mathematical framework for quantum mechanics."
                    />
                    <BookCard
                        title="Mathematical Methods of Classical Mechanics"
                        author="Vladimir Arnold"
                        description="A comprehensive text on the mathematical foundations of classical mechanics."
                    />
                    <BookCard
                        title="Elements of Chemistry"
                        author="Antoine Lavoisier"
                        description="A foundational text in modern chemistry, introducing the law of conservation of mass."
                    />
                    <BookCard
                        title="New System of Chemical Philosophy"
                        author="John Dalton"
                        description="A work laying the foundations of atomic theory and the chemical elements."
                    />
                    <BookCard
                        title="Essay on the Manner of Determining the Relative Masses of the Elementary Molecules of Bodies"
                        author="Amedeo Avogadro"
                        description="An essay introducing Avogadro's hypothesis regarding molecular composition."
                    />
                    <BookCard
                        title="Théorie analytique de la chaleur"
                        author="Joseph Fourier"
                        description="A mathematical study of heat conduction and the basis for the Fourier series."
                    />
                    <BookCard
                        title="The Chemical History of a Candle"
                        author="Michael Faraday"
                        description="A series of lectures exploring the principles of combustion and chemical reactions."
                    />
                    <BookCard
                        title="The Periodic Law of the Chemical Elements"
                        author="Dmitri Mendeleyev"
                        description="An introduction to the periodic table and the periodic law governing chemical elements."
                    />
                    <BookCard
                        title="Elements of the Mathematical Theory of Electricity and Magnetism"
                        author="J. J. Thomson"
                        description="A work detailing the mathematical foundations of electromagnetism."
                    />
                    <BookCard
                        title="General Chemistry"
                        author="Linus Pauling"
                        description="An influential textbook covering the fundamentals of chemistry."
                    />
                    <BookCard
                        title="Micrographia"
                        author="Robert Hooke"
                        description="A pioneering work in microscopy, providing detailed illustrations and descriptions of minute organisms."
                    />
                    <BookCard
                        title="Experiments on Plant Hybridization"
                        author="Gregor Mendel"
                        description="The foundational work of genetics, detailing Mendel's experiments on pea plants."
                    />
                    <BookCard
                        title="Genetics and the Origin of Species"
                        author="Theodosius Dobzhansky"
                        description="A seminal work in the field of evolutionary biology and the modern synthesis."
                    />
                    <BookCard
                        title="The Ants"
                        author="Edward O. Wilson"
                        description="A comprehensive study of ants, covering their behavior, ecology, and evolution."
                    />
                    <BookCard
                        title="The Cell: A Molecular Approach"
                        author="Geoffrey M. Cooper and Robert E. Hausman"
                        description="A detailed textbook on cellular biology, focusing on molecular mechanisms and cell function."
                    />
                    <BookCard
                        title="The Wealth of Nations"
                        author="Adam Smith"
                        description="A foundational text in economics, introducing the concept of the free market and division of labor."
                    />
                    <BookCard
                        title="Principles of Economics"
                        author="Carl Menger"
                        description="A foundational text in the Austrian School of economics, focusing on value theory."
                    />
                    <BookCard
                        title="A Treatise on Money"
                        author="John Maynard Keynes"
                        description="An exploration of monetary theory and its impact on economic fluctuations."
                    />
                    <BookCard
                        title="The General Theory of Employment, Interest and Money"
                        author="John Maynard Keynes"
                        description="A foundational work in macroeconomics, introducing concepts like aggregate demand and government intervention."
                    />
                    <BookCard
                        title="The Road to Serfdom"
                        author="Friedrich Hayek"
                        description="An influential critique of socialism and government planning, advocating for free markets."
                    />
                    <BookCard
                        title="Economics in One Lesson"
                        author="Henry Hazlitt"
                        description="A primer on economic principles, emphasizing the unseen consequences of economic policies."
                    />
                    <BookCard
                        title="Foundations of Economic Analysis"
                        author="Paul Samuelson"
                        description="A work laying the mathematical foundations for modern economic theory."
                    />
                    <BookCard
                        title="Human Action: A Treatise on Economics"
                        author="Ludwig von Mises"
                        description="A comprehensive text on praxeology and Austrian economics, emphasizing human choice and action."
                    />
                    <BookCard
                        title="Capitalism and Freedom"
                        author="Milton Friedman"
                        description="An exploration of the relationship between economic freedom and political freedom."
                    />
                    <BookCard
                        title="A Monetary History of the United States"
                        author="Milton Friedman"
                        description="A detailed analysis of the history of monetary policy in the United States."
                    />
                    <BookCard
                        title="Advances in Financial Machine Learning"
                        author="Marcos Lopez de Prado"
                        description="A book on applying machine learning techniques to financial markets and trading."
                    />
                    <BookCard
                        title="Capitalism in America: A History"
                        author="Alan Greenspan"
                        description="A comprehensive history of capitalism in the United States, co-authored with Adrian Wooldridge."
                    />
                    <BookCard
                        title="Big Debt Crises"
                        author="Ray Dalio"
                        description="A detailed examination of economic crises caused by high levels of debt."
                    />
                    <BookCard
                        title="Computer Networks"
                        author="Andrew S. Tanenbaum"
                        description="A classic textbook on computer networking, covering protocols, technologies, and architectures."
                    />
                    <BookCard
                        title="Operating System Concepts"
                        author="Abraham Silberschatz, Peter Galvin, and Greg Gagne"
                        description="A widely used textbook on operating system principles and design."
                    />
                    <BookCard
                        title="Compilers: Principles, Techniques, and Tools"
                        author="Alfred V. Aho, Ravi Sethi, and Jeffrey D. Ullman"
                        description="A comprehensive guide to compiler design, also known as the 'Dragon Book.'"
                    />
                    <BookCard
                        title="Introduction to Algorithms"
                        author="Cormen, Leiserson, Rivest, Stein"
                        description="A foundational textbook on algorithms, widely used in computer science education."
                    />
                    <BookCard
                        title="The Elements of Computing Systems"
                        author="Noam Nisan and Shimon Schocken"
                        description="A textbook on computer architecture and systems, providing a hands-on approach to building a computer from scratch."
                    />
                    <BookCard
                        title="Judgment Under Uncertainty: Heuristics and Biases"
                        author="Daniel Kahneman"
                        description="A collection of papers on cognitive biases and heuristics in decision-making."
                    />
                    <BookCard
                        title="Thinking and Deciding"
                        author="Jonathan Baron"
                        description="A comprehensive overview of decision-making processes, emphasizing rationality and cognitive psychology."
                    />
                    <BookCard
                        title="Science and Human Behavior"
                        author="B. F. Skinner"
                        description="A foundational text in behaviorism, exploring the principles of operant conditioning and human behavior."
                    />
                    <BookCard
                        title="Records of the Grand Historian"
                        author="Sima Qian"
                        description="A comprehensive historical record of ancient China, covering events from the earliest times to the Han dynasty."
                    />
                    <BookCard
                        title="The History of Rome"
                        author="Livy"
                        description="A detailed history of Rome, from its founding to the early empire."
                    />
                    <BookCard
                        title="The Jewish War and Antiquities of the Jews"
                        author="Flavius Josephus"
                        description="A history of the Jewish people and their conflicts with the Roman Empire."
                    />
                    <BookCard
                        title="The Annals and The Histories"
                        author="Tacitus"
                        description="A detailed account of the Roman Empire from the death of Augustus to the First Jewish–Roman War."
                    />
                    <BookCard
                        title="The Book of Han"
                        author="Ban Gu"
                        description="An official history of the Western Han dynasty, covering political, economic, and cultural developments."
                    />
                    <BookCard
                        title="The History of the Franks"
                        author="Gregory of Tours"
                        description="A comprehensive history of the Frankish people, focusing on their conversion to Christianity and early medieval society."
                    />
                    <BookCard
                        title="The Ecclesiastical History of the English People"
                        author="Bede"
                        description="A history of the Christian church in England, covering the period from the Roman occupation to the 8th century."
                    />
                    <BookCard
                        title="Anglo-Saxon Chronicle"
                        author="Unknown"
                        description="A collection of annals chronicling the history of the Anglo-Saxons in England."
                    />
                    <BookCard
                        title="The Alexiad"
                        author="Anna Komnene"
                        description="A history of the Byzantine Empire during the reign of Alexios I Komnenos, written by his daughter."
                    />
                    <BookCard
                        title="The Muqaddimah"
                        author="Ibn Khaldun"
                        description="A foundational work in historiography and sociology, discussing the philosophy of history and civilization."
                    />
                    <BookCard
                        title="The History of the World"
                        author="Walter Raleigh"
                        description="A comprehensive history of the world from creation to the Roman Empire, written by an English explorer and historian."
                    />
                    <BookCard
                        title="The Decline and Fall of the Roman Empire"
                        author="Edward Gibbon"
                        description="A detailed account of the history of the Roman Empire from its height to its fall."
                    />
                    <BookCard
                        title="The Chronicle of the Discovery and Conquest of Guinea"
                        author="Gomes Eanes de Zurara"
                        description="A historical account of Portuguese exploration and conquest in West Africa."
                    />
                    <BookCard
                        title="The Rise and Fall of the Third Reich"
                        author="William L. Shirer"
                        description="A comprehensive history of Nazi Germany, from its rise to power to its ultimate defeat."
                    />
                    <BookCard
                        title="Weapons Systems and Political Stability: A History"
                        author="Carroll Quigley"
                        description="A historical analysis of the relationship between weapons systems and political power."
                    />
                    <BookCard
                        title="Energy and Civilization: A History"
                        author="Vaclav Smil"
                        description="A comprehensive history of how energy sources have shaped human civilization and technological development."
                    />
                    <BookCard
                        title="Meno"
                        author="Plato"
                        description="A Socratic dialogue exploring the nature of virtue and whether it can be taught."
                    />
                    <BookCard
                        title="Politics"
                        author="Aristotle"
                        description="A philosophical work examining the nature of the city-state, citizenship, and the best forms of government."
                    />
                    <BookCard
                        title="Discourse on Method"
                        author="René Descartes"
                        description="A foundational text in modern philosophy, discussing the method of doubt and the search for foundational truths."
                    />
                    <BookCard
                        title="An Essay Concerning Human Understanding"
                        author="John Locke"
                        description="A work exploring the nature of human knowledge and the limits of human understanding."
                    />
                    <BookCard
                        title="The Spirit of the Laws"
                        author="Montesquieu"
                        description="A foundational work in political theory, discussing the separation of powers and the nature of law."
                    />
                    <BookCard
                        title="The Encyclopédie"
                        author="Denis Diderot"
                        description="An Enlightenment-era compendium of knowledge and ideas, promoting reason, science, and skepticism."
                    />
                    <BookCard
                        title="Critique of Pure Reason"
                        author="Immanuel Kant"
                        description="A seminal work in philosophy, examining the nature of knowledge and the limitations of human cognition."
                    />
                    <BookCard
                        title="Fear and Trembling"
                        author="Søren Kierkegaard"
                        description="A philosophical exploration of faith, ethics, and the story of Abraham and Isaac."
                    />
                    <BookCard
                        title="The Dawn of Day (Daybreak)"
                        author="Friedrich Nietzsche"
                        description="A philosophical work discussing morality, religion, and human psychology."
                    />
                    <BookCard
                        title="Liberalism"
                        author="Ludwig von Mises"
                        description="A work advocating for classical liberal principles, including free markets, limited government, and individual liberty."
                    />
                    <BookCard
                        title="Anarchy, State, and Utopia"
                        author="Robert Nozick"
                        description="A work in political philosophy arguing for a minimal state and exploring the principles of justice."
                    />
                    <BookCard
                        title="Simulacra and Simulation"
                        author="Jean Baudrillard"
                        description="A philosophical exploration of reality, representation, and hyperreality in contemporary society."
                    />
                    <BookCard
                        title="The Oresteia"
                        author="Aeschylus"
                        description="A trilogy of Greek tragedies that explores themes of justice, revenge, and the evolution of legal systems."
                    />
                    <BookCard
                        title="Ajax"
                        author="Sophocles"
                        description="A Greek tragedy focusing on the hero Ajax's descent into madness and its aftermath."
                    />
                    <BookCard
                        title="Prometheus Bound"
                        author="Aeschylus"
                        description="A Greek tragedy about the Titan Prometheus, who is punished by Zeus for giving fire to humanity."
                    />
                    <BookCard
                        title="Bacchae"
                        author="Euripides"
                        description="A Greek tragedy depicting the arrival of Dionysus in Thebes and the subsequent frenzy that engulfs the city."
                    />
                    <BookCard
                        title="Metamorphoses"
                        author="Ovid"
                        description="A narrative poem that chronicles the history of the world from creation to Julius Caesar, focusing on transformation."
                    />
                    <BookCard
                        title="The Golden Ass"
                        author="Apuleius"
                        description="A novel that tells the story of a man transformed into a donkey and his journey to regain human form."
                    />
                    <BookCard
                        title="Beowulf"
                        author="Unknown"
                        description="An Old English epic poem recounting the heroic deeds of Beowulf, a warrior who battles monsters and dragons."
                    />
                    <BookCard
                        title="Le Morte d'Arthur"
                        author="Sir Thomas Malory"
                        description="A compilation of Arthurian legends, focusing on the rise and fall of King Arthur and the Knights of the Round Table."
                    />
                    <BookCard
                        title="Gargantua and Pantagruel"
                        author="François Rabelais"
                        description="A series of five novels about the adventures of two giants, Gargantua and his son Pantagruel, filled with satire and humor."
                    />
                    <BookCard
                        title="The Faerie Queene"
                        author="Edmund Spenser"
                        description="An epic poem celebrating the virtues of the chivalric order and allegorically representing the Tudor dynasty."
                    />
                    <BookCard
                        title="Tristram Shandy"
                        author="Laurence Sterne"
                        description="A novel that employs a unique narrative style to tell the story of Tristram Shandy's life and opinions."
                    />
                    <BookCard
                        title="Eugene Onegin"
                        author="Alexander Pushkin"
                        description="A novel in verse that tells the story of a young aristocrat and his fateful encounters with love and duels."
                    />
                    <BookCard
                        title="Bleak House"
                        author="Charles Dickens"
                        description="A novel that critiques the British legal system through the story of a long-running court case and its impact on multiple characters."
                    />
                    <BookCard
                        title="Madame Bovary"
                        author="Gustave Flaubert"
                        description="A novel about a provincial doctor's wife who seeks escape from her mundane life through love affairs and luxury."
                    />
                    <BookCard
                        title="War and Peace"
                        author="Leo Tolstoy"
                        description="An epic novel that interweaves the lives of several families during the Napoleonic Wars."
                    />
                    <BookCard
                        title="Les Misérables"
                        author="Victor Hugo"
                        description="A novel that explores the struggles of ex-convict Jean Valjean and others in post-revolutionary France."
                    />
                    <BookCard
                        title="Middlemarch"
                        author="George Eliot"
                        description="A novel exploring the lives, relationships, and social dynamics of a fictional English town in the early 19th century."
                    />
                    <BookCard
                        title="The Portrait of a Lady"
                        author="Henry James"
                        description="A novel about an American woman who travels to Europe and faces complex choices about her freedom and relationships."
                    />
                    <BookCard
                        title="Three Sisters"
                        author="Anton Chekhov"
                        description="A play that explores the lives of three sisters living in a provincial Russian town and their dreams of returning to Moscow."
                    />
                    <BookCard
                        title="Ulysses"
                        author="James Joyce"
                        description="A modernist novel that parallels the structure of Homer's Odyssey, set in Dublin over the course of a single day."
                    />
                    <BookCard
                        title="The Waste Land"
                        author="T. S. Eliot"
                        description="A modernist poem that reflects the disillusionment of post-World War I society."
                    />
                    <BookCard
                        title="The Trial"
                        author="Franz Kafka"
                        description="A novel about a man who is arrested and prosecuted by a mysterious authority without ever being told the nature of his crime."
                    />
                    <BookCard
                        title="In Search of Lost Time"
                        author="Marcel Proust"
                        description="A novel that explores memory, time, and human experience through the narrator's reflections on his past."
                    />
                    <BookCard
                        title="The Sound and the Fury"
                        author="William Faulkner"
                        description="A novel that employs stream-of-consciousness narration to depict the decline of a Southern family."
                    />
                    <BookCard
                        title="Lolita"
                        author="Vladimir Nabokov"
                        description="A controversial novel about a man's obsession with a young girl, exploring themes of manipulation and obsession."
                    />
                    <BookCard
                        title="The Name of the Rose"
                        author="Umberto Eco"
                        description="A historical mystery novel set in a 14th-century monastery, involving a series of murders and a secretive library."
                    />
                    <BookCard
                        title="Infinite Jest"
                        author="David Foster Wallace"
                        description="A complex novel that explores addiction, entertainment, and society in a dystopian future."
                    />
                    <BookCard
                        title="Elements"
                        author="Euclid"
                        description="A mathematical treatise that lays the foundational principles of geometry."
                    />
                    <BookCard
                        title="Philosophiæ Naturalis Principia Mathematica"
                        author="Isaac Newton"
                        description="A work establishing the laws of motion and universal gravitation, forming the basis of classical mechanics."
                    />
                    <BookCard
                        title="On the Origin of Species"
                        author="Charles Darwin"
                        description="A groundbreaking work introducing the theory of evolution by natural selection."
                    />
                    <BookCard
                        title="A Course of Pure Mathematics"
                        author="G. H. Hardy"
                        description="A textbook that influenced the teaching of mathematics, focusing on rigorous methods."
                    />
                    <BookCard
                        title="Relativity: The Special and General Theory"
                        author="Albert Einstein"
                        description="An introduction to the theories of special and general relativity."
                    />
                    <BookCard
                        title="Theory of Games and Economic Behavior"
                        author="John von Neumann"
                        description="A foundational text in game theory, exploring mathematical strategies in economics and social sciences."
                    />
                    <BookCard
                        title="The Mathematical Theory of Communication"
                        author="Claude E. Shannon"
                        description="A work that laid the foundation for information theory and its applications in communication."
                    />
                    <BookCard
                        title="Mathematics and Plausible Reasoning"
                        author="George Pólya"
                        description="A book on heuristic methods and the principles of mathematical reasoning."
                    />
                    <BookCard
                        title="The Foundations of Statistics"
                        author="Leonard J. Savage"
                        description="A work discussing the theoretical foundations of statistical inference."
                    />
                    <BookCard
                        title="The Feynman Lectures on Physics"
                        author="Richard Feynman"
                        description="A comprehensive series of lectures covering fundamental physics concepts, delivered by a renowned physicist."
                    />
                    <BookCard
                        title="The Art of Computer Programming"
                        author="Donald Knuth"
                        description="A comprehensive multi-volume work on algorithms and computer science."
                    />
                    <BookCard
                        title="Differential Equations with Applications and Historical Notes"
                        author="George Simmons"
                        description="A textbook on differential equations, combining theory, applications, and historical context."
                    />
                    <BookCard
                        title="Sociobiology"
                        author="Edward O. Wilson"
                        description="A work that explores the biological basis of social behavior across species, including humans."
                    />
                    <BookCard
                        title="The Selfish Gene"
                        author="Richard Dawkins"
                        description="A book that popularized the gene-centered view of evolution, introducing concepts like the 'selfish gene' and memes."
                    />
                    <BookCard
                        title="Gödel, Escher, Bach"
                        author="Douglas Hofstadter"
                        description="A work exploring the connections between the works of Gödel, Escher, and Bach, and their implications for cognition and self-reference."
                    />
                    <BookCard
                        title="PiHKAL: A Chemical Love Story"
                        author="Alexander Shulgin and Ann Shulgin"
                        description="A book combining an autobiography with a detailed exploration of psychoactive substances."
                    />
                    <BookCard
                        title="Nonlinear Dynamics and Chaos"
                        author="Steven Strogatz"
                        description="An introduction to the concepts of nonlinear dynamics and chaos theory, with applications in various fields."
                    />
                    <BookCard
                        title="Linear Algebra Done Right"
                        author="Sheldon Axler"
                        description="A textbook on linear algebra focusing on vector spaces and linear transformations without relying on determinants."
                    />
                    <BookCard
                        title="Probability Theory: The Logic of Science"
                        author="E. T. Jaynes"
                        description="A book advocating for the Bayesian interpretation of probability theory as a form of logic."
                    />
                    <BookCard
                        title="The Art of Doing Science and Engineering: Learning to Learn"
                        author="Richard Hamming"
                        description="A collection of insights and advice on scientific research and problem-solving, based on Hamming's lectures."
                    />
                    <BookCard
                        title="Visual Complex Analysis"
                        author="Tristan Needham"
                        description="A visual and intuitive approach to complex analysis, emphasizing geometric interpretations."
                    />
                    <BookCard
                        title="Causality: Models, Reasoning, and Inference"
                        author="Judea Pearl"
                        description="A book on the theory of causality and its applications in statistics, machine learning, and artificial intelligence."
                    />
                    <BookCard
                        title="The Road to Reality"
                        author="Roger Penrose"
                        description="A comprehensive guide to the laws of the universe, combining physics and mathematics."
                    />
                    <BookCard
                        title="Prediction, Learning, and Games"
                        author="Nicolo Cesa-Bianchi and Gábor Lugosi"
                        description="A textbook on machine learning, game theory, and online decision-making."
                    />
                    <BookCard
                        title="Analysis, Volume I"
                        author="Terence Tao"
                        description="An introductory textbook on mathematical analysis, focusing on rigorous proofs and fundamental concepts."
                    />
                    <BookCard
                        title="Deep Learning"
                        author="Ian Goodfellow, Yoshua Bengio, and Aaron Courville"
                        description="A comprehensive textbook on deep learning, covering theory, algorithms, and applications."
                    />
                    <BookCard
                        title="History of the Peloponnesian War"
                        author="Thucydides"
                        description="An account of the Peloponnesian War between Athens and Sparta, providing insight into the politics and warfare of ancient Greece."
                    />
                    <BookCard
                        title="Histories"
                        author="Herodotus"
                        description="A collection of historical accounts and cultural studies of the ancient world, often considered the first work of history in Western literature."
                    />
                    <BookCard
                        title="The Gallic Wars"
                        author="Julius Caesar"
                        description="Julius Caesar's firsthand account of his military campaigns in Gaul, providing insight into Roman warfare and politics."
                    />
                    <BookCard
                        title="Parallel Lives"
                        author="Plutarch"
                        description="A series of biographies of famous Greek and Roman figures, highlighting their moral character and leadership qualities."
                    />
                    <BookCard
                        title="The Travels of Marco Polo"
                        author="Marco Polo"
                        description="An account of Marco Polo's travels through Asia, offering a glimpse into the cultures and landscapes of the medieval East."
                    />
                    <BookCard
                        title="The Descent of Man, and Selection in Relation to Sex"
                        author="Charles Darwin"
                        description="Darwin's exploration of human evolution and the role of sexual selection in shaping human behavior and traits."
                    />
                    <BookCard
                        title="The Structure of Scientific Revolutions"
                        author="Thomas S. Kuhn"
                        description="A groundbreaking work on the history and philosophy of science, introducing the concept of paradigm shifts."
                    />
                    <BookCard
                        title="The Lessons of History"
                        author="Will Durant"
                        description="A concise summary of major themes in history, drawn from the authors' comprehensive study of civilization."
                    />
                    <BookCard
                        title="The Making of the Atomic Bomb"
                        author="Richard Rhodes"
                        description="A detailed history of the development of the atomic bomb, focusing on the science, politics, and personalities involved."
                    />
                    <BookCard
                        title="Guns, Germs, and Steel: The Fates of Human Societies"
                        author="Jared Diamond"
                        description="An exploration of the environmental and geographical factors that have shaped the development of human societies."
                    />
                    <BookCard
                        title="Genghis Khan and the Making of the Modern World"
                        author="Jack Weatherford"
                        description="A biography of Genghis Khan, examining his impact on world history and the formation of modern civilization."
                    />
                    <BookCard
                        title="The Great Stagnation"
                        author="Tyler Cowen"
                        description="An analysis of the economic slowdown in the developed world, exploring its causes and potential solutions."
                    />
                    <BookCard
                        title="Energy: A Beginner’s Guide"
                        author="Vaclav Smil"
                        description="An introduction to the science of energy, covering its history, types, and the role it plays in human civilization."
                    />
                    <BookCard
                        title="The Age of Em: Work, Love, and Life when Robots Rule the Earth"
                        author="Robin Hanson"
                        description="A speculative exploration of a future dominated by brain emulations, examining their impact on society and economy."
                    />
                    <BookCard
                        title="Influence: Science and Practice"
                        author="Robert B. Cialdini"
                        description="A comprehensive guide to the psychology of persuasion, detailing six key principles that influence human behavior."
                    />
                    <BookCard
                        title="The Society of Mind"
                        author="Marvin Minsky"
                        description="A book exploring the theory that human intelligence emerges from the interactions of simple cognitive processes."
                    />
                    <BookCard
                        title="The Foundations of Causal Decision Theory"
                        author="James M. Joyce"
                        description="An exploration of decision theory, focusing on how causality affects rational decision-making."
                    />
                    <BookCard
                        title="Thinking in Systems: A Primer"
                        author="Donella Meadows"
                        description="An introduction to systems thinking, providing tools and concepts for understanding complex systems and their behaviors."
                    />
                    <BookCard
                        title="Nudge: Improving Decisions About Health, Wealth, and Happiness"
                        author="Richard Thaler"
                        description="A book on behavioral economics, advocating for 'nudges' to help people make better decisions."
                    />
                    <BookCard
                        title="Sapiens: A Brief History of Humankind"
                        author="Yuval Noah Harari"
                        description="A narrative history of humankind from the emergence of Homo sapiens to the present, exploring cultural and social evolution."
                    />
                    <BookCard
                        title="Antifragile: Things That Gain from Disorder"
                        author="Nassim Nicholas Taleb"
                        description="A book discussing how systems and individuals can thrive and grow stronger from volatility and stress."
                    />
                    <BookCard
                        title="The Power of Habit: Why We Do What We Do in Life and Business"
                        author="Charles Duhigg"
                        description="An exploration of the science of habits and how understanding them can lead to positive change in personal and professional life."
                    />
                    <BookCard
                        title="Superintelligence: Paths, Dangers, Strategies"
                        author="Nick Bostrom"
                        description="A book examining the potential future of artificial intelligence and the risks it poses to humanity."
                    />
                    <BookCard
                        title="Superforecasting: The Art and Science of Prediction"
                        author="Dan Gardner and Philip E. Tetlock"
                        description="A book on the techniques and practices of accurate forecasting in uncertain environments."
                    />
                    <BookCard
                        title="Homo Deus: A Brief History of Tomorrow"
                        author="Yuval Noah Harari"
                        description="A speculative exploration of the future of humanity, focusing on technological and social developments."
                    />
                    <BookCard
                        title="Behave: The Biology of Humans at Our Best and Worst"
                        author="Robert Sapolsky"
                        description="A comprehensive exploration of the biological and environmental factors influencing human behavior."
                    />
                    <BookCard
                        title="Are We Smart Enough to Know How Smart Animals Are?"
                        author="Frans de Waal"
                        description="A book examining the cognitive abilities of animals and what they reveal about human intelligence."
                    />
                    <BookCard
                        title="The Elephant in the Brain: Hidden Motives in Everyday Life"
                        author="Kevin Simler and Robin Hanson"
                        description="An exploration of the hidden motives behind human behavior, suggesting that much of what we do is driven by self-interest."
                    />
                    <BookCard
                        title="How to Actually Change Your Mind"
                        author="Eliezer Yudkossky"
                        description="A book on rational thinking and decision-making, focusing on changing beliefs in the face of new evidence."
                    />
                    <BookCard
                        title="Map and Territory"
                        author="Eliezer Yudkowsky"
                        description="A collection of essays on rationality, exploring how our mental maps can more accurately reflect reality."
                    />
                    <BookCard
                        title="Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts"
                        author="Annie Duke"
                        description="A guide to decision-making under uncertainty, using lessons from poker to improve judgment and risk assessment."
                    />
                    <BookCard
                        title="The Epic of Gilgamesh"
                        author="Unknown"
                        description="An ancient Mesopotamian epic poem that explores themes of friendship, mortality, and the quest for immortality."
                    />
                    <BookCard
                        title="Old Testament"
                        author="Various Authors"
                        description="A collection of ancient texts central to Judaism and Christianity, covering history, law, prophecy, and poetry."
                    />
                    <BookCard
                        title="Theogony / Works and Days"
                        author="Hesiod"
                        description="Two ancient Greek poems exploring the origins of the gods and practical wisdom for daily life."
                    />
                    <BookCard
                        title="Antigone"
                        author="Sophocles"
                        description="A Greek tragedy that explores themes of state versus individual, family loyalty, and divine law."
                    />
                    <BookCard
                        title="Medea"
                        author="Euripides"
                        description="A Greek tragedy that tells the story of Medea's revenge against her unfaithful husband, Jason."
                    />
                    <BookCard
                        title="Oedipus Rex"
                        author="Sophocles"
                        description="A Greek tragedy that examines fate, free will, and the consequences of knowledge as Oedipus discovers his tragic destiny."
                    />
                    <BookCard
                        title="Aeneid"
                        author="Virgil"
                        description="An epic poem that tells the story of Aeneas's journey from Troy to Italy, where he becomes the ancestor of the Romans."
                    />
                    <BookCard
                        title="New Testament"
                        author="Various Authors"
                        description="A collection of Christian texts describing the life and teachings of Jesus and the early Church."
                    />
                    <BookCard
                        title="Divine Comedy"
                        author="Dante Alighieri"
                        description="An epic poem describing Dante's journey through Hell, Purgatory, and Paradise, exploring themes of sin, redemption, and divine justice."
                    />
                    <BookCard
                        title="The Decameron"
                        author="Giovanni Boccaccio"
                        description="A collection of 100 tales told by a group of young people sheltering from the Black Death, exploring themes of love, intelligence, and wit."
                    />
                    <BookCard
                        title="The Canterbury Tales"
                        author="Geoffrey Chaucer"
                        description="A collection of stories told by pilgrims on their way to Canterbury, offering a vivid portrayal of 14th-century English society."
                    />
                    <BookCard
                        title="Utopia"
                        author="Thomas More"
                        description="A work of political philosophy describing a fictional island society and its religious, social, and political customs."
                    />
                    <BookCard
                        title="Julius Caesar"
                        author="William Shakespeare"
                        description="A historical tragedy exploring the political conspiracy against Julius Caesar, his assassination, and its aftermath."
                    />
                    <BookCard
                        title="Don Quixote"
                        author="Miguel de Cervantes"
                        description="A novel about a nobleman who reads too many chivalric romances and sets out to revive knighthood, leading to comical adventures."
                    />
                    <BookCard
                        title="Macbeth"
                        author="William Shakespeare"
                        description="A tragedy that explores ambition, power, and guilt as Macbeth murders his way to the throne of Scotland."
                    />
                    <BookCard
                        title="Hamlet"
                        author="William Shakespeare"
                        description="A tragedy that delves into themes of revenge, madness, and moral corruption as Prince Hamlet seeks to avenge his father's murder."
                    />
                    <BookCard
                        title="Paradise Lost"
                        author="John Milton"
                        description="An epic poem that retells the Biblical story of the Fall of Man, exploring themes of free will, obedience, and redemption."
                    />
                    <BookCard
                        title="The Sorrows of Young Werther"
                        author="Johann Wolfgang von Goethe"
                        description="A novel that explores the theme of unrequited love and the emotional turmoil of its protagonist, Werther."
                    />
                    <BookCard
                        title="Faust"
                        author="Johann Wolfgang von Goethe"
                        description="A dramatic work exploring the themes of ambition, knowledge, and the quest for meaning through the story of Faust's pact with the devil."
                    />
                    <BookCard
                        title="Pride and Prejudice"
                        author="Jane Austen"
                        description="A novel of manners that critiques the British class system through the romantic entanglements of Elizabeth Bennet and Mr. Darcy."
                    />
                    <BookCard
                        title="Frankenstein"
                        author="Mary Shelley"
                        description="A novel about a scientist who creates a sentient creature, exploring themes of ambition, humanity, and the consequences of playing God."
                    />
                    <BookCard
                        title="The Hunchback of Notre-Dame"
                        author="Victor Hugo"
                        description="A novel set in medieval Paris, focusing on the tragic life of Quasimodo, the deformed bell-ringer of Notre-Dame Cathedral."
                    />
                    <BookCard
                        title="Jane Eyre"
                        author="Charlotte Brontë"
                        description="A novel following the life of Jane Eyre, an orphan who becomes a governess and falls in love with her mysterious employer."
                    />
                    <BookCard
                        title="Wuthering Heights"
                        author="Emily Brontë"
                        description="A gothic novel exploring the intense, often destructive relationship between Heathcliff and Catherine Earnshaw."
                    />
                    <BookCard
                        title="The Scarlet Letter"
                        author="Nathaniel Hawthorne"
                        description="A novel set in Puritan New England, focusing on the themes of sin, guilt, and redemption through the story of Hester Prynne."
                    />
                    <BookCard
                        title="David Copperfield"
                        author="Charles Dickens"
                        description="A semi-autobiographical novel chronicling the life, adventures, and personal growth of the protagonist, David Copperfield."
                    />
                    <BookCard
                        title="Song of Myself"
                        author="Walt Whitman"
                        description="A poem that celebrates individuality, the human spirit, and the interconnectedness of all life, from Whitman's collection 'Leaves of Grass.'"
                    />
                    <BookCard
                        title="Crime and Punishment"
                        author="Fyodor Dostoevsky"
                        description="A psychological novel about a young man, Raskolnikov, who commits a murder and deals with the moral and psychological repercussions."
                    />
                    <BookCard
                        title="Anna Karenina"
                        author="Leo Tolstoy"
                        description="A novel that explores the complexities of love, family, and society through the tragic life of Anna Karenina."
                    />
                    <BookCard
                        title="The Brothers Karamazov"
                        author="Fyodor Dostoevsky"
                        description="A novel exploring themes of faith, free will, and morality through the turbulent lives of the Karamazov family."
                    />
                    <BookCard
                        title="The Death of Ivan Ilyich"
                        author="Leo Tolstoy"
                        description="A novella that examines the existential questions surrounding life, death, and the search for meaning."
                    />
                    <BookCard
                        title="The Time Machine"
                        author="H.G. Wells"
                        description="A science fiction novella about a time traveler who explores the distant future and reflects on the fate of humanity."
                    />
                    <BookCard
                        title="Heart of Darkness"
                        author="Joseph Conrad"
                        description="A novella that delves into the darkness of the human psyche and the brutality of colonialism in Africa."
                    />
                    <BookCard
                        title="The Metamorphosis"
                        author="Franz Kafka"
                        description="A novella about a man who transforms into a giant insect, exploring themes of alienation and the absurdity of human existence."
                    />
                    <BookCard
                        title="The Sun Also Rises"
                        author="Ernest Hemingway"
                        description="A novel about a group of expatriates in the 1920s who travel from Paris to Spain, exploring themes of disillusionment and the 'Lost Generation.'"
                    />
                    <BookCard
                        title="Brave New World"
                        author="Aldous Huxley"
                        description="A dystopian novel depicting a future society driven by technological advancements, consumerism, and a lack of individuality."
                    />
                    <BookCard
                        title="The Grapes of Wrath"
                        author="John Steinbeck"
                        description="A novel that follows the struggles of the Joad family as they migrate westward during the Great Depression, highlighting social and economic issues."
                    />
                    <BookCard
                        title="The Stranger"
                        author="Albert Camus"
                        description="A novel exploring existentialism and absurdism through the story of Meursault, a man who commits a senseless murder."
                    />
                    <BookCard
                        title="Animal Farm"
                        author="George Orwell"
                        description="An allegorical novella that critiques totalitarianism through a tale of a group of farm animals who overthrow their human owner."
                    />
                    <BookCard
                        title="A Streetcar Named Desire"
                        author="Tennessee Williams"
                        description="A play about the mental and emotional struggles of Blanche DuBois, set in the French Quarter of New Orleans."
                    />
                    <BookCard
                        title="Walden Two"
                        author="B. F. Skinner"
                        description="A novel about a fictional utopian community based on behavioral engineering and the principles of positive reinforcement."
                    />
                    <BookCard
                        title="1984"
                        author="George Orwell"
                        description="A dystopian novel depicting a totalitarian regime that uses surveillance, censorship, and psychological manipulation to maintain power."
                    />
                    <BookCard
                        title="Invisible Man"
                        author="Ralph Ellison"
                        description="A novel about an unnamed black man who struggles with identity and invisibility in a racially divided society."
                    />
                    <BookCard
                        title="Lord of the Flies"
                        author="William Golding"
                        description="A novel that explores the descent into savagery of a group of boys stranded on an uninhabited island."
                    />
                    <BookCard
                        title="Atlas Shrugged"
                        author="Ayn Rand"
                        description="A novel that explores Rand's philosophy of Objectivism through a dystopian narrative of economic collapse and industrial strikes."
                    />
                    <BookCard
                        title="Do Androids Dream of Electric Sheep?"
                        author="Philip K. Dick"
                        description="A science fiction novel that inspired the film 'Blade Runner,' exploring themes of humanity and artificial intelligence."
                    />
                    <BookCard
                        title="The Master and Margarita"
                        author="Mikhail Bulgakov"
                        description="A novel that combines political satire with supernatural elements, critiquing Soviet society and exploring themes of good and evil."
                    />
                    <BookCard
                        title="Slaughterhouse-Five"
                        author="Kurt Vonnegut"
                        description="A science fiction-infused anti-war novel that follows Billy Pilgrim, a soldier who becomes 'unstuck in time' during World War II."
                    />
                    <BookCard
                        title="The Ones Who Walk Away from Omelas"
                        author="Ursula K. Le Guin"
                        description="A short story that presents a utopian city with a dark secret, exploring themes of morality and societal sacrifice."
                    />
                    <BookCard
                        title="Blood Meridian"
                        author="Cormac McCarthy"
                        description="A novel set in the American West, exploring themes of violence and the human condition through the journey of 'the Kid.'"
                    />
                    <BookCard
                        title="Diaspora"
                        author="Greg Egan"
                        description="A hard science fiction novel that explores post-human futures, artificial intelligence, and the nature of consciousness."
                    />
                    <BookCard
                        title="Accelerando"
                        author="Charles Stross"
                        description="A science fiction novel exploring the acceleration of technological development and its impact on human society."
                    />
                    <BookCard
                        title="Blindsight"
                        author="Peter Watts"
                        description="A science fiction novel that explores themes of consciousness, identity, and the limits of human understanding."
                    />
                    <BookCard
                        title="The Road"
                        author="Cormac McCarthy"
                        description="A post-apocalyptic novel following a father and son's journey across a desolate landscape, exploring themes of survival and hope."
                    />
                    <BookCard
                        title="The Intelligent Investor"
                        author="Benjamin Graham"
                        description="A classic guide to value investing, emphasizing long-term strategies for maximizing returns while minimizing risk."
                    />
                    <BookCard
                        title="Portfolio Selection: Efficient Diversification of Investments"
                        author="Harry Markowitz"
                        description="A foundational work on modern portfolio theory, introducing the concept of efficient diversification in investment portfolios."
                    />
                    <BookCard
                        title="Beat the Market: A Scientific Stock Market System"
                        author="Edward O. Thorp"
                        description="A book that introduces mathematical strategies for beating the stock market, including the use of options and convertible arbitrage."
                    />
                    <BookCard
                        title="A Random Walk Down Wall Street"
                        author="Burton G. Malkiel"
                        description="A book promoting the efficient-market hypothesis and advising individual investors to use passive, low-cost index funds."
                    />
                    <BookCard
                        title="The Alchemy of Finance"
                        author="George Soros"
                        description="An exploration of financial markets and investing strategies, introducing Soros's theory of reflexivity and its impact on markets."
                    />
                    <BookCard
                        title="The Essays of Warren Buffett"
                        author="Warren Buffett"
                        description="A collection of letters and writings by Warren Buffett, providing insights into his investment philosophy and management style."
                    />
                    <BookCard
                        title="Pioneering Portfolio Management: An Unconventional Approach to Institutional Investment"
                        author="David F. Swensen"
                        description="A guide to managing institutional investment portfolios, focusing on asset allocation and diversification strategies."
                    />
                    <BookCard
                        title="Irrational Exuberance"
                        author="Robert J. Shiller"
                        description="An analysis of market bubbles and economic behavior, discussing the psychological and structural factors that drive asset prices."
                    />
                    <BookCard
                        title="The Misbehavior of Markets: A Fractal View of Financial Turbulence"
                        author="Benoit B. Mandelbrot"
                        description="A book that challenges traditional financial theories, proposing a fractal model for understanding market volatility and risk."
                    />
                    <BookCard
                        title="Inside the Black Box: The Simple Truth about Quantitative Trading"
                        author="Rishi K. Narang"
                        description="An overview of quantitative trading strategies and techniques, explaining how they are used by hedge funds and institutional investors."
                    />
                    <BookCard
                        title="Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist"
                        author="Brad Feld and Jason Mendelson"
                        description="A guide to venture capital deals, providing insights on negotiating terms and understanding the venture financing process."
                    />
                    <BookCard
                        title="The Dao of Capital"
                        author="Mark Spitznagel"
                        description="A book on investing that combines the Austrian school of economics with the principles of value investing and risk management."
                    />
                    <BookCard
                        title="Adaptive Markets: Financial Evolution at the Speed of Thought"
                        author="Andrew Lo"
                        description="A book that integrates insights from evolutionary biology and cognitive neuroscience to explain the behavior of financial markets."
                    />
                    <BookCard
                        title="How the Economic Machine Works"
                        author="Ray Dalio"
                        description="A guide explaining the principles of macroeconomic cycles and how they influence economic policy and financial markets."
                    />
                    <BookCard
                        title="The Laws of Trading: A Trader's Guide to Better Decision-Making for Everyone"
                        author="Agustin Lebron"
                        description="A book offering practical advice for traders, focusing on decision-making and risk management strategies."
                    />
                    <BookCard
                        title="Personal Memoirs of Ulysses S. Grant"
                        author="Ulysses S. Grant"
                        description="The personal memoirs of Ulysses S. Grant, providing insights into his life, military career, and leadership during the Civil War."
                    />
                    <BookCard
                        title="The Autobiography of Andrew Carnegie and The Gospel of Wealth"
                        author="Andrew Carnegie"
                        description="The autobiography of Andrew Carnegie, detailing his rise from poverty to industrial tycoon, alongside his views on wealth and philanthropy."
                    />
                    <BookCard
                        title="My Life and Work"
                        author="Henry Ford"
                        description="An autobiography by Henry Ford that shares his journey in revolutionizing the automobile industry and his business philosophy."
                    />
                    <BookCard
                        title="Man’s Search for Meaning"
                        author="Viktor E. Frankl"
                        description="A memoir and psychological exploration of finding purpose and meaning in life, based on Frankl's experiences in Nazi concentration camps."
                    />
                    <BookCard
                        title="The Double Helix"
                        author="James Watson"
                        description="A first-person account of the discovery of the structure of DNA, revealing the scientific process and personal dynamics behind the breakthrough."
                    />
                    <BookCard
                        title="Alexander the Great"
                        author="Robin Lane Fox"
                        description="A biography of Alexander the Great, exploring his military conquests, leadership, and the impact he left on the ancient world."
                    />
                    <BookCard
                        title="The Power Broker: Robert Moses and the Fall of New York"
                        author="Robert A. Caro"
                        description="A biography of Robert Moses, a powerful urban planner, and his influence on New York City's development and politics."
                    />
                    <BookCard
                        title="Surely You’re Joking, Mr. Feynman!: Adventures of a Curious Character"
                        author="Richard Feynman"
                        description="A collection of humorous and insightful anecdotes from the life of Richard Feynman, a Nobel Prize-winning physicist."
                    />
                    <BookCard
                        title="Hard Drive: Bill Gates and the Making of the Microsoft Empire"
                        author="James Wallace"
                        description="A biography of Bill Gates, detailing the rise of Microsoft and Gates' journey from a young entrepreneur to a tech mogul."
                    />
                    <BookCard
                        title="When Genius Failed: The Rise and Fall of Long-Term Capital Management"
                        author="Roger Lowenstein"
                        description="An account of the rise and dramatic collapse of Long-Term Capital Management, a hedge fund that shook the financial world."
                    />
                    <BookCard
                        title="John Adams"
                        author="David McCullough"
                        description="A biography of John Adams, the second President of the United States, exploring his life, political career, and legacy."
                    />
                    <BookCard
                        title="Moneyball: The Art of Winning an Unfair Game"
                        author="Michael Lewis"
                        description="A book about the Oakland Athletics' use of data-driven decision-making to build a competitive baseball team on a budget."
                    />
                    <BookCard
                        title="Team of Rivals: The Political Genius of Abraham Lincoln"
                        author="Doris Kearns Goodwin"
                        description="A biography of Abraham Lincoln, focusing on his leadership style and his relationships with his cabinet members during the Civil War."
                    />
                    <BookCard
                        title="Einstein: His Life and Universe"
                        author="Walter Isaacson"
                        description="A comprehensive biography of Albert Einstein, detailing his scientific achievements, personal life, and influence on the 20th century."
                    />
                    <BookCard
                        title="More Money Than God: Hedge Funds and the Making of a New Elite"
                        author="Sebastian Mallaby"
                        description="An exploration of the history and strategies of hedge funds, examining how they have shaped the financial industry."
                    />
                    <BookCard
                        title="The Quants: How a New Breed of Math Whizzes Conquered Wall Street and Nearly Destroyed It"
                        author="Scott Patterson"
                        description="A book about the rise of quantitative analysts in Wall Street and their impact on the financial markets, leading to the 2008 crisis."
                    />
                    <BookCard
                        title="The Alpha Masters: Unlocking the Genius of the World's Top Hedge Funds"
                        author="Maneet Ahuja"
                        description="A book profiling some of the most successful hedge fund managers, revealing their strategies and investment philosophies."
                    />
                    <BookCard
                        title="Thomas Jefferson: The Art of Power"
                        author="Jon Meacham"
                        description="A biography of Thomas Jefferson, exploring his political acumen, philosophical beliefs, and influence on American history."
                    />
                    <BookCard
                        title="The Physics of Wall Street: A Brief History of Predicting the Unpredictable"
                        author="James Owen Weatherall"
                        description="A book exploring the application of physics and mathematics in financial markets, tracing the history of financial modeling."
                    />
                    <BookCard
                        title="The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
                        author="Ben Horowitz"
                        description="A book offering practical advice on building and managing a startup, drawing on the author's experience as a tech entrepreneur."
                    />
                    <BookCard
                        title="Flash Boys: A Wall Street Revolt"
                        author="Michael Lewis"
                        description="An investigation into high-frequency trading on Wall Street, highlighting the ethical implications and impact on the financial system."
                    />
                    <BookCard
                        title="Hillbilly Elegy: A Memoir of a Family and Culture in Crisis"
                        author="J.D. Vance"
                        description="A memoir that examines the decline of the white working class in America through the author's personal experiences and family history."
                    />
                    <BookCard
                        title="A Man for All Markets"
                        author="Edward O. Thorp"
                        description="A memoir by Edward Thorp, detailing his career as a mathematician, investor, and inventor of card-counting in blackjack."
                    />
                    <BookCard
                        title="Principles: Life and Work"
                        author="Ray Dalio"
                        description="A book outlining the personal and professional principles that guided Ray Dalio's success as the founder of Bridgewater Associates."
                    />
                    <BookCard
                        title="Bad Blood: Secrets and Lies in a Silicon Valley Startup"
                        author="John Carreyrou"
                        description="An investigative account of the rise and fall of Theranos, a biotech startup that deceived investors and put patients at risk."
                    />
                    <BookCard
                        title="The Man Who Solved the Market: How Jim Simons Launched the Quant Revolution"
                        author="Gregory Zuckerman"
                        description="A biography of Jim Simons, the founder of Renaissance Technologies, detailing his development of quantitative trading strategies."
                    />
                    <BookCard
                        title="Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell"
                        author="Alan Eagle, Eric Schmidt, and Jonathan Rosenberg"
                        description="A book about Bill Campbell's coaching philosophy and its impact on the leaders of Silicon Valley's most successful companies."
                    />
                    <BookCard
                        title="Genesis: Translation and Commentary"
                        author="Moses & Robert Alter"
                        description="A modern translation and commentary on the first book of the Bible, offering insights into its literary and theological dimensions."
                    />
                    <BookCard
                        title="The Art of War"
                        author="Sun Tzu"
                        description="An ancient Chinese military treatise that offers strategic advice and philosophy on warfare and conflict management."
                    />
                    <BookCard
                        title="Tao Te Ching"
                        author="Laozi"
                        description="A foundational Taoist text that explores the principles of Taoism, emphasizing harmony with nature and the path of the Tao."
                    />
                    <BookCard
                        title="The Republic"
                        author="Plato"
                        description="A Socratic dialogue that explores justice, the ideal state, and the role of the philosopher in society."
                    />
                    <BookCard
                        title="Nicomachean Ethics"
                        author="Aristotle"
                        description="A philosophical exploration of virtue and the good life, discussing moral character and ethical decision-making."
                    />
                    <BookCard
                        title="De rerum natura"
                        author="Lucretius"
                        description="A philosophical poem that explains Epicurean philosophy and the nature of the universe, advocating for a life free from fear."
                    />
                    <BookCard
                        title="Selected Works"
                        author="Cicero"
                        description="A collection of speeches, letters, and philosophical writings by Cicero, offering insights into Roman politics and philosophy."
                    />
                    <BookCard
                        title="Meditations"
                        author="Marcus Aurelius"
                        description="A series of personal reflections by the Roman Emperor on Stoic philosophy, exploring themes of virtue, wisdom, and self-discipline."
                    />
                    <BookCard
                        title="Confessions"
                        author="Augustine"
                        description="An autobiographical work that details Augustine's spiritual journey and conversion to Christianity, reflecting on sin and grace."
                    />
                    <BookCard
                        title="The Consolation of Philosophy"
                        author="Boethius"
                        description="A philosophical dialogue written in prison, exploring issues of fortune, happiness, and the nature of good and evil."
                    />
                    <BookCard
                        title="Essays"
                        author="Michel de Montaigne"
                        description="A collection of essays exploring a wide range of topics, offering personal reflections and insights into human nature and society."
                    />
                    <BookCard
                        title="Principles of Philosophy"
                        author="René Descartes"
                        description="A foundational text in modern philosophy, presenting Descartes' metaphysical and epistemological theories, including 'Cogito, ergo sum.'"
                    />
                    <BookCard
                        title="Leviathan"
                        author="Thomas Hobbes"
                        description="A work of political philosophy that argues for a strong central authority to avoid the chaos of the state of nature."
                    />
                    <BookCard
                        title="The Second Treatise of Government"
                        author="John Locke"
                        description="A foundational text in political theory, advocating for natural rights, the social contract, and the separation of powers."
                    />
                    <BookCard
                        title="The Social Contract"
                        author="Jean-Jacques Rousseau"
                        description="A work on political philosophy that explores the concept of general will and argues for a society governed by a social contract."
                    />
                    <BookCard
                        title="The Communist Manifesto"
                        author="Friedrich Engels and Karl Marx"
                        description="A political pamphlet advocating for the overthrow of capitalist systems and the establishment of a classless society."
                    />
                    <BookCard
                        title="Walden; or, Life in the Woods"
                        author="Henry David Thoreau"
                        description="A reflection on simple living and self-sufficiency, based on Thoreau's experience living in a cabin near Walden Pond."
                    />
                    <BookCard
                        title="That Which Is Seen and That Which Is Not Seen"
                        author="Frédéric Bastiat"
                        description="An essay on economic theory, discussing the unseen consequences of economic decisions and government interventions."
                    />
                    <BookCard
                        title="Utilitarianism"
                        author="John Stuart Mill"
                        description="A philosophical work defending the principle of utility, advocating for actions that promote the greatest happiness for the greatest number."
                    />
                    <BookCard
                        title="Walking"
                        author="Henry David Thoreau"
                        description="An essay that reflects on the importance of nature and walking as a form of spiritual and physical rejuvenation."
                    />
                    <BookCard
                        title="Thus Spoke Zarathustra"
                        author="Friedrich Nietzsche"
                        description="A philosophical novel presenting Nietzsche's ideas on the Übermensch, eternal recurrence, and the death of God."
                    />
                    <BookCard
                        title="Beyond Good and Evil"
                        author="Friedrich Nietzsche"
                        description="A philosophical work challenging traditional morality and advocating for a revaluation of values based on individual strength and creativity."
                    />
                    <BookCard
                        title="The Antichrist"
                        author="Friedrich Nietzsche"
                        description="A critique of Christianity and its moral framework, advocating for a return to more naturalistic values."
                    />
                    <BookCard
                        title="Civilization and Its Discontents"
                        author="Sigmund Freud"
                        description="A psychoanalytic exploration of the tension between individual desires and the demands of civilization."
                    />
                    <BookCard
                        title="A Theory of Justice"
                        author="John Rawls"
                        description="A work of political philosophy proposing a theory of justice based on fairness, equality, and the 'veil of ignorance.'"
                    />
                    <BookCard
                        title="Beyond Freedom and Dignity"
                        author="B. F. Skinner"
                        description="A book advocating for the application of behavioral science to address social issues and improve human welfare."
                    />
                    <BookCard
                        title="A Conflict of Visions: Ideological Origins of Political Struggles"
                        author="Thomas Sowell"
                        description="An analysis of the ideological foundations of political beliefs, examining how different 'visions' shape policy preferences."
                    />
                </div>
            </main>

            <Footer />
        </div>
    )
}

interface BookCardProps {
    title: string;
    author: string;
    description: string;
}

function BookCard({ title, author, description }: BookCardProps) {
    return (
        <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
                <p className="text-gray-400 mb-4">by {author}</p>
                <p className="text-gray-300">{description}</p>
            </CardContent>
        </Card>
    )
}