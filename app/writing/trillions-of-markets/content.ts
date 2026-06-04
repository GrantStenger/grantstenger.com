// Generated from the standalone Trillions of Markets HTML launch artifact.
// Keep the prose and route-specific visual system colocated so the published page stays faithful to the canonical essay.

export const coaseanEssayStyles = String.raw`@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap");

.coaseanEssay{
    --paper:#f7f3ea;
    --paper-deep:#f0eadd;
    --ink:#1d1916;
    --ink-soft:#544c42;
    --ink-faint:#857a6c;
    --accent:#933420;
    --accent-deep:#6f2615;
    --rule:#d8cfbd;
    --measure:42rem;
  }
  .coaseanEssay *{box-sizing:border-box;}
  .coaseanEssay{
    margin:0;
    background:var(--paper);
    color:var(--ink);
    font-family:"Newsreader",Georgia,serif;
    font-optical-sizing:auto;
    font-size:1.24rem;
    line-height:1.66;
    font-weight:400;
    min-height:100vh;
    width:100%;
    position:relative;
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  /* faint paper grain */
  .coaseanEssay::before{
    content:"";
    position:fixed;
    inset:0;
    z-index:0;
    pointer-events:none;
    opacity:.035;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  /* scroll progress */
  .coasean-progress{
    position:fixed;top:0;left:0;height:3px;width:0%;
    background:var(--accent);z-index:50;transition:width .08s linear;
  }
  .coaseanEssay .wrap{position:relative;z-index:1;max-width:var(--measure);margin:0 auto;padding:0 1.4rem;}

  /* ---- masthead ---- */
  .coaseanEssay header.masthead{
    max-width:var(--measure);margin:0 auto;padding:7.5rem 1.4rem 1.2rem;
    position:relative;z-index:1;
    animation:rise 1s ease both;
  }
  @keyframes rise{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:none;}}
  .coaseanEssay .kicker{
    font-family:"Fraunces",serif;font-size:.82rem;letter-spacing:.32em;text-transform:uppercase;
    font-weight:500;color:var(--accent);margin:0 0 1.7rem;
  }
  .coaseanEssay h1{
    font-family:"Fraunces",serif;
    font-weight:500;
    font-size:clamp(2.9rem,8vw,4.7rem);
    line-height:1.0;
    letter-spacing:-.012em;
    margin:0 0 1.1rem;
    font-optical-sizing:auto;
  }
  .coaseanEssay .dek{
    font-family:"Newsreader",serif;font-style:italic;
    font-size:clamp(1.25rem,3.4vw,1.6rem);line-height:1.4;
    color:var(--ink-soft);font-weight:400;margin:0 0 2.1rem;max-width:32rem;
  }
  .coaseanEssay .byline{
    font-family:"Fraunces",serif;font-size:.96rem;letter-spacing:.02em;color:var(--ink);
    border-top:1px solid var(--rule);padding-top:1rem;
  }
  .coaseanEssay .byline a{color:var(--ink);border-bottom-color:rgba(29,25,22,.28);}
  .coaseanEssay .byline a:hover{border-bottom-color:var(--ink);}
  .coaseanEssay .byline span{color:var(--ink-faint);}

  .coaseanEssay main{position:relative;z-index:1;}

  /* ---- sections ---- */
  .coaseanEssay section{max-width:var(--measure);margin:0 auto;padding:0 1.4rem;}
  .coaseanEssay .num{
    font-family:"Fraunces",serif;font-size:.78rem;letter-spacing:.3em;text-transform:uppercase;
    color:var(--accent);font-weight:600;display:block;margin:3.6rem 0 .5rem;
  }
  .coaseanEssay h2{
    font-family:"Fraunces",serif;font-weight:500;font-size:clamp(1.7rem,4.6vw,2.25rem);
    line-height:1.1;letter-spacing:-.01em;margin:0 0 1.5rem;
  }
  .coaseanEssay p{margin:0 0 1.32rem;}
  .coaseanEssay .lede{margin-top:1.15rem;}
  .coaseanEssay .lede::first-letter{
    font-family:"Fraunces",serif;
    float:left;font-size:4.6rem;line-height:.74;font-weight:500;
    padding:.34rem .55rem 0 0;color:var(--accent-deep);
  }
  .coaseanEssay em,.coaseanEssay i{font-style:italic;}
  .coaseanEssay strong{font-weight:500;}
  .coaseanEssay a{color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(147,52,32,.32);}
  .coaseanEssay a:hover{border-bottom-color:var(--accent);}

  .coaseanEssay .technical{
    font-size:1.03rem;
    line-height:1.48;
    color:var(--ink-faint);
    font-style:italic;
    margin:1.75rem 0 1.4rem;
  }
  .coaseanEssay .technical a{color:var(--accent-deep);border-bottom-color:rgba(111,38,21,.28);}
  .coaseanEssay .technical a:hover{border-bottom-color:var(--accent-deep);}

  /* pull quote */
  .coaseanEssay blockquote.pull{
    margin:2.6rem 0;padding:0;border:0;
    font-family:"Fraunces",serif;font-style:italic;font-weight:400;
    font-size:clamp(1.5rem,3.8vw,1.95rem);line-height:1.28;
    color:var(--accent-deep);
    text-align:center;
  }
  .coaseanEssay blockquote.pull::before{content:"";display:block;width:46px;height:2px;background:var(--accent);margin:0 auto 1.4rem;}
  .coaseanEssay blockquote.pull::after{content:"";display:block;width:46px;height:2px;background:var(--accent);margin:1.4rem auto 0;}

  /* predictions list */
  .coaseanEssay ol.predict{list-style:none;counter-reset:p;margin:1.5rem 0 1.4rem;padding:0;}
  .coaseanEssay ol.predict li{
    counter-increment:p;position:relative;padding:1.05rem 0 1.05rem 0;
    border-top:1px solid var(--rule);
  }
  .coaseanEssay ol.predict li:last-child{border-bottom:1px solid var(--rule);}
  .coaseanEssay ol.predict .yr{
    font-family:"Fraunces",serif;font-weight:600;color:var(--accent);
    font-size:.82rem;letter-spacing:.16em;text-transform:uppercase;display:block;margin-bottom:.25rem;
  }
  .coaseanEssay ol.predict li p{margin:0;font-size:1.13rem;line-height:1.5;}

  /* the series / endnotes */
  .coaseanEssay .series{
    max-width:var(--measure);margin:4rem auto 0;padding:2.4rem 1.4rem 6rem;
  }
  .coaseanEssay .series .rule-top{border-top:2px solid var(--ink);padding-top:1.8rem;}
  .coaseanEssay .series h3{
    font-family:"Fraunces",serif;font-weight:600;font-size:.82rem;letter-spacing:.28em;
    text-transform:uppercase;color:var(--ink);margin:0 0 .4rem;
  }
  .coaseanEssay .series .intro{font-size:1.05rem;color:var(--ink-soft);font-style:italic;margin:0 0 1.6rem;max-width:34rem;}
  .coaseanEssay ol.papers{list-style:none;counter-reset:pp;margin:0;padding:0;}
  .coaseanEssay ol.papers li{
    counter-increment:pp;padding:.95rem 0 .95rem 3rem;position:relative;
    border-top:1px solid var(--rule);font-size:1.05rem;line-height:1.45;
  }
  .coaseanEssay ol.papers li::before{
    content:counter(pp,upper-roman);
    position:absolute;left:0;top:.95rem;
    font-family:"Fraunces",serif;font-weight:600;color:var(--accent);font-size:1rem;letter-spacing:.05em;
  }
  .coaseanEssay ol.papers .pt,
  .coaseanEssay ol.papers a.pt:visited{
    font-family:"Fraunces",serif;font-weight:500;color:var(--ink);font-style:italic;
    border-bottom-color:rgba(29,25,22,.28);
  }
  .coaseanEssay ol.papers a.pt:hover{color:var(--ink);border-bottom-color:var(--ink);}
  .coaseanEssay ol.papers .pd{color:var(--ink-faint);}
  .coaseanEssay .colophon{
    font-family:"Fraunces",serif;font-size:.85rem;color:var(--ink-faint);letter-spacing:.04em;
    margin-top:2.2rem;font-style:italic;
  }

  .coaseanEssay ::selection{background:var(--accent);color:var(--paper);}

  @media (max-width:560px){
    .coaseanEssay{font-size:1.16rem;line-height:1.62;}
    .coaseanEssay header.masthead{padding-top:4.5rem;}
    .coaseanEssay .lede::first-letter{font-size:3.8rem;}
  }`

export const coaseanEssayHtml = String.raw`<header class="masthead">
  <p class="kicker">Essay · June 2026</p>
  <h1 aria-label="Trillions of Markets">Trillions<br aria-hidden="true"> of Markets</h1>
  <p class="dek">Why a collapse in the cost of making almost anything tradable produces not thousands of markets but trillions, and what that does to the people inside them.</p>
  <p class="byline"><a href="https://www.grantstenger.com/">Grant Stenger</a> <span>&nbsp;·&nbsp; June 2026</span></p>
</header>

<main>

<section>
  <span class="num">I · The Market Was Never a Place</span>
  <p class="lede">There was a time when “the market” meant a room. A pit in Chicago, a ring in London, a floor in New York where people in bright jackets shouted prices into the air as if civilization turned on whether wheat closed up three cents. Markets were loud, physical, countable things. You could point at one. You could regulate the room and tally the goods inside it: corn, oil, gold, the shares of the largest firms, the debt of the most creditworthy states.</p>
  <p>Then markets became screens. Then screens became APIs. Then the APIs acquired agents. And somewhere in there the line between “the market” and “the world” got hard to draw, because the thing in the room had never been the market in the first place. The room was scaffolding. The market was the <em>procedure</em> the room performed: take a claim on some uncertain future, find someone who values it differently, agree on a price, settle. A pit is one way to run that procedure. It was the expensive interface we built when matching, trust, and settlement were hard.</p>
  <p>Follow that reframing to its conclusion and the central fact about markets stops being architecture or regulation and becomes <em>cost</em>: how expensive it is to specify a claim, read the world, find a counterparty, quote a price, and move the money. For all of recorded history that cost was high, so the procedure was rationed to risks large enough to amortize it. That era is ending. The cost is falling on every margin at once, and when it does the procedure stops being a place you go and becomes something closer to a utility: ambient, mostly silent, running on everything.</p>
  <blockquote class="pull">A pit was not the market. It was the market’s expensive interface.</blockquote>
</section>

<section>
  <span class="num">II · The Thesis</span>
  <h2>One inequality, and the resolution of reality</h2>
  <p>Start with the inequality. <strong>A market appears wherever the surplus a creator can capture from intermediating an exposure exceeds the cost of defining, verifying, pricing, and settling the claim that carries it.</strong></p>
  <p>The sources of surplus are hedging, financing, speculation, price discovery, and allocation. The costs are specification, data, legal form, collateral, market-making, settlement, fraud, and disputes. For almost all of history the cost side won, so only the largest, most standardized risks ever cleared the bar: staple commodities, sovereign debt, the equity of great corporations. Everything else stayed trapped inside private ownership, opaque underwriting, or no transaction at all. The exposure was real. The market for it was priced out of existence by its own overhead.</p>
  <p>That inequality is not the novelty; it is the frame. The thesis is what happens when many of its cost terms collapse together: market creation stops moving one product at a time, liquidity starts scaling through shared risk engines instead of isolated crowds, and value migrates away from venues toward the machinery that verifies reality, routes trusted agents, and decomposes risk.</p>
  <p>The formal spine is a theory of market birth. Existing markets already span many payoff directions and leave others uncovered. A new claim matters when it adds a residual direction people actually want to trade, or when it gives them a cheaper, cleaner, deeper way to trade an exposure that was only theoretically available before. Its cost is not set by the payoff direction alone. It is set by the representation that delivers it: the index, oracle, legal wrapper, collateral rule, venue, and settlement procedure. Completion value lives on residual payoff directions; implementation cost lives on contractual representations. The future fills in not all imaginable claims, but the claims whose value finally exceeds their cost of representation.</p>
  <p>Ronald Coase gave the older name for this: transaction cost. His point was not that firms and markets are opposites, but that their boundary is set by the cost of using prices. When using prices is expensive, activity stays inside firms, long contracts, insurers, relationship networks, and balance sheets. When using prices gets cheap, the boundary moves outward. For most of a century it crept. The wager of this essay is that AI agents, programmable settlement, and better verification are making the price mechanism cheap enough that the boundary no longer creeps. It runs.</p>
  <p>There is a cleaner way to see what the cost collapse really does. The number of distinct prices an economy maintains is the <em>resolution</em> at which it renders its own reality: how finely it has chosen to measure and value the world. For all its screens and speed, finance still renders the world at astonishingly low resolution: a few thousand continuously quoted instruments standing in for the risk surface of eight billion people, hundreds of millions of firms, and a near-infinity of contingent futures.</p>
  <p>This is not a metaphor reaching for color. We have watched resolution increase before. When U.S. equity markets went from fractions to decimals in 2001, the minimum tick fell from an eighth of a dollar to a penny, spreads compressed, and prices got sharper overnight. That was a resolution increase on one axis of one market. The claim here is that the same increase is now coming on <em>every</em> axis of <em>every</em> market simultaneously: more instruments, finer claims, shorter horizons, more local contexts.</p>
  <p>By a market I do not mean a room, a venue, or a deep pool of attention. I mean a claim that can be continuously repriced: a payoff rule with enough specification, verification, collateral, and liquidity to quote it against the world.</p>
  <p>We will not reach the theorist's dream of a price for every possible state of the world; most of that space is unmeasurable, illegal, redundant, or uneconomic. But we will approach a vast admissible slice of it far faster than anyone schooled on the old cost structure expects. The point is not the exact exponent. It is that live, repricing claims stop being scarce exceptions and become a much denser layer over economic life.</p>
  <p class="technical"><em>Technical version: <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper1_costly_basis_incomplete_markets.pdf">The Costly Basis of Incomplete Markets</a> formalizes this as residual-span value, same-span rebasing value, and representation-dependent market-entry costs.</em></p>
  <blockquote class="pull">The number of prices an economy keeps is the resolution at which it renders reality. The resolution is about to increase by orders of magnitude.</blockquote>
</section>

<section>
  <span class="num">III · Why Now</span>
  <h2>Three costs fell below the line</h2>
  <p>The obvious objection deserves an answer before anything else, because it is the strongest one. You have described, the skeptic says, a forty-year decline in transaction costs: electronic trading, decimalization, the internet, the ETF. Why should this be anything more than another step along the same curve?</p>
  <p>The phase-change case rests on three different fixed costs crossing their thresholds in the same handful of years.</p>
  <p><strong>First, specification.</strong> Drafting and interpreting the contract that defines a claim used to require a securities lawyer per deal; language models make it nearly free, which collapses the legal and specification line items that gated the long tail.</p>
  <p><strong>Second, settlement.</strong> Programmable money turns the movement of value from a multi-day interbank choreography into a state transition, and pushes compliance (identity, eligibility, reporting) <em>inside</em> the transaction rather than alongside it. Sub-cent payments that were absurd to process are now ordinary.</p>
  <p><strong>Third, and most important, market-making.</strong> A claim with no natural crowd used to be unquotable; a software agent that can research, price, and stand as counterparty to a niche exposure at a fraction of a human's cost makes the long tail economic for the first time.</p>
  <p>Any one of these alone moves the boundary a little; the bottleneck simply shifts to whichever cost you didn't fix. A claim made cheap to specify may still be too expensive to settle; a claim made cheap to settle may still be impossible to verify; a claim made verifiable may still be too expensive to quote.</p>
  <p>The important case is complementarity. In a discrete listing universe, viable markets are threshold crossings: a claim either clears the bar or it does not. When many latent claims sit near that boundary and several necessary costs fall together, market creation can look discontinuous, not because demand suddenly appeared, but because many exposures cleared their bottlenecks at once.</p>
  <blockquote class="pull">When complementary costs cross thresholds together, latent markets clear the frontier in clusters.</blockquote>
</section>

<section>
  <span class="num">IV · The Demand Was Always There</span>
  <h2>The mystery is the under-hedging</h2>
  <p>It is tempting to frame all this as a story about future demand: exotic new markets people will someday want. That gets it backward. The mystery is not why there will be more hedging tomorrow. The mystery is why there is so little of it today.</p>
  <p>A homeowner insures the house but not the income that pays the mortgage. A restaurant that lives and dies by the price of beef and the weather on a Friday hedges neither. A creator whose entire livelihood rides on one platform's ranking algorithm holds that risk completely undiversified. A small business with one big customer, a worker with one employer, a town with one industry: all sit on large, perfectly nameable exposures and transfer almost none of them.</p>
  <p>A software engineer is long the technology labor market whether or not she thinks of herself that way. Her salary, equity, housing location, professional network, and startup options may all load on the same factor. A farmer can hedge crops; an airline can hedge fuel; a homeowner can insure against fire. But most workers cannot hedge the labor-market risk that dominates their lives. A higher-resolution financial system would begin with broad, privacy-preserving income indexes, not claims on one person's salary: occupation, region, industry, and tenure baskets that let people reduce concentrated exposure without selling control over themselves.</p>
  <p>This is Shiller's macro-markets observation in ordinary clothes: we have markets for comparatively narrow financial claims and almost no markets for many of the largest risks people actually bear. If trade in risk creates surplus, then the under-hedged world we actually live in is the anomaly that wants explaining.</p>
  <p>The answer is not that these people lack exposures worth transferring. They are drowning in them. The answer is that the cost of naming, verifying, pricing, collateralizing, and settling those exposures has, until now, exceeded the surplus from trading them. The trades that obviously should happen simply have not.</p>
  <p>Markets exist because people occupy different positions in the space of risk: different endowments, beliefs, tax situations, horizons, capacities to bear uncertainty. A claim that is a burden to one party is an asset to another. That heterogeneity has been true since the first farmer worried about the price his crop would fetch. What was missing was never the demand.</p>
  <blockquote class="pull">The demand was always there. The machinery was not.</blockquote>
</section>

<section>
  <span class="num">V · The Scale</span>
  <h2>The future holds trillions of markets</h2>
  <p>A few thousand live instruments cannot be the natural endpoint for a world with billions of people, hundreds of millions of firms and households, and measurable exposures that vary by entity, horizon, geography, trigger, wrapper, and basket. Once the cost of keeping a price falls far enough, the candidate surface grows combinatorially.</p>
  <p>Cost collapse does not create every possible market. It creates markets where some exposure is worth transferring, financing, pricing, discovering, or delivering through a cleaner tradable form. Most of that surface should never trade. Many possible claims are redundant with existing instruments. Many are too small to matter. Many cannot be verified. Many are illegal, manipulable, predatory, or socially destructive. The relevant object is the filtered space: claims that add a residual exposure existing markets do not already provide, or improve the way an existing exposure is traded, whose payoff can be verified, whose risk can be priced or hedged, whose legal wrapper can be enforced, and whose social consequences are admissible.</p>
  <p>The claim is that this filtered space can still be enormous. The future does not price every possible state of the world. It prices the subset whose value exceeds the cost of representation.</p>
  <p>Coarse categories give way to continuous prices wherever pricing gets cheap enough to keep. The AAA/AA/A buckets handed down by ratings oligopolies are the credit analog of trading in eighths: low-resolution stand-ins that continuous, machine-priced credit can erode the way the penny eroded the spread.</p>
  <blockquote class="pull">The future does not price everything. It prices the filtered slice: residual value over representation cost.</blockquote>
</section>

<section>
  <span class="num">VI · The Resolution Ladder</span>
  <h2>Which markets come first</h2>
  <p>New markets will not appear randomly. They will arrive in a predictable order.</p>
  <p>The first markets in a new exposure class are rarely the most precise ones. They are the cheapest useful approximations: broad enough to pool risk, objective enough to verify, standardized enough to list, and close enough to existing hedge instruments that someone can quote them. Only later, as data, collateral, legal templates, and market-making improve, does the market move down the resolution ladder toward bespoke claims.</p>
  <p>That is why a metro housing index comes before a derivative on one house; a private-company revenue basket before continuous single-company trading; a parametric fire or flood trigger before a fully bespoke indemnity market. It is the same pattern in the machine economy: platform-level creator-revenue baskets before lifetime income swaps on one creator, compute and energy benchmarks before individualized inference-capacity contracts, occupation-region income indexes before claims on one worker's salary.</p>
  <p>A worker's agent might notice that her income, housing, and portfolio all depend on the same technology cycle. It searches for a broad software-labor income hedge, checks the price and liquidity capacity, verifies that the claim settles on an audited occupation-region compensation index rather than personal data, and buys a small amount of protection. The market maker hedges the common part against public tech stocks, private-company revenue baskets, interest rates, and regional housing exposure, then warehouses only the residual. Settlement is automatic because the index and payment rail are built into the contract. The user never has to become a trader; the hedge runs as financial infrastructure.</p>
  <p>The pattern is not psychological. It is mechanical. A new market needs a value channel: it either adds a residual payoff direction that existing instruments do not already span, or gives people a cheaper, cleaner, deeper way to trade an exposure that was only available indirectly before. But the form that appears is determined by cost: which index, oracle, legal wrapper, collateral rule, and settlement system can deliver enough of the exposure cheaply enough to clear the viability threshold. The first market is often not the perfect claim. It is the cheapest basis that captures enough of the missing risk.</p>
  <p>That is why markets appear at particular moments in history: not when the exposure first exists, but when value, verification, standardization, law, and liquidity finally cross together.</p>
  <blockquote class="pull">Markets arrive first where the exposure is real, the fact is verifiable, the wrapper is standard, the hedge is nearby, and the law can tolerate it.</blockquote>
</section>

<section>
  <span class="num">VII · Why Fragmentation Is Not Fatal</span>
  <h2>Liquidity is manufactured, not found</h2>
  <p>Here is the objection a serious reader raises, and it is the right one. Liquidity is finite. Attention is finite. Capital is finite. If every tiny exposure gets its own market, liquidity shatters into a billion thin, manipulable pools and spreads blow out until no one trades. Trillions of markets, the argument runs, cannot <em>all</em> be liquid.</p>
  <p>Here precision helps. A market is born when a claim becomes executable; it becomes economically important when meaningful size can move through it at tolerable cost over a relevant horizon. A one-cent spread with one dollar behind it is not liquidity. The object is capacity: how much risk can actually be transferred before the price moves too much.</p>
  <p>This is decisive against a naive picture of markets and weak against the one actually arriving, because it assumes liquidity is something a crowd must already supply. It isn't. It is something a mechanism can manufacture.</p>
  <p>Most claims load on a small set of common risk factors (rates, sector demand, energy and freight, regional weather, a credit cycle) plus a residue that is specific to the claim. A market-maker holding a large, diversified book does not need natural two-sided flow in each name. It hedges the factor exposure in deep, liquid markets and warehouses only the idiosyncratic residue, which washes out across many positions by the same law of large numbers that lets an insurer cover a million uncorrelated houses.</p>
  <p>A dealer can quote a revenue claim on one restaurant by hedging it against a neighborhood-spending index, food-input prices, labor costs, and a basket of comparable restaurants, carrying only the part that is genuinely about <em>that</em> restaurant. This is precisely how options desks already quote thousands of strikes with little flow in any one of them.</p>
  <p>The consequence inverts the objection. <strong>The number of deep liquidity pools an economy must support scales with the number of hedgeable risk factors far more slowly than with the number of priced claims.</strong></p>
  <p>Capital and spreads still depend on the residual: covariance, one-sided flow, adverse selection, model error, and stress. But the future does not need trillions of deep pools of human attention. It needs a computational liquidity layer that maps idiosyncratic claims onto a shared, low-dimensional factor structure and warehouses what's left.</p>
  <p>And for the residue of pure-information claims with nothing to hedge against, a different trick works: a subsidized automated market-maker with a fixed, known maximum loss can quote a continuous price in a market that has no natural counterparty at all.</p>
  <p class="technical"><em>Technical version: the trilogy formalizes the three pieces: <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper1_costly_basis_incomplete_markets.pdf">The Costly Basis of Incomplete Markets</a> for residual value, representation cost, and liquidity capacity; <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper2_admissible_market_design.pdf">Admissible Market Design</a> for liquidity-source welfare; and <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper3_computational_market_creation.pdf">Computational Market Creation</a> for quote and search gates.</em></p>
  <blockquote class="pull">Fragmentation at the level of claims is consolidation at the level of risk.</blockquote>
</section>

<section>
  <span class="num">VIII · Three Ways to Make a Market</span>
  <h2>What separates a market from a casino</h2>
  <p>It is natural to ask of any new venue: is this risk transfer, price discovery, or just a liquid way to lose money? The framework above gives a useful answer: liquidity can be manufactured by hedging, by pooling, or by subsidy, and those regimes are not equally benign.</p>
  <p>The <strong>first</strong> is the dealer who hedges factors: takes on an idiosyncratic claim, lays off its common risk in deep markets, and keeps the residual.</p>
  <p>The <strong>second</strong> is the bookmaker or insurer who warehouses a large book of <em>mutually independent</em> bets and lets them net against one another. Here, strikingly, independence is the asset, not the problem: the more uncorrelated the flow, the better it diversifies, which is the exact opposite of the dealer's wish for common factors to offload.</p>
  <p>The <strong>third</strong> is the sponsor who simply pays to bring a price into existence, because the price itself is valuable to them even though they capture none of its use.</p>
  <p>The bookmaker's regime is the one most associated with “easy and profitable,” and the reason is uncomfortable but clarifying. It runs on <em>uninformed</em> flow. A book full of independent, non-toxic bets is a beautiful business right up until the flow turns informed, which is why bookmakers limit sharps and why the casino, whose customers can carry no private information about a roulette wheel, is the purest and most durable version of the form.</p>
  <p>That is also the tell for what makes a market good or bad. A market is <strong>good</strong> when its dominant flow is hedging and immediacy: risk moving from someone who must bear it to someone better able to hold it, both sides ending up better off in the only currency that matters, utility. It can also be good when the price it produces improves outside decisions, even for people who never trade.</p>
  <p>A market is <strong>bad</strong>, or at best a wash, when its dominant flow is disagreement-driven speculation with no underlying exposure, no offsetting consumption value, and no decision-improving price: a zero-sum transfer that produces no useful signal. Much recreational sports betting is the bad kind. So is the roulette wheel. The mathematics of liquidity does not care about the distinction. A casino can be exquisitely liquid, but the welfare of the people inside it depends on nothing else.</p>
  <p class="technical"><em>Technical version: <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper2_admissible_market_design.pdf">Admissible Market Design</a> separates welfare-improving risk transfer and price discovery from harmful speculation, manipulation, privacy loss, and systemic externality.</em></p>
  <blockquote class="pull">A market is good when it moves a risk to someone better able to bear it, and bad when it manufactures a risk no one needed to hold.</blockquote>
</section>

<section>
  <span class="num">IX · The Limits</span>
  <h2>The dual that turns light against itself</h2>
  <p>An honest version of this thesis has to confront the way its own central force runs in reverse. The story so far treats better information as purely market-creating: cheaper verification lowers cost, sharper signals close the gap that lets the informed fleece the uninformed. But information has a destructive dual, and it bites hardest at exactly the granular, well-predicted, idiosyncratic claims this essay is most excited about.</p>
  <p>The point is Hirshleifer's, and it is ruthless. If information arrives that resolves <em>which state will obtain</em> before the parties can trade the claim, the gains from trade evaporate; you cannot insure a house once everyone already knows whether it will burn. The distinction is timing. Verification at settlement creates markets: the model that tells whether the fire occurred after you bought the policy makes the contract cheap to write. Revelation before contracting destroys them: the model that tells everyone whose house will burn before anyone can buy insurance collapses the pool.</p>
  <p>An AI that prices your individual fire risk to three decimal places does not deepen your fire insurance. Past a point it <em>destroys</em> it. The premium converges to the now-known loss, and the entire rationale for pooling dissolves: none of us knows in advance which of us will be unlucky. Perfect foresight is not a complete market; it is no market, because risk requires the very ignorance that the technology is busy eliminating. The same engine that makes a trillion markets possible by making the world legible can, pushed far enough, extinguish the uncertainty those markets exist to trade.</p>
  <p>Adverse selection is the other limit, and it is the reason the long tail will not fill in evenly. Whoever sells a claim usually knows more about it than whoever buys, and when the informed side chooses what to offer and when, the pool skews toward the claims the seller is least sorry to part with. Pushed far enough, the discount this forces drives the good claims out of the market and the market with them. Akerlof's lemons are the single most common reason a market that obviously “should” exist does not.</p>
  <p>What saves it is verification, and the deep point is that the same infrastructure lowering the cost of building a market is what shrinks this informational wedge: the term and the cost fall together because they are the same technology. So the trillion-market world is not uniform. It is dense where verification is cheap: cash flows, objective triggers, postable collateral. It is sparse off that axis, in the country of soft information, pure reputation, and the one-shot deal. “Trade my reputation” remains, deservedly, the hardest case.</p>
  <blockquote class="pull">The force we are betting on can also burn the village it illuminates.</blockquote>
</section>

<section>
  <span class="num">X · The Great Convergence</span>
  <h2>Finance becomes a protocol layer</h2>
  <p>We treat prediction markets, insurance, and derivatives as separate institutions: one trades beliefs, one transfers losses, one moves state-contingent payoffs. Underneath those legal categories is a common structure: a payoff that depends on the state of the world. An event contract pays out on whether a proposition resolves true; an insurance policy pays a loss subject to a deductible and limit; a derivative pays a function of some future price. What separates them is regulation, accounting, and collateral convention, not mathematics. It follows that any infrastructure cheap enough to specify, verify, collateralize, and settle one of them expands all three at once.</p>
  <p>As the categories converge, finance stops looking like a sector and starts looking like a protocol layer for economic life: the plumbing for moving value across time, risk, and state of the world. The boundary between a “financial transaction” and an ordinary one blurs, because both are transfers of state-contingent value, and the cost of running one has fallen to where it can sit beneath almost any interaction.</p>
  <p>Seen from that layer, ordinary economic life reveals its financial shadow. A job is a stream of income. A commute is a portfolio of delays. A song is a stream of royalties. A warehouse is an options book on demand. A reputation is collateral; a forecast is inventory; a favor is a microcontract; a risk is an asset with a negative sign. The future does not invent these exposures. It makes the implicit explicit, turning whispers into bids and inconvenience into price.</p>
  <p class="technical"><em>Technical version: <a target="_blank" rel="noopener" href="/writing/trillion-markets/paper3_computational_market_creation.pdf">Computational Market Creation</a> treats agents, wrappers, oracles, collateral, and settlement rails as search variables that lower the minimum efficient transaction size.</em></p>
  <blockquote class="pull">A home is a levered claim on a school district, a fault line, and a fire season, with bedrooms attached.</blockquote>
</section>

<section>
  <span class="num">XI · The Dark Forest</span>
  <h2>The same wiring carries the cascade</h2>
  <p>Useful markets create welfare. They move risk, reveal prices, and finance activity that otherwise would not happen. But the same infrastructure that makes useful markets cheap can also make predation cheaper, contagion denser, and ordinary life harder to leave unpriced.</p>
  <p>The resolution metaphor is a useful lie until it breaks. It makes the dimensionality legible, but prices are not passive pixels on a photograph of the economy. At high enough density, the camera becomes an engine: measuring, ranking, collateralizing, and trading a thing changes the thing being measured.</p>
  <p>The first harm is predation. Where humans negotiated too slowly to prey on each other at scale, agents do not. A tiny trade with real surplus is destroyed if the expected skim exceeds it, and automated counterparties make that skim cheap to search for.</p>
  <p>The second is contagion. A world of trillions of cross-collateralized claims is densely wired, and dense wiring transmits shocks. The very architecture that makes the system possible, hedging idiosyncratic claims onto common factors, means a blow to one factor hits everything that loads on it at once, and cross-collateralized players forced to liquidate carry a local failure across nominally unrelated markets.</p>
  <p>There is a darker version still: if all the idiosyncratic residue gets warehoused by a handful of factor-liquidity engines, the system has dispersed everyday risk while quietly concentrating tail risk onto a few balance sheets. That is the structure of 2008, rebuilt at the scale of everything.</p>
  <p>The third harm is human rather than systemic. An economy in which every action carries a price demands relentless calculation, and there is real value in the things that are <em>not</em> for sale: courtesies with no meter running, relationships not continuously marked to market.</p>
  <p>As markets become ambient, the locus of oversight has to move with them: away from the regulation of <em>venues</em>, which assumes markets live in identifiable rooms, and toward the regulation of <em>claims</em>, which asks of any state-contingent transfer whether it is consensual, capped, disclosed, manipulation-resistant, and free of systemic externality. The room is gone. The questions remain.</p>
</section>

<section>
  <span class="num">XII · What To Watch</span>
  <h2>The future will arrive unevenly</h2>
  <p>The thesis does not require any particular calendar bet to be right. It does imply a pattern. If the cost of market creation is really falling, the first signs should appear where verification is cheap, wrappers can be standardized, existing deep markets can absorb much of the risk, and users already carry exposures they cannot easily hedge.</p>
  <p>Watch for agent-to-agent settlement standards that make tiny machine transactions economically ordinary, with real volume from services rather than speculation. Watch for prediction-market prices entering institutional decisions: procurement, risk committees, regulators, central banks, corporate planning. Watch for parametric insurance moving from broad catastrophe zones to specific structures, seasons, and events, priced by model and settled by oracle.</p>
  <p>Watch for standardized claims on private-company revenue, small-business revenue baskets, creator income, compute, energy, inference capacity, latency, and other exposures that are already economically real but not yet continuously priced. Watch for synthetic segment exposures that let investors trade pieces of firms without waiting for the firms to split themselves apart.</p>
  <p>And watch for the first scare. If long-tail claims are increasingly hedged through common factor engines and cross-collateralized balance sheets, then some markets that look independent will turn out to be wired together. The same architecture that makes the system more complete can also give it new paths for forced liquidation.</p>
</section>

<section>
  <span class="num">XIII · Where the Value Goes</span>
  <h2>Own the scarce input, not the venue</h2>
  <p>If the argument holds, the strategic implication is direct, and it is not where intuition points. The naive move is to build the next venue: another exchange, another listing, another order book. But a venue captures the surplus of the rung it sits on, and in a world of trillions of markets the marginal venue is worth almost nothing. Value accrues instead to whatever lowers a cost term across <em>many</em> markets at once, because that is what brings new markets into existence in the first place.</p>
  <p>State it as a law. As claim listing commoditizes, much of the surplus is competed away to users. The capturable rent migrates to scarce complementary inputs: verification, trusted agency, regulatory permission, collateral, balance sheet, execution, and the residual-risk engine.</p>
  <p>In the old world the scarce input was often the venue, because liquidity was concentrated in venues. In the new world venues commoditize, and the candidate chokepoints move <em>upstream</em> to verification: the infrastructure that turns messy reality into trustworthy, adjudicable inputs, which is simply the new underwriting; <em>sideways</em> to the agents that hold the user's trust and therefore sit at the chokepoint of enormous volume; and <em>inward</em> to the risk engine that prices and warehouses what is left after common factors are netted out.</p>
  <p>The risk engine is the hardest of these to commoditize. Many firms can name the factors; the scarce object is the proprietary comparables, residual data, balance sheet, and execution machinery to price and warehouse what remains. That looks less like an exchange than a quantitative market maker for the entire long tail.</p>
  <p>For the investor, the surface has two faces and both are the residual seen from opposite ends. The alpha is specialization: knowing the idiosyncratic part that the commoditized liquidity layer leaves unpriced and that adverse selection bites on; edge, in this world, is verifiable knowledge of the specific. The risk is its mirror: basis, model error, oracle failure, liquidity mirages, the cross-collateral cascade. The question stops being “do I like this asset” and becomes “which hidden factors am I warehousing, how crowded is the hedge, and which oracle can break me.”</p>
  <p>For the founder, the financing stack simply widens: finance a product line without selling equity, hedge your compute and component costs, insure your customer concentration, open an employee-liquidity pool long before any exit. The firm of the future is less a fortress of held assets than a continuously rebalanced portfolio of bought and sold exposures. Which is, in the end, what a quantitative hedge fund already is. The thesis of this essay is that the rest of the economy is about to look like one.</p>
  <blockquote class="pull">Own the scarce input, not the venue.</blockquote>
</section>

<section>
  <span class="num">XIV · The Ambient Market</span>
  <h2>Waiting to be priced</h2>
  <p>We began with a room, and we should end by admitting the room is not coming back. The market was somewhere you went — a pit, a floor, a terminal, an app — because the procedure it ran was expensive enough to concentrate in one place. Drive the cost of that procedure toward zero and it stops being a destination and becomes a medium. It does not open and close; it breathes.</p>
  <p>It is not a place you visit but a layer you live inside, mostly silent, transacting on your behalf in the background according to standing preferences you set once and revisit rarely: <em>save me money; preserve my privacy; never sell my location; hedge my mortgage; insure my income; sell my flexibility when the price is high; pay for urgency only when it truly matters; refuse markets in the things that should not be for sale.</em></p>
  <p>In that world people will not “trade” the way traders once did, hunched over screens. Their agents will run continuously, and the visible surface of finance will recede into infrastructure the way electricity and packet-switching did: everywhere, noticed almost nowhere. A market for a company. A market for a song's next million streams. A market for curb access during a delivery rush. A market for rainfall over one valley. A market for a dinner rush at a taco truck on one corner of one city. Trillions of them, flickering in and out of existence as needs arise, some lasting a century and some a second.</p>
  <p>The astonishing thing is not that these markets <em>will</em> exist. It is that, in the only sense that matters to the incentives, they already do: here now, in potential, trapped inside illiquidity, opacity, legal friction, and unpriced risk. Every private company already has cash flows. Every small business already has local demand. Every creator already has uncertain earnings; every household a thousand risks; every city scarce space it allocates badly; every person a constant traffic of implicit trades among money, convenience, privacy, attention, and time. None of it is waiting to be invented.</p>
  <p>It is waiting to be priced. The natural scale of markets is the natural scale of measurable economic exposure, and that scale is not small. It is combinatorial. It is trillions and trillions.</p>
</section>

<section class="series">
  <div class="rule-top">
    <h3>The Formal Series</h3>
    <p class="intro">This essay is the overview. The argument is developed rigorously across three working papers; the current drafts are linked below.</p>
    <ol class="papers">
      <li><a class="pt" target="_blank" rel="noopener" href="/writing/trillion-markets/paper1_costly_basis_incomplete_markets.pdf">The Costly Basis of Incomplete Markets.</a> <span class="pd">A theory of market birth: some markets create completion value by adding residual payoff directions existing markets fail to span, while others create rebasing value by making an already-spanned exposure cheaper, deeper, or easier to trade. This explains why coarse indexes, baskets, and standardized claims often appear before bespoke claims.</span></li>
      <li><a class="pt" target="_blank" rel="noopener" href="/writing/trillion-markets/paper2_admissible_market_design.pdf">Admissible Market Design.</a> <span class="pd">A theory of which cheap-to-create markets should exist: hedging demand versus belief-driven speculation, manipulation, privacy, human-capital claims, systemic externalities, and claim-level governance.</span></li>
      <li><a class="pt" target="_blank" rel="noopener" href="/writing/trillion-markets/paper3_computational_market_creation.pdf">Computational Market Creation.</a> <span class="pd">A theory of what AI agents change: as software lowers the cost of using the price mechanism, agents can search over exposures, wrappers, counterparties, hedges, and settlement rules, turning market creation from a manual institutional process into a computational one.</span></li>
    </ol>
    <p class="colophon">Grant Stenger · June 2026 · Working drafts linked above.</p>
  </div>
</section>

</main>`
