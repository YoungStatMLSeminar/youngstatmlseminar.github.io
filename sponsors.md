---
title: 'Sponsors'
layout: post
permalink: /sponsors/
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
        .text {
            flex: 2;
        }
/* Style for the "Gold" title */
.gold-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    /* A gold-like gradient color */
    color: #D4AF37; 
    margin-top: 40px;
    margin-bottom: 0.5rem;
}
/* Style for the horizontal line */
.separator-line {
    width: 100%; /* This makes the line adapt to the container's width */
    border: 0;
    height: 2px;
    background-color: var(--text);
    margin-bottom: 30px;
}
</style>
</head>


<body>
<p>To discuss potential sponsorships or for any other queries, please do not hesitate to reach out our president (<a href="mailto:kilian@stats.ox.ac.uk">Valentin Kilian</a>) or our treasurer (<a href="mailto:manela@stats.ox.ac.uk">Dan Manela</a>).</p>

<h2 class="gold-title">Gold</h2>

<hr class="separator-line">
<div class="sponsor">
  <a class="sponsor-link" href="https://quadrature.ai" target="_blank" rel="noopener noreferrer">
    <img src="/images/quadrature.png"
         alt="Quadrature logo (light)"
         class="sponsor-logo light"
         style="display:block;border:0;outline:0;box-shadow:none;background:transparent;"
         loading="lazy">
    <!-- <img src="/images/quadrature-night.png"
         alt="Quadrature logo (dark)"
         class="sponsor-logo dark"
         style="display:block;border:0;outline:0;box-shadow:none;background:transparent;"
         loading="lazy"> -->
  </a>
</div>

<!-- Add more sponsors following the same pattern -->

</body>
