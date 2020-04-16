(function flatFlowy_2_9() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  // Fix for WorkFlowy bullet click bug. Parent must be visible for animated zoom to work.
  function flatClicks(e) {
    if (e.target && e.target.parentNode && e.target.parentNode.className.includes("bullet")) {
      location.href = e.target.parentNode.hash;
      e.preventDefault();
    }
  }
  const css = `.page.searching .project .name{display:none}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name{display:block}.page.searching .selected>.children>.project .project{margin:0 0 4px}.page.searching .children{margin:0;padding:0;border:0}.page.searching .childrenEnd{height:0}`;
  const h = `data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;
  const s = document.querySelector(`link[href="${h}"]`);
  const noSearch = WF.currentSearchQuery() === null;
  if (s) {
    s.disabled ? document.body.addEventListener("click", flatClicks, false) : document.body.removeEventListener("click", flatClicks, false);
    if (noSearch) toastMsg(`FlatFlowy: ${s.disabled ? "ON" : "OFF"}`);
    return void (s.disabled = !s.disabled);
  }
  const a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = h;
  document.head.appendChild(a);
  document.body.addEventListener("click", flatClicks, false);
  if (noSearch) toastMsg("Flatflowy: ON");
})();