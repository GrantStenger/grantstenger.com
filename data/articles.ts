export const articles = [
    {
      title: "Quant Funds and AI Labs Converge",
      description: "An analysis of the convergence between quantitative trading firms and AI research laboratories.",
      slug: "quant-ai-convergence",
      author: "Grant Stenger and Rich Dewey (Jan 2026)",
      link: "https://www.ft.com/content/18313a5f-ae6e-44e9-a26a-4a81cd3190bf"
    },
    {
      title: "Why Local Minima Are Rare in High-Dimensional Landscapes",
      description: "A note on Hessians, saddles, and Morse critical points: why nondegenerate local minima are exponentially rare among the critical points of high-dimensional random landscapes.",
      slug: "local-minima",
      author: "Grant Stenger (May 2025)",
      pdfUrl: "/local-minima",
      contentType: "latex",
    },
    {
      title: "Trillions of Markets",
      description: "Why a collapse in the cost of making almost anything tradable produces not thousands of markets but trillions.",
      slug: "trillions-of-markets",
      author: "Grant Stenger (June 2026)",
    },
    {
      title: "SUPA: Solana Uniform-Price Auctions for CPMMs",
      description: "A batch-clearing generalization of the constant-product market maker that neutralizes intra-slot MEV by clearing trades at a uniform price.",
      slug: "supa",
      author: "Grant Stenger, Martin Lindsey, Edwin Suresh, Keith Warter, Agam Gambhir (Oct 2025)",
      pdfUrl: "/supa",
      contentType: "latex",
    },
    {
      title: "An Arrow–Pratt Foundation for Almgren–Chriss Execution",
      description: "Deriving the Almgren-Chriss execution-risk coefficient from Arrow-Pratt curvature of terminal-wealth utility: local utility, exact GBM variance kernels, and wealth-scaled risk aversion.",
      author: "Grant Stenger (Dec 2024)",
      slug: "arrow-pratt-almgren-chriss",
      pdfUrl: "/writing/arrow_pratt_almgren_chriss.pdf",
      contentType: "latex",
    },
    {
      title: "A Case for Cooperation: Dependence in the Prisoner's Dilemma",
      description: "An exploration of the famous game theory problem.",
      slug: "prisoners-dilemma",
      author: "Grant Stenger (Sept 2024)",
      pdfUrl: "/writing/The_Case_for_Cooperation.pdf",
      contentType: "latex",
    },
    {
      title: "Optimal Portfolio Weights Under CRRA Utility",
      description: "Deriving optimal portfolio allocations under CRRA utility across binary, multi-asset, and risky numeraire frameworks.",
      slug: "portfolio-optimization",
      author: "Grant Stenger (March, April, Nov 2024)",
      content: `## Summary

This series of essays explores the optimization of portfolio weights to maximize a Constant Relative Risk Aversion (CRRA) utility function over an agent's wealth. We use classic stochastic calculus techniques to model price processes as Geometric Brownian Motion (GBM). In Part I, we derive the optimal allocation between two risky assets and find our solution is an extension of the famous Merton Share. In Part II, we extend the analysis to three assets and then to an n-asset model. In Part III, we examine what happens when we change the numeraire from cash to a risky asset.

---

# Part I: The Binary Asset Model

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



---

# Part II: Extension to Three Assets

In Part I, we derived the optimal allocations under an independent binary asset model where the two stocks follow geometric Brownian motion processes. We now extend the analysis to three assets and then to an n-asset model.

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

---

# Part III: Risky Numeraire

In Part I, we made the case that there may be no such thing as a risk-free asset. In the case of treasuries, the typical example of the risk-free asset, the holder is exposed to inflation risks, dollar fluctuations, interest rate changes, and other factors. Given this, we constructed a model for the optimal allocation between two risky assets. 

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

---

# Part IV: Extension to n Assets

In Part I, we solved the binary asset case. In Part II, we tried to move from two assets to three assets. The three-asset case is useful because it reveals something important: the algebra gets messy very quickly if we try to expand everything by hand.

At two assets, it is perfectly reasonable to eliminate one weight by writing $\\lambda_B = 1 - \\lambda_A$. At three assets, it is still possible to eliminate one weight by writing $\\lambda_C = 1 - \\lambda_A - \\lambda_B$, though the expression becomes more cumbersome. But at $n$ assets, this approach becomes a bit masochistic.

There is also a subtle but important calculus point here. Once we write $\\lambda_C = 1 - \\lambda_A - \\lambda_B$, the remaining variables $\\lambda_A$ and $\\lambda_B$ are independent coordinates for the constrained portfolio surface. So when we differentiate with respect to $\\lambda_A$, we hold $\\lambda_B$ fixed. We do not need to include a term like $\\frac{d\\lambda_B}{d\\lambda_A}$.

Rather than trying to manage all of this by hand, the cleanest way forward is to use a Lagrange multiplier. This lets us impose the full-investment constraint directly and gives a formula that scales naturally from two assets to three assets to $n$ assets.

---

## Model Definition

Suppose we have a universe of $n$ risky assets indexed by $i \\in \\{1,2,\\ldots,n\\}$. Each asset price follows an independent GBM process:

$$
\\frac{dS_{i,t}}{S_{i,t}} = \\mu_i \\, dt + \\sigma_i \\, dN_{i,t},
$$

where $\\mu_i$ is the drift of asset $i$, $\\sigma_i$ is the volatility of asset $i$, and $N_{i,t}$ is a Wiener process for asset $i$.

We assume the Brownian shocks are independent across assets, so

$$
E[dN_{i,t}dN_{j,t}] =
\\begin{cases}
dt, & i=j, \\\\
0, & i \\neq j.
\\end{cases}
$$

Let $\\lambda_i$ denote the portfolio weight on asset $i$. As before, our portfolio weights must sum to one:

$$
\\sum_{i=1}^{n} \\lambda_i = 1.
$$

We again use CRRA utility:

$$
U(W) = \\frac{W^{1-\\gamma} - 1}{1-\\gamma},
$$

where $\\gamma$ is our relative risk aversion parameter.

Our goal is to solve

$$
\\underset{\\lambda_1,\\ldots,\\lambda_n}{\\max} \\, E[U(W_{t+dt})],
$$

subject to

$$
\\sum_{i=1}^{n} \\lambda_i = 1.
$$

---

## Wealth Dynamics

The wealth process evolves according to the chosen portfolio weights:

$$
dW_t = W_t \\sum_{i=1}^{n} \\lambda_i \\frac{dS_{i,t}}{S_{i,t}}.
$$

Substituting in each asset's GBM process gives

$$
dW_t = W_t \\sum_{i=1}^{n} \\lambda_i (\\mu_i \\, dt + \\sigma_i \\, dN_{i,t}).
$$

Equivalently,

$$
\\frac{dW_t}{W_t} =
\\sum_{i=1}^{n} \\lambda_i \\mu_i \\, dt
+
\\sum_{i=1}^{n} \\lambda_i \\sigma_i \\, dN_{i,t}.
$$

Now define

$$
x =
\\sum_{i=1}^{n} \\lambda_i (\\mu_i \\, dt + \\sigma_i \\, dN_{i,t}).
$$

Then

$$
W_{t+dt} = W_t(1+x).
$$

So expected utility becomes

$$
E[U(W_{t+dt})]
=
E\\left[
\\frac{W_t^{1-\\gamma}(1+x)^{1-\\gamma}-1}{1-\\gamma}
\\right].
$$

Since $W_t$ is known at time $t$, we can pull $W_t^{1-\\gamma}$ out of the expectation:

$$
E[U(W_{t+dt})]
=
\\frac{
W_t^{1-\\gamma}E[(1+x)^{1-\\gamma}]-1
}{
1-\\gamma
}.
$$

---

## Taylor Expanding Expected Utility

As before, we use a second-order Taylor expansion:

$$
E[(1+x)^{1-\\gamma}]
\\approx
1
+
(1-\\gamma)E[x]
+
\\frac{(1-\\gamma)(-\\gamma)}{2}E[x^2].
$$

First, we compute $E[x]$:

$$
E[x]
=
E\\left[
\\sum_{i=1}^{n} \\lambda_i (\\mu_i \\, dt + \\sigma_i \\, dN_{i,t})
\\right].
$$

Since $E[dN_{i,t}]=0$, this reduces to

$$
E[x]
=
\\left(
\\sum_{i=1}^{n} \\lambda_i \\mu_i
\\right)dt.
$$

Now we compute $E[x^2]$:

$$
E[x^2]
=
E\\left[
\\left(
\\sum_{i=1}^{n} \\lambda_i (\\mu_i \\, dt + \\sigma_i \\, dN_{i,t})
\\right)^2
\\right].
$$

The $dt^2$ terms disappear. The $dt \\, dN_{i,t}$ terms disappear in expectation. And since the assets are independent, the cross terms $dN_{i,t}dN_{j,t}$ vanish for $i \\neq j$.

Thus, only the own-variance terms remain:

$$
E[x^2]
=
\\left(
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
\\right)dt.
$$

Substituting these terms back into the Taylor expansion gives

$$
E[(1+x)^{1-\\gamma}]
\\approx
1
+
(1-\\gamma)
\\left(
\\sum_{i=1}^{n} \\lambda_i \\mu_i
\\right)dt
-
\\frac{\\gamma(1-\\gamma)}{2}
\\left(
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
\\right)dt.
$$

So expected utility is approximately

$$
E[U(W_{t+dt})]
\\approx
\\frac{
W_t^{1-\\gamma}
\\left[
1
+
(1-\\gamma)
\\left(
\\sum_{i=1}^{n} \\lambda_i \\mu_i
\\right)dt
-
\\frac{\\gamma(1-\\gamma)}{2}
\\left(
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
\\right)dt
\\right]
-1
}{
1-\\gamma
}.
$$

The terms $W_t$, $\\gamma$, and $dt$ are fixed with respect to our portfolio weights. Therefore, maximizing expected utility is equivalent to maximizing the simpler quadratic objective

$$
\\sum_{i=1}^{n} \\lambda_i \\mu_i
-
\\frac{\\gamma}{2}
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2,
$$

subject to

$$
\\sum_{i=1}^{n} \\lambda_i = 1.
$$

This is nice. The whole expected utility problem has collapsed into a tradeoff between portfolio drift and portfolio variance.

---

## Solving the n-Asset Problem with a Lagrange Multiplier

We now solve

$$
\\underset{\\lambda_1,\\ldots,\\lambda_n}{\\max}
\\left[
\\sum_{i=1}^{n} \\lambda_i \\mu_i
-
\\frac{\\gamma}{2}
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
\\right],
$$

subject to

$$
\\sum_{i=1}^{n} \\lambda_i = 1.
$$

Define the Lagrangian:

$$
\\mathcal{L}
=
\\sum_{i=1}^{n} \\lambda_i \\mu_i
-
\\frac{\\gamma}{2}
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
-
\\nu
\\left(
\\sum_{i=1}^{n} \\lambda_i - 1
\\right),
$$

where $\\nu$ is the Lagrange multiplier on the full-investment constraint.

Taking the derivative with respect to $\\lambda_i$ gives

$$
\\frac{\\partial \\mathcal{L}}{\\partial \\lambda_i}
=
\\mu_i
-
\\gamma \\lambda_i \\sigma_i^2
-
\\nu.
$$

Setting the first-order condition equal to zero:

$$
\\mu_i
-
\\gamma \\lambda_i \\sigma_i^2
-
\\nu
=
0.
$$

Rearranging,

$$
\\gamma \\lambda_i \\sigma_i^2
=
\\mu_i - \\nu.
$$

Therefore,

$$
\\lambda_i
=
\\frac{\\mu_i - \\nu}{\\gamma \\sigma_i^2}.
$$

This already tells us a lot. The optimal weight on asset $i$ is increasing in its drift $\\mu_i$ and decreasing in its variance $\\sigma_i^2$. This is exactly what we would hope to see.

Now we use the constraint that the weights sum to one:

$$
\\sum_{i=1}^{n} \\lambda_i = 1.
$$

Substituting in our expression for $\\lambda_i$,

$$
\\sum_{i=1}^{n}
\\frac{\\mu_i - \\nu}{\\gamma \\sigma_i^2}
=
1.
$$

Multiplying both sides by $\\gamma$,

$$
\\sum_{i=1}^{n}
\\frac{\\mu_i - \\nu}{\\sigma_i^2}
=
\\gamma.
$$

Expanding,

$$
\\sum_{i=1}^{n}
\\frac{\\mu_i}{\\sigma_i^2}
-
\\nu
\\sum_{i=1}^{n}
\\frac{1}{\\sigma_i^2}
=
\\gamma.
$$

Solving for $\\nu$ gives

$$
\\nu
=
\\frac{
\\sum_{i=1}^{n} \\frac{\\mu_i}{\\sigma_i^2}
-
\\gamma
}{
\\sum_{i=1}^{n} \\frac{1}{\\sigma_i^2}
}.
$$

Thus, the optimal allocation to asset $i$ is

$$
\\lambda_i^*
=
\\frac{\\mu_i - \\nu}{\\gamma \\sigma_i^2},
$$

where

$$
\\nu
=
\\frac{
\\sum_{j=1}^{n} \\frac{\\mu_j}{\\sigma_j^2}
-
\\gamma
}{
\\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}
}.
$$

This is the clean $n$-asset solution for independent risky assets.

---

## Sanity Check: Recovering the Two-Asset Formula

It is worth checking that this formula recovers our original binary asset result.

For two assets, the solution gives

$$
\\lambda_A^*
=
\\frac{\\mu_A - \\nu}{\\gamma \\sigma_A^2},
\\quad
\\lambda_B^*
=
\\frac{\\mu_B - \\nu}{\\gamma \\sigma_B^2},
$$

where

$$
\\nu
=
\\frac{
\\frac{\\mu_A}{\\sigma_A^2}
+
\\frac{\\mu_B}{\\sigma_B^2}
-
\\gamma
}{
\\frac{1}{\\sigma_A^2}
+
\\frac{1}{\\sigma_B^2}
}.
$$

After simplifying, this gives

$$
\\lambda_A^*
=
\\frac{
\\mu_A - \\mu_B + \\gamma \\sigma_B^2
}{
\\gamma(\\sigma_A^2 + \\sigma_B^2)
},
$$

and

$$
\\lambda_B^*
=
\\frac{
\\mu_B - \\mu_A + \\gamma \\sigma_A^2
}{
\\gamma(\\sigma_A^2 + \\sigma_B^2)
}.
$$

This is exactly the result from Part I.

---

## Sanity Check: The Correct Three-Asset Formula

The same formula also gives a clean three-asset result. For assets $A$, $B$, and $C$, we get

$$
\\lambda_A^*
=
\\frac{
\\sigma_C^2(\\mu_A-\\mu_B)
+
\\sigma_B^2(\\mu_A-\\mu_C)
+
\\gamma \\sigma_B^2 \\sigma_C^2
}{
\\gamma(
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
)
},
$$

$$
\\lambda_B^*
=
\\frac{
\\sigma_C^2(\\mu_B-\\mu_A)
+
\\sigma_A^2(\\mu_B-\\mu_C)
+
\\gamma \\sigma_A^2 \\sigma_C^2
}{
\\gamma(
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
)
},
$$

and

$$
\\lambda_C^*
=
\\frac{
\\sigma_B^2(\\mu_C-\\mu_A)
+
\\sigma_A^2(\\mu_C-\\mu_B)
+
\\gamma \\sigma_A^2 \\sigma_B^2
}{
\\gamma(
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
)
}.
$$

These weights sum to one. They also have a nice interpretation: each asset receives a baseline allocation determined by the other assets' variances, plus a tilt based on its return advantage over the other assets.

If all three assets have the same expected return, so $\\mu_A = \\mu_B = \\mu_C$, then all of the return-difference terms disappear and we get

$$
\\lambda_A^*
=
\\frac{
\\sigma_B^2\\sigma_C^2
}{
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
},
$$

$$
\\lambda_B^*
=
\\frac{
\\sigma_A^2\\sigma_C^2
}{
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
},
$$

and

$$
\\lambda_C^*
=
\\frac{
\\sigma_A^2\\sigma_B^2
}{
\\sigma_A^2\\sigma_B^2
+
\\sigma_A^2\\sigma_C^2
+
\\sigma_B^2\\sigma_C^2
}.
$$

This is exactly the inverse-variance allocation. When all assets have the same drift, the only remaining problem is how to allocate across risk, and the lower-variance assets receive larger weights.

---

## Fully Scalar n-Asset Formula

We can also write the $n$-asset solution as a single scalar expression. Let

$$
q_i = \\sigma_i^2.
$$

Then the optimal weight on asset $i$ is

$$
\\lambda_i^*
=
\\frac{
\\gamma \\prod_{k \\neq i} q_k
+
\\sum_{j \\neq i}
(\\mu_i-\\mu_j)
\\prod_{k \\neq i,j} q_k
}{
\\gamma
\\sum_{j=1}^{n}
\\prod_{k \\neq j} q_k
}.
$$

Substituting $q_i=\\sigma_i^2$, this becomes

$$
\\lambda_i^*
=
\\frac{
\\gamma \\prod_{k \\neq i} \\sigma_k^2
+
\\sum_{j \\neq i}
(\\mu_i-\\mu_j)
\\prod_{k \\neq i,j} \\sigma_k^2
}{
\\gamma
\\sum_{j=1}^{n}
\\prod_{k \\neq j} \\sigma_k^2
}.
$$

The convention here is that an empty product equals $1$. This matters in the two-asset case, where the term $\\prod_{k \\neq i,j} \\sigma_k^2$ has no elements.

This scalar expression is useful because it shows the direct generalization of the two-asset and three-asset formulas. But it is not the form I would actually use computationally. For computation and interpretation, the Lagrange multiplier form is cleaner.

---

## Interpreting the Independent n-Asset Solution

We can rewrite the solution in a way that makes the intuition clearer.

Define

$$
H = \\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}.
$$

Now define the inverse-variance-weighted average drift:

$$
\\bar{\\mu}_{\\sigma^{-2}}
=
\\frac{
\\sum_{j=1}^{n} \\frac{\\mu_j}{\\sigma_j^2}
}{
\\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}
}
=
\\frac{
\\sum_{j=1}^{n} \\frac{\\mu_j}{\\sigma_j^2}
}{
H
}.
$$

Since

$$
\\nu
=
\\bar{\\mu}_{\\sigma^{-2}}
-
\\frac{\\gamma}{H},
$$

we can rewrite the optimal weight as

$$
\\lambda_i^*
=
\\frac{
\\mu_i
-
\\bar{\\mu}_{\\sigma^{-2}}
+
\\frac{\\gamma}{H}
}{
\\gamma \\sigma_i^2
}.
$$

Splitting this into two terms gives

$$
\\lambda_i^*
=
\\frac{\\frac{1}{\\sigma_i^2}}{\\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}}
+
\\frac{
\\mu_i - \\bar{\\mu}_{\\sigma^{-2}}
}{
\\gamma \\sigma_i^2
}.
$$

This is maybe the most intuitive version of the independent asset result.

The first term,

$$
\\frac{\\frac{1}{\\sigma_i^2}}{\\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}},
$$

is the inverse-variance allocation. It is the portfolio we get if expected returns are all equal and we only care about minimizing variance subject to being fully invested.

The second term,

$$
\\frac{
\\mu_i - \\bar{\\mu}_{\\sigma^{-2}}
}{
\\gamma \\sigma_i^2
},
$$

is the speculative tilt. Assets with drifts above the inverse-variance-weighted average drift receive larger allocations. Assets with drifts below that average receive smaller allocations.

As $\\gamma$ increases, the speculative tilt shrinks. In the limit as $\\gamma \\to \\infty$, the investor becomes infinitely risk averse and the portfolio approaches the inverse-variance allocation. As $\\gamma$ decreases, the investor becomes more willing to tilt toward assets with higher expected returns.

This is a satisfying result. The model says that a risk-averse investor starts with an inverse-variance portfolio and then tilts toward assets that have better expected returns relative to that baseline.

---

# Part V: Matrix Form and Correlated Assets

The independent asset model is mathematically convenient, but it is obviously a simplification. In real markets, assets are correlated. Stocks move together. Bonds and equities can become correlated in crises. Crypto assets often behave like one giant risk factor wearing different ticker symbols.

So the next natural extension is to replace the independent variance term

$$
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2
$$

with a full covariance matrix.

Before doing that, it helps to rewrite the independent case in matrix form.

---

## Matrix Form of the Independent Asset Case

Let

$$
\\lambda =
\\begin{bmatrix}
\\lambda_1 \\\\
\\lambda_2 \\\\
\\vdots \\\\
\\lambda_n
\\end{bmatrix},
\\quad
\\mu =
\\begin{bmatrix}
\\mu_1 \\\\
\\mu_2 \\\\
\\vdots \\\\
\\mu_n
\\end{bmatrix},
\\quad
\\mathbf{1} =
\\begin{bmatrix}
1 \\\\
1 \\\\
\\vdots \\\\
1
\\end{bmatrix}.
$$

For independent assets, define the diagonal covariance matrix

$$
D =
\\begin{bmatrix}
\\sigma_1^2 & 0 & \\cdots & 0 \\\\
0 & \\sigma_2^2 & \\cdots & 0 \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
0 & 0 & \\cdots & \\sigma_n^2
\\end{bmatrix}.
$$

The objective function becomes

$$
\\lambda^\\top \\mu
-
\\frac{\\gamma}{2}
\\lambda^\\top D \\lambda,
$$

subject to

$$
\\mathbf{1}^\\top \\lambda = 1.
$$

The Lagrangian is

$$
\\mathcal{L}
=
\\lambda^\\top \\mu
-
\\frac{\\gamma}{2}
\\lambda^\\top D\\lambda
-
\\nu(\\mathbf{1}^\\top \\lambda - 1).
$$

Taking the derivative with respect to $\\lambda$ gives

$$
\\mu - \\gamma D\\lambda - \\nu \\mathbf{1} = 0.
$$

Therefore,

$$
\\gamma D\\lambda = \\mu - \\nu \\mathbf{1},
$$

and so

$$
\\lambda
=
\\frac{1}{\\gamma}
D^{-1}
(\\mu - \\nu \\mathbf{1}).
$$

Now impose the full-investment constraint:

$$
\\mathbf{1}^\\top \\lambda = 1.
$$

Substituting in the expression for $\\lambda$,

$$
\\mathbf{1}^\\top
\\frac{1}{\\gamma}
D^{-1}
(\\mu - \\nu \\mathbf{1})
=
1.
$$

Multiplying through by $\\gamma$,

$$
\\mathbf{1}^\\top D^{-1}\\mu
-
\\nu \\mathbf{1}^\\top D^{-1}\\mathbf{1}
=
\\gamma.
$$

Solving for $\\nu$ gives

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top D^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top D^{-1}\\mathbf{1}
}.
$$

Thus, in matrix form, the independent asset solution is

$$
\\lambda^*
=
\\frac{1}{\\gamma}
D^{-1}
(\\mu - \\nu \\mathbf{1}),
$$

where

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top D^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top D^{-1}\\mathbf{1}
}.
$$

This is the same result as before. The only difference is that the notation is cleaner.

---

## The Correlated Asset Case

Now suppose the assets are correlated. Instead of assuming

$$
E[dN_{i,t}dN_{j,t}] = 0
\\quad \\text{for} \\quad i \\neq j,
$$

we allow

$$
E[dN_{i,t}dN_{j,t}] = \\rho_{ij}dt.
$$

The covariance between the instantaneous returns of assets $i$ and $j$ is then

$$
\\Sigma_{ij} = \\rho_{ij}\\sigma_i\\sigma_j.
$$

So the covariance matrix is

$$
\\Sigma =
\\begin{bmatrix}
\\sigma_1^2 & \\rho_{12}\\sigma_1\\sigma_2 & \\cdots & \\rho_{1n}\\sigma_1\\sigma_n \\\\
\\rho_{21}\\sigma_2\\sigma_1 & \\sigma_2^2 & \\cdots & \\rho_{2n}\\sigma_2\\sigma_n \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
\\rho_{n1}\\sigma_n\\sigma_1 & \\rho_{n2}\\sigma_n\\sigma_2 & \\cdots & \\sigma_n^2
\\end{bmatrix}.
$$

The expected return term remains

$$
\\lambda^\\top \\mu.
$$

But the variance term is no longer

$$
\\sum_{i=1}^{n} \\lambda_i^2 \\sigma_i^2.
$$

Instead, portfolio variance is

$$
\\lambda^\\top \\Sigma \\lambda.
$$

Therefore, the optimization problem becomes

$$
\\underset{\\lambda}{\\max}
\\left[
\\lambda^\\top \\mu
-
\\frac{\\gamma}{2}
\\lambda^\\top \\Sigma \\lambda
\\right],
$$

subject to

$$
\\mathbf{1}^\\top \\lambda = 1.
$$

The Lagrangian is

$$
\\mathcal{L}
=
\\lambda^\\top \\mu
-
\\frac{\\gamma}{2}
\\lambda^\\top \\Sigma\\lambda
-
\\nu(\\mathbf{1}^\\top \\lambda - 1).
$$

The first-order condition is

$$
\\mu - \\gamma \\Sigma\\lambda - \\nu \\mathbf{1} = 0.
$$

Rearranging,

$$
\\gamma \\Sigma\\lambda = \\mu - \\nu \\mathbf{1}.
$$

Assuming $\\Sigma$ is invertible,

$$
\\lambda
=
\\frac{1}{\\gamma}
\\Sigma^{-1}
(\\mu - \\nu \\mathbf{1}).
$$

Now impose the full-investment constraint:

$$
\\mathbf{1}^\\top
\\frac{1}{\\gamma}
\\Sigma^{-1}
(\\mu - \\nu \\mathbf{1})
=
1.
$$

Multiplying through by $\\gamma$,

$$
\\mathbf{1}^\\top \\Sigma^{-1}\\mu
-
\\nu \\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
=
\\gamma.
$$

Solving for $\\nu$,

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}.
$$

Thus, the optimal portfolio under correlated risky assets is

$$
\\lambda^*
=
\\frac{1}{\\gamma}
\\Sigma^{-1}
(\\mu - \\nu \\mathbf{1}),
$$

where

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}.
$$

This is the general solution. The independent asset model is just the special case where $\\Sigma$ is diagonal.

---

## Minimum-Variance Portfolio Plus a Speculative Tilt

We can also decompose the correlated asset solution into two pieces.

The first piece is the global minimum-variance portfolio:

$$
\\lambda_{MV}
=
\\frac{
\\Sigma^{-1}\\mathbf{1}
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}.
$$

The second piece is a return-seeking tilt:

$$
\\frac{1}{\\gamma}
\\left[
\\Sigma^{-1}\\mu
-
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}
\\Sigma^{-1}\\mathbf{1}
\\right].
$$

Putting them together,

$$
\\lambda^*
=
\\frac{
\\Sigma^{-1}\\mathbf{1}
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}
+
\\frac{1}{\\gamma}
\\left[
\\Sigma^{-1}\\mu
-
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}
\\Sigma^{-1}\\mathbf{1}
\\right].
$$

This is a very useful way to understand the model.

The first term is the allocation we would choose if we only cared about minimizing variance while remaining fully invested. It does not use expected returns at all. It only uses the covariance matrix.

The second term is the speculative component. It tilts the portfolio toward assets that have attractive expected returns relative to the covariance structure of the asset universe.

As $\\gamma \\to \\infty$, the speculative term disappears and we converge to the global minimum-variance portfolio. As $\\gamma$ gets smaller, the speculative term becomes larger.

This is the exact same intuition as the independent asset case, except the meaning of risk is richer. We no longer penalize each asset only by its own variance. We penalize it by how it contributes to total portfolio variance.

That distinction matters. A high-volatility asset can still receive a meaningful allocation if it diversifies the rest of the portfolio. Conversely, a seemingly safe asset can receive a smaller allocation if it is highly correlated with everything else we already own.

---

# Part VI: What the Formula Is Really Saying

At this point, we have a compact solution for the optimal allocation across $n$ risky assets:

$$
\\lambda^*
=
\\frac{1}{\\gamma}
\\Sigma^{-1}
(\\mu - \\nu \\mathbf{1}),
$$

where

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}.
$$

This is a pretty small formula given how much it contains.

The model says that optimal portfolio choice depends on three things:

1. expected returns, encoded by $\\mu$;
2. the covariance structure of returns, encoded by $\\Sigma$;
3. relative risk aversion, encoded by $\\gamma$.

The role of $\\gamma$ is especially clear. Higher $\\gamma$ means we care more about variance and less about expected return. Lower $\\gamma$ means we are more willing to tolerate variance in pursuit of expected return.

But the formula also tells us something subtler. In a fully invested risky-asset-only portfolio, we are not deciding how much risky exposure to hold relative to cash. We are deciding how to distribute risky exposure across assets. This is why the solution naturally contains a minimum-variance portfolio.

When there is no risk-free asset, the investor must hold something. If expected returns are all equal, then the entire problem collapses into choosing the lowest-variance way to remain fully invested. In the independent asset case, that means inverse-variance weighting. In the correlated asset case, that means the global minimum-variance portfolio.

Expected returns then create tilts away from that baseline.

This is also why the risky-numeraire result from Part III is so clean. When we denominate everything in terms of asset $A$, the asset $A/A$ has no price movement relative to itself. It becomes the reference point. The only risky decision left in the two-asset $A$-denominated world is how much of $B/A$ to hold. That is why the formula collapses back to the familiar Merton-style share:

$$
\\lambda_{B/A}
=
\\frac{
\\mu_{B/A}
}{
\\gamma \\sigma_{B/A}^2
}.
$$

The cash-denominated risky/risky problem and the risky-numeraire problem are not contradictory. They are just different ways of representing the same underlying portfolio choice.

---

## The Shadow Return Interpretation of $\\nu$

The Lagrange multiplier $\\nu$ is also worth interpreting. From the first-order condition,

$$
\\mu_i - \\gamma \\lambda_i \\sigma_i^2 - \\nu = 0
$$

in the independent case. Rearranging,

$$
\\mu_i - \\nu = \\gamma \\lambda_i \\sigma_i^2.
$$

So $\\nu$ acts like a return threshold created by the full-investment constraint. Assets with expected returns above $\\nu$ tend to receive larger weights, scaled by their variance. Assets with expected returns below $\\nu$ tend to receive smaller weights or even negative weights if shorting is allowed.

This is similar in spirit to the role played by a risk-free rate in the classic Merton Share. But here, $\\nu$ is not an externally given risk-free rate. It is determined endogenously by the asset universe, the covariance structure, and the fact that the portfolio weights must sum to one.

That is a nice conceptual payoff. If there is no risk-free asset in the model, the optimization still creates a benchmark return internally.

---

## What Happens If We Ban Shorting?

The formulas above allow shorting and leverage in the sense that individual weights can be negative or greater than one, as long as the weights sum to one. This is standard in the clean mathematical version of the problem, but it may not be what we want in practice.

If we impose constraints like

$$
\\lambda_i \\geq 0
$$

for all $i$, or

$$
0 \\leq \\lambda_i \\leq 1,
$$

then the closed-form solution may no longer apply directly. The unconstrained optimum might tell us to short an asset with a bad risk-adjusted expected return. If shorting is not allowed, that asset's weight gets pushed to zero and the optimization has to be solved with inequality constraints.

In that case, the right mathematical object is a constrained quadratic program. Conceptually, though, the logic remains similar. We are still balancing expected return against variance, but some assets may hit boundary constraints and drop out of the active portfolio.

This is another reason I like deriving the unconstrained solution first. It gives the clean benchmark. Then constraints can be layered on top.

---

## Limitations

The obvious weakness of this whole setup is that the inputs are doing enormous work.

The formulas look precise, but the quantities $\\mu$ and $\\Sigma$ are not handed to us by nature. We have to estimate them. And estimating expected returns is notoriously difficult. Small changes in $\\mu$ can lead to large changes in optimal weights, especially when $\\gamma$ is low.

The covariance matrix is usually easier to estimate than expected returns, but it is still unstable. Correlations change. Volatilities change. Assets that looked diversifying in normal times can suddenly become highly correlated in a crisis.

There is also the GBM assumption. GBM is analytically convenient, but real return distributions have jumps, fat tails, volatility clustering, changing regimes, and all sorts of other unpleasant features. The model is useful, but it is not reality.

Still, I think the exercise is valuable. It shows the basic structure of the problem in its cleanest form. If we know our beliefs about expected returns, covariances, and risk aversion, then the optimal portfolio has a simple shape:

$$
\\text{minimum-variance baseline}
+
\\text{return-seeking tilt}.
$$

That is the main lesson.

---

## Conclusion

We began with the two-risky-asset version of the Merton-style allocation problem. We then moved to three assets, changed the numeraire, and finally generalized the model to $n$ risky assets.

For independent assets, the optimal allocation to asset $i$ is

$$
\\lambda_i^*
=
\\frac{\\mu_i - \\nu}{\\gamma \\sigma_i^2},
$$

where

$$
\\nu
=
\\frac{
\\sum_{j=1}^{n} \\frac{\\mu_j}{\\sigma_j^2}
-
\\gamma
}{
\\sum_{j=1}^{n} \\frac{1}{\\sigma_j^2}
}.
$$

For correlated assets, the optimal portfolio is

$$
\\lambda^*
=
\\frac{1}{\\gamma}
\\Sigma^{-1}
(\\mu - \\nu \\mathbf{1}),
$$

where

$$
\\nu
=
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu - \\gamma
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}.
$$

Equivalently,

$$
\\lambda^*
=
\\frac{
\\Sigma^{-1}\\mathbf{1}
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}
+
\\frac{1}{\\gamma}
\\left[
\\Sigma^{-1}\\mu
-
\\frac{
\\mathbf{1}^\\top \\Sigma^{-1}\\mu
}{
\\mathbf{1}^\\top \\Sigma^{-1}\\mathbf{1}
}
\\Sigma^{-1}\\mathbf{1}
\\right].
$$

This final expression is my favorite version of the result. The first term is the minimum-variance portfolio. The second term is the speculative tilt. Risk aversion determines how much of that tilt we are willing to take.

So, in the end, the optimal risky-asset portfolio under CRRA utility has a surprisingly intuitive structure: start with the lowest-risk way to be fully invested, then tilt toward assets whose expected returns justify their contribution to portfolio risk.


[^1]: I am skeptical of standard national CPI measures, as discussed in Chapter 5 of Keynes' *Treatise on Money*. I think exact CPI calculation seems like a fundamentally futile task, though it's nuanced so I haven't made up my mind yet.

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
    },
    {
      title: "Bayes-Nash Equilibrium in a One-Street No-Limit Von Neumann Poker Model",
      description: "A mathematical analysis of optimal betting strategies in a simplified poker model",
      author: "Grant Stenger (Feb 2025)",
      slug: "von_neumann_poker", 
      pdfUrl: "/writing/von_neumann_poker.pdf",
      contentType: "latex",
    },
    {
      title: "On Bartleby, the Scrivener",
      description: "A reflection on Herman Melville's classic short story",
      slug: "on-bartleby-the-scrivener",
      author: "Grant Stenger (Aug 2023)",
      content: `
Melville’s 1853 short story [*Bartleby, the Scrivener*](https://moglen.law.columbia.edu/LCS/bartleby.pdf) is often treated as a kind of sacred text for a certain worldview: heroic passive resistance, the alienation of capitalism, the dehumanizing office environment, copywork as essentially machine labor unworthy of a human being, and so on. In this reading, Bartleby is a tragic saint bravely refusing to participate in a meaningless system. I wholeheartedly disagree.

The basic story is simple. Bartleby is a copyist who, over time, produces less and less by repeatedly uttering his famous line: “I would prefer not to.” At first, he just prefers not to run errands. Then he prefers not to do certain kinds of copying. Eventually he prefers not to do any work at all. After that, he decides he doesn’t want to leave the office and remains there, unmoving, for weeks. The company owner finally moves his entire headquarters just to be rid of Bartleby, but Bartleby simply stays put in the old office even after they’ve left. The next tenant inherits Bartleby the squatter, fails to get him out, and has him arrested. In jail, Bartleby eventually also prefers not to eat, and dies of starvation.

I’ve often seen this interpreted as an indictment of an unfair society. Why did Bartleby have to go to jail and die of starvation? The implication is that something deep in the structure of capitalism is to blame. But fundamentally, he didn’t have to. The narrator goes out of his way to help. He offers Bartleby a place to stay, even proposes that Bartleby could live in his own home, and tries to come up with alternative jobs or tasks Bartleby might enjoy. Bartleby refuses all of it. “I would prefer not to” is his answer to every attempt to rescue him.

Two major points follow from this, a secondary and a primary. First, my secondary point: inaction is an action. There’s nothing special about “doing nothing” that should imbue the act with some kind of Godlike protection. Bartleby isn’t *not* making a choice to leave; he’s choosing to stay. He isn’t not choosing about food; he’s choosing not to eat. There is no special, morally privileged category of “opting out” that natural rights will protect for you. A refusal to move is still a move. A refusal to act is still a decision inside a causal world that doesn’t care how you narrate it to yourself.

Now, a bridge between my secondary point and my primary one. Suppose there were no society at all and Bartleby were in raw nature. His choice not to leave his dwelling and then eventually not to eat would cause him to starve to death just the same. Before that, his well-being would likely be threatened by another animal. This is how the world naturally works. There is a certain amount of effort required to stay alive and well, or else death lurks nearby. The universe has no special rule that says, “If you lie perfectly still and prefer not to, you get a pass.”

Which brings me to my primary point: Capitalism did not kill Bartleby; Nature did. Without society and capitalism, Bartleby would have had to build his shelter himself, hunt his own food, defend himself, and so on. Under capitalism, he is allowed to do the one or two narrow tasks he reasonably enjoys, which happen to be useful to others, and then trade his labor on those specialized tasks for a house, food, and everything else he needs. Capitalism doesn’t force us to work; Nature does. Capitalism lets us coordinate and trade with one another to help each other get the required amount of work done in a preferable way (think utils and preference orderings). You do something useful for me, I do something useful for you, and both of us are buffered from the raw teeth of the world.

To summarize, Bartleby didn’t commit a heroic act of existential protest against the meaninglessness of modern capitalist life. He committed slow suicide by letting Nature overtake him, even though capitalism and the prosocial behavior of those around him tried to lift him up. Heroism is having strength and using it for good, not surrendering to pathology and calling it profound. It is absolutely childish to believe that one deserves to live indefinitely in a state of “preferring not to” while others are obligated to keep you alive. Society poured resources into nurturing Bartleby, and he rejected them, forsaking whatever gifts—natural or God-given—you think he had.

Bartleby’s story is not one to be revered; it should be reviled. He is not a model of noble resistance to “the system.” He is a man who chose to stop participating in reality and died the entirely predictable death that follows from that choice. That may be tragic, but it is not heroic.

      `
    },
  ];
