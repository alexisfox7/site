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

/* a little air above the page */
.page-content {
  padding-top: 62px;
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
.foxwrap .fox-wake  { left: 50%; transform: translateX(-50%) translateX(-10px); width: 51px; opacity: 0; }
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

/* stage 1: startled awake — with a little hop */
.foxwrap.awake .fox-sleep { opacity: 0; }
.foxwrap.awake .fox-wake  {
  opacity: 1;
  animation: fox-hop 0.62s cubic-bezier(.25,.9,.35,1) 1;
}

/* the startle jump: up fast, land, small second bounce. No scaling —
   scaling a 4px-tall eye bar visibly changes its size.
   The translateX parts must be repeated or they'd be dropped mid-animation. */
@keyframes fox-hop {
  0%   { transform: translateX(-50%) translateX(-10px) translateY(0); }
  14%  { transform: translateX(-50%) translateX(-10px) translateY(-9px); }
  40%  { transform: translateX(-50%) translateX(-10px) translateY(0); }
  60%  { transform: translateX(-50%) translateX(-10px) translateY(-4px); }
  100% { transform: translateX(-50%) translateX(-10px) translateY(0); }
}
.foxwrap.awake .excl      { opacity: 1; transform: translateY(0) scale(1); }

/* stage 2: settles in and starts coding */
.foxwrap.coding .fox-wake { opacity: 0; }
.foxwrap.coding .fox-code { opacity: 1; }

/* real frame animation: paws alternate (typing), glasses get nudged
   occasionally. Each frame is a full sprite layered over the base. */
.foxwrap .fox-code-l,
.foxwrap .fox-code-r,
.foxwrap .fox-code-g { opacity: 0; transition: none; }

.foxwrap.coding .fox-code-l { animation: fox-type-l 0.34s steps(1) infinite; }
.foxwrap.coding .fox-code-r { animation: fox-type-r 0.34s steps(1) infinite; }
.foxwrap.coding .fox-code-g { animation: fox-nudge  5.4s  steps(1) infinite; }

/* energy drink on the desk; every so often the fox takes a swig */
.foxwrap .can {
  position: absolute;
  left: 43px;
  top: auto;        /* cancel the shared `top: 0`, or the can stretches full-height */
  bottom: 1px;
  width: 7px;
  height: auto;
  opacity: 0;
  transform-origin: 50% 90%;
  transition: none;
  image-rendering: pixelated;
}
/* the can is not on the desk — it only comes out for the swig */

/* The swig. The can rests right beside the right paw, and the fox's mouth
   sits at about (41, 36) in this box — so tilting the can about its base
   already lands the rim on the muzzle; it only needs a small lift. */
.foxwrap.drinking .can { animation: fox-drink 2.4s ease-in-out 1; }

@keyframes fox-drink {
  0%        { opacity: 0; transform: translate(0, 9px)    rotate(4deg); }
  14%       { opacity: 1; transform: translate(0, 0)      rotate(-9deg); }
  32%, 66%  { opacity: 1; transform: translate(2.5px, -1px) rotate(-42deg); }  /* rim on the muzzle */
  84%       { opacity: 1; transform: translate(0, 0)      rotate(-8deg); }
  100%      { opacity: 0; transform: translate(0, 9px)    rotate(4deg); }
}

/* while drinking: the right paw stays raised (holding the can) and the
   typing loop pauses, so the paw doesn't flap mid-swig */
.foxwrap.drinking .fox-code-l { animation: none; opacity: 0; }
.foxwrap.drinking .fox-code-r { animation: none; opacity: 1; }

@keyframes fox-type-l { 0%, 49%  { opacity: 1; } 50%, 100% { opacity: 0; } }
@keyframes fox-type-r { 0%, 49%  { opacity: 0; } 50%, 100% { opacity: 1; } }
@keyframes fox-nudge  { 0%, 90%  { opacity: 0; } 91%, 96% { opacity: 1; } 97%, 100% { opacity: 0; } }
.foxwrap.coding .excl     { opacity: 0; transform: translateY(-6px) scale(0.8); }
.foxwrap.coding .caret    { opacity: 1; animation: fox-caret 0.9s steps(1) infinite; }

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
  .foxwrap .fox-wake, .foxwrap .fox-code, .foxwrap .excl, .foxwrap .caret,
  .foxwrap .can { display: none; }
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
    <h1>Alexis Fox<span class="foxwrap"><img class="fox-sleep" src="assets/images/fox.png" alt=""><img class="fox-wake" src="assets/images/fox-wake.png" alt=""><img class="fox-code" src="assets/images/fox-coding.png" alt=""><img class="fox-code fox-code-l" src="assets/images/fox-coding-l.png" alt=""><img class="fox-code fox-code-r" src="assets/images/fox-coding-r.png" alt=""><img class="fox-code fox-code-g" src="assets/images/fox-coding-g.png" alt=""><img class="excl" src="assets/images/excl.png" alt=""><span class="caret"></span><img class="can" src="assets/images/can.png" alt=""></span></h1>

<script>
  // Hovering anywhere in the profile block startles the fox awake ("!"),
  // then it settles in and starts coding. Latches on first hover.
  document.addEventListener('DOMContentLoaded', function () {
    var wrap  = document.querySelector('.foxwrap');
    var block = document.querySelector('.profile-header') || wrap;
    if (!wrap || !block) return;
    var timers = [];
    var ready  = false;
    // Ignore hovers for the first second, so the fox doesn't fire
    // just because the cursor happened to be sitting there as the page loaded.
    setTimeout(function () { ready = true; }, 1000);
    block.addEventListener('mouseenter', function () {
      if (!ready) return;
      // Already awake or mid-session? Leave it be — re-entering the header
      // shouldn't startle a fox that's busy coding.
      if (wrap.classList.contains('awake')) return;
      timers.forEach(clearTimeout);
      timers = [];
      wrap.classList.remove('coding');
      wrap.classList.add('awake');                                  // startled: "!"
      timers.push(setTimeout(function () {                          // settles in to code
        wrap.classList.add('coding');
      }, 800));
      // take a swig a few seconds in, and again later
      [4200, 10600].forEach(function (t) {
        timers.push(setTimeout(function () {
          wrap.classList.add('drinking');
          timers.push(setTimeout(function () {
            wrap.classList.remove('drinking');
          }, 2400));
        }, t));
      });
      timers.push(setTimeout(function () {                          // ...then dozes off again
        wrap.classList.remove('awake', 'coding', 'drinking');
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