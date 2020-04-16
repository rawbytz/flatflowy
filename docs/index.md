# FlatFlowy Bookmarklet for WorkFlowy

- Flattens WorkFlowy search results

![FlatFlowy](https://i.imgur.com/VGNHtcj.gif)

## Installation: Drag the link below to your bookmarks bar:

<!-- Special #setup editing instrucions go here -->
<a href="javascript:(function flatFlowy_2_9(){function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}function fixFlatClicks(e){if(document.querySelector(&quot;.page.searching&quot;)&amp;&amp;e.target&amp;&amp;e.target.parentNode&amp;&amp;e.target.parentNode.className.includes(&quot;bullet&quot;)){location.href=e.target.parentNode.hash;e.preventDefault()}}const css=`.page.searching .project .name{display:none}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{display:block}.page.searching .selected&gt;.children&gt;.project .project{margin:0 0 4px}.page.searching .children{margin:0;padding:0;border:0}.page.searching .childrenEnd{height:0}`;const h=`data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;const s=document.querySelector(`link[href=&quot;${h}&quot;]`);const noSearch=WF.currentSearchQuery()===null;if(s){if(noSearch)toastMsg(`FlatFlowy: ${s.disabled?&quot;ON&quot;:&quot;OFF&quot;}`);return void(s.disabled=!s.disabled)}const a=document.createElement(&quot;link&quot;);a.rel=&quot;stylesheet&quot;;a.href=h;document.head.appendChild(a);document.body.addEventListener(&quot;click&quot;,fixFlatClicks,false);if(noSearch)toastMsg(&quot;Flatflowy: ON&quot;)})();">FlatFlowy</a>

## Links:
- [Source code](https://github.com/rawbytz/flatflowy/blob/master/FlatFlowy.js)
- [rawbytz Blog Post](https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/)


<!-- 
LINKS REFERENCING THIS

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG Redirects https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/

@WFBLOG NOT YET https://blog.workflowy.com/2016/05/26/dr-workflowy-dissects-stress-and-anxiety/

 -->
