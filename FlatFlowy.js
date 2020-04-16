(function flatFlowy_2_9() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str.bold(), err);
    setTimeout(() => WF.hideMessage(), (sec || 2) * 1000);
  }
  const css = `.page.searching .project .name{display:none}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name{display:block}.page.searching .selected>.children>.project .project{margin:0 0 4px}.page.searching .children{margin:0;padding:0;border:0}.page.searching .childrenEnd{height:0}`;
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