(function flatFlowy_2_9() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str.bold(), err);
    setTimeout(() => WF.hideMessage(), (sec || 2) * 1000);
  }
  const css = `.page.searching .project .name{display:none!important}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name{display:block!important}.page.searching .selected>.children>.project .project{margin:0 0 4px!important}.page.searching .children{margin:0!important;padding:0!important;border:0!important}.page.searching .childrenEnd{height:0!important}`;
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