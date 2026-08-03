/* Shared header + footer, injected at runtime so every page stays in sync.
   Works over file:// as well as http(s) — no fetch() required. */

(function(){

  var NAV = [
    ["index.html","Home"],
    ["about.html","About Us"],
    ["mission.html","Mission &amp; Objectives"],
    ["gau-seva.html","Gau Seva"],
    ["team.html","Our Team"],
    ["gallery.html","Gallery"],
    ["events.html","Events &amp; News"],
    ["transparency.html","Transparency"],
    ["contact.html","Contact"]
  ];

  function navLinks(current){
    return NAV.map(function(item){
      var cls = (item[0] === current) ? ' class="active"' : '';
      return '<li><a href="'+item[0]+'"'+cls+'>'+item[1]+'</a></li>';
    }).join('');
  }

  function buildHeader(current){
    return ''
    +'<div class="top-strip"><div class="container">'
    +'  <span>&#9742; +91 94670 62928 &nbsp; | &nbsp; &#9993; admin.sanatansevafoundation@gmail.com</span>'
    +'  <span>Regd. under Haryana Registration &amp; Regulation of Societies Act, 2012 &mdash; Reg. No. HR-009-2026-00718</span>'
    +'</div></div>'
    +'<header class="site-header"><div class="container nav-wrap">'
    +'  <a class="brand" href="index.html">'
    +'    <img src="assets/images/logo.jpg" alt="Sanatan Seva Foundation crest">'
    +'    <span class="brand-text"><span class="name">Sanatan Seva<br>Foundation</span><br><span class="tag">Gau Seva &middot; Dharma &middot; Seva</span></span>'
    +'  </a>'
    +'  <button class="hamburger" id="navToggle" aria-label="Toggle menu">&#9776;</button>'
    +'  <nav class="primary-nav" id="primaryNav"><ul>'+navLinks(current)+'</ul>'
    +'    <a class="btn nav-cta" href="donate.html">Donate Now</a>'
    +'  </nav>'
    +'</div></header>';
  }

  function buildFooter(){
    return ''
    +'<div class="toran on-dark">'+Array(38).fill('<span></span>').join('')+'</div>'
    +'<footer class="site-footer"><div class="container">'
    +'  <div class="footer-grid">'
    +'    <div>'
    +'      <h4>Sanatan Seva Foundation</h4>'
    +'      <p>A registered charitable society serving Haryana&rsquo;s cows, temples and communities &mdash; rooted in gau seva, dharma and selfless service.</p>'
    +'      <p style="font-size:.82rem;color:#B9A487;">S.D. No. J21, Ward No. 8, Near Power House,<br>Safidon, Jind, Haryana &ndash; 126112</p>'
    +'    </div>'
    +'    <div><h4>Explore</h4><ul>'
    +'      <li><a href="about.html">About Us</a></li>'
    +'      <li><a href="mission.html">Mission &amp; Objectives</a></li>'
    +'      <li><a href="gau-seva.html">Gau Seva Programs</a></li>'
    +'      <li><a href="team.html">Governing Body</a></li>'
    +'      <li><a href="membership.html">Membership</a></li>'
    +'    </ul></div>'
    +'    <div><h4>Get Involved</h4><ul>'
    +'      <li><a href="donate.html">Donate</a></li>'
    +'      <li><a href="volunteer.html">Volunteer</a></li>'
    +'      <li><a href="events.html">Events &amp; News</a></li>'
    +'      <li><a href="gallery.html">Gallery</a></li>'
    +'      <li><a href="faq.html">FAQ</a></li>'
    +'    </ul></div>'
    +'    <div><h4>Legal &amp; Contact</h4><ul>'
    +'      <li><a href="transparency.html">Registration &amp; Transparency</a></li>'
    +'      <li><a href="privacy.html">Privacy Policy &amp; Terms</a></li>'
    +'      <li><a href="contact.html">Contact Us</a></li>'
    +'      <li><a href="mailto:admin.sanatansevafoundation@gmail.com">admin.sanatansevafoundation@gmail.com</a></li>'
    +'      <li><a href="tel:+919467062928">+91 94670 62928</a></li>'
    +'    </ul></div>'
    +'  </div>'
    +'  <div class="footer-bottom">'
    +'    <span>&copy; <span id="yr"></span> Sanatan Seva Foundation. All rights reserved.</span>'
    +'    <span>Reg. No. HR-009-2026-00718 &nbsp;|&nbsp; Unique ID 2000168398 &nbsp;|&nbsp; Registered 11 June 2026, Jind, Haryana</span>'
    +'  </div>'
    +'</div></footer>';
  }

  document.addEventListener('DOMContentLoaded', function(){
    var current = (document.body.getAttribute('data-page') || 'index.html');
    var hHolder = document.getElementById('site-header');
    var fHolder = document.getElementById('site-footer');
    if(hHolder){ hHolder.outerHTML = buildHeader(current); }
    if(fHolder){ fHolder.outerHTML = buildFooter(); }

    var yr = document.getElementById('yr');
    if(yr){ yr.textContent = new Date().getFullYear(); }

    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('primaryNav');
    if(toggle && nav){
      toggle.addEventListener('click', function(){
        nav.classList.toggle('open');
      });
    }
  });

})();
