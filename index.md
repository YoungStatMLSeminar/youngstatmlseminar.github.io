---
title: ''
layout: post
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image and Text Layout</title>
    <style>
        .container {
            display: flex;
            align-items: center;
            max-width: 800px;
            margin: auto;
            justify-content: center;
            text-align: center;
        }
        .image {
            flex: 2;
            padding-right: 20px;
        }
        .text {
            flex: 2;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
        }
.button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #f2f2f2;
    color: black;
    text-decoration: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    display: block;
    width: 220px;
    margin-left: auto;
    margin-right: auto;
}
    </style>
</head>
<body>
    <div class="container">
        <div class="image">
        <a href="https://youngstatmlseminar.github.io/">
            <img src="images/Radcam.jpeg" class="theme-img light" alt="">
            <img src="images/Radcam-night.png"  class="theme-img dark"  alt="">
        </a>
        </div>
        <div class="text">
            <h2>Oxford Young Statisticians Seminar</h2>
            <p>Department of Statistics, University of Oxford</p>
            <a href="#seminars-schedule" class="button">Seminar's schedule</a>
            <a href="https://calendar.google.com/calendar/u/1?cid=MzQ3YzM2Y2JjMGFkMmViYzkwZTNmNzA0ZTBmYWEwYjJkNjBiMzY3ZmMwODM5MDNjY2JiY2M1MWRlYjYwZGI5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" class="button">Google Calendar</a>
            <a href="https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=OXYSS" class="button">Mailing List</a>
        </div>
    </div>
</body>
</html>

-----

The Oxford Young Statisticians Seminar (OxYSS) is a series of junior seminars in which PhD students and postdocs from the University of Oxford working on statistics and machine learning present their research in an accessible manner. The aim is to provide insight into each other's work and foster potential collaborations.

------

# Seminar's Schedule

For any question or request please contact [Valentin Kilian](https://valentinkil.github.io).

You can also subscribe to our [Google Calendar](https://calendar.google.com/calendar/u/1?cid=MzQ3YzM2Y2JjMGFkMmViYzkwZTNmNzA0ZTBmYWEwYjJkNjBiMzY3ZmMwODM5MDNjY2JiY2M1MWRlYjYwZGI5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).

<h2>2026</h2>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="padding: 8px; border: 1px solid #ddd;">Section</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Date</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Time</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Location</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Title</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Speaker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker</td>
      <td style="padding: 8px; border: 1px solid #ddd;">19/01</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Score-based generative emulation of impact-relevant Earth system model outputs</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
            Policy targets evolve faster than the Couple Model Intercomparison Project cycles, complicating adaptation and mitigation planning that must often contend with outdated projections. Climate model output emulators address this gap by offering inexpensive surrogates that can rapidly explore alternative futures while staying close to Earth System Model (ESM) behavior. We focus on emulators designed to provide inputs to impact models. Using monthly ESM fields of near-surface temperature, precipitation, relative humidity, and wind speed, we show that deep generative models have the potential to model jointly the distribution of variables relevant for impacts. The specific model we propose uses score-based diffusion on a spherical mesh and runs on a single mid-range graphical processing unit. We introduce a thorough suite of diagnostics to compare emulator outputs with their parent ESMs, including their probability densities, cross-variable correlations, time of emergence, or tail behavior. We evaluate performance across three distinct ESMs in both pre-industrial and forced regimes. The results show that the emulator produces distributions that closely match the ESM outputs and captures key forced responses. They also reveal important failure cases, notably for variables with a strong regime shift in the seasonal cycle. Although not a perfect match to the ESM, the inaccuracies of the emulator are small relative to the scale of internal variability in ESM projections. We therefore argue that it shows potential to be useful in supporting impact assessment. We discuss priorities for future development toward daily resolution, finer spatial scales, and bias-aware training.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://shahineb.github.io">Shahine Bouabid</a> (MIT)</td>
    </tr>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Oxford Young Statistician</td>
      <td style="padding: 8px; border: 1px solid #ddd;">04/02</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Large Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Guidance for Diffusion Sampling with Applications to Black Hole Imaging</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.chrisjwilliams.com">Christopher Williams</a></td>
    </tr>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11/02</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>From $1/\sqrt{n}$ to $1/n$: Accelerating SDE Simulation with Cubature Formulae</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
            Monte Carlo sampling is the standard approach for estimating properties of solutions to stochastic differential equations (SDEs), but its error decays only as 1/√n, requiring huge sample sizes. Lyons and Victoir (2004) proposed replacing independently sampled Brownian driving paths with "cubature formulae", deterministic weighted sets of paths that match Brownian "signature moments" up to some degree D. They prove that cubature formulae exist for arbitrary D, but explicit constructions are difficult and have only reached D=7, too small for practical use. We present an algorithm that efficiently and automatically constructs cubature formulae of arbitrary degree, reproducing D=7 in seconds and reaching D=19 within hours on modest hardware. In simulations across multiple SDEs, our cubature formulae achieve an error roughly of order 1/n, orders of magnitude smaller than Monte Carlo with the same number of paths.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://peter.koepernik.net">Peter Koepernik</a> (OpenAI)</td>
    </tr>
 <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;"></td>
      <td style="padding: 8px; border: 1px solid #ddd;">20/02</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b> Efficient Two-Sample Instrumental Variable Estimation and Over-Identification Testing</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
            Two-sample instrumental variables estimation arises when the first-stage relationship between endogenous regressors and instruments, and the reduced-form equation for the outcome, are observed in different samples - a setting that is increasingly common in empirical work combining multiple data sources. Using the two-sample IV framework of Inoue and Solon (2010), I compare one-step and two-step GMM estimators based on two-sample moment conditions. I show that the standard two-sample 2SLS estimator is not generally efficient, while a two-step GMM estimator that uses the correct moment variance achieves asymptotic efficiency.
            I then develop a valid overidentification test for the two-sample setting. I derive a Hansen–Sargan–type J-statistic that accounts for sampling variability from both samples and show that it converges to a chi-square distribution with degrees of freedom equal to the number of overidentifying restrictions. The results clarify how classical IV testing procedures extend to two-sample designs and highlight the importance of using the appropriate asymptotic variance for valid inference.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/fatima-k-2b1a9a1a2/">Fatima Kasenally</a></td>
    </tr>
       <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;"></td>
      <td style="padding: 8px; border: 1px solid #ddd;">20/02</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
         <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b> BED-LLM: Intelligent Information Gathering with LLMs and Bayesian Experimental Design</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
            We propose a general-purpose approach for improving the ability of large language models (LLMs) to intelligently and adaptively gather information from a user or other external source using the framework of sequential Bayesian experimental design (BED). This enables LLMs to act as effective multi-turn conversational agents and interactively interface with external environments. Our approach, which we call BED-LLM (Bayesian experimental design with large language models), is based on iteratively choosing questions or queries that maximize the expected information gain (EIG) about the task of interest given the responses gathered previously. We show how this EIG can be formulated (and then estimated) in a principled way using a probabilistic model derived from the LLM's predictive distributions and provide detailed insights into key decisions in its construction and updating procedure. We find that BED-LLM achieves substantial gains in performance across a wide range of tests based on the 20 Questions game and using the LLM to actively infer user preferences, compared to direct prompting of the LLM and other adaptive design strategies.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://deeprochoudhury.github.io">Deepro Choudhury</a></td>
    </tr>
           <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;"></td>
      <td style="padding: 8px; border: 1px solid #ddd;">04/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">15:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
         <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b> A Friendly Talk on Bandit Convex Optimization in Changing Environments</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
          We present Bandit Convex Optimization in non-stationary environments, where the learner selects actions from a continuous domain and observes losses at only one point per round. We aim to minimize regret under three natural non-stationarity measures: the number of switches S, total variation V, and path-length P. We propose TEWA-SE (Tilted Exponentially Weighted Average with Sleeping Experts), a polynomial-time algorithm adapting the sleeping experts framework to the bandit setting. For strongly convex losses, TEWA-SE achieves minimax-optimal regret with respect to S and V, with matching upper and lower bounds. For general convex losses, we introduce cExO (clipped Exploration by Optimization), which achieves minimax-optimal regret for S and V, and improves existing bounds for P. Time permitting, we will also discuss related parameter-free approaches based on coin betting. We will keep the focus on intuition and high-level ideas, with the goal of distilling principles that are broadly applicable to sequential decision-making under non-stationarity.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://shirleyliuxq.github.io">Xiaoqi (Shirley) Liu</a></td>
    </tr>
           <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;"></td>
      <td style="padding: 8px; border: 1px solid #ddd;">04/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">15:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
         <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b> Calibrated Predictive Lower Bounds on Time-to-Unsafe-Sampling in LLMs</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
          We introduce time-to-unsafe-sampling, a novel safety measure for generative models, defined as the number of generations required by a large language model (LLM) to trigger an unsafe (e.g., toxic) response. While providing a new dimension for prompt-adaptive safety evaluation, quantifying time-to-unsafe-sampling is challenging: unsafe outputs are often rare in well-aligned models and thus may not be observed under any feasible sampling budget. To address this challenge, we frame this estimation problem as one of survival analysis. We build on recent developments in conformal prediction and propose a novel calibration technique to construct a lower predictive bound (LPB) on the time-to-unsafe-sampling of a given prompt with rigorous coverage guarantees. Our key technical innovation is an optimized sampling-budget allocation scheme that improves sample efficiency while maintaining distribution-free guarantees. Experiments on both synthetic and real data support our theoretical results and demonstrate the practical utility of our method for safety risk assessment in generative AI models.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/hen-davidov/?originalSubdomain=il">Hen Davidov</a></td>
    </tr>
              <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">OxCSML x OxYSS</td>
      <td style="padding: 8px; border: 1px solid #ddd;">06/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">15:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
         <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Recent Advances in Conformal Prediction with E-Values</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
          Conformal prediction has become a versatile framework for distribution-free uncertainty quantification, offering coverage guarantees under minimal assumptions. Traditionally, these methods rely on p-values to ensure marginal coverage when all data are exchangeable. More recently, e-values have emerged as a powerful and flexible tool in statistics. Their integration into conformal prediction has opened the door to constructing valid prediction sets in more complex and challenging settings. In this talk, I will provide an overview of these advances, explain the key ideas behind using e-values in conformal prediction, and highlight examples that demonstrate both their promise and the open questions they raise.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://gauthiere.github.io">Etienne Gauthier</a> (INRIA)</td>
    </tr>
        <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Statistics meet <br>Mathematics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>A hierarchical modelling approach for Bayesian Causal Forests on longitudinal data</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
          Imaging-Derived Phenotypes (IDPs), such as brain volume change, provide sensitive longitudinal markers of disease progression and treatment response across clinical trials. However, drawing causal conclusions from longitudinal IDPs is statistically challenging: follow-up times are irregular, repeated measurements induce within-individual correlation, and scanner-related variability introduces substantial non-biological heterogeneity. Bayesian Additive Regression Trees (BART) and their extension, Bayesian Causal Forests (BCF), provide flexible, nonparametric tools for estimating heterogeneous treatment effects in complex settings. Yet, both models are inherently cross-sectional, assuming independence across observations and therefore failing to account for within-individual correlation over time. Motivated by the NO.MS dataset, the largest and most comprehensive clinical trial dataset in Multiple Sclerosis (MS), we develop BCFLong, a hierarchical extension of BCF for longitudinal analysis, which preserves the flexibility of BART while explicitly modelling irregular follow-up and scanner-related heterogeneity. Inspired by BCF, we decompose the fixed effect mean into two components, using the former to isolate non-biological scanner effects and the latter to model the treatment effect, and we introduce individual-specific random effects, including random intercept and time-dependent slope, with a sparsity-inducing horseshoe prior. Simulations confirm BCFLong’s superior performance and robustness to sparsity, and on the NO.MS dataset, BCFLong reveals clinically meaningful longitudinal treatment effects on brain volume change that cannot be recovered by existing cross-sectional or trial-level methods.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/emma-prevot-74b2571a1/">Emma Prevot</a> (Statistics)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">11/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Small Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Advances in Neural Controlled Differential Equations</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
           Many real-world systems evolve continuously, yet most machine learning models interpret time series as discrete sequences. Continuous-time approaches instead treat time series as samples from an underlying input path, a formulation that naturally accommodates irregularly sampled or oversampled data. Among these, Neural Controlled Differential Equations (NCDEs) are a maximally expressive class of models that parametrise a vector field using a neural network and evolve their hidden state by solving a dynamical system driven by the input path. This talk presents three contributions that improve the training, scalability, and interpretability of NCDEs. First, building on neural rough differential equations, Log-NCDEs apply the Log-ODE method to efficiently approximate an NCDE's solution during training, improving both computational speed and empirical performance. Second, Linear NCDEs replace the non-linear vector field with a linear one, enabling closed-form solutions and parallel-in-time computation without sacrificing theoretical expressivity. Third, Structured Linear NCDEs use structured linear vector fields to further enhance efficiency while maintaining theoretical expressiveness and empirical performance. Collectively, these methods reduce the time per training step for NCDEs by up to three orders of magnitude while achieving state-of-the-art performance across diverse time series benchmarks.
          </div>
        </details>
      </td>      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://benwalker.co.uk">Benjamin Walker</a> (Mathematical Institute)</td>
    </tr>
    <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Sponsored session: <br>Quadrature</td>
      <td style="padding: 8px; border: 1px solid #ddd;">14/04</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Large Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>TBA</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
          TBA
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://quadrature.ai">Sebastian Monnet</a> (Quadrature)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">14/04</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:45</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Large Lecture Theatre, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Martingale posteriors: hype, hopes and headaches</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
Martingale posteriors, or perhaps better, predictive-resampling posteriors, provide a predictive route to posterior inference. Rather than specifying a likelihood–prior pair, one specifies a predictive rule, and a parameter or estimand of interest, viewed as a functional of the limiting empirical distribution of the observables. Posterior uncertainty is then approximated by forward-simulating the data beyond the observed sample via the predictive rule, and recomputing that functional on the completed dataset; this Monte Carlo scheme is predictive resampling.\

In this talk I will discuss the hype: the appeal of the framework is both conceptual and computational, since it treats parameter uncertainty as uncertainty about missing data, can avoid explicit prior elicitation, and provides an embarrassingly parallel route to posterior sampling that bypasses MCMC. It also suggests a way for turning strong predictive models into engines for posterior inference, including hybrids that reintroduce prior structure while leveraging models whose predictive distributions are more useful than their native uncertainty outputs for posterior inference.\

I will also discuss the hopes and the headaches: the ambitions and current frontier of the field, alongside the challenges of constructing predictive updates that lead to a well-defined limiting law, interpreting the induced uncertainty, and controlling the cost of repeated predictive updating.          </div>
        </details>
      </td>      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/laura-battaglia-05bb5980/">Laura Battaglia</a></td>
    </tr>
  </tbody>
</table>


<h2>2025</h2>

<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="padding: 8px; border: 1px solid #ddd;">Section</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Date</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Time</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Location</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Title</th>
      <th style="padding: 8px; border: 1px solid #ddd;">Speaker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl; padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Keynote talk</td>
      <td style="padding: 8px; border: 1px solid #ddd;">05/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>The predictive approach to uncertainty quantification</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://vikshirvaikar.com">Vik Shirvaikar</a></td>
    </tr>
    <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Random Graphs</td>
      <td style="padding: 8px; border: 1px solid #ddd;">12/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Roy Griffiths Room, Keble College</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Introduction to parameter estimation on random graphs</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Adrian Fischer</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">12/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Roy Griffiths Room, Keble College</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Modelling Extremely Sparse Networks with Random Measures</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://valentinkil.github.io">Valentin Kilian</a></td>
    </tr>
    <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Diffusion Models</td>
      <td style="padding: 8px; border: 1px solid #ddd;">26/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Ground floor Social Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Diffusing through life, mindless and careless</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/chr1swilliams">Chris Williams</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">26/03</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Ground floor Social Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Understanding generalisation in diffusion models</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://tylerkf.github.io">Tyler Farghly</a></td>
    </tr>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Keynote talk</td>
      <td style="padding: 8px; border: 1px solid #ddd;">01/05</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>The interplay of scaling and generalization</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/amitis-shidani-79764595/">Amitis Shidani</a></td>
    </tr>
        <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker</td>
      <td style="padding: 8px; border: 1px solid #ddd;">30/05</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Ground floor Social Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Beating the odds: flexible models for predicting football scores</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="linkedin.com/in/nick-zhang-81712217a">Nick Zhang</a> (University College Dublin)</td>
    </tr>
    <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Statistics meet <br>Probability</td>
      <td style="padding: 8px; border: 1px solid #ddd;">18/06</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Introduction to the Parabolic Anderson Model</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;">Léo Tyrpak (Probability)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">18/06</td>
      <td style="padding: 8px; border: 1px solid #ddd;">12:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Spectral Clustering for Directed Graphs</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="linkedin.com/in/ning-zhang-a757b6138">Ning Zhang</a> (Statistics)</td>
    </tr>
    <tr>
      <td rowspan="2" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker: <br> Causal Inference</td>
      <td style="padding: 8px; border: 1px solid #ddd;">09/07</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Ground floor Social Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>A vibes based introduction to causal inference</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/dan-manela-b468a2195/">Daniel Manela</a></td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">09/07</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Ground floor Social Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>A latent causal inference framework for ordinal variables</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://martinascauda.github.io">Martina Scauda</a> (University of Cambridge)</td>
    </tr>
            <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker</td>
      <td style="padding: 8px; border: 1px solid #ddd;">21/07</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
      <td style="padding: 8px; border: 1px solid #ddd;"><b>Partial order hierarchies</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/jessie-jiang0315/">Jessie Jiang</a> (Google)</td>
    </tr>
         <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Distinguished speaker</td>
      <td style="padding: 8px; border: 1px solid #ddd;">20/08</td>
      <td style="padding: 8px; border: 1px solid #ddd;">11:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Second floor Open Research Area, Department of Statistics</td>
         <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Testing Symmetry on the Torus: Le Cam Theory Meets Stein’s Method</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
Several complex real-world data can be viewed as points on the hyper-torus, which is the cartesian product of circles. Over the past few years, this has motivated new proposals of distributions on the torus, both (pointwise) symmetric and sine-skewed asymmetric. In practice, it is relevant to know whether one should use the simpler symmetric models or the more convoluted yet more general asymmetric ones. So far, only parametric likelihood ratio tests have been defined to distinguish between a symmetric density and its sine-skewed counterpart. In this talk, optimal tests for symmetry on the hyper-dimensional torus are presented, which are built leveraging Le Cam’s methodology.

Both scenarios where the center of symmetry is known and where it is unknown are addressed. These tests are not only valid under a given parametric hypothesis but instead under a very broad class of symmetric distributions. The asymptotic behavior of the proposed tests is studied both under the null hypothesis and local alternatives, and a focus is given on the derivation of quantitative bounds on the distributional distance between the exact (unknown) distribution of the test statistic and its asymptotic counterpart using Stein’s method. The finite-sample performance of the tests is evaluated through simulation studies, and their practical utility is demonstrated via an application to protein folding data.

This is joint work with A. Anastasiou and C. Ley.          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/sophia-loizidou-29254b178/">Sophia Loizidou</a> (University of Luxembourg)</td>
    </tr>
           <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Keynote talk</td>
      <td style="padding: 8px; border: 1px solid #ddd;">22/10</td>
      <td style="padding: 8px; border: 1px solid #ddd;">17:00</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
      Large Lecture Theatre, Department of Statistics</td>
   <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Attention to Experimentation Is All You Need: What To Do When You Run Out Of Data to Train Your Models With</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
Machine Learning, on average, is a miracle for it identifies patterns in data with high-dimensionality, and yields inter- and extrapolation often considered better than human jugdement. ⁠Big data was an era which hold the promise that we can almost indefinitely mine all collected data for the patterns and make ever better predictions. While this worked out well for ad-targeting, meme recommendations, and possibly finance, most crucial and pressing issues simply don’t have an abundance of data. This talk explores the question of what do when you have run out of data to train on, or, when you are starting in a low-data regime in the first place. We discuss Active Learning, Bayesian Optimisation and how these are part of a growing revolution in applied science across the UK and the globe.          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://jakobzeitler.github.io">Jakob Zeitler</a></td>
    </tr>
    <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Keynote talk</td>
      <td style="padding: 8px; border: 1px solid #ddd;">05/11</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
      Large Lecture Theatre, Department of Statistics</td>
   <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>How to train your <s>Dragon</s> LLM : An Introduction</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
Have you ever wondered how powerful tools like ChatGPT actually learn to talk? This will be your beginner's guide to the technology behind LLMs and the multi-stage training process that brings them to life. We’ll start with a brief history, from the Transformer and encoder-decoder architectures to more modern approaches. We'll discuss pretraining, finetuning and Reinforcement Learning from Human Feedback. We'll also explore interesting training quirks, such as why models that have been trained extensively on programming code often develop superior reasoning and problem-solving skills across all domains. Finally, we'll look at the current state of the art, including breakthroughs like DeepSeek, and the emerging capabilities of LLMs to use external tools (like web search or calculators) to solve complex problems, taking them beyond just text generation.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://silviasapora.github.io">Silvia Sapora</a></td>
    </tr>
      <tr>
      <td rowspan="1" style="writing-mode: vertical-rl;  padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Keynote talk</td>
      <td style="padding: 8px; border: 1px solid #ddd;">19/11</td>
      <td style="padding: 8px; border: 1px solid #ddd;">16:30</td>
      <td style="padding: 8px; border: 1px solid #ddd;">
      Large Lecture Theatre, Department of Statistics</td>
   <td style="padding: 8px; border: 1px solid #ddd;">
        <details>
          <summary style="cursor: pointer;"><b>Optimising Optimisation: A New <s>Hope</s> Slope</b></summary>
          <div style="padding-top: 8px; font-weight: normal; font-size: 0.9em; color: #555;">
The reparameterisation trick is a fundamental method for parameterising and training deep probabilistic models. In this talk, we revisit the reparameterisation trick, and show how to reduce variance in its gradients. This lets us draw a connection between global and local reparameterisation gradients, and make low-variance gradients accessible to more probabilistic models.
          </div>
        </details>
      </td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/kevin-lam-4a90b423a/">Kevin Lam</a></td>
    </tr>
  </tbody>
</table>
