(function flatFlowy_2_6(hideNotes ='_hideNotes_') {
  if (typeof hideNotes !== "boolean") hideNotes = false;
  function toastMsg(str, sec, err) {
    WF.showMessage(str.bold(), err);
    setTimeout(() => WF.hideMessage(), (sec || 2) * 1000);
  }
  const css = `.page.searching .project .name${hideNotes ? ",.page.searching .project .notes" : ""}{display:none!important}.page.searching .project.matches .name.matches{display:block!important}.page.searching .selected>.children>.project .project{margin:0 0 4px!important}.page.searching .children{margin:0!important;padding:0!important;border:0!important}.page.searching .childrenEnd{height:0!important}`;
  const h = `data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;
  const ss = document.styleSheets;
  const noSearch = !WF.currentSearchQuery();
  for (const s of ss) {
    if (s.href === h) {
      if (noSearch) toastMsg(`FlatFlowy: ${s.disabled ? "ON" : "OFF"}`);
      return void (s.disabled = !s.disabled)
    }
  }
  const a = document.createElement("link");
  a.rel = "stylesheet";
  a.href = h;
  document.head.appendChild(a);
  if (noSearch) toastMsg("Flatflowy: ON");
})();