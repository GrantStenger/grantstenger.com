export const articles = [
    {
      title: "Quant Funds and AI Labs Converge",
      description: "An analysis of the convergence between quantitative trading firms and AI research laboratories.",
      slug: "quant-ai-convergence",
      author: "Grant Stenger (Jan 2026)",
      link: "https://www.ft.com/content/18313a5f-ae6e-44e9-a26a-4a81cd3190bf"
    },
    {
      title: "Optimal Almgren-Chriss Execution with CRRA Preferences",
      description: "Optimal execution in a linear-impact Almgren-Chriss model with CRRA utility and certainty-equivalent approximation",
      author: "Grant Stenger (Dec 2024)",
      slug: "optimal_execution",
      pdfUrl: "/writing/optimal_execution.pdf",
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
