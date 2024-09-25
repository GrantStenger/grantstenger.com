// app/data/prisonersDilemmaContent.ts


export const prisonersDilemmaContent = {
    title: "A Case for Cooperation: Dependence in the Prisoner's Dilemma",
    excerpt: "The traditional analysis of the Prisoner's Dilemma suggests that defection is the rational strategy. This essay presents a counterargument advocating for the power of cooperation based on dependence and correlation among decisions.",
    content: `
*"The man who is cheerful and merry has always a good reason for being so,—the fact, namely, that he is so." The Wisdom of Life, Schopenhauer (1851)*

## TL;DR

Descriptions of the Prisoner's Dilemma typically suggest that the optimal policy for each prisoner is to selfishly defect instead of to cooperate. I disagree with the traditional analysis and present a case for cooperation.

The core issue is the assumption of independence between the players. Articulations of the game painstakingly describe how the prisoners are in explicitly separate cells with no possibility of communication. From this, it's assumed that one's action can have no causal effect on the decision of the other player. However, *(almost)* [everything is correlated](https://gwern.net/everything), and this significantly changes the analysis.

Imagine the case where the prisoners are clones and make exactly the same decision. Then, when they compare the expected payout for each possible action, their payout will be higher in the case where they cooperate because they are certain the other player is having the same thoughts and deterministically will make the same choice. This essay generalizes and formalizes this line of reasoning.

Here's what to expect in what follows. In the first section, we begin by introducing the standard causal decision theory analysis suggesting (Defect, Defect). Then, we introduce the machinery for mixed strategies in the following section. From there we discuss the particular case where both participants are clones, which motivates our new framework. Then, we introduce a bit more formalism around causal modeling and dependence. We proceed to analyze a more general case where both players converge to the same mixed strategy. Then we discuss the most general model, where the players' mixed strategies have some known correlation. Finally, we conclude the analysis. In summary, given some dependency structure due to upstream causal variables, we uncover the cases where the game theory actually suggests cooperation as the optimal policy.


## The Traditional Analysis

In Game Theory 101, here's how the Prisoner's Dilemma analysis traditionally goes. Alice and Bob are conspirators in a crime. They're both caught and brought to separate interrogation rooms. They're presented with a Faustian bargain: to snitch or not to snitch. If neither snitches on the other, they both get a 1-year sentence. If one snitches and the other does not, then the snitch goes home free while the non-snitch has to serve 3 years. If they both snitch, they serve 2 years. 

Here's the payoff diagram corresponding with this setup:
$$
\\begin{array}{c|c|c}
   & B_C & B_D \\\\
   \\hline
   A_C & (-1, -1) & (-3, 0) \\\\
   A_D & (0, -3) & (-2, -2) \\\\
\\end{array}
$$

If Alice cooperates, Bob is better off defecting to get 0 years instead of 1 year. If Alice defects, Bob is better off defecting to get 2 years instead of 3 years. So in either case Bob is better off defecting. A strategy which is optimal regardless of the choices of an opponent is called a dominant strategy. Symmetrically, Alice is better off defecting no matter what Bob does. This means that even though they're both happier in the case where they both cooperate, serving just one year each, the "[Nash equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium)" is the case where they both defect, serving two years each. A state is called a Nash equilibrium if no player can benefit by changing their action, holding the actions of all other players constant. 

We can represent each player's preferences and optimal choices with an arrow diagram.

![nash-equilibria-pd-regret](https://hackmd.io/_uploads/SyVMBruXC.png)

Nash equilibria are represented by a state with no arrows pointing away from it, meaning no player would prefer to switch their choice, holding the other players' choices the same. In the example above, (Defect, Defect) is the single Nash equilibrium.

We can generalize the payoff matrix a bit to represent all situations that capture the structure of a "Prisoner's Dilemma"-like scenario.

$$
\\begin{array}{c|c|c}
   & B_C & B_D \\\\
   \\hline
   A_C & (R, R) & (S, T) \\\\
   A_D & (T, S) & (Q, Q) \\\\
\\end{array}
$$

I use the variables $Q, R, S, T$ to keep organized. These can be remembered in the following way. $Q$ is the $Q$uarrel payout when they rat each other out. $R$ is the $R$eward for mutual cooperation. $S$ is the $S$ucker's payout if the other player snitches and they do not. $T$ is the $T$emptation payout for snitching while the other does not. The necessary and sufficient conditions for a prisoner's dilemma structure are that $S<Q<R<T$.



## Probabilistic Play


Now, let's make our model a bit more rigorous and extend our binary action space to a probabilistic strategy model. 

$$
\\begin{array}{c|c|c}
   & B_C & B_D \\\\
   \\hline
   A_C & (R, R) & (S, T) \\\\
   A_D & (T, S) & (Q, Q) \\\\
\\end{array}
$$

Instead of discrete actions, let's suppose Alice and Bob each choose [mixed strategy](https://en.wikipedia.org/wiki/Strategy_(game_theory)#Mixed_strategy) vectors $[p(A_c), p(A_d)]$ and $[p(B_c), p(B_d)]$, respectively, which represent their probabilities of cooperation or defection, such that  $p(A_c)+p(A_d)=1$ and $p(B_c)+p(B_d)=1$.

We formalize the analysis by noting that Alice wants to maximize her expected ([VNM](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem)) utility. We now compute her optimal cooperation fraction $p^*(A_c|B^*)$ given Bob's optimal policy.

$$E[U_A(G)] = E[U_A(G|A_c)] p^*(A_c) + E[U_A(G|A_d)] p^*(A_d)$$

We decompose the expected value of the game to Alice $E[U_A(G)]$ into the expected value of the game given that she cooperates $E[U_A(G|A_c)]$ times the probability that she cooperates $p^*(A_c)$ plus the expected value of the game given that she defects $E[U_A(G|A_d)]$ times the probability she defects $p^*(A_d)$.

We can further clarify Alice's expected utility given her action $E[U_A(G|A_c)]$ into the cases where Bob cooperates and does not cooperate.

$$E[U_A(G|A_c)] = E[U_A(G|A_c,B_c)] p^*(B_c) + E[U_A(G|A_c,B_d)] p^*(B_d)$$

$$E[U_A(G|A_d)] = E[U_A(G|A_d,B_c)] p^*(B_c) + E[U_A(G|A_d,B_d)] p^*(B_d)$$

Bringing this back into our equation for $E[U_A(G)]$ yields:

$$
\\begin{align*}
E[U_A(G)] = E[U_A(G|A_c,B_c)] p^*(A_c) p^*(B_c) \\ + \\\\
E[U_A(G|A_c,B_d)] p^*(A_c) p^*(B_d) \\ + \\\\
E[U_A(G|A_d,B_c)] p^*(A_d) p^*(B_c) \\ + \\\\
E[U_A(G|A_d,B_d)] p^*(A_d) p^*(B_d)
\\end{align*}
$$

We can reduce the mess a bit by substituting in our variables $Q, R, S, T$.

$$
\\begin{align*}
E[U_A(G)] = R \\ p^*(A_c) p^*(B_c) \\ + \\\\
S \\ p^*(A_c) p^*(B_d) \\ + \\\\
T \\ p^*(A_d) p^*(B_c) \\ + \\\\
Q \\ p^*(A_d) p^*(B_d)
\\end{align*}
$$


Now we apply $p(A_c)+p(A_d)=1$ and $p(B_c)+p(B_d)=1$.

$$
\\begin{align*}
E[U_A(G)] = R \\ p^*(A_c) p^*(B_c) \\ + \\\\
S \\ p^*(A_c) (1-p^*(B_c)) \\ + \\\\
T \\ (1-p^*(A_c)) p^*(B_c) \\ + \\\\
Q \\ (1-p^*(A_c)) (1-p^*(B_c))
\\end{align*}
$$

Normally to find the $p^*(A_c)$ which maximizes $E[U_A(G)]$ we would differentiate $E[U_A(G)]$ with respect to $p^*(A_c)$ and set this result to zero. But because the equation is linear in $p^*(A_c)$, the derivative degenerates. This means that in this case there won't be an optimal "mixed strategy" which is not a "pure strategy", meaning that given the prisoner's dilemma payout structure presented thus far Alice and Bob are better off making a decision to 100% cooperate or 100% defect. 

Expanding out $E[U_A(G)]$ a bit further we see:
$$
\\begin{align*}
E[U_A(G)] = R \\ p^*(A_c) p^*(B_c) \\ + \\\\
S \\ p^*(A_c) - S \\ p^*(A_c) \\ p^*(B_c) \\ + \\\\
T \\ p^*(B_c) - T \\ p^*(B_c) \\ p^*(A_c) \\ + \\\\
Q - Q \\ p^*(A_c) - Q \\ p^*(B_c) + Q \\ p^*(A_c) \\ p^*(B_c)
\\end{align*}
$$

Now we isolate $p^*(A_c)$:
$$
\\begin{align*}
E[U_A(G)] = p^*(A_c) [R \\  p^*(B_c) \\ + S - S \\ p^*(B_c) \\ - T \\ p^*(B_c) - Q \\ + Q \\ p^*(B_c)] \\ + [T \\ p^*(B_c) + Q - Q \\ p^*(B_c)]
\\end{align*}
$$

$$\\boldsymbol{E[U_A(G)] = p^*(A_c) [p^*(B_c) (Q + R - S - T) + (S - Q)] \\ + \\  [p^*(B_c) \\ (T - Q) + Q]}$$

To see if Alice's optimal cooperation percentage $p^*(A_c)$ is 100% or 0%, we just need to see if the term $p^*(B_c) (Q + R - S - T) + (S - Q)$ is greater than or less than zero. If it's greater than zero, then Alice best maximizes $E[U_A(G)]$ when $p^*(A_c)=1$, and correspondingly when it's less than zero then Alice should always defect ($p^*(A_c)=0$).

$$
R \\  p^*(B_c) \\ + S - S \\ p^*(B_c) \\ - T \\ p^*(B_c) - Q \\ + Q \\ p^*(B_c) \\stackrel{?}{<} 0
$$


$$
0 \\stackrel{?}{<} (T \\ p^*(B_c) - R \\  p^*(B_c)) + (S \\ p^*(B_c) - S) + (Q - Q \\ p^*(B_c))
$$

$$
0 \\stackrel{?}{<} p^*(B_c) \\ (T - R) + Q \\ (1 - p^*(B_c)) - S \\ (1 - p^*(B_c))
$$

$$
0 \\stackrel{?}{<} p^*(B_c) \\ (T - R) + (1 - p^*(B_c)) \\ (Q - S)
$$

We now show that each piece is greater than zero. $p^*(B_c)>0$, $T-R>0$ because $T>R$, $1-p^*(B_c)>0$, and $Q-S>0$ because $Q>S$. Therefore, $0 > p^*(B_c) \\ (T - R) + (1 - p^*(B_c)) \\ (Q - S)$, and Alice's optimal policy is to always defect. The same analysis can be performed for Bob as well.

This is how the analysis typically goes. The common perspective is that, given the payoff diagram and the constraint that $T > R > Q > S$, in a two-player simultaneous game where the players cannot communicate with one another, then unfortunately the game theory optimal policy is always to defect.

$$
\\begin{array}{c|c|c}
   & B_C & B_D \\\\
   \\hline
   A_C & (R, R) & (S, T) \\\\
   A_D & (T, S) & (Q, Q) \\\\
\\end{array}
$$

I disagree with this conclusion and present the motivation for my perspective in the following section.


## The Clone Case for Cooperation

In the typical analysis of the prisoner's dilemma, we consider the choices of Alice and Bob to be independent of each other. This is because they make their decisions simultaneously and have no way of affecting the decision of the other. But, there is an underlying dependence structure between A and B that we must include in our model.

To illustrate this, imagine the case where Alice is cloned and given exactly the same environment such that both clones will make the same decisions. If we label clone A and clone B, in this case we now have $p(B_C|A_C)=1$, implying $p(B_D|A_C)=0$, $p(B_D|A_D)=1$, and $p(B_C|A_D)=0$. This is the case where there's perfect correlation between the decisions of A and B, which we analyze in this section.

Let's now recompute A's expected utility $E[U_A(G)]$ which she wants to maximize.

$$
E[U_A(G)] = E[U_A(G|A_C)] p^*(A_C) + E[U_A(G|A_D)] p^*(A_D)
$$

Variable definitions:
* $E[U_A(G)]$ is the expected utility of the game to player A. 
* $E[U_A(G|A_C)]$ is the expected utility of the game to player A given that A choses to cooperate.
* $E[U_A(G|A_D)]$ is the expected utility of the game to player A given that A choses to defect.
* $p^*(A_C)$ is the probability that A cooperates, which is optimized to maximize A's expected utility given her knowledge. 
* $p^*(A_D)$ is the probability that A defects, which is optimized to maximize A's expected utility given her knowledge. 


Given B's potentially mixed strategy, the expected utility of the game to A given each of A's possible choices can be decomposed into the cases for each of B's choices given A's choice. 

$$
E[U_A(G|A_C)] = E[U_A(G|A_C, B_C)] \\hat{p}_A(B_C|A_C) + E[U_A(G|A_C, B_D)] \\hat{p}_A(B_D|A_C)
$$

$$
E[U_A(G|A_D)] = E[U_A(G|A_D, B_C)] \\hat{p}_A(B_C|A_D) + E[U_A(G|A_D, B_D)] \\hat{p}_A(B_D|A_D)
$$


*Notice that we condition B's probabilities on A's choice. In the previous analysis, we claimed that B has no way of seeing A's choice so we make them independent, claiming $p(B_C|A_C)=p(B_C)$. But this is NOT RIGHT. Also, notice we place a hat on $\\hat{p}_A(B_x|A_y)$ to denote that these are A's estimates of B's action probabilities based on A's own knowledge. We will come back to discuss this step in more detail in a later section, but note that this is the heart of the difference between my perspective and the traditional analysis.*

*Academic economists would likely claim (have claimed) that this approach doesn’t sufficiently separate belief formation and decision making. The type of recursive relationship I’m suggesting between estimating a counterparties’ policy and our own action selection seems “irrational”, in the sense that it doesn’t follow the typical pre-defined "rational decision making" algorithm described by economists. However, I point out that the policy presented here **wins at games**. That is, it is the policy which results in both agents obtaining maximum expected utility.*

*It’s been recommended by an econ friend (who I love dearly), that while this approach might not fit the classification of “rational decision making”, it could find a home in the behavioral economics literature as a form of *motivated reasoning*. The claim is that the agent wants to maximize their ex-ante expected utility and this model assumes their beliefs are malleable. A motivated reasoner wants to believe their counterparty to act as they do, so they “trick” themselves into believing it even though they haven’t rationally deduced that the counterparty will actually cooperate. The academic argument against cooperation continues, “but this cannot be fully rational behavior, because my ex-post decision has to be fully independent from the other agent, as my decision, because it is unknown to them at the time of their own decision by construction, cannot influence their beliefs and so should not influence my own beliefs about their action.” It's this notion that decisions are made independently that I take issue with. I discuss this further in the [Everything is Correlated](#Everything-is-Correlated) section which follows.*


We now recombine this into $E[U_A(G)]$:

$$
\\begin{align*}
E[U_A(G)] = (E[U_A(G|A_C, B_C)] \\hat{p}_A(B_C|A_C) + E[U_A(G|A_C, B_D)] \\hat{p}_A(B_D|A_C)) p^*(A_C) \\\\
+(E[U_A(G|A_D, B_C)] \\hat{p}_A(B_C|A_D) + E[U_A(G|A_D, B_D)] \\hat{p}_A(B_D|A_D)) p^*(A_D)
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] = E[U_A(G|A_C, B_C)] \\hat{p}_A(B_C|A_C) p^*(A_C) \\\\
+E[U_A(G|A_C, B_D)] \\hat{p}_A(B_D|A_C) p^*(A_C) \\\\
+E[U_A(G|A_D, B_C)] \\hat{p}_A(B_C|A_D) p^*(A_D) \\\\
+E[U_A(G|A_D, B_D)] \\hat{p}_A(B_D|A_D) p^*(A_D)
\\end{align*}
$$

Now we substitute in $Q,R,S,T$ and use $p^*(A_C)+p^*(A_D)=1$ and $\\hat{p}_A(B_C|A_x)+\\hat{p}_A(B_D|A_x)=1$.

$$
\\begin{align*}
E[U_A(G)] = \\hat{p}_A(B_C|A_C) \\ p^*(A_C) \\ R \\\\
+\\ (1-\\hat{p}_A(B_C|A_C)) \\ p^*(A_C) \\ S \\\\
+\\ \\hat{p}_A(B_C|A_D) \\ (1-p^*(A_C)) \\ T \\\\
+\\ (1-\\hat{p}_A(B_C|A_D)) \\ (1-p^*(A_C)) \\ Q
\\end{align*}
$$

*Notice that, if the choices of the players are truly independent, then $\\hat{p}_A(B_x|A_y) = \\hat{p}_A(B_x)$, yielding the traditional analysis of the last section.*

Let's now explore the case where A and B are clones who will make exactly the same choice, so $\\hat{p}_A(B_x|A_x) = 1$ and $\\hat{p}_A(B_x|A_{\\neg x}) = 0$. Let's now update our $E[U_A(G)]$ calculation.

$$
\\begin{align*}
E[U_A(G)] = 1 \\ p^*(A_C) \\ R \\\\
+\\ (1-1) \\ p^*(A_C) \\ S \\\\
+\\ 0 \\ (1-p^*(A_C)) \\ T \\\\
+\\ (1-0) \\ (1-p^*(A_C)) \\ Q
\\end{align*}
$$

Which we simplify into:

$$
\\begin{align*}
E[U_A(G)] = \\ p^*(A_C) \\ R + (1-p^*(A_C)) \\ Q
\\end{align*}
$$

$$
E[U_A(G)] = \\ p^*(A_C) \\ R + Q - Q \\ p^*(A_C)
$$

$$
E[U_A(G)] = p^*(A_C) (R - Q) + Q
$$

Because $R$eward $>$ $Q$uarrel, $E[U_A(G)]$ is maximized when $p^*(A_C)=1$! This means $A$ will cooperate and receive $E[U_A(G)] = R$eward instead of $Q$uarrel, and similarly for $B$. This seems trivial, but if $A$ and $B$ can make the same decision, they can obtain the globally optimal solution instead of the strictly worse typical Nash equilibrium which is reached when they believe they act independently. 

## Everything is Correlated

Alright, if Alice knows that Bob will make *exactly* the same decision, she can fearlessly cooperate, knowing for certain that he will too, dissolving the dilemma. So now, let's reincorporate uncertainty back into our model.

Let's say Alice and Bob are not clones but are instead siblings with similar family values, experiences, dispositions, genes, neurological structures, etc. [We know that many, many, many things in the world are correlated in some way.](https://gwern.net/everything) The dependency structure of the world is extremely interconnected. There's also an evolutionary argument for this that I won't get to in much detail. But when picking the prisoners, we're actually sampling players who have played an iterated version of this game many many times. If you believe that humans are *not* purely rational agents and make decisions based on instinct, then there's likely to be downstream similarity in their policies. And if you believe that the agents *are* purely rational, they also have exactly the same game-theoretic payouts, so their GTO play should be exactly the same. It would be extremely improbable for Alice and Bob's choices here to be perfectly independent. So let's model some dependence structure.

*(I will note that there's a semi-compelling argument suggesting that we don't even need to introduce more subtle forms of dependence. Because they have identical payoff structures, the game-theoretic optimal play should be exactly the same. Given their GTO play should be exactly the same and mixed strategies degenerate to pure strategies, we get correlation 1, and so they should both coordinate 100% of the time. But the real world is messy, so we proceed with slightly more subtlety.)*

### Causal Modeling 101

To better understand the dependencies and correlations between Alice and Bob's choices, we can frame the problem in the light of [causal modeling a la Judea Pearl](https://en.wikipedia.org/wiki/Causality_(book)). In causal modeling, we represent the dependencies between variables using a directed acyclic graph (DAG), where nodes represent variables and directed edges represent causal relationships.

In the traditional analysis of the Prisoner's Dilemma, Alice and Bob are assumed to make their decisions independently. However, in reality, their decisions will definitely be influenced by common upstream factors. For example, Alice and Bob may have similar upbringings, values, experiences, and expectations about loyalty and cooperation that influence their decision-making. And if that's not compelling, they also have access to similar information about the situation, and have exactly the same payout structure, so there's a strong case that they will end up making similar decisions.

We can represent these upstream factors with a variable $V$. The causal model can be depicted as follows:

\`\`\`
   V
  / \\
 A   B
\`\`\`

Here, $V$ is a common cause that affects both Alice's and Bob's decisions. This creates a dependency between $A$ and $B$.

Given the upstream factor $V$, the choices of Alice and Bob could be conditionally independent. However, if we do not observe $V$, the choices $A$ and $B$ become dependent. This is known as [d-separation](https://bayes.cs.ucla.edu/BOOK-2K/d-sep.html) in causal graphs.

Mathematically, this can be expressed as:

$$
P(A, B) = \\sum_{v} P(A \\mid V = v) P(B \\mid V = v) P(V = v)
$$

This shows that the joint probability of $A$ and $B$ depends on their conditional probabilities given $V$ and the distribution of $V$.

### *Independent Case (Optional)*


Suppose A and B were truly independent. Here's the causal model we might associate with this hypothesis.

\`\`\`
  V_1     V_2
   |       |
   A       B
\`\`\`

Here $V_1$ and $V_2$ are separate upstream factors that affect Alice's and Bob's decisions, respectively. This creates a scenario where A and B are conditionally independent given $V_1$ and $V_2$. Mathematically, this can be expressed as:

$$
P(A, B) = \\sum_{v_1} \\sum_{v_2} P(A \\mid V_1 = v_1) P(B \\mid V_2 = v_2) P(V_1 = v_1) P(V_2 = v_2)
$$

This equation shows that the joint probability of $A$ and $B$ depends on their individual probabilities given $V_1$ and $V_2$, and the distribution of $V_1$ and $V_2$.

To prove the typical [independence equation](https://en.wikipedia.org/wiki/Joint_probability_distribution#Joint_distribution_for_independent_variables) $P(A,B)=P(A)P(B)$ from the more complicated seeming equation above, we first find the marginal probabilities $P(A)$ and $P(B)$ and sum over the respective upstream variables:

$$
P(A) = \\sum_{v_1} P(A \\mid V_1 = v_1) P(V_1 = v_1)
$$

$$
P(B) = \\sum_{v_2} P(B \\mid V_2 = v_2) P(V_2 = v_2)
$$

Now we multiply $P(A)$ and $P(B)$ together:

$$
P(A)P(B) = \\left(\\sum_{v_1} P(A \\mid V_1 = v_1) P(V_1 = v_1)\\right) \\left(\\sum_{v_2} P(B \\mid V_2 = v_2) P(V_2 = v_2)\\right)
$$

Then we expand the product of the sums and we notice that this expression is the same as the expression for the joint probability $P(A, B)$ obtained in step 1:

$$
P(A)P(B) = \\sum_{v_1} \\sum_{v_2} P(A \\mid V_1 = v_1) P(V_1 = v_1) P(B \\mid V_2 = v_2) P(V_2 = v_2)
$$


Because the two expressions are identical, we've shown that $P(A, B) = P(A)P(B)$ assuming that Alice's and Bob's decisions are influenced by separate, independent upstream variables $V_1$ and $V_2$. With this extra machinery in hand, we proceed into the heart of our analysis.


## Incorporating Dependence into Expected Utility

In *[The Clone Case for Cooperation](##The-Clone-Case-for-Cooperation)* section, I make the assumption that Alice and Bob deterministically make *exactly* the same choice. This time, let's relax that assumption and suppose that because they're rational agents presented with identical payoff matrices, they'll conclude the *same mixed strategies* to be optimal. Though we're not sure what their cooperate/defect probabilities will be yet, we just suppose that their GTO policies will be the same given the same payout structures. 

To model this formulation, we go back to the start and split A's expected utility based on her two possible actions. 

$$
E[U_A(G)] = E[U_A(G|A_C)] p^*(A_C) + E[U_A(G|A_D)] p^*(A_D)
$$

Then, we split each of those cases for each of B's possible choices. 

$$
\\begin{align*}
E[U_A(G)] = E[U_A(G|A_C, B_C)] \\hat{p}_A(B_C|A_C) p^*(A_C) \\\\
+E[U_A(G|A_C, B_D)] \\hat{p}_A(B_D|A_C) p^*(A_C) \\\\
+E[U_A(G|A_D, B_C)] \\hat{p}_A(B_C|A_D) p^*(A_D) \\\\
+E[U_A(G|A_D, B_D)] \\hat{p}_A(B_D|A_D) p^*(A_D)
\\end{align*}
$$

Now we substitute in $Q,R,S,T$ and use both $p^*(A_C)+p^*(A_D)=1$ and $\\hat{p}_A(B_C|A_x)+\\hat{p}_A(B_D|A_x)=1$.

$$
\\begin{align*}
E[U_A(G)] = \\hat{p}_A(B_C|A_C) \\ p^*(A_C) \\ R \\\\
+\\ (1-\\hat{p}_A(B_C|A_C)) \\ p^*(A_C) \\ S \\\\
+\\ \\hat{p}_A(B_C|A_D) \\ (1-p^*(A_C)) \\ T \\\\
+\\ (1-\\hat{p}_A(B_C|A_D)) \\ (1-p^*(A_C)) \\ Q
\\end{align*}
$$

Now we need thoughtful ways of modeling $\\hat{p}_A(B_C|A_C)$ and $\\hat{p}_A(B_C|A_D)$. For Alice's approximation of Bob's probability of collaborating, $\\hat{p}_A(B_C|A_C)$, we can suppose that this matches Alice's own probability of collaborating $p^*(A_C)$ because of our assumption that rational agents will come to the same mixed strategy policies given identical payoff matrices. So, $\\hat{p}_A(B_C|A_C)=p^*(A_C)$ and $\\hat{p}_A(B_C|A_D)=1-\\hat{p}_A(B_D|A_D)=1-p^*(A_D)=p^*(A_C)$.

This turns our $E[U_A(G)]$ into:

$$
\\begin{align*}
E[U_A(G)] = p^*(A_C) \\ p^*(A_C) \\ R \\\\
+\\ (1-p^*(A_C)) \\ p^*(A_C) \\ S \\\\
+\\ p^*(A_C) \\ (1-p^*(A_C)) \\ T \\\\
+\\ (1-p^*(A_C)) \\ (1-p^*(A_C)) \\ Q
\\end{align*}
$$

Which simplifies to:

$$
\\begin{align*}
E[U_A(G)] = p^*(A_C)^2 \\ R \\\\
+\\ p^*(A_C) \\ (1-p^*(A_C)) \\ S \\\\
+\\ p^*(A_C) \\ (1-p^*(A_C)) \\ T \\\\
+\\ (1-p^*(A_C))^2 \\ Q
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] = p^*(A_C)^2 \\ R \\\\
+\\ (p^*(A_C) - p^*(A_C)^2) \\ S \\\\
+\\ (p^*(A_C) - p^*(A_C)^2) \\ T \\\\
+\\ (1 - 2 p^*(A_C) + p^*(A_C)^2) \\ Q
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] = R \\ p^*(A_C)^2 \\\\
+\\ S \\ p^*(A_C) - S \\ p^*(A_C)^2\\\\
+\\ T \\ p^*(A_C) - T \\ p^*(A_C)^2 \\\\
+\\ Q - 2 \\ Q \\ p^*(A_C) + Q \\ p^*(A_C)^2
\\end{align*}
$$

$$
\\begin{align*}
\\bf{E[U_A(G)] = (R-S-T+Q) \\ p^*(A_C)^2 + (S+T-2Q) \\ p^*(A_C) + Q}
\\end{align*}
$$

### *Optimizing (Optional)*

All that's left to do from here is to find the $p^*(A_C)$ which maximizes $E[U_A(G)]$ subject to the constraints that $0 \\leq p^*(A_C) \\leq 1$ and $S<Q<R<T$. *(The cases get slightly hairy so this section is skippable.)*

Unlike the previous case where $f_{E[U_A(G)]}(p^*(A_C))$ was linear, this time we actually can optimize via the derivative method suggested earlier. To do so, we compute:

$$
\\frac{dE[U_A(G)]}{dp^*(A_C)} = 2(Q+R-S-T) p^*(A_C) + (S+T-2Q) = 0
$$

Because $f_{E[U_A(G)]}(p^*(A_C))$ is a second-degree polynomial, the parabola it sweeps out will have its vertex at $p^*(A_C) = \\frac{(2Q-S-T)}{2(Q+R-S-T)}$. While there's still some tidying up to do to determine which cases apply to which solutions, excitingly, the possible solution set is constrained to $\\{0,\\frac{(2Q-S-T)}{2(Q+R-S-T)},1\\}$. This vertex won't always be the maximum, and sometimes this vertex will be outside the valid probability range $[0,1]$. In either of these countercases, the maximum value for $p^*(A_C)$ will be either $0$ or $1$.

We now describe the cases where the vertex is a *valid maximum*. For the vertex to be a *maximum*, the parabola must be concave. As we know, a $y=ax^2+bx+c$ parabola is concave when $a<0$. So, $Q+R-S-T<0$ or $Q+R<S+T$. For the vertex to be *valid*, we say it must lie within the domain $0 \\leq p^*(A_C) \\leq 1$. First, to find the inequalities implied by $0 \\leq p^*(A_C) = \\frac{(2Q-S-T)}{2(Q+R-S-T)}$, we note that because the parabola is concave down, the denominator $Q+R-S-T$ will be negative, so $0 \\geq 2Q-S-T$ $\\implies$ $S+T \\geq 2Q$. Second, $p^*(A_C) = \\frac{(2Q-S-T)}{2(Q+R-S-T)} \\leq 1$ implies that $2Q-S-T \\leq 2(Q+R-S-T)$ $\\implies$ $S+T \\leq 2R$. **We've found that, when $Q+R<S+T$ and $2Q \\leq S+T \\leq 2R$, then the optimal cooperation fraction for Alice will be $p^*(A_C) = \\frac{1}{2} \\left(\\frac{Q-R}{Q+R-S-T}\\right) + \\frac{1}{2}$.**


We still have to sort out when $p^*(A_C)$ will be $1$ or $0$, and there's a bit of tidying up to do when the denominator $2(R-S-T+Q)$ is zero (which actually was the case in the first example in the [Traditional Analysis](##The-Traditional-Analysis) section where $R=-1$, $S=-3$, $T=0$, and $Q=-2$). To solve this indeterminate case this when $R-S-T+Q = 0$, we take the second derivative of $E[U_A(G)]$: $\\frac{d^2 E[U_A(G)]}{d (p^*(A_C))^2} = 2(Q+R-S-T)$. Because in this case $Q+R-S-T = 0$, the second derivative is zero, implying that the expected utility curve will be linear.

So, when $R-S-T+Q = 0$, $E[U_A(G)] = (S+T-2Q) \\ p^*(A_C) + Q$, where here $E[U_A(G)]$ is a linear function of $p^*(A_C)$. In this edge case, we find that:
* If $S+T-2Q > 0$, $E[U_A(G)]$ increases with $p^*(A_C)$. Therefore, $p^*(A_C) = 1$ is optimal.
* If $S+T-2Q < 0$, $E[U_A(G)]$ decreases with $p^*(A_C)$. Therefore, $p^*(A_C) = 0$ is optimal.
* If $S+T-2Q = 0$, $E[U_A(G)]$ is constant, and any $p^*(A_C)$ is optimal.


For the other cases where we're deciding between 0 or 1, we just need to compare $f_{E[U_A(G)]}(p(A_C)=0)$ with $f_{E[U_A(G)]}(p(A_C)=1)$. That is, we need to compare $(R-S-T+Q) \\ 0^2 + (S+T-2Q) \\ 0 + Q = Q$ with $(R-S-T+Q) \\ 1^2 + (S+T-2Q) \\ 1 + Q =(R-S-T+Q) + (S+T-2Q) + Q = R$. **That is, in these cases, if $R>Q$ then $p^*(A_C)=1$, and if $Q>R$ then $p^*(A_C)=0$.**

Putting this all together:
* If $Q+R<S+T$ and $2Q \\leq S+T \\leq 2R$, then the optimal cooperation fraction for Alice will be $p^*(A_C) = \\frac{1}{2} \\left(\\frac{Q-R}{Q+R-S-T}\\right) + \\frac{1}{2}$.
* If $Q+R=S+T$ then:
    * If $S+T-2Q > 0$, then $p^*(A_C) = 1$.
    * If $S+T-2Q < 0$, then $p^*(A_C) = 0$.
    * If $S+T-2Q = 0$, then any $p^*(A_C)$ is optimal.
* Otherwise:
    * If $R<Q$ then $p^*(A_C)=0$.
    * If $R=Q$ then $p^*(A_C)=\\frac{1}{2}$.
    * If $R>Q$ then $p^*(A_C)=1$.


Represented as one piecewise expression:

$$
p^*(A_C) =
\\begin{cases}
\\frac{1}{2} \\left(\\frac{Q-R}{Q+R-S-T}\\right) + \\frac{1}{2} & \\text{if } Q+R<S+T \\text{ and } 2Q \\leq S+T \\leq 2R, \\\\
0 & \\text{if } Q+R=S+T \\text{ and } S+T-2Q < 0, \\\\
p^*(A_C) \\in [0, 1] & \\text{if } Q+R=S+T \\text{ and } S+T-2Q = 0, \\\\
1 & \\text{if } Q+R=S+T \\text{ and } S+T-2Q > 0, \\\\
0 & \\text{if } Q+R>S+T \\text{ and } R<Q, \\\\
\\frac{1}{2} & \\text{if } Q+R>S+T \\text{ and } R=Q, \\\\
1 & \\text{if } Q+R>S+T \\text{ and } R>Q.
\\end{cases}
$$

At last, if we make the assumption that A and B will conclude the same mixed strategy fractions to be optimal, given that they have identical payoffs, we now have a complete policy for determining their choices of optimal $p^*(A_C)$ and $p^*(B_C)$.

### Interpretation

Let's interpret this solution a bit to make sure it accords with our intuitions. We start with the complicated seeming expression, $p^*(A_C) = \\frac{1}{2}\\left(\\frac{Q - R}{Q + R - S - T}\\right) + \\frac{1}{2}$, in the case where $Q+R<S+T$ and $2Q \\leq S+T \\leq 2R$.

This equation indicates that the optimal cooperation probability depends on the difference between the $Q$uarrel and $R$eward payoffs, normalized by the overall differences between the players' payoffs when they perform the same action minus when they perform different actions. This value should be between -1 and 1, which bounds $p^*(A_C)$ between -1 and 1, as we would expect a probability to behave. 

We continue to examine some important boundary conditions:
* If $Q$uarrel $= R$eward, then $p^*(A_C) = \\frac{1}{2}$, indicating that the player is indifferent between cooperation and defection.
* If $Q$uarrel $> R$eward, then $p^*(A_C) < \\frac{1}{2}$, indicating a higher probability of defection. *(Remember the denominator is negative in this case.)*
* If $Q$uarrel $< R$eward, then $p^*(A_C) > \\frac{1}{2}$, indicating a higher probability of cooperation. *(Again the denominator is negative.)*

This result seems reasonable because if the quarrel payoff $Q$ is better than the reward for mutual cooperation $R$, Alice is more likely to defect. Conversely, if $R$ is better, Alice is more likely to cooperate.


Let's now try to apply this policy to our initial toy example. To see if our solution holds, we test the case when $R = -1$, $S = -3$, $T = 0$, $Q = -2$. 

$$
\\begin{array}{c|c|c}
   & B_C & B_D \\\\
   \\hline
   A_C & (-1, -1) & (-3, 0) \\\\
   A_D & (0, -3) & (-2, -2) \\\\
\\end{array}
$$

First, we calculate $R - S - T + Q = -1 - (-3) - 0 + (-2) = 0$. Then, because $R - S - T + Q = 0$, we use the indeterminate case formula. We calculate $S + T - 2Q = -3 + 0 - 2(-2) = 1$. Finally, since, $S + T - 2Q > 0$, the optimal policy is $p^*(A_C) = 1$. This aligns with the interpretation that Alice should always cooperate in this particular setup.

We can also confirm this computationally as well. 

\`\`\`
import matplotlib.pyplot as plt
import numpy as np

# Define the payoffs
Q = -3
R = -2
S = -4
T = -1

# Define the cooperation probabilities
p_A_C = np.linspace(0, 1, 1000)

# Calculate the expected utility for Alice
E_U_A_G = (R - S - T + Q) * p_A_C**2 + (S + T - 2 * Q) * p_A_C + Q

# Plot the expected utility
plt.figure(figsize=(10, 6))
plt.plot(p_A_C, E_U_A_G, label=r'$E[U_A(G)]$', color='blue')
plt.xlabel(r'Cooperation Probability $p^*(A_C)$')
plt.ylabel(r'Expected Utility $E[U_A(G)]$')
plt.title('Expected Utility of the Game for Alice')
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)
plt.grid(color='gray', linestyle='--', linewidth=0.5)
plt.ylim([np.min(E_U_A_G), np.max(E_U_A_G)])
plt.legend()
plt.show
\`\`\`

![Alice's Expected Utility](https://hackmd.io/_uploads/BJ99cy74A.png)



Overall, the analysis and derived equations seem to correctly capture the dependence and provide a policy for determining the optimal cooperation probability in this correlated Prisoner's Dilemma. From what I can tell based on the tests I've performed, the solution works as intended and aligns with my theoretical expectations from the payoffs.



## Incorporating Correlation into Expected Utility

If you're not convinced by the case where we assume that two rational agents make exactly the same decision given identical payoffs or by the extended case where the two rational agents converge on the same optimal mixed strategy policy, I present a third generalization which introduces noise into our model. 

To model the dependence structure between the agents' decisions alongside some natural uncertainty, let's introduce a correlation parameter $\\rho$ that captures the degree of correlation between Alice's and Bob's choices due to the common upstream factors, $V$. We can think of $\\rho$ as a measure of how likely it is that if Alice cooperates, Bob will also cooperate, and similarly for defection. This parameter will range from -1 to 1, where:

- $\\rho = 1$ indicates perfect positive correlation (Alice and Bob always make the same choice). *When $\\rho=1$, this model degenerates to our [clone case](#The-Clone-Case-for-Cooperation).*
- $\\rho = 0$ indicates no correlation (Alice and Bob's choices are independent).
- $\\rho = -1$ indicates perfect negative correlation (Alice and Bob always make opposite choices).


With this in mind, let's redefine the probabilities $\\hat{p}_A(B_C|A_C)$, $\\hat{p}_A(B_D|A_C)$, $\\hat{p}_A(B_C|A_D)$, and $\\hat{p}_A(B_D|A_D)$ to incorporate $\\rho$.

We assume the following relationships for the conditional probabilities based on $\\rho$:

1. $\\hat{p}_A(B_C|A_C) = \\frac{1 + \\rho}{2}$
2. $\\hat{p}_A(B_D|A_C) = \\frac{1 - \\rho}{2}$
3. $\\hat{p}_A(B_C|A_D) = \\frac{1 - \\rho}{2}$
4. $\\hat{p}_A(B_D|A_D) = \\frac{1 + \\rho}{2}$

These expressions ensure that the probabilities are consistent with the correlation parameter.



We can now substitute these probabilities into our expected utility equation for Alice from earlier:

$$
\\begin{align*}
E[U_A(G)] = (E[U_A(G|A_C, B_C)] \\hat{p}_A(B_C|A_C) + E[U_A(G|A_C, B_D)] \\hat{p}_A(B_D|A_C)) p^*(A_C) \\\\
+(E[U_A(G|A_D, B_C)] \\hat{p}_A(B_C|A_D) + E[U_A(G|A_D, B_D)] \\hat{p}_A(B_D|A_D)) p^*(A_D)
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] &= \\left( E[U_A(G|A_C, B_C)] \\frac{1 + \\rho}{2} + E[U_A(G|A_C, B_D)] \\frac{1 - \\rho}{2} \\right) p^*(A_C) \\\\
&+ \\left( E[U_A(G|A_D, B_C)] \\frac{1 - \\rho}{2} + E[U_A(G|A_D, B_D)] \\frac{1 + \\rho}{2} \\right) p^*(A_D)
\\end{align*}
$$

Now, substitute the payoffs $R, S, T, Q$ and use $p^*(A_C) + p^*(A_D) = 1$:

$$
\\begin{align*}
E[U_A(G)] &= \\left( R \\frac{1 + \\rho}{2} + S \\frac{1 - \\rho}{2} \\right) p^*(A_C) \\\\
&+ \\left( T \\frac{1 - \\rho}{2} + Q \\frac{1 + \\rho}{2} \\right) (1 - p^*(A_C))
\\end{align*}
$$

Simplify further:

$$
\\begin{align*}
E[U_A(G)] = \\left( \\frac{R(1 + \\rho) + S(1 - \\rho)}{2} \\right) p^*(A_C) + \\left( \\frac{T(1 - \\rho) + Q(1 + \\rho)}{2} \\right) (1 - p^*(A_C))
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] = \\left( \\frac{R + S + \\rho (R - S)}{2} \\right) p^*(A_C) + \\left( \\frac{T + Q + \\rho (Q - T)}{2} \\right) (1 - p^*(A_C))
\\end{align*}
$$

Combine terms:

$$
E[U_A(G)] = \\left( \\frac{R + S + \\rho (R - S)}{2} \\right) p^*(A_C) + \\left( \\frac{T + Q + \\rho (Q - T)}{2} \\right) - \\left( \\frac{T + Q + \\rho (Q - T)}{2} \\right) p^*(A_C)
$$

$$
E[U_A(G)] = p^*(A_C) \\left( \\frac{R + S + \\rho (R - S) - T - Q - \\rho (Q - T)}{2} \\right) + \\left( \\frac{T + Q + \\rho (Q - T)}{2} \\right)
$$

Simplify the coefficient of $p^*(A_C)$:

$$
E[U_A(G)] = p^*(A_C) \\left( \\frac{R + S - T - Q + \\rho (R - S - Q + T)}{2} \\right) + \\left( \\frac{T + Q + \\rho (Q - T)}{2} \\right)
$$

Because we're looking to maximize $E[U_A(G)]$, the optimal strategy for Alice depends on the sign of the coefficient of $p^*(A_C)$:

If $\\frac{R + S - T - Q + \\rho (R - S - Q + T)}{2} > 0$, then $p^*(A_C) = 1$. This implies that, if $\\rho > \\frac{Q - R - S + T}{- Q + R - S + T}$, then $p^*(A_C) = 1$.

Similarly, if $\\frac{R + S - T - Q + \\rho (R - S - Q + T)}{2} < 0$, then $p^*(A_C) = 0$. This implies that, if $\\rho < \\frac{Q - R - S + T}{- Q + R - S + T}$, then $p^*(A_C) = 0$.



In this section, we've incorporated the correlation parameter $\\rho$ into our analysis to allow us to capture the dependency between Alice's and Bob's choices caused by common upstream factors. We've found that this extension suggests that the degree of correlation between the actions of the two players significantly influences their optimal strategies.

$$
p^*(A_C) = \\begin{cases}
1 & \\text{if } \\rho > \\frac{Q - R - S + T}{- Q + R - S + T} \\\\
0 & \\text{if } \\rho < \\frac{Q - R - S + T}{- Q + R - S + T}
\\end{cases}
$$

Specifically, when $\\rho$ is sufficiently positive, there is a correlation threshold above which mutual cooperation becomes the dominant strategy for both players. 


## The Prisoners *Do*-Calculus

In the final most general case, we formalize the problem in the language of Pearl's [*do*-calculus](https://plato.stanford.edu/entries/causal-models/do-calculus.html). Instead of assuming a $\\rho$-model for correlation, we maintain a non-parametric perspective in this final stage. 

We start again by defining the expected utility of the game to Alice:

$$E[U_A(G)] = E[U_A(G \\mid \\text{do}(A_C))] p^*(A_C) + E[U_A(G \\mid \\text{do}(A_D))] p^*(A_D)$$

This time the expected utility of the game to Alice is the sum of the expected utility of the game to her given that she chooses to cooperate and the expected utility of the game to Alice given that she chooses to defect, weighted by the optimal probability that she does either. We now decompose the new terms $E[U_A(G \\mid \\text{do}(A_C))]$ and $E[U_A(G \\mid \\text{do}(A_D))]$.

$$E[U_A(G \\mid \\text{do}(A_C))] = E[U_A((G \\mid B_C) \\mid \\text{do}(A_C))] \\ \\hat{p}_A(B_C \\mid \\text{do}(A_C)) + E[U_A((G \\mid B_D) \\mid \\text{do}(A_C)] \\ \\hat{p}_A(B_D \\mid \\text{do}(A_C))$$

$$E[U_A(G \\mid \\text{do}(A_D))] = E[U_A((G \\mid B_C) \\mid \\text{do}(A_D))] \\ \\hat{p}_A(B_C \\mid \\text{do}(A_D)) + E[U_A((G \\mid B_D) \\mid \\text{do}(A_D)] \\ \\hat{p}_A(B_D \\mid \\text{do}(A_D))$$

That is,

$$E[U_A(G \\mid \\text{do}(A_C))] = R \\cdot \\hat{p}_A(B_C \\mid \\text{do}(A_C)) + S \\cdot \\hat{p}_A(B_D \\mid \\text{do}(A_C))$$

$$E[U_A(G \\mid \\text{do}(A_D))] = T \\cdot \\hat{p}_A(B_C \\mid \\text{do}(A_D)) + Q \\cdot \\hat{p}_A(B_D \\mid \\text{do}(A_D))$$

And,

$$
\\begin{align*}
E[U_A(G)] = R \\cdot \\hat{p}_A(B_C \\mid \\text{do}(A_C)) p^*(A_C) \\\\
+\\ S \\cdot \\hat{p}_A(B_D \\mid \\text{do}(A_C)) p^*(A_C) \\\\
+\\ T \\cdot \\hat{p}_A(B_C \\mid \\text{do}(A_D)) p^*(A_D) \\\\
+\\ Q \\cdot \\hat{p}_A(B_D \\mid \\text{do}(A_D)) p^*(A_D)
\\end{align*}
$$


Given the dependence DAG earlier, we can incorporate our upstream variable $V$ into our refined expected utility calculation using *do*-calculus. 

$$\\hat{p}_A(B_C \\mid \\text{do}(A_C)) = \\sum_v P(B_C \\mid A_C, v) P(v)$$

$$\\hat{p}_A(B_D \\mid \\text{do}(A_C)) = 1 - \\sum_v P(B_C \\mid A_C, v) P(v)$$

$$\\hat{p}_A(B_C \\mid \\text{do}(A_D)) = \\sum_v P(B_C \\mid A_D, v) P(v)$$

$$\\hat{p}_A(B_D \\mid \\text{do}(A_D)) = 1 - \\sum_v P(B_C \\mid A_D, v) P(v)$$


Substituting these probabilities back into Alice's expected utility formula, we get:

$$E[U_A(G)] = \\left( R \\sum_v P(B_C \\mid A_C, v) P(v) + S \\left(1 - \\sum_v P(B_C \\mid A_C, v) P(v)\\right) \\right) p^*(A_C) + \\left( T \\sum_v P(B_C \\mid A_D, v) P(v) + Q \\left(1 - \\sum_v P(B_C \\mid A_D, v) P(v)\\right) \\right) p^*(A_D)$$

Simplifying the expression:

$$E[U_A(G)] = \\left( R \\sum_v P(B_C \\mid A_C, v) P(v) + S \\left(1 - \\sum_v P(B_C \\mid A_C, v) P(v)\\right) \\right) p^*(A_C) + \\left( T \\sum_v P(B_C \\mid A_D, v) P(v) + Q \\left(1 - \\sum_v P(B_C \\mid A_D, v) P(v)\\right) \\right) p^*(A_D)$$

$$E[U_A(G)] = \\left( R \\sum_v P(B_C \\mid A_C, v) P(v) + S - S \\sum_v P(B_C \\mid A_C, v) P(v) \\right) p^*(A_C) + \\left( T \\sum_v P(B_C \\mid A_D, v) P(v) + Q - Q \\sum_v P(B_C \\mid A_D, v) P(v) \\right) p^*(A_D)$$

$$E[U_A(G)] = \\left( (R - S) \\sum_v P(B_C \\mid A_C, v) P(v) + S \\right) p^*(A_C) + \\left( (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) + Q \\right) (1 - p^*(A_C))$$

$$E[U_A(G)] = (R - S) \\sum_v P(B_C \\mid A_C, v) P(v) p^*(A_C) + S p^*(A_C) + (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) - (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) p^*(A_C) + Q - Q p^*(A_C)$$

$$E[U_A(G)] = \\left( (R - S) \\sum_v P(B_C \\mid A_C, v) P(v) - (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) + S - Q \\right) p^*(A_C) + (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) + Q$$

This expression now shows the expected utility of the game to Alice in terms of her probability of cooperating $p^*(A_C)$ and incorporates the dependencies through the common factor $V$. We find that the expected utility of the game $E[U_A(G)]$ is maximized when:

$$(R - S) \\sum_v P(B_C \\mid A_C, v) P(v) - (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) + S - Q > 0$$

$$\\boldsymbol{(R - S) \\sum_v P(B_C \\mid A_C, v) P(v) + S > (T - Q) \\sum_v P(B_C \\mid A_D, v) P(v) + Q}$$

If the inequality above is satisfied, then Alice should cooperate; otherwise, she should defect. 


### Confirmation

To test this most general form, we map it down to each of the particular cases we explored in the preceding sections. 

#### Traditional Independent Case

In the first solution we assume independence between Alice's and Bob's choices. This means $P(B_C \\mid A_C, v) = P(B_C)$ and $P(B_C \\mid A_D, v) = P(B_C)$.

We substitute these probabilities into our general utility function, yielding:

$$
\\begin{align*}
E[U_A(G)] = R \\cdot p^*(B_C) \\ p^*(A_C) \\\\
+\\ S \\cdot p^*(B_D) \\ p^*(A_C) \\\\
+\\ T \\cdot p^*(B_C) \\ p^*(A_D) \\\\
+\\ Q \\cdot p^*(B_D) \\ p^*(A_D)
\\end{align*}
$$

This simplifies down to:

$$E[U_A(G)] = p^*(A_C) [(R - S - T + Q) P(B_C) + S - Q] + (T - Q) P(B_C) + Q$$ 

This is exactly the expression we found for Alice's expected utility in that section, so pat on the back, onto the next section.


#### Clone Case for Cooperation

In the second model, Alice and Bob are assumed to make exactly the same decision, implying perfect correlation. Thus, $P(B_C \\mid A_C, v) = 1$ and $P(B_C \\mid A_D, v) = 0$. This simplifies the general solution as follows:

$$
\\begin{align*}
E[U_A(G)] = R \\cdot 1 \\ p^*(A_C) \\\\
+\\ S \\cdot 1 \\ p^*(A_C) \\\\
+\\ T \\cdot 0 \\ p^*(A_D) \\\\
+\\ Q \\cdot 0 \\ p^*(A_D)
\\end{align*}
$$

$$
\\begin{align*}
E[U_A(G)] = p^*(A_C) (R + S)
\\end{align*}
$$

Because $R>S$, $E[U_A(G)]$ is maximized when $p^*(A_C)=1$. Just as we anticipated, Alice should always cooperate, aligning with our expectations again.


#### Identical Mixed Strategies

In the next model, we extend and suggest that Alice and Bob converge on the same mixed strategy. That is, $\\hat{p}_A(B_C \\mid A_C, v) = p^*(A_C)$ and $\\hat{p}_A(B_C \\mid A_D, v) = p^*(A_D)$. This gives us:

$$
\\begin{align*}
E[U_A(G)] = R \\cdot p^*(A_C) \\ p^*(A_C) \\\\
+\\ S \\cdot p^*(A_D) \\ p^*(A_C) \\\\
+\\ T \\cdot p^*(A_C) \\ p^*(A_D) \\\\
+\\ Q \\cdot p^*(A_D) \\ p^*(A_D)
\\end{align*}
$$

This is the same result we expected as well, confirming our general causal model.


#### Correlated Mixed Policy

In the final model, we introduced correlation parameter $\\rho$ to incorporate possible noise. 

We make the following definitions:

$$\\hat{p}_A(B_C \\mid A_C, v) = \\frac{1 + \\rho}{2}$$

$$\\hat{p}_A(B_D \\mid A_C, v) = \\frac{1 - \\rho}{2}$$

$$\\hat{p}_A(B_C \\mid A_D, v) = \\frac{1 - \\rho}{2}$$

$$\\hat{p}_A(B_D \\mid A_D, v) = \\frac{1 + \\rho}{2}$$






From this, the corresponding $\\rho$-model falls out. 

$$
\\begin{align*}
E[U_A(G)] &= R \\left(\\frac{1 + \\rho}{2}\\right) p^*(A_C) \\\\
&+ S \\left(\\frac{1 - \\rho}{2} \\right) p^*(A_C) \\\\
&+ T \\left(\\frac{1 - \\rho}{2}\\right) (1 - p^*(A_C)) \\\\
&+ Q \\left(\\frac{1 + \\rho}{2} \\right) (1 - p^*(A_C))
\\end{align*}
$$

The language of *do*-calculus is quite appealing for its generality, and it, in my eyes, models the reality of the problem at hand extremely well. 



## Conclusion

This framework implies that, despite typical Game Theory 101 lectures suggesting 100% selfish play in one-shot games like this, if you believe that you think sufficiently similarly to your counterparty, the game theory optimal policy would be to faithfully cooperate and both walk away free. 

A broader conclusion of this analysis is to always consider higher-level dependencies, even when two things seem to be perfectly independent. We should also include all possible information into our decisions, and this includes the decisions themselves. In this Prisoner's Dilemma situation, we can consider this in some sense to be the opposite of "adverse selection". Oftentimes, in adversarial games, conditional on performing an action, you're less happy. There are many possible reasons for this, but a common reason is that you're acting in a market and your ability to perform an action means that no one else in the market was willing to do what you just did, which gives you information that you might be making a mistake. This could be hiring a candidate where your ability to hire them means no other firm wanted them at the price you're willing to pay. Or this could be winning an auction where your winning means that no one else was willing to pay the price that you paid. However, in the case we have at hand, there's a sort of "advantageous selection". This is because, if you choose to cooperate, now you get extra information that someone else in a similar position also likely cooperated as well, which is quite a pleasant type of selection. 

For those who remain compelled by the original argument that, "still, if you know your opponent is going to cooperate, you're better off defecting to serve no time instead of 1 year", I might share some of my ideas on why I suspect that the recursive expected utility maximization decision algorithm that I present is superior in a follow-up essay. But for now, I'll just say that while the Causal Decision Theorists are stuck in their (defect, defect) "rational" Nash equilibria, my coconspirators and I will be faithfully cooperating and walking free into the warm sun of Pareto Optimality.

***Acknowledgements:** Thank you Alok Singh, Baran Cimen, Keegan McNamara, Jackson Stenger, and Paul Schmidt-Engelbertz for reading through the draft and providing helpful guidance.*

`
};
