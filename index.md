---
layout: default
---

<style>
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
  background-color: #fff3cd;
  padding: 2px 6px;
  border-radius: 4px;
  color: #856404;
  font-weight: bold;
}

/* Ensure consistent typography */
h1 {
  font-size: 2.1em;
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
    <h1>Alexis Fox</h1>
    
    <p>I am a 2nd-year CS undergraduate at Duke University.</p>

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
    <img src="assets/images/profile2.png" alt="Alexis Fox" />
  </div>
</div>

## Blog
[Hill-climbing ARC-AGI-3](https://blog.alexisfox.dev/arcagi3) — Mar 2026

<div style="margin-top: 50px;"></div>

## Publications
**A Unifying Information-theoretic Perspective on Evaluating Generative Models** \\
*<u>Alexis Fox</u>, Samarth Swarup, Abhijin Adiga*  \\
Proceedings of the AAAI Conference on Artificial Intelligence [2025]  \\
<span class="highlight-oral">Oral (5%)</span>

[[Paper](https://arxiv.org/abs/2412.14340)] [[Code](https://github.com/NSSAC/PrecisionRecallMetric)]