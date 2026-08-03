/* Minimal hand-set of line icons, themed to currentColor.
   Usage: <span class="icon" data-icon="cow"></span> */
(function(){
  var S = 'stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    cow: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M10 20c0-6 5-9 14-9s14 3 14 9v3c3 0 5 2 5 5s-2 5-5 5h-1l-2 8H14l-2-8h-1c-3 0-5-2-5-5s2-5 5-5z"/><circle cx="18" cy="24" r="1.4" fill="currentColor" stroke="none"/><circle cx="30" cy="24" r="1.4" fill="currentColor" stroke="none"/><path d="M18 30c2 1.6 10 1.6 12 0"/><path d="M13 14c-2-3-1-6 1-7M35 14c2-3 1-6-1-7"/></svg>',
    temple: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 4l6 8H18z"/><path d="M24 12v6"/><path d="M14 32V22h20v10"/><path d="M10 42V32h28v10"/><path d="M6 42h36"/><path d="M20 42V34h8v8"/></svg>',
    heart: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 41S7 30 7 18a9 9 0 0117-4 9 9 0 0117 4c0 12-17 23-17 23z"/></svg>',
    hands: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 6v30"/><path d="M24 10c-4-4-12-5-15 0-3 5 1 9 5 9M24 10c4-4 12-5 15 0 3 5-1 9-5 9"/><path d="M14 22l-4 8c-2 4 1 8 5 8h18c4 0 7-4 5-8l-4-8"/></svg>',
    leaf: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M10 38C8 20 22 8 40 8c2 18-10 32-28 30z"/><path d="M12 36c8-10 16-16 26-24"/></svg>',
    medical: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><rect x="8" y="14" width="32" height="24" rx="3"/><path d="M24 20v12M18 26h12"/><path d="M17 14v-3a3 3 0 013-3h8a3 3 0 013 3v3"/></svg>',
    book: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 12c-4-3-11-4-16-2v26c5-2 12-1 16 2 4-3 11-4 16-2V10c-5-2-12-1-16 2z"/><path d="M24 12v26"/></svg>',
    users: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><circle cx="17" cy="16" r="6"/><circle cx="33" cy="16" r="6"/><path d="M5 40c0-7 6-11 12-11s12 4 12 11M23 40c0-7 6-11 12-11s8 3 8 11"/></svg>',
    shield: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 5l16 6v11c0 11-7 18-16 21-9-3-16-10-16-21V11z"/><path d="M17 24l5 5 9-10"/></svg>',
    calendar: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><rect x="6" y="10" width="36" height="32" rx="2"/><path d="M6 20h36M14 6v8M34 6v8"/></svg>',
    phone: '<svg viewBox="0 0 48 48" width="22" height="22" '+S+'><path d="M11 7l7 2 2 6-4 3c2 5 5 8 10 10l3-4 6 2 2 7c-1 2-3 3-5 3-14-1-25-12-26-26 0-2 1-4 3-5z"/></svg>',
    mail: '<svg viewBox="0 0 48 48" width="22" height="22" '+S+'><rect x="5" y="10" width="38" height="28" rx="2"/><path d="M6 12l18 15L42 12"/></svg>',
    pin: '<svg viewBox="0 0 48 48" width="22" height="22" '+S+'><path d="M24 44s14-14 14-24a14 14 0 00-28 0c0 10 14 24 14 24z"/><circle cx="24" cy="20" r="5"/></svg>',
    check: '<svg viewBox="0 0 48 48" width="20" height="20" '+S+'><circle cx="24" cy="24" r="18"/><path d="M16 25l6 6 12-13"/></svg>',
    droplet: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 5s13 16 13 26a13 13 0 01-26 0c0-10 13-26 13-26z"/></svg>',
    ambulance: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><rect x="4" y="16" width="26" height="16" rx="2"/><path d="M30 22h8l6 6v4h-14z"/><circle cx="14" cy="36" r="3"/><circle cx="34" cy="36" r="3"/><path d="M13 20v8M9 24h8"/></svg>',
    scale: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 6v36M14 42h20"/><path d="M9 14h14M25 14h14"/><path d="M9 14l-5 10a5 5 0 0010 0zM39 14l-5 10a5 5 0 0010 0z"/></svg>',
    om: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><text x="24" y="34" font-size="30" text-anchor="middle" font-family="Yatra One, serif" fill="currentColor" stroke="none">&#2384;</text></svg>',
    sprout: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M24 42V24"/><path d="M24 24c0-8-6-12-14-12 0 8 6 12 14 12zM24 20c0-7 6-11 14-11 0 7-6 11-14 11z"/></svg>',
    home: '<svg viewBox="0 0 48 48" width="34" height="34" '+S+'><path d="M6 22L24 7l18 15"/><path d="M11 19v21h26V19"/><path d="M19 40V28h10v12"/></svg>'
  };
  function apply(){
    document.querySelectorAll('[data-icon]').forEach(function(el){
      var key = el.getAttribute('data-icon');
      if(ICONS[key]) el.innerHTML = ICONS[key];
    });
  }
  document.addEventListener('DOMContentLoaded', apply);
})();
