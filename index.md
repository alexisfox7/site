---
layout: default
---

<style>
/* --- Typography: Newsreader (self-hosted variable font, OFL) --------------
   Warm humanist old-style serif, same family as Iowan Old Style / Lyon Text. */
@font-face {
  font-family: 'Newsreader';
  font-style: normal;
  font-weight: 200 800;
  font-display: swap;
  src: url('/assets/fonts/newsreader-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Newsreader';
  font-style: italic;
  font-weight: 200 800;
  font-display: swap;
  src: url('/assets/fonts/newsreader-latin-italic.woff2') format('woff2');
}

/* Headings in Newsreader; body stays in the system sans. */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Newsreader', 'Iowan Old Style', Palatino, Georgia, serif;
  letter-spacing: -0.012em;
  line-height: 1.22;
  /* no font-weight override: keeps the theme's normal weight, as in the tuner */
}

body,
.page-content,
p, li, blockquote, .profile-under {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               Helvetica, Arial, sans-serif;
}

body {
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

h1 { font-size: 2.2em; }
h2 { font-size: 1.75em; }

/* the wavy separator in the blog line */
.publinks {
  margin-top: -0.55em;   /* pull the links up under the venue line */
}

.stars img {
  height: 18px;
  vertical-align: -4px;
  margin-left: 2px;
}

.sep {
  color: #b9b2a8;
  margin: 0 0.28em;
  font-size: 0.95em;
  vertical-align: 0.06em;
}

/* fox beside the name: asleep by default, coding on hover */
.foxwrap {
  position: relative;
  display: inline-block;
  flex: none;
  width: 85px;
  height: 47px;
  top: -6px;
  margin-left: 14px;
}
.foxwrap img {
  position: absolute;
  top: 0;
  image-rendering: pixelated;
  transition: opacity 0.18s ease;
}
.foxwrap .fox-sleep { left: 50%; transform: translateX(-50%) translateX(-10px); width: 54px; }
.foxwrap .fox-wake  { left: 50%; transform: translateX(-50%) translateX(-10px); width: 58px; opacity: 0; }
.foxwrap .fox-code  { left: 0;   width: 78px; opacity: 0;
                      top: auto; bottom: 0; }   /* bottom-aligned so its feet stay on the same line as the sleeping pose */

/* the "!" that pops up when it startles awake */
.foxwrap .excl {
  position: absolute;
  top: -14px;
  left: 50%;
  margin-left: 16px;
  width: 9px;
  opacity: 0;
  transform: translateY(4px) scale(0.6);
  transition: opacity 0.12s ease, transform 0.18s cubic-bezier(.2,1.7,.4,1);
  image-rendering: pixelated;
}

/* stage 1: startled awake */
.foxwrap.awake .fox-sleep { opacity: 0; }
.foxwrap.awake .fox-wake  { opacity: 1; }
.foxwrap.awake .excl      { opacity: 1; transform: translateY(0) scale(1); }

/* stage 2: settles in and starts coding */
.foxwrap.coding .fox-wake { opacity: 0; }
.foxwrap.coding .fox-code { opacity: 1; animation: fox-type 3.6s steps(1) infinite; }
.foxwrap.coding .excl     { opacity: 0; transform: translateY(-6px) scale(0.8); }
.foxwrap.coding .caret    { opacity: 1; animation: fox-caret 0.9s steps(1) infinite; }

/* one small nudge every few seconds — enough to feel alive, not jittery */
@keyframes fox-type {
  0%,  90%  { transform: translateY(0); }
  91%, 95%  { transform: translateY(-1px); }
  96%, 100% { transform: translateY(0); }
}

/* cursor blinking on the laptop screen, just past the last line of code */
.caret {
  position: absolute;
  left: 68px;
  top: 36px;
  width: 3px;
  height: 3px;
  background: #8fd18a;
  opacity: 0;
  pointer-events: none;
}
@keyframes fox-caret {
  0%, 55%  { opacity: 1; }
  56%,100% { opacity: 0; }
}

/* touch devices: no hover, so just show the sleeping fox */
@media (hover: none) {
  .foxwrap .fox-wake, .foxwrap .fox-code, .foxwrap .excl, .foxwrap .caret { display: none; }
}

/* keep code monospaced */
code, pre, kbd, samp, tt {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
}

/* Hide navigation header */
.site-header {
  display: none !important;
}


/* Hide footer */
.site-footer {
  display: none !important;
}

/* Main layout */
.profile-header {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: flex-start;
}

.profile-content {
  flex: 1;
}

.profile-image {
  flex: 0 0 130px;
  order: -1;
  margin-top: 5px;
}

.profile-image img {
  width: 100%;
  aspect-ratio: 5 / 6;
  height: auto;
  border-radius: 3px;
  display: block;
  object-fit: cover;
  object-position: center;
}

.profile-under {
  margin-top: 6px;
}

.profile-under p {
  margin: 0 0 10px;
}

.highlight-oral {
  display: inline-block;
  background-color: #fbede7;
  color: #754531;
  font-weight: 600;
  font-size: 0.94em;
  line-height: 1;
  padding: 5px 8px 3px;   /* MORE on top: caps sit high in the line box,
                             so equal padding leaves a gap underneath */
  border-radius: 4px;
  vertical-align: baseline;
}

/* Ensure consistent typography */
h1 {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  margin-top: 0;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .profile-header {
    flex-direction: column-reverse;
    gap: 20px;
  }
  
  .profile-image {
    flex: 0 0 auto;
    width: 130px;
    align-self: center;
    margin-top: 0;
  }
}
</style>



<div class="profile-header">
  <div class="profile-content">
    <h1>Alexis Fox<span class="foxwrap"><img class="fox-sleep" src="assets/images/fox.png" alt=""><img class="fox-wake" src="assets/images/fox-wake.png" alt=""><img class="fox-code" src="assets/images/fox-coding.png" alt=""><img class="excl" src="assets/images/excl.png" alt=""><span class="caret"></span></span></h1>

<script>
  // Hovering anywhere in the profile block startles the fox awake ("!"),
  // then it settles in and starts coding. Latches on first hover.
  document.addEventListener('DOMContentLoaded', function () {
    var wrap  = document.querySelector('.foxwrap');
    var block = document.querySelector('.profile-header') || wrap;
    if (!wrap || !block) return;
    var timers = [];
    block.addEventListener('mouseenter', function () {
      timers.forEach(clearTimeout);
      timers = [];
      wrap.classList.remove('coding');
      wrap.classList.add('awake');                                  // startled: "!"
      timers.push(setTimeout(function () {                          // settles in to code
        wrap.classList.add('coding');
      }, 800));
      timers.push(setTimeout(function () {                          // ...then dozes off again
        wrap.classList.remove('awake', 'coding');
      }, 15800));
    });
  });
</script>
    
    <p>I am a 3rd-year CS undergraduate at Duke University.</p>

    <div class="profile-under">
      <p><a href="mailto:alexis.fox@duke.edu">Email</a> / <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=2&hl=en&user=iVIop8YAAAAJ&authuser=2">Google Scholar</a> / <a href="https://github.com/foxden09">Github</a> / <a href="https://www.linkedin.com/in/alexis-fox7/">Linkedin</a></p>
    </div>

    <!--
    <br>

    <p>I previously worked with <a href="https://www.linkedin.com/in/claytonkerce/">Clayton Kerce</a> at GTRI, and with <br> <a href="https://biocomplexity.virginia.edu/our-team/samarth-swarup">Samarth Swarup</a> & <a href="https://biocomplexity.virginia.edu/our-team/abhijin-adiga">Abhijin Adiga</a> at UVA's Biocomplexity Institute.</p>
    -->
    <!-- / <a href="[cv-link]">CV (Month Year)</a>  -->
  </div>
  
  <div class="profile-image">
    <img src="assets/images/profile3.jpg" alt="Alexis Fox" />
  </div>
</div>

## Blog
[Hill-climbing ARC-AGI-3](https://blog.alexisfox.dev/arcagi3) <span class="sep">~</span> Mar 2026

<div style="margin-top: 50px;"></div>

## Publications
**PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning** \\
*<u>Alexis Fox</u>, Junlin Wang, Paul Rosu, Bhuwan Dhingra*  \\
arXiv preprint, 2026

<p class="publinks" markdown="1">[[Paper](https://arxiv.org/abs/2607.20064)] [[Code](https://github.com/alexisfox7/PRO-LONG)]
<a class="stars" href="https://github.com/alexisfox7/PRO-LONG"><img
  src="https://img.shields.io/github/stars/alexisfox7/PRO-LONG?style=flat&label=%E2%98%85&labelColor=fbede7&color=df7f57"
  alt="GitHub stars"></a></p>

<div style="margin-top: 40px;"></div>

**A Unifying Information-theoretic Perspective on Evaluating Generative Models** \\
*<u>Alexis Fox</u>, Samarth Swarup, Abhijin Adiga*  \\
Proceedings of the AAAI Conference on Artificial Intelligence 2025  \\
<span class="highlight-oral">Oral (5%)</span>

<p class="publinks" markdown="1">[[Paper](https://arxiv.org/abs/2412.14340)] [[Code](https://github.com/NSSAC/PrecisionRecallMetric)]</p>