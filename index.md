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
      <td style="padding: 8px; border: 1px solid #ddd;"><b>TBA</b></td>
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://deeprochoudhury.github.io">Deepro Choudhury</a></td>
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
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/vik-shirvaikar/">Vik Shirvaikar</a></td>
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
      <td style="padding: 8px; border: 1px solid #ddd;"><a href="https://www.linkedin.com/in/silvia-sapora/">Silvia Sapora</a></td>
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
