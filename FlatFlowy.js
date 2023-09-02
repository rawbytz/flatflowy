(function flatFlowy_3_2() {
  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }
  function getNameForBreadcrumb(item) {
    const plainName = item.getNameInPlainText().trim();
    var replaceName = "Untitled";
    // if image/file has no title use uploaded filename 
    if (plainName.length === 0 && item.data.metadata.s3File && item.data.metadata.s3File.fileName) replaceName = item.data.metadata.s3File.fileName;
    return plainName.length === 0 ? replaceName : plainName
  }
  function getBreadcrumbsAsString(item) {
    const ancestors = item.getAncestors().reverse();
    return ancestors.length > 1 ? ancestors.splice(1).map(ancestor => getNameForBreadcrumb(ancestor)).join(" > ") : "Home";
  }
  function addBreadcrumbsToMatches() {
    const matches = document.querySelectorAll('.project.matches,.project.metaMatches');
    matches.forEach(match => {
      const pID = match.getAttribute("projectid");
      const item = WF.getItemById(pID);
      match.firstChild.title = getBreadcrumbsAsString(item) // .name node gets titled
    });
  }
  const css = `.page.searching .project>.name,.page.searching .project>.notes{height:0;opacity:0}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{height:100%;opacity:1}.page.searching .children{margin:0;padding:0;border:0}.page.searching .addSiblingButton,.page.searching .expand{display:none}.done .fullMatch .content .contentMatch,.fullMatch .content .contentMatch,.project.metaMatches>.name.with-updates.annotationAdded>.content>.innerContentContainer,.project.metaMatches>.name>.content>.innerContentContainer{background-color:transparent}`;
  const ID = "FlatFlowy";
  const ff = document.getElementById(ID);
  const NO_SEARCH = WF.currentSearchQuery() === null;
  if (ff) {
    NO_SEARCH ? toastMsg(`FlatFlowy: ${ff.disabled ? "ON" : "OFF"}`) : addBreadcrumbsToMatches();
    return void (ff.disabled = !ff.disabled);
  }
  const s = document.createElement('style');
  s.innerText = css;
  s.id = ID;
  document.head.appendChild(s);
  NO_SEARCH ? toastMsg("Flatflowy: ON") : addBreadcrumbsToMatches();
})();