(function flatFlowy_3_2() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  const css = `.page.searching .project>.name,.page.searching .project>.notes{height:0;opacity:0}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{height:100%;opacity:1}.page.searching .children{margin:0;padding:0;border:0}.page.searching .addSiblingButton,.page.searching .expand{display:none}.done .fullMatch .content .contentMatch,.fullMatch .content .contentMatch,.project.metaMatches>.name.with-updates.annotationAdded>.content>.innerContentContainer,.project.metaMatches>.name>.content>.innerContentContainer{background-color:transparent}`;
  const h = `data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;
  const s = document.querySelector(`link[href="${h}"]`);
  const noSearch = WF.currentSearchQuery() === null;
  if (s) {
    if (noSearch) toastMsg(`FlatFlowy: ${s.disabled ? "ON" : "OFF"}`);
    return void (s.disabled = !s.disabled);
  }
  const a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = h;
  document.head.appendChild(a);
  if (noSearch) toastMsg("Flatflowy: ON");
})();