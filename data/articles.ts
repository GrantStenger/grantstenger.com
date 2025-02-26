import pokerModelContent from './articles/von_neumann_poker.tex'


export const articles = [
    {
      title: "A Case for Cooperation: Dependence in the Prisoner's Dilemma",
      description: "An exploration of the famous game theory problem.",
      slug: "prisoners-dilemma",
      author: "Grant Stenger (Sept 2024)",
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

*Academic economists would likely claim (have claimed) that this approach doesn't sufficiently separate belief formation and decision making. The type of recursive relationship I'm suggesting between estimating a counterparties' policy and our own action selection seems “irrational”, in the sense that it doesn't follow the typical pre-defined "rational decision making" algorithm described by economists. However, I point out that the policy presented here **wins at games**. That is, it is the policy which results in both agents obtaining maximum expected utility.*

*It's been recommended by an econ friend (who I love dearly), that while this approach might not fit the classification of “rational decision making”, it could find a home in the behavioral economics literature as a form of *motivated reasoning*. The claim is that the agent wants to maximize their ex-ante expected utility and this model assumes their beliefs are malleable. A motivated reasoner wants to believe their counterparty to act as they do, so they “trick” themselves into believing it even though they haven't rationally deduced that the counterparty will actually cooperate. The academic argument against cooperation continues, “but this cannot be fully rational behavior, because my ex-post decision has to be fully independent from the other agent, as my decision, because it is unknown to them at the time of their own decision by construction, cannot influence their beliefs and so should not influence my own beliefs about their action.” It's this notion that decisions are made independently that I take issue with. I discuss this further in the [Everything is Correlated](#Everything-is-Correlated) section which follows.*


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
    },
    {
      title: "Optimizing Portfolio Weights for Maximum CRRA Utility: An Independent Binary Asset Model",
      description: "We derive a closed form solution for the optimal portfolio weights which maximize an agent's CRRA utility over wealth.",
      slug: "binary-asset-portfolio-optimization",
      author: "Grant Stenger (April 2024)",
      content: `## Summary

This article explores the optimization of portfolio weights to maximize a Constant Relative Risk Aversion (CRRA) utility function over an agent's wealth. We use classic stochastic calculus techniques to model price processes as Geometric Brownian Motion (GBM). We find our solution is, in fact, an extension of the famous Merton Share. 

---

## Caveats and Extensions

The model we present above is a strong oversimplification of the investment environment we find ourselves in in real life. In future extensional work, I hope to generalize this model a bit to include some important aspects of practical investing life. 

The primary simplification we make is the way we model price processes. In practice, we don't have access to nicely behaved independent GBM processes with known stationary parameters. In the wild, asset prices are fat-tailed, non-stationary, correlated (typically increasingly so at the worst times), and with unknown parameters. Investing also incurs a number of important costs like exchange fees, slippage through price impact, margin costs, and taxes. 

We also note that our CRRA utility function is just an approximation of one's true utility over wealth$–$though in another essay sometime I might write a defense strengthening my support for constant relative risk aversion utility functions. If I have time I might extend this analysis to the more flexible hyperbolic absolute risk aversion (HARA) utility functions. 

Another extension I hope to make is to generalize beyond the dual-asset model to a multi-asset framework. Similarly, I think we can relax our independence assumption by adding known stationary covariance between price processes. With these caveats and possible extensions in mind, we proceed to defining our model. 


---

## Model Definition
Suppose we have a universe of two stocks, $A$ and $B$, modeled as independent GBM processes with parameters $\\mu_A$, $\\mu_B$, $\\sigma_A$, and $\\sigma_B$. We also define $\\lambda_A$ and $\\lambda_B$ to be our portfolio weights for assets $A$ and $B$, such that $\\lambda_A + \\lambda_B = 1$. Finally, we have a CRRA utility function over possible wealth states $W$ such that $U(W) = \\frac{W^{1-\\gamma} - 1}{1 - \\gamma}$ and $\\gamma$ is our relative risk aversion parameter. In what follows, we attempt to find the optimal portfolio weights $\\lambda$ which maximize the expected utility of our future wealth.

---

## Deriving a Closed Form Expected Utility Function

We intend to find the portfolio allocation $[\\lambda_A, \\lambda_B]$ which maximizes the expected utility of our wealth in the next period, that is:
$$\\underset{\\lambda_A, \\lambda_B}{\\max} \\, E[U(W_{t+dt})].$$


Incorporating our CRRA utility function yields $E[U(W_{t+dt})] = E\\left[\\frac{(W_t + dW_t)^{1-\\gamma} - 1}{1-\\gamma}\\right]$.


We can now define our wealth dynamic $dW_t$ as evolving according to the chosen portfolio weights $\\lambda_A$ and $\\lambda_B$

$$dW_t = \\lambda_A W_t \\frac{dS_{A,t}}{S_{A,t}} + \\lambda_B W_t \\frac{dS_{B,t}}{S_{B,t}}.$$

Similarly, we note that each stock's price follows a GBM, defined by the stochastic differential equations (SDEs)
$$
\\begin{align*}
dS_{A,t} &= \\mu_A S_{A,t} \\, dt + \\sigma_A S_{A,t} \\, dN_{A,t} \\\\
dS_{B,t} &= \\mu_B S_{B,t} \\, dt + \\sigma_B S_{B,t} \\, dN_{B,t},
\\end{align*}
$$
where $N_{i,t}$ is our notation for Wiener process on asset $i$ at time $t$. 

Substituting both individual asset processes into our wealth SDE yields

$$dW_t = \\lambda_A \\frac{W_t}{S_{A,t}} (\\mu_A S_{A,t} \\, dt + \\sigma_A S_{A,t} \\, dN_{A,t}) + \\lambda_B \\frac{W_t}{S_{B,t}} (\\mu_B S_{B,t} \\, dt + \\sigma_B S_{B,t} \\, dN_{B,t}),$$

which we can simplify to

$$dW_t = W_t \\left[ \\lambda_A (\\mu_A \\, dt + \\sigma_A \\, dN_{A,t}) + \\lambda_B (\\mu_B \\, dt + \\sigma_B \\, dN_{B,t}) \\right].$$


Now, we can substitute this into our expected utility equation:

$$E[U(W_{t+dt})] = E\\left[\\frac{(W_t + W_t (\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t})))^{1-\\gamma}-1}{1-\\gamma}\\right].$$

From here, we begin the process of simplifying this expectation to:

$$\\frac{E\\left[(W_t + W_t (\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t})))^{1-\\gamma}\\right] - 1}{1-\\gamma}.$$

Then we can pull the $W_t^{1-\\gamma}$ out of the expectation yielding

$$\\frac{W_t^{1-\\gamma} E\\left[\\left(1 + \\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t})\\right)^{1-\\gamma}\\right] - 1}{1-\\gamma}.$$


We now consider the second-order Taylor series expansion of $E[(1 + x)^{1-\\gamma}]$ around 1 because we know $x$ will be very small since we're dealing with an infinitesimally small time increment $dt$. In this case, $x=\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t})$.

We remember that the Taylor series of a function $f(x)$ around a point $a$ is given by

$$f(x) = f(a) + f'(a)(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + \\ldots$$

and we are careful to make sure to include the second order term which includes our volatility parameters.

This implies that $E[(1 + x)^{1-\\gamma}] \\approx 1 + (1 - \\gamma)E[x] + \\frac{(1 - \\gamma)(-\\gamma)}{2} E[x^2]$.


Using $x=\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t})$, we see that $E[x] = (\\lambda_A \\mu_A + \\lambda_B \\mu_B)dt$ because $E[dN_{i,t}]=0$.

Furthermore, to solve for $E[x^2]$, we substitute in $x$ which gives us
$$E[x^2] = E[(\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}))^2].$$

From here, we expand out the expression to 

$$E[x^2] = E[(\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}))^2 + 2 \\lambda_A  \\lambda_B (\\mu_A dt + \\sigma_A dN_{A,t}) (\\mu_B dt + \\sigma_B dN_{B,t}) + (\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}))^2].$$


We now have to do some algebra to untangle this a bit further by expanding each of these terms.

$$(\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}))^2 = \\lambda_A^2 \\mu_A^2 dt^2 + 2\\lambda_A^2 \\mu_A \\sigma_A dt \\, dN_{A,t} + \\lambda_A^2 \\sigma_A^2 dN_{A,t}^2$$

$$(\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}))^2 = \\lambda_B^2 \\mu_B^2 dt^2 + 2\\lambda_B^2 \\mu_B \\sigma_B dt \\, dN_{B,t} + \\lambda_B^2 \\sigma_B^2 dN_{B,t}^2$$

$$2\\lambda_A \\lambda_B (\\mu_A dt + \\sigma_A dN_{A,t})(\\mu_B dt + \\sigma_B dN_{B,t}) = 2\\lambda_A \\lambda_B \\mu_A \\mu_B dt^2 + 2\\lambda_A \\lambda_B \\mu_A \\sigma_B dt \\, dN_{B,t} + 2\\lambda_A \\lambda_B \\mu_B \\sigma_A dt \\, dN_{A,t} + 2\\lambda_A \\lambda_B \\sigma_A \\sigma_B dN_{A,t} dN_{B,t}$$


At this point, some properties of Brownian motion come to our aid, particularly that $E[dN_{i,t}]=0$, $E[dN_{i,t}^2]=dt$, and $E[dN_{A,t} dN_{B,t}]=0$ (since $A$ and $B$ are independent processes).

We can make the following simplifications:

$$(\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}))^2 = \\lambda_A^2 \\sigma_A^2 dt$$

$$(\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}))^2 = \\lambda_B^2 \\sigma_B^2 dt$$

$$2\\lambda_A \\lambda_B (\\mu_A dt + \\sigma_A dN_{A,t})(\\mu_B dt + \\sigma_B dN_{B,t}) = 0$$


Putting it all together, the simplified expression for $E[x^2] = \\lambda_A^2 \\sigma_A^2 dt + \\lambda_B^2 \\sigma_B^2 dt$. 


Returning back to the earlier expectation we've been trying to solve with these new results in hand, we see that 

$$E[(1 + x)^{1-\\gamma}] = 1 + (1 - \\gamma)(\\lambda_A \\mu_A + \\lambda_B \\mu_B)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} (\\lambda_A^2 \\sigma_A^2 dt + \\lambda_B^2 \\sigma_B^2 dt).$$

This means we can now write our full expected utility maximization equation as: 

$$E[U(W_{t+dt})] = \\frac{W_t^{1-\\gamma} \\left(1 + (1 - \\gamma)(\\lambda_A \\mu_A + \\lambda_B \\mu_B)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} (\\lambda_A^2 \\sigma_A^2 + \\lambda_B^2 \\sigma_B^2)dt\\right) - 1}{1-\\gamma}$$


> Quick aside, my hunch is that if we were to extend to a multi-asset model this becomes:
> $E[U(W_{t+dt})] = \\frac{W_t^{1-\\gamma} \\left(1 + (1 - \\gamma)\\left(\\sum_{i=1}^{n} \\lambda_i \\mu_i\\right)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} \\left(\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2\\right)dt\\right) - 1}{1-\\gamma}$



Now, because we're in a dual-asset model where the weights sum to 100%, $\\lambda_B$ is determined to be $1-\\lambda_A$. We can subsitute this into the expression above which gives us:

$$
E[U(W_{t+dt})] = \\frac{W_t^{1-\\gamma} \\left[1 + (1 - \\gamma)(\\lambda_A \\mu_A + (1-\\lambda_A) \\mu_B)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} (\\lambda_A^2 \\sigma_A^2 + (1-\\lambda_A)^2 \\sigma_B^2)dt\\right] - 1}{1-\\gamma}
$$


---

## Optimizing Portfolio Weights to Maximize Expected Utility

In order to maximize $E[U(W_{t+dt})]$, we can follow the classic method of differentiating the function with respect to $\\lambda_A$ and setting this partial derivative equal to zero.

First, we notice that the term $\\frac{W^{1-\\gamma} - 1}{1 - \\gamma}$ is a constant with respect to $\\lambda_A$, so we can focus on differentiating only the bracketed expression, which we can denote as $f(\\lambda_A)$:

$$f(\\lambda_A) = 1 + (1 - \\gamma)(\\lambda_A \\mu_A + (1 - \\lambda_A) \\mu_B)dt + \\frac{(1-\\gamma)(-\\gamma)}{2} \\left( \\lambda_A^2 \\sigma_A^2 + (1 - \\lambda_A)^2 \\sigma_B^2 \\right) dt.$$

Now, we differentiate $f(\\lambda_A)$ with respect to $\\lambda_A$:

$$\\frac{df}{d\\lambda_A} = (1 - \\gamma) (\\mu_A - \\mu_B) dt + (1 - \\gamma)(-\\gamma) \\left( \\lambda_A \\sigma_A^2 - (1 - \\lambda_A) \\sigma_B^2 \\right) dt.$$

This simplifies to:

$$\\frac{df}{d\\lambda_A} = (1 - \\gamma) (\\mu_A - \\mu_B) dt + (1 - \\gamma)(-\\gamma) \\left( \\lambda_A (\\sigma_A^2 + \\sigma_B^2) - \\sigma_B^2 \\right) dt.$$

To find the optimal $\\lambda_A$, set $\\frac{df}{d\\lambda_A} = 0$ and solve for $\\lambda_A$:

$$(1 - \\gamma) (\\mu_A - \\mu_B) dt + (1 - \\gamma)(-\\gamma) \\left( \\lambda_A (\\sigma_A^2 + \\sigma_B^2) - \\sigma_B^2 \\right) dt = 0.$$


We can see that $(1 - \\gamma) dt$ is a common factor in both terms, and since $dt$ is an infinitesimal time increment (which importantly is not zero), we can simplify the equation by dividing through by $(1 - \\gamma) dt$:

$$\\mu_A - \\mu_B - \\gamma (\\lambda_A (\\sigma_A^2 + \\sigma_B^2) - \\sigma_B^2) = 0.$$

Now we rearrange the equation to solve for $\\lambda_A$:

$$\\gamma \\lambda_A (\\sigma_A^2 + \\sigma_B^2) = \\mu_A - \\mu_B + \\gamma \\sigma_B^2$$

$$\\lambda_A (\\sigma_A^2 + \\sigma_B^2) = \\frac{\\mu_A - \\mu_B + \\gamma \\sigma_B^2}{\\gamma}$$

From this we have found our optimal $\\lambda_A$:

$$\\lambda_A = \\frac{\\mu_A - \\mu_B + \\gamma \\sigma_B^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}.$$

The optimal $\\lambda_B$ follows easily:

$$\\lambda_B = 1 - \\frac{\\mu_A - \\mu_B + \\gamma \\sigma_B^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)} = \\frac{\\mu_B - \\mu_A + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}.$$


---

## Conclusion

Given two assets modeled as independent GBM processes, wealth $W_t$, and a CRRA utility function, we have found that the optimal allocation to asset $A$ is $\\lambda_A = \\frac{\\mu_A - \\mu_B + \\gamma \\sigma_B^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}$ and the optimal allocation to asset $B$ is $\\lambda_B = \\frac{\\mu_B - \\mu_A + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}$.


You might have noticed that the portfolio allocations $\\lambda_A$ and $\\lambda_B$ don't have a subscript $t$. This is because, given that the price processes are stationary and that our risk aversion parameter $\\gamma$ does not change, they are time and wealth independent! This implies a constant fractional allocation to each stock in our portfolio. 


Notably, in the case where $B$ is a risk-free investment, implying that $\\sigma_B^2=0$, our optimal allocation reduces to $\\lambda_A = \\frac{\\mu_A - \\mu_B}{\\gamma \\sigma_A^2}$, which is the famous Merton Share! 

While all models are lossy, I take issue with the idea of a risk-free rate. In particular, the real returns on a nation's treasuries are sensitive to interest rate changes, inflation, and currency fluctuations. It also shouldn't be overlooked that big debt crises occur fairly regularly and nations do default. With this in mind, I think extending the dual-asset Merton Share model to two risky assets is an improvement toward realism.

  `
    }, {
      title: "Category Creep",
      description: "Using words wrong is bad.",
      slug: "category-creep",
      author: "Grant Stenger (Oct 2024)",
      content: `
*TL;DR: I've noticed a tendency to expand definitions too broadly, which dilutes their clarity and utility. I make the case that effective language, in my eyes, requires precise boundaries that slice concepts into hierarchical, mutually exclusive, and collectively exhaustive categories, preserving clear distinctions. By respecting these boundaries, we avoid what I call “category creep” and enhance language's ability to facilitate clear communication and thought.*

At dinner last night, our conversation about religion unfolded into claims that in some sense capitalism is a religion, humanism is a religion, and so on—raising the question, *what actually is a religion?* Through the conversation, the group expanded into wider and wider interpretations of what could qualify as a religion: sports fandoms, the cult of Elon Musk, companies, and so on. By the end, it felt like we were calling everything a religion and had diluted the word into meaninglessness. I've seen this type of cognitive failure mode before, and I'd like a precise term for it.

Take, for instance, the “Church of the Flying Spaghetti Monster”—which, though in the eyes of the tax code might be legally recognized as a religion, is generally understood to be not actually a “real religion” but rather a humorous, subversive riff on true religion. This suggests that it lies outside the conceptual boundary of “religion” in some crucial way, even if certain institutions recognize it as such.

Whenever debates arise around the definitions of words, I'm reminded of the classic question, “If a tree falls in a forest, does it make a sound?” People get remarkably heated about this, despite often actually agreeing about the true underlying reality. The word “sound” here is overloaded: we agree that the tree creates a sound qua “acoustic vibration in the air” but disagree on whether it produces a sound qua “auditory experience” if no one hears it. The disagreement isn't over base reality but over the shape and boundary of the word *sound* within concept-space. 

Resolving the Church of the Flying Spaghetti Monster ambiguity, if we separate the concept *religion* into the more specific categories of “a U.S. tax code recognized legal entity” and “an authentic belief in and worship of a higher power”, nearly everyone would agree that the CoFSM is the former but not the latter, putting the debate to rest. Notably, this might not just be a case of “sign confusion” but potentially rather of “symbolic theft” wherein terms are intentionally appropriated, in this case either to delegitimize real religion or for financial gain.

To illustrate why precise boundaries are essential, consider the value of dividing a space into mutually exclusive yet collectively exhaustive subspaces, like we did in childhood math problems. This type of structure—where each possibility is accounted for exactly once, without overlap—is useful across domains. For example, a zoologist benefits from a clear taxonomy, organizing the animal kingdom into distinct, hierarchical categories like order, family, genus, and species. Language, when used effectively, functions in much the same way by organizing concept-space into well-defined, non-overlapping boundaries, preserving clarity and avoiding category creep.

I've noticed a cognitive failure mode where someone, swinging too freely through analogies, overly word-associates themselves into incorrect conclusions. This became clear to me while listening to a recent debate between Richard Dawkins and Jordan Peterson, wherein Dawkins accused Peterson of being “drunk on signs”. The common structure of this failure mode goes something like this: Thing 1 is like thing 2, thing 2 shares qualities with thing 3, and so the person concludes that thing 1 must also share properties with thing 3—or worse, that thing 1 *is* thing 3. In Peterson's case, he claimed that because a dragon is (the imagistic equivalent of) a predator, and because a lion is a (type of) predator, that therefore a lion is a dragon. The disagreement came from Peterson's interpretation of “is” as a loose conceptual equivalence, baffling Dawkins because a lion is not *actually* a dragon. The issue is that “is” here is overloaded, creating ambiguity by blurring metaphor with literal truth. Under Peterson's fuzzy analogistic logic, a lion is like a type of dragon in a figurative sense, but to Dawkins a lion isn't literally the same as a dragon. In this case, in my eyes, Peterson suffers from “category creep” as his overly-metaphorical reasoning flattens important distinctions, reducing “lion” and “dragon” to interchangeable terms. Words, after all, are conceptual boundaries—and when the boundaries get stretched too far, their overlaps reduce their usefulness as categorical distinctions. Though boundaries always have both an inside and an outside, when we think of words as conceptual boundaries, we often focus far more on describing what lies inside the boundary than what lies outside. While lions and dragons have similarities, lions do not fly, lions do not breathe fire, and lions are not mythological. Sometimes, it's just as helpful—if not essential—to clearly define what a word is not. 

Overextending categories—like labeling sports fandoms as religions or lions as dragons—dilutes the specificity and utility of language. This in my eyes is a common and under-discussed cognitive failure mode. In the spirit of this discussion, a label we can assign to this sort of semantic overreach could be “**category creep**”. Ultimately, we as a culture continue to refine linguistic boundaries, and the ideal of pursuing hierarchical MECE categories through precise definitions would help facilitate more accurate communication and thought. 
      `
    }, {
      title: "Optimizing Portfolio Weights for Maximum CRRA Utility: An Independent Three-Asset Model",
      description: "Deriving the optimal portfolio weights for a three-asset risky model.",
      slug: "three-asset-model",
      author: "Grant Stenger (March 2024)",
      content: `
***Summary**: In the [previous essay](/writing/binary-asset-portfolio-optimization), we explored how to derive the optimal allocations under an independent binary asset model where the two stocks follow geometric Brownian motion processes. In this current essay we extend the analysis to three assets and then to an n-asset model.*


**Model Definition**
We have three assets $A$, $B$, and $C$ whose price processes follow GBM processeses with parameters $(\\mu_A, \\sigma_A)$, $(\\mu_B, \\sigma_B)$, and $(\\mu_C, \\sigma_C)$, respectively. We allocate our wealth $W$ between $A$, $B$, and $C$ in proportion $\\lambda_A$, $\\lambda_B$, and $\\lambda_C$, respectively, such that $\\lambda_A + \\lambda_B + \\lambda_C = 1$. We again maintain a Constant Relative Risk Aversion (CRRA) utility function $U(W) = \\frac{W^{1-\\gamma} - 1}{1 - \\gamma}$ where $W_t$ is our wealth at time $t$ and $\\gamma$ is our relative risk aversion parameter.


**Deriving Our Expected Utility Function**

We intend to find the portfolio allocation $[\\lambda_A, \\lambda_B, \\lambda_C]$ which maximizes the expected utility of our wealth in the next period, that is:
$$\\underset{\\lambda_A, \\lambda_B, \\lambda_C}{\\max} \\, E[U(W_{t+dt})].$$


After incorporating our CRRA utility function, we see $E[U(W_{t+dt})] = E\\left[\\frac{(W_t + dW_t)^{1-\\gamma} - 1}{1-\\gamma}\\right]$.


We can now define our wealth dynamic $dW_t$ as evolving according to the chosen portfolio weights $\\lambda_A$, $\\lambda_B$, and $\\lambda_C$.

$$dW_t = \\lambda_A W_t \\frac{dS_{A,t}}{S_{A,t}} + \\lambda_B W_t \\frac{dS_{B,t}}{S_{B,t}} + \\lambda_C W_t \\frac{dS_{C,t}}{S_{C,t}}.$$


Similarly, we note that each stock's price follows a GBM, defined by the stochastic differential equations (SDEs)
$$
\\begin{align*}
dS_{A,t} &= \\mu_A S_{A,t} \\, dt + \\sigma_A S_{A,t} \\, dN_{A,t} \\\\
dS_{B,t} &= \\mu_B S_{B,t} \\, dt + \\sigma_B S_{B,t} \\, dN_{B,t} \\\\
dS_{C,t} &= \\mu_C S_{C,t} \\, dt + \\sigma_C S_{C,t} \\, dN_{C,t},
\\end{align*}
$$
where $N_{i,t}$ is our notion for Wiener process on asset $i$ at time $t$. 


Substituting all three individual asset processes into our wealth SDE yields

$$
dW_t = 
\\lambda_A \\frac{W_t}{S_{A,t}} (\\mu_A S_{A,t} \\, dt + \\sigma_A S_{A,t} \\, dN_{A,t}) + 
\\lambda_B \\frac{W_t}{S_{B,t}} (\\mu_B S_{B,t} \\, dt + \\sigma_B S_{B,t} \\, dN_{B,t}) +
\\lambda_C \\frac{W_t}{S_{C,t}} (\\mu_C S_{C,t} \\, dt + \\sigma_C S_{C,t} \\, dN_{C,t}),
$$

which we can simplify to

$$
dW_t = 
\\lambda_A (\\mu_A W_t \\, dt + \\sigma_A W_t \\, dN_{A,t}) + 
\\lambda_B (\\mu_B W_t \\, dt + \\sigma_B W_t \\, dN_{B,t}) + 
\\lambda_C (\\mu_C W_t \\, dt + \\sigma_C W_t \\, dN_{C,t}),
$$

and then to

$$
dW_t = W_t \\left[ 
\\lambda_A (\\mu_A \\, dt + \\sigma_A \\, dN_{A,t}) + \\lambda_B (\\mu_B \\, dt + \\sigma_B \\, dN_{B,t}) +
\\lambda_C (\\mu_C \\, dt + \\sigma_C \\, dN_{C,t})
\\right].
$$

Now we can substitute this into our expected utility equation:

$$
E[U(W_{t+dt})] = 
E\\left[
    \\frac
    {(W_t + W_t (
        \\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
        \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) + 
        \\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t}) + 
        ))^{1-\\gamma}-1}
    {1-\\gamma}
\\right]
$$


From here, we begin the process of simplifying this expectation to:

$$
\\frac
{E\\left[(W_t + W_t (
    \\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
    \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
    \\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})
    ))^{1-\\gamma}\\right] - 1}
{1-\\gamma}.
$$

Then we can pull the $W_t^{1-\\gamma}$ out of the expectation yielding

$$
\\frac
{W_t^{1-\\gamma} E\\left[\\left(1 + 
    \\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
    \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
    \\lambda_B (\\mu_C dt + \\sigma_B dN_{C,t})
    \\right)^{1-\\gamma}\\right] - 1}
{1-\\gamma}.
$$


We now consider the second-order Taylor series expansion of $E[(1 + x)^{1-\\gamma}]$ around 1 because we know $x$ will be very small since we're dealing with an infinitesimally small time increment $dt$. In this case, $x=
\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
\\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})$.


We remember that the Taylor series of a function $f(x)$ around a point $a$ is given by

$$f(x) = f(a) + f'(a)(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + \\ldots$$

and we are careful to make sure to include the second order term which includes our volatility parameters.

This implies that $E[(1 + x)^{1-\\gamma}] \\approx 1 + (1 - \\gamma)E[x] + \\frac{(1 - \\gamma)(-\\gamma)}{2} E[x^2]$.



Using $x=
\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
\\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})$, we see that $E[x] = (\\lambda_A \\mu_A + \\lambda_B \\mu_B + \\lambda_C \\mu_C)dt$ because $E[dN_{i,t}]=0$.


Furthermore, to solve for $E[x^2]$, we substitute in $x$ which gives us
$$
E[x^2] = E[(
\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + 
\\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
\\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})
)^2].
$$


Though it seems a bit unwieldy, we can simplify the expression $E\\left[\\left(\\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) + \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) + \\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})\\right)^2\\right]$, we need to first expand the square and use the properties of Wiener processes, notably that $E[dN_{i,t}] = 0$ and $E[dN_{i,t}^2] = dt$.

Expanding the square gives:

$$
\\begin{align*}
&\\lambda_A^2 (\\mu_A dt + \\sigma_A dN_{A,t})^2 + \\lambda_B^2 (\\mu_B dt + \\sigma_B dN_{B,t})^2 + \\lambda_C^2 (\\mu_C dt + \\sigma_C dN_{C,t})^2 \\\\
&+ 2 \\lambda_A \\lambda_B (\\mu_A dt + \\sigma_A dN_{A,t})(\\mu_B dt + \\sigma_B dN_{B,t}) \\\\
&+ 2 \\lambda_A \\lambda_C (\\mu_A dt + \\sigma_A dN_{A,t})(\\mu_C dt + \\sigma_C dN_{C,t}) \\\\
&+ 2 \\lambda_B \\lambda_C (\\mu_B dt + \\sigma_B dN_{B,t})(\\mu_C dt + \\sigma_C dN_{C,t})
\\end{align*}
$$

We can now simplify each term by considering the properties of $dN_{i,t}$ noted before:

For terms like $\\lambda_A^2 (\\mu_A dt + \\sigma_A dN_{A,t})^2$, the expansion will give $\\lambda_A^2 \\mu_A^2 dt^2 + 2 \\lambda_A^2 \\mu_A \\sigma_A dt dN_{A,t} + \\lambda_A^2 \\sigma_A^2 dN_{A,t}^2$. When taking the expected value of this, the $dt dN_{A,t}$ term disappears, and $dN_{A,t}^2$ becomes $dt$, leaving $\\lambda_A^2 \\sigma_A^2 dt$.

When taking the expected value of this, the $dt \, dN_{A,t}$ term disappears, and $dN_{A,t}^2$ becomes $dt$, leaving $\\lambda_A^2 \\sigma_A^2 dt$.

The cross terms like $2 \\lambda_A \\lambda_B (\\mu_A dt + \\sigma_A dN_{A,t})(\\mu_B dt + \\sigma_B dN_{B,t})$ expand out to 

$$2 \\lambda_A \\lambda_B \\mu_A \\mu_B dt^2 + 2 \\lambda_A \\lambda_B \\mu_A \\sigma_B dt \\, dN_{B,t} + 2 \\lambda_A \\lambda_B \\sigma_A \\mu_B dt \\, dN_{A,t} + 2 \\lambda_A \\lambda_B \\sigma_A \\sigma_B dN_{A,t} \\, dN_{B,t}.$$
Each term in this expression goes to zero because $E[dt^2]=0$ and $E[N_{i,t}]=0$. 

After applying these simplifications, the expected value expression becomes:

$$E
\\left[\\left(
    \\lambda_A (\\mu_A dt + \\sigma_A dN_{A,t}) +
    \\lambda_B (\\mu_B dt + \\sigma_B dN_{B,t}) +
    \\lambda_C (\\mu_C dt + \\sigma_C dN_{C,t})
    \\right)^2\\right] = 
(\\lambda_A^2 \\sigma_A^2 + 
\\lambda_B^2 \\sigma_B^2 + 
\\lambda_C^2 \\sigma_C^2)dt.
$$



Returning back to the earlier expectation we've been trying to solve with these new results in hand, we see that 

$$
E[(1 + x)^{1-\\gamma}] = 1 + (1 - \\gamma)(
\\lambda_A \\mu_A +
\\lambda_B \\mu_B +
\\lambda_C \\mu_C
)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} (
\\lambda_A^2 \\sigma_A^2 dt + 
\\lambda_B^2 \\sigma_B^2 dt + 
\\lambda_C^2 \\sigma_C^2 dt
).
$$


This means we can now write our full expected utility maximization equation as: 

$$
E[U(W_{t+dt})] = \\frac{W_t^{1-\\gamma} \\left[1 + (1 - \\gamma)(
\\lambda_A \\mu_A + 
\\lambda_B \\mu_B +
\\lambda_C \\mu_C
)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} (
\\lambda_A^2 \\sigma_A^2 + 
\\lambda_B^2 \\sigma_B^2 +
\\lambda_C^2 \\sigma_C^2
)dt\\right] - 1}{1-\\gamma}
$$


We make one final adjustment by including our $\\lambda_A + \\lambda_B + \\lambda_C = 1$ constraint to reduce a degree of freedom our model. 



We first substitute $\\lambda_C = 1 - \\lambda_A - \\lambda_B$ into the linear term $\\lambda_A \\mu_A + \\lambda_B \\mu_B + \\lambda_C \\mu_C = \\lambda_A \\mu_A + \\lambda_B \\mu_B + (1 - \\lambda_A - \\lambda_B) \\mu_C = \\lambda_A (\\mu_A - \\mu_C) + \\lambda_B (\\mu_B - \\mu_C) + \\mu_C$. This also makes intuitive sense because initially the expression was the sum of all of our allocation percentages times the average return of those investments which is the expected return of our portfolio. The final expression is the same expected return of our portfolio, except we can conceptualize this as 100% of our portfolio returning $\\mu_C$, and then for each non-$C$ asset we compute how much more or less we'd make on that fraction of our portfolio against a $C$-based benchmark. 

Now we need to handle the quadratic term, $\\lambda_A^2 \\sigma_A^2 + \\lambda_B^2 \\sigma_B^2 + \\lambda_C^2 \\sigma_C^2$. We substitute out $\\lambda_C$ which yields $\\lambda_A^2 \\sigma_A^2 + \\lambda_B^2 \\sigma_B^2 + (1 - \\lambda_A - \\lambda_B)^2 \\sigma_C^2$. We note that generally $(1 - \\sum_{i=1}^{n} x_i)^2 = 1 - 2 \\sum_{i=1}^{n} x_i + 2 \\sum_{1 \\leq i < j \\leq n} x_ix_j + \\sum_{i=1}^{n} x_i^2$, this generalization will help us when we extend to the n-asset framework, but we can use it in our three-asset model too. 




Now we expand and simplify the quadratic term for $\\lambda_C$:

$$
= \\lambda_A^2 \\sigma_A^2 + \\lambda_B^2 \\sigma_B^2 + (
    1 - 
    2\\lambda_A - 
    2\\lambda_B + 
    2\\lambda_A\\lambda_B + 
    \\lambda_A^2 + 
    \\lambda_B^2
) \\sigma_C^2
$$

$$
= \\lambda_A^2 \\sigma_A^2 + 
\\lambda_B^2 \\sigma_B^2 +
\\sigma_C^2 - 
2\\lambda_A \\sigma_C^2 - 
2\\lambda_B \\sigma_C^2 + 
2\\lambda_A\\lambda_B \\sigma_C^2 + 
\\lambda_A^2 \\sigma_C^2 + 
\\lambda_B^2 \\sigma_C^2
$$

$$
= \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
\\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
2\\lambda_A\\lambda_B \\sigma_C^2 - 
2\\lambda_A \\sigma_C^2 - 
2\\lambda_B \\sigma_C^2 +
\\sigma_C^2
$$


We can now substitute these simplified expressions back into the original equation:

$$
\\frac{W_t^{1-\\gamma} \\left( 1 + (1 - \\gamma) \\left( \\lambda_A (\\mu_A - \\mu_C) + \\lambda_B (\\mu_B - \\mu_C) + \\mu_C\\right)dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} \\left(
    \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
    \\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
    2\\lambda_A\\lambda_B \\sigma_C^2 - 
    2\\lambda_A \\sigma_C^2 - 
    2\\lambda_B \\sigma_C^2 + 
    \\sigma_C^2
\\right)dt \\right) - 1}{1-\\gamma}
$$


This expression for our expected marginal utility incorporates all of the constraints of our model now that $\\lambda_C$ has been eliminated and replaced by solely $\\lambda_A$ and $\\lambda_B$, which crucially reduces a degree of freedome from our model and allows the matrix inversion technique which follows to succeed. 




**Optimizing Portfolio Weights to Maximize Expected Utility (Take Three)**


We know that the maximium of $E[U(W_{t+dt})]$ w.r.t. our $\\lambda_i$s will have a tangent plane with zero gradient in the $\\lambda_A$ and $\\lambda_B$ directions. That is, $\\frac{dE[U(W_{t+dt})]}{d\\lambda_i}=0$ for $i \\in \\{1,2\\}$. From this we will get a system of equations which we can then solve to get our optimal portfolio allocations. We start by solving for $\\frac{d}{d\\lambda_A}E[U(W_{t+dt})]$.

$$
\\frac{d}{d\\lambda_A} E[U(W_{t+dt})] = 
\\frac{d}{d\\lambda_A}
\\left(
    \\frac{
        W_t^{1-\\gamma} 
        \\left( 
            1 + (1 - \\gamma) 
            \\left( 
                \\lambda_A (\\mu_A - \\mu_C) + 
                \\lambda_B (\\mu_B - \\mu_C) + 
                \\mu_C
            \\right)dt + 
            \\frac{(1 - \\gamma)(-\\gamma)}{2} 
            \\left(
                \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
                \\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
                2\\lambda_A\\lambda_B \\sigma_C^2 - 
                2\\lambda_A \\sigma_C^2 - 
                2\\lambda_B \\sigma_C^2 + 
                \\sigma_C^2
            \\right)dt 
        \\right) - 1
    }{
        1-\\gamma
    }
\\right)
$$




$$
= \\frac{W_t^{1-\\gamma}}{1-\\gamma}
\\frac{d}{d\\lambda_A}
\\left( 
    1 + (1 - \\gamma) 
    \\left( 
        \\lambda_A (\\mu_A - \\mu_C) + 
        \\lambda_B (\\mu_B - \\mu_C) + 
        \\mu_C
    \\right)dt + 
    \\frac{(1 - \\gamma)(-\\gamma)}{2} 
    \\left(
        \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
        \\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
        2\\lambda_A\\lambda_B \\sigma_C^2 - 
        2\\lambda_A \\sigma_C^2 - 
        2\\lambda_B \\sigma_C^2 + 
        \\sigma_C^2
    \\right)dt 
\\right)
$$


$$
= \\frac{W_t^{1-\\gamma}}{1-\\gamma}
\\frac{d}{d\\lambda_A}
\\left( 
    (1 - \\gamma) 
    \\left( 
        \\lambda_A (\\mu_A - \\mu_C) + 
        \\lambda_B (\\mu_B - \\mu_C) + 
        \\mu_C
    \\right)dt
\\right) + \\frac{d}{d\\lambda_A}
\\left(
    \\frac{(1 - \\gamma)(-\\gamma)}{2} 
    \\left(
        \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
        \\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
        2\\lambda_A\\lambda_B \\sigma_C^2 - 
        2\\lambda_A \\sigma_C^2 - 
        2\\lambda_B \\sigma_C^2 + 
        \\sigma_C^2
    \\right)dt 
\\right)
$$


$$
= W_t^{1-\\gamma}
\\frac{d}{d\\lambda_A}
\\left( 
    \\left( 
        \\lambda_A (\\mu_A - \\mu_C) + 
        \\lambda_B (\\mu_B - \\mu_C) + 
        \\mu_C
    \\right)dt
\\right) - 
\\frac{W_t^{1-\\gamma} \\gamma}{2} 
\\frac{d}{d\\lambda_A}
\\left(
    \\left(
        \\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) + 
        \\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) + 
        2\\lambda_A\\lambda_B \\sigma_C^2 - 
        2\\lambda_A \\sigma_C^2 - 
        2\\lambda_B \\sigma_C^2 + 
        \\sigma_C^2
    \\right)dt 
\\right)
$$



$$
= W_t^{1-\\gamma}
\\left(
    \\frac{d}{d\\lambda_A} (\\lambda_A (\\mu_A - \\mu_C) dt) + 
    \\frac{d}{d\\lambda_A} (\\lambda_B (\\mu_B - \\mu_C) dt) + 
    \\frac{d}{d\\lambda_A} (\\mu_C dt) 
\\right) - 
\\frac{W_t^{1-\\gamma} \\gamma}{2} 
\\left(
        \\frac{d}{d\\lambda_A} (\\lambda_A^2 (\\sigma_A^2 + \\sigma_C^2) dt) + 
        \\frac{d}{d\\lambda_A} (\\lambda_B^2 (\\sigma_B^2 + \\sigma_C^2) dt) + 
        \\frac{d}{d\\lambda_A} (2\\lambda_A\\lambda_B \\sigma_C^2 dt) - 
        \\frac{d}{d\\lambda_A} (2\\lambda_A \\sigma_C^2 dt) - 
        \\frac{d}{d\\lambda_A} (2\\lambda_B \\sigma_C^2 dt) + 
        \\frac{d}{d\\lambda_A} (\\sigma_C^2 dt)
\\right)
$$




$$
= W_t^{1-\\gamma}
\\left(
    (\\mu_A - \\mu_C) dt + 
    \\frac{d \\lambda_B}{d\\lambda_A} (\\mu_B - \\mu_C) dt
\\right) - 
\\frac{W_t^{1-\\gamma} \\gamma}{2} 
\\left(
        2 \\lambda_A (\\sigma_A^2 + \\sigma_C^2) dt + 
        2 \\lambda_B (\\sigma_B^2 + \\sigma_C^2) \\frac{d \\lambda_B}{d\\lambda_A} dt + 
        2 \\sigma_C^2 (\\lambda_A \\frac{d \\lambda_B}{d\\lambda_A} + \\lambda_B) dt - 
        2 \\sigma_C^2 dt - 
        2 \\sigma_C^2 \\frac{d\\lambda_B}{d\\lambda_A} dt 
\\right)
$$


$$
= W_t^{1-\\gamma} dt
\\left(
    (\\mu_A - \\mu_C) + 
    \\frac{d \\lambda_B}{d\\lambda_A} (\\mu_B - \\mu_C) - 
    \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) - 
    \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) \\frac{d \\lambda_B}{d\\lambda_A} -
    \\gamma \\sigma_C^2 \\lambda_A \\frac{d \\lambda_B}{d\\lambda_A} -
    \\gamma \\sigma_C^2 \\lambda_B + 
    \\gamma \\sigma_C^2 +
    \\gamma \\sigma_C^2 \\frac{d\\lambda_B}{d\\lambda_A} 
\\right)
$$


$$
= W_t^{1-\\gamma} dt \\left( \\mu_A - \\mu_C - \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) - \\gamma \\sigma_C^2 \\lambda_B + \\gamma \\sigma_C^2 + \\frac{d \\lambda_B}{d\\lambda_A} \\left(\\mu_B - \\mu_C - \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) - \\gamma \\sigma_C^2 \\lambda_A + \\gamma \\sigma_C^2\\right) \\right)
$$


We can apply a symmetry argument to find $\\frac{dE[U]}{d\\lambda_B}$ because $\\lambda_B$ can be interchanged with $\\lambda_A$ without changing $E[U]$. Setting each of these partial derivative to equal zero gives us the system of equations we're looking for.


$$
\\frac{dE[U]}{d\\lambda_A} = W_t^{1-\\gamma} dt 
\\left( 
    \\mu_A - \\mu_C - 
    \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) - 
    \\gamma \\sigma_C^2 \\lambda_B + 
    \\gamma \\sigma_C^2 + 
    \\frac{d \\lambda_B}{d\\lambda_A} 
    \\left(
        \\mu_B - \\mu_C - 
        \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) - 
        \\gamma \\sigma_C^2 \\lambda_A + 
        \\gamma \\sigma_C^2
    \\right) 
\\right) = 0
$$

$$
\\frac{dE[U]}{d\\lambda_B} = W_t^{1-\\gamma} dt 
\\left( 
    \\mu_B - \\mu_C - 
    \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) - 
    \\gamma \\sigma_C^2 \\lambda_A + 
    \\gamma \\sigma_C^2 + 
    \\frac{d \\lambda_A}{d\\lambda_B} 
    \\left(
        \\mu_A - \\mu_C - 
        \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) - 
        \\gamma \\sigma_C^2 \\lambda_B + 
        \\gamma \\sigma_C^2
    \\right) 
\\right) = 0
$$


$$\\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) + 
\\gamma \\sigma_C^2 \\lambda_B - 
\\gamma \\sigma_C^2 +
\\frac{d \\lambda_B}{d\\lambda_A} 
\\left( 
    \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) + 
    \\gamma \\sigma_C^2 \\lambda_A - 
    \\gamma \\sigma_C^2
\\right) 
= \\mu_A - \\mu_C +
\\frac{d \\lambda_B}{d\\lambda_A} 
\\left(
    \\mu_B - \\mu_C
\\right) 
$$





We now do some simplification. 


After cancelling out $W_t^{1-\\gamma} dt$ from both sides of the equation, the rearranged form becomes:


$$
-\\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) - 
\\gamma \\sigma_C^2 \\lambda_B + 
\\frac{d \\lambda_B}{d\\lambda_A} 
  \\left( 
    - \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) 
    - \\gamma \\sigma_C^2 \\lambda_A 
  \\right) = 
\\mu_A - \\mu_C + 
\\gamma \\sigma_C^2 + 
\\frac{d \\lambda_B}{d\\lambda_A} 
(\\mu_B - \\mu_C + \\gamma \\sigma_C^2)
$$


$$
-\\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) - 
\\gamma \\sigma_C^2 \\lambda_A + 
\\frac{d \\lambda_A}{d\\lambda_B} 
  \\left( 
    - \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) 
    - \\gamma \\sigma_C^2 \\lambda_B 
  \\right) = 
\\mu_B - \\mu_C + 
\\gamma \\sigma_C^2 + 
\\frac{d \\lambda_A}{d\\lambda_B} 
(\\mu_A - \\mu_C + \\gamma \\sigma_C^2
$$



I think the answer might be:



$$
\\lambda_A = \\frac{-\\gamma \\sigma_B^2 \\sigma_C^2 - \\mu_A \\sigma_B^2 - \\mu_A \\sigma_C^2 + \\mu_B \\sigma_C^2 + \\mu_C \\sigma_B^2}{\\gamma \\sigma_A^2 \\sigma_B^2 + \\gamma \\sigma_A^2 \\sigma_C^2 + \\gamma \\sigma_B^2 \\sigma_C^2}
$$

$$
\\lambda_B = \\frac{-\\gamma \\sigma_A^2 \\sigma_C^2 + \\mu_A \\sigma_C^2 - \\mu_B \\sigma_A^2 - \\mu_B \\sigma_C^2 + \\mu_C \\sigma_A^2}{\\gamma \\sigma_A^2 \\sigma_B^2 + \\gamma \\sigma_A^2 \\sigma_C^2 + \\gamma \\sigma_B^2 \\sigma_C^2}
$$


Simplifying:

$$
\\lambda_A = 
\\frac{ 
    \\sigma_B^2 (\\mu_C - \\mu_A) + 
    \\sigma_C^2 (\\mu_B - \\mu_A) -
    \\gamma \\sigma_B^2 \\sigma_C^2
}{ \\gamma (
    \\sigma_A^2 \\sigma_B^2 + 
    \\sigma_A^2 \\sigma_C^2 + 
    \\sigma_B^2 \\sigma_C^2
)}
$$

$$
\\lambda_B = 
\\frac{ 
    \\sigma_C^2 (\\mu_A - \\mu_B) + 
    \\sigma_A^2 (\\mu_C - \\mu_B) -
    \\gamma \\sigma_A^2 \\sigma_C^2
}{ \\gamma (
    \\sigma_A^2 \\sigma_B^2 + 
    \\sigma_A^2 \\sigma_C^2 + 
    \\sigma_B^2 \\sigma_C^2
)}
$$


$$
\\lambda_C = 
\\frac{ 
    \\sigma_A^2 (\\mu_B - \\mu_C) + 
    \\sigma_B^2 (\\mu_A - \\mu_C) -
    \\gamma \\sigma_A^2 \\sigma_B^2
}{ \\gamma (
    \\sigma_A^2 \\sigma_B^2 + 
    \\sigma_A^2 \\sigma_C^2 + 
    \\sigma_B^2 \\sigma_C^2
)}
$$



Let's solve for the partial derivatives.

$$
\\frac{d \\lambda_B}{d\\lambda_A} = 
\\frac{
    \\mu_A - 
    \\mu_C +
    \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) +
    \\gamma \\sigma_C^2 (1 +\\lambda_B)
}{
    \\mu_B - 
    \\mu_C -
    \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) + 
    \\gamma \\sigma_C^2 (1 - \\lambda_A)
}
$$

$$
\\frac{d \\lambda_A}{d\\lambda_B} = 
\\frac{
    \\mu_B - 
    \\mu_C + 
    \\gamma \\lambda_B (\\sigma_B^2 + \\sigma_C^2) + 
    \\gamma \\sigma_C^2 (1 + \\lambda_A)
}{ 
    \\mu_A - \\mu_C -
    \\gamma \\lambda_A (\\sigma_A^2 + \\sigma_C^2) + 
    \\gamma \\sigma_C^2 (1 - \\lambda_B)
}
$$
      `
    },
    {
      title: "Beyond Cash: Extending Our Binary Asset Model Via Risky Numeraire",
      description: "What if we denominate our wealth in terms of a risky asset?",
      slug: "numeraire",
      author: "Grant Stenger (Nov 2024)",
      content: `
In my previous essay, "[Optimizing Portfolio Weights for Maximum CRRA Utility: An Independent Binary Asset Model](/writing/binary-asset-portfolio-optimization)", I made the case that there may be no such thing as a risk-free asset. In the case of treasuries, the typical example of the risk-free asset, the holder is exposed to inflation risks, dollar fluctuations, interest rate changes, and other factors. Given this, I constructed a model for the optimal allocation between two risky assets. 

Every investor has their own basket of goods under which they estimate changes in their real purchasing power.[^1] This subjective basket is not exactly cash, which was the motivation for the first essay. But what if it were somehow a known tradable asset? Or even more simply, perhaps an investor wants to denominate their returns in ETH, SPY, or some known liquid asset. Does our previous analysis still hold if we change the currency units? In this essay, I examine the case where, instead of using cash as a base for both assets $A$ and $B$, we designate asset $A$ as the numeraire, expressing asset $B$ in terms of $A$.

Let us begin with the optimal allocations derived from the previous cash-denominated model:

$$
\\lambda_A = \\frac{\\mu_A - \\mu_B + \\gamma \\sigma_B^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}, \\quad \\lambda_B = \\frac{\\mu_B - \\mu_A + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}.
$$

Both assets $A$ and $B$ are initially denominated in cash. We now shift our perspective by setting asset $A$ as the numeraire, effectively redefining all quantities in relation to $A$. This transition moves us from a cash-denominated framework to one in which asset $A$ is the central reference point.


**Key Definitions in the $A$-Denominated Model:**
- $S_{B/A}$: Price of asset $B$ relative to $A$.
- $S_{A/A}$: Price of asset $A$ relative to itself.
- $\\mu_{B/A}$, $\\sigma_{B/A}$: Drift and volatility of $B$ with respect to $A$.
- $\\lambda_{A/A}$, $\\lambda_{B/A}$: Portfolio weights for $A$ and $B$ in the $A$-denominated framework.
- $W_{A,t}$: Wealth expressed in terms of $A$.
- $dW_{A,t}$: Wealth dynamics in terms of $A$.

We start by solving for the simplest expressions.

$S_{A/A}$ is the price of asset $A$ relative to itself, so  $S_{A/A} = \\frac{S_{A/A}}{S_{A/A}} = 1$.

Since $S_{A/A} = 1$, its drift and volatility are zero: $\\mu_{A/A} = 0$, $\\sigma_{A/A} = 0$.

The price of $B$ in terms of $A$ is given by $S_{B/A} = \\frac{S_B}{S_A}$.

In this model, the drift and volatility of $B$ relative to $A$ are defined as:
$$
\\mu_{B/A} = \\mu_B - \\mu_A, \\quad \\sigma_{B/A} = \\sqrt{\\sigma_A^2 + \\sigma_B^2}.
$$


The transition from the cash-denominated optimal $B$ allocation, $\\lambda_B = \\frac{\\mu_B - \\mu_A + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}$, to the $A$-denominated model can be achieved by the following transformations:

Replace the cash-denominated drift difference $\\mu_B - \\mu_A$ with $\\mu_{B/A}$:

$$
\\frac{\\mu_B - \\mu_A + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)} = \\frac{\\mu_{B/A} + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)}
$$


Next, replace the combined variance $\\sigma_A^2 + \\sigma_B^2$ with $\\sigma_{B/A}^2$:
 
$$
\\frac{\\mu_{B/A} + \\gamma \\sigma_A^2}{\\gamma (\\sigma_A^2 + \\sigma_B^2)} = \\frac{\\mu_{B/A} + \\gamma \\sigma_A^2}{\\gamma \\sigma_{B/A}^2}
$$


Finally, note that the numeraire asset $A/A$ has zero drift and zero volatility: $\\mu_{A/A} = 0$ and $\\sigma_{A/A} = 0$:

$$
\\frac{\\mu_{B/A} + \\gamma \\sigma_A^2}{\\gamma \\sigma_{B/A}^2} = \\frac{\\mu_{B/A}}{\\gamma \\sigma_{B/A}^2}
$$


Thus, the optimal weight for $B$ in the $A$-denominated framework becomes:

$$
\\lambda_{B/A} = \\frac{\\mu_{B/A}}{\\gamma \\sigma_{B/A}^2}
$$

The derivation above is perfectly legitamate, though if we don't want to take as axiom the results of my previous essay, we can start again from scratch.



**Fully Deriving the Optimal Portfolio Weights in the $A$-Denominated Model**

We start with maximizing our expected CRRA utility as before:

$$
\\underset{\\lambda_{B/A}}{\\max} \\, E\\left[U(W_{A,t+dt})\\right] = E\\left[\\frac{(W_{A,t} + dW_{A,t})^{1-\\gamma} - 1}{1 - \\gamma}\\right]
$$


We note that in the $A$-denominated model the only risky asset is $B/A$, so the wealth dynamics are driven solely by $B/A$. The optimization problem simplifies to maximizing expected utility with respect to $\\lambda_{B/A}$.

Since $S_{A/A} = 1$, asset $A$ contributes no differential to wealth dynamics in $A$-terms. Thus, wealth dynamics in this $A$-denominated framework are driven solely by $B/A$:

$$
dW_{A,t} = \\lambda_{B/A} W_{A,t} \\frac{dS_{B/A,t}}{S_{B/A,t}},
$$

$$
dW_{A,t} = \\lambda_{B/A} W_{A,t} \\left( \\mu_{B/A} \\, dt + \\sigma_{B/A} \\, dN_t \\right).
$$

We now substitute this wealth dynamic term into our expected utility calculation:
$$
\\underset{\\lambda_{B/A}}{\\max} \\, E\\left[U(W_{A,t+dt})\\right] = E\\left[\\frac{(W_{A,t} + \\lambda_{B/A} W_{A,t} ( \\mu_{B/A} \\, dt + \\sigma_{B/A} \\, dN_t ))^{1-\\gamma} - 1}{1 - \\gamma}\\right].
$$


Applying a second-order Taylor expansion to $E\\left[(1 + x)^{1 - \\gamma}\\right]$ where $x = \\lambda_{B/A} \\left( \\mu_{B/A} \\, dt + \\sigma_{B/A} \\, dN_t \\right)$, we get:

$$
E\\left[(1 + x)^{1 - \\gamma}\\right] \\approx 1 + (1 - \\gamma) E[x] + \\frac{(1 - \\gamma)(-\\gamma)}{2} E[x^2].
$$

$$E[x] = \\lambda_{B/A} \\mu_{B/A} dt$$

$$E[x^2] = \\lambda_{B/A}^2 \\sigma_{B/A}^2 dt$$

We now simplify our expected utility expression:

$$
E[U(W_{A,t+dt})] \\approx \\frac{W_{A,t}^{1 - \\gamma} \\left(1 + (1 - \\gamma) \\lambda_{B/A} \\mu_{B/A} dt + \\frac{(1 - \\gamma)(-\\gamma)}{2} \\lambda_{B/A}^2 \\sigma_{B/A}^2 dt \\right) - 1}{1 - \\gamma}.
$$


Now we differentiate the bracketed term with respect to $\\lambda_{B/A}$ and set the derivative to zero:

$$
\\frac{d}{d\\lambda_{B/A}} \\left[ (1 - \\gamma) \\lambda_{B/A} \\mu_{B/A} dt - \\frac{\\gamma (1 - \\gamma)}{2} \\lambda_{B/A}^2 \\sigma_{B/A}^2 dt \\right] = 0.
$$

Simplify:

$$
(1 - \\gamma) \\mu_{B/A} dt - \\gamma (1 - \\gamma) \\lambda_{B/A} \\sigma_{B/A}^2 dt = 0.
$$

Divide both sides by $(1 - \\gamma) dt$:

$$
\\mu_{B/A} - \\gamma \\lambda_{B/A} \\sigma_{B/A}^2 = 0.
$$

Thus, the optimal weight for $B/A$ is

$$
\\lambda_{B/A} = \\frac{\\mu_{B/A}}{\\gamma \\sigma_{B/A}^2}
$$

And the optimal weight for $A/A$ is:

$$
\\lambda_{A/A} = 1 - \\lambda_{B/A} = 1 - \\frac{\\mu_{B/A}}{\\gamma \\sigma_{B/A}^2}
$$

**Conclusion:**

We can now express the optimal weights in the $A$-denominated model directly in terms of $\\mu_{B/A}$ and $\\sigma_{B/A}^2$.

$$
\\lambda_{B/A} = \\frac{\\mu_{B/A}}{\\gamma \\sigma_{B/A}^2}, \\quad \\lambda_{A/A} = 1 - \\lambda_{B/A}.
$$

Thus, after transforming the cash-denominated model's optimal weights to the $A$-denominated model's optimal weights, we see that we've derived the famous Merton share.


[^1]: I am skeptical of standard national CPI measures, as discussed in Chapter 5 of Keynes' *Treatise on Money*. I think exact CPI calculation seems like a fundamentally futile task, though it's nuanced so I haven't made up my mind yet.
      `
    },
    {
      title: "Bayes-Nash Equilibrium in a One-Street No-Limit Von Neumann Poker Model",
      description: "A mathematical analysis of optimal betting strategies in a simplified poker model",
      author: "Grant Stenger (Feb 2025)",
      slug: "von_neumann_poker.pdf",
      content: pokerModelContent,  
      tags: ["Mathematics", "Game Theory", "Poker"],
      contentType: "latex",
    },
    // Add more articles as needed
  ];
