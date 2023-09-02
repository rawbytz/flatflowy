# FlatFlowy Bookmarklet for WorkFlowy

- Flattens WorkFlowy search results, removing all non-matching ancestors.
- Removes WorkFlowy's search background highlighting.
- Works with the following searches: tags, text and meta (ex: changed:1d or dates).
- **Important!** Don’t move, drag or multi-edit items while viewing a flat list. Since some content is hidden, you could get unexpected results.
- Due to WorkFlowy's sequential loading you may need to scroll down to force some items to load when your list is long.
- Board content does not play nice with FlatFlowy. 

![FlatFlowy](https://i.imgur.com/VGNHtcj.gif)

## Installation: Drag the link below to your bookmarks bar:

<!-- Special #setup editing instrucions go here -->
<a href="javascript:(function flatFlowy_3_1(){function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}function fixFlatClicks(e){if(document.querySelector(&quot;.page.searching&quot;)&amp;&amp;e.target&amp;&amp;e.target.parentNode&amp;&amp;e.target.parentNode.className.includes(&quot;bullet&quot;)){location.href=e.target.parentNode.hash;e.preventDefault()}}const css=`.page.searching .project .name{display:none}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{display:block}.page.searching .selected&gt;.children&gt;.project .project{margin:0 0 4px}.page.searching .children{margin:0;padding:0;border:0}.newMobileDesign .page.searching .selected .children .children{margin-left:-2px}.newMobileDesign .page.searching .selected .project&gt;.name&gt;.parentArrow{display:none}.newMobileDesign .page.searching .children .content{padding-right:0}.page.searching .checkmark .prefix{display:inline-block}.page.searching .checkmark&gt;.name&gt;.content{display:inline-block}`;const h=`data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;const s=document.querySelector(`link[href=&quot;${h}&quot;]`);const noSearch=WF.currentSearchQuery()===null;if(s){if(noSearch)toastMsg(`FlatFlowy: ${s.disabled?&quot;ON&quot;:&quot;OFF&quot;}`);return void(s.disabled=!s.disabled)}const a=document.createElement(&quot;link&quot;);a.rel=&quot;stylesheet&quot;;a.href=h;document.head.appendChild(a);if(!navigator.userAgent.includes(&quot;Mobile&quot;))document.body.addEventListener(&quot;click&quot;,fixFlatClicks,false);if(noSearch)toastMsg(&quot;Flatflowy: ON&quot;)})();">FlatFlowy</a>

## Links:
- [Source code](https://github.com/rawbytz/flatflowy/blob/master/FlatFlowy.js)
- [rawbytz Blog Post](https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/)

## Version Notes
- 2023-08-31: v3.1 Fix for todo alignment

<!-- 
LINKS REFERENCING THIS

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG Redirects https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/

@WFBLOG NOT YET https://blog.workflowy.com/2016/05/26/dr-workflowy-dissects-stress-and-anxiety/

 -->
