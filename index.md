---
layout: default
title: Opposite Buttons Test
---

<div class="stage" role="region" aria-label="Play area">
  <div id="box" role="img" aria-label="blue square"></div>
</div>

<div class="controls">
  <button id="upBtn" class="btn">⬆️ Up</button>
  <button id="downBtn" class="btn">⬇️ Down</button>
</div>

<div id="status" style="margin-top: 1rem; font-weight: bold;"></div>

<link rel="stylesheet" href="{{ '/assets/app.css' | relative_url }}">
<script defer src="{{ '/assets/app.js' | relative_url }}"></script>