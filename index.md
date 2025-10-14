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
  flex: 0 0 200px;
  order: -1;
  margin-top: 15px;
}

.profile-image img {
  width: 100%;
  height: 240px;
  border-radius: 3px;
  display: block;
  object-fit: cover;
  object-position: center;
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
    align-self: center;
    margin-top: 0;
  }
}
</style>



<div class="profile-header">
  <div class="profile-content">
    <h1>Alexis Fox</h1>
    
    <p>I am a 2nd-year CS student at Duke University. <br> I'm currently working on web agents under <a href="https://www.shuyanzhou.com/">Shuyan Zhou</a>.</p>
    
    <br>
    
    <p>I previously worked with <a href="https://www.linkedin.com/in/claytonkerce/">Clayton Kerce</a> at GTRI, and with <br> <a href="https://biocomplexity.virginia.edu/our-team/samarth-swarup">Samarth Swarup</a> & <a href="https://biocomplexity.virginia.edu/our-team/abhijin-adiga">Abhijin Adiga</a> at UVA's Biocomplexity Institute.</p>

    <!-- <p>Interested in <a href="https://garymarcus.substack.com/p/how-o3-and-grok-4-accidentally-vindicated?utm_source=post-email-title&publication_id=888615&post_id=168187066&utm_campaign=email-post-title&isFreemail=true&r=47i8u&triedRedirect=true&utm_medium=email">neuro-symbolic AI</a>.</p> -->


    <p><a href="mailto:alexis.fox@duke.edu">Email</a> / <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=2&hl=en&user=iVIop8YAAAAJ&authuser=2">Google Scholar</a> / <a href="https://github.com/foxden09">Github</a> / <a href="https://www.linkedin.com/in/alexis-fox7/">Linkedin</a></p>
    <!-- / <a href="[cv-link]">CV (Month Year)</a>  -->
  </div>
  
  <div class="profile-image">
    <img src="assets/images/profile.jpg" alt="Alexis Fox" />
  </div>
</div>

## Publications
**A Unifying Information-theoretic Perspective on Evaluating Generative Models** \\
*<u>Alexis Fox</u>, Samarth Swarup, Abhijin Adiga*  \\
Proceedings of the AAAI Conference on Artificial Intelligence [2025]  \\
<span class="highlight-oral">Oral (5%)</span> 

[[Paper](https://arxiv.org/abs/2412.14340)] [[Code](https://github.com/NSSAC/PrecisionRecallMetric)]