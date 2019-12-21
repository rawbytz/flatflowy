# FlatFlowy Bookmarklet for WorkFlowy

- Describe
- what
- this does

## Installation: Drag one of these links to your bookmarks bar:

<!-- Special #setup editing instrucions go here -->
<a href="javascript:(function flatFlowy_2_7(hideNotes=false){if(typeof hideNotes!==&quot;boolean&quot;)hideNotes=false;function toastMsg(str,sec,err){WF.showMessage(str.bold(),err);setTimeout(()=&gt;WF.hideMessage(),(sec||2)*1e3)}const css=`.page.searching .project .name${hideNotes?&quot;,.page.searching .project .notes&quot;:&quot;&quot;}{display:none!important}.page.searching .project.matches .name.matches{display:block!important}.page.searching .selected&gt;.children&gt;.project .project{margin:0 0 4px!important}.page.searching .children{margin:0!important;padding:0!important;border:0!important}.page.searching .childrenEnd{height:0!important}`;const h=`data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;const s=document.querySelector(`link[href=&quot;${h}&quot;]`);const noSearch=WF.currentSearchQuery()===null;if(s){if(noSearch)toastMsg(`FlatFlowy: ${s.disabled?&quot;ON&quot;:&quot;OFF&quot;}`);return void(s.disabled=!s.disabled)}const a=document.createElement(&quot;link&quot;);a.rel=&quot;stylesheet&quot;;a.href=h;document.head.appendChild(a);if(noSearch)toastMsg(&quot;Flatflowy: ON&quot;)})();">FlatFlowyS</a> <i>(SHOWS notes in flat view)</i>
<br><br>
<a href="javascript:(function flatFlowy_2_7(hideNotes=true){if(typeof hideNotes!==&quot;boolean&quot;)hideNotes=false;function toastMsg(str,sec,err){WF.showMessage(str.bold(),err);setTimeout(()=&gt;WF.hideMessage(),(sec||2)*1e3)}const css=`.page.searching .project .name${hideNotes?&quot;,.page.searching .project .notes&quot;:&quot;&quot;}{display:none!important}.page.searching .project.matches .name.matches{display:block!important}.page.searching .selected&gt;.children&gt;.project .project{margin:0 0 4px!important}.page.searching .children{margin:0!important;padding:0!important;border:0!important}.page.searching .childrenEnd{height:0!important}`;const h=`data:text/css;charset=UTF-8,${encodeURIComponent(css)}`;const s=document.querySelector(`link[href=&quot;${h}&quot;]`);const noSearch=WF.currentSearchQuery()===null;if(s){if(noSearch)toastMsg(`FlatFlowy: ${s.disabled?&quot;ON&quot;:&quot;OFF&quot;}`);return void(s.disabled=!s.disabled)}const a=document.createElement(&quot;link&quot;);a.rel=&quot;stylesheet&quot;;a.href=h;document.head.appendChild(a);if(noSearch)toastMsg(&quot;Flatflowy: ON&quot;)})();">FlatFlowyH</a> <i>(HIDES notes in flat view)</i>


## Links:
- [Source code](https://github.com/rawbytz/flatflowy/blob/master/FlatFlowy.js)
- [rawbytz Blog Post](https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/)


<!-- 
LINKS REFERENCING THIS

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/

@WFBLOG https://blog.workflowy.com/2016/05/26/dr-workflowy-dissects-stress-and-anxiety/

 -->
