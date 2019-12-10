(function flatFlowy_Mobile_1_0(css) {
  const h = `data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;
  const s = document.styleSheets;
  for (i = 0, max = s.length; i < max; i++) {
    if (s[i].href === h) {
      return void (s.item(i).disabled = !s[i].disabled);
    }
  }
  const a = document.createElement('link');
  a.rel = 'stylesheet';
  a.href = h;
  document.getElementsByTagName('head')[0].appendChild(a);
})('.page.searching .project .name,.page.searching .project .notes{display:none!important}.page.searching .project.matches .name.matches{display:block!important}.page.searching .selected>.children>.project .project{margin:0 0 4px!important}.page.searching .children{margin:0!important;padding:0!important;border:0!important}.page.searching .childrenEnd{height:0!important}.newMobileDesign .page.searching .selected .project>.name .bullet{position:absolute!important}.newMobileDesign .page.searching .selected .project .name>.content{margin-left:22px!important}.newMobileDesign .page.searching .selected .project>.name>.parentArrow{background-image:none!important;height:0!important}.newMobileDesign #pageContainer{margin-top:-15px!important}');