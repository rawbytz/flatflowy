# FlatFlowy Bookmarklet for WorkFlowy

- Flattens WorkFlowy search results, removing all non-matching ancestors.
- Works as a toggle. Activate a 2nd time to turn off "Flat" mode.
- Works with the following searches: tags, text and meta-searches (ex: changed:1d, dates).
- Removes WorkFlowy's search background highlighting.
- **Important!** Don’t move, drag or multi-edit items while viewing a flat list. Since some content is hidden, you could get unexpected results.
- You can complete items and make edits to visible text while in flat mode.
- Hover over flat entries to see toolip of breadcrumbs.
- Note: Hover tooltips get erased when you navigate away. Toggle FlatFlowy OFF/ON to rewrite the tool tips. 
- Due to WorkFlowy's sequential loading you may need to scroll down to force some items to load when your list is long.
- Board content does not play nice with FlatFlowy. 

![FlatFlowy](https://i.imgur.com/VGNHtcj.gif)

## Installation: Drag the link below to your bookmarks bar:

<!-- Special #setup editing instrucions go here -->
<a href="javascript:(function flatFlowy_3_2(){function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}function getNameForBreadcrumb(item){const plainName=item.getNameInPlainText().trim();var replaceName=&quot;Untitled&quot;;if(plainName.length===0&amp;&amp;item.data.metadata.s3File&amp;&amp;item.data.metadata.s3File.fileName)replaceName=item.data.metadata.s3File.fileName;return plainName.length===0?replaceName:plainName}function getBreadcrumbsAsString(item){const ancestors=item.getAncestors().reverse();return ancestors.length&gt;1?ancestors.splice(1).map(ancestor=&gt;getNameForBreadcrumb(ancestor)).join(&quot; &gt; &quot;):&quot;Home&quot;}function addBreadcrumbsToMatches(){const matches=document.querySelectorAll('.project.matches,.project.metaMatches');matches.forEach(match=&gt;{const pID=match.getAttribute(&quot;projectid&quot;);const item=WF.getItemById(pID);match.firstChild.title=getBreadcrumbsAsString(item)})}const css=`.page.searching .project&gt;.name,.page.searching .project&gt;.notes{height:0;opacity:0}.page.searching .project.matches .name.matches,.page.searching .project.matches.noted .name,.page.searching .project.metaMatches .name{height:100%;opacity:1}.page.searching .children{margin:0;padding:0;border:0}.page.searching .addSiblingButton,.page.searching .expand{display:none}.done .fullMatch .content .contentMatch,.fullMatch .content .contentMatch,.project.metaMatches&gt;.name.with-updates.annotationAdded&gt;.content&gt;.innerContentContainer,.project.metaMatches&gt;.name&gt;.content&gt;.innerContentContainer{background-color:transparent}`;const ID=&quot;FlatFlowy&quot;;const ff=document.getElementById(ID);const NO_SEARCH=WF.currentSearchQuery()===null;if(ff){NO_SEARCH?toastMsg(`FlatFlowy: ${ff.disabled?&quot;ON&quot;:&quot;OFF&quot;}`):addBreadcrumbsToMatches();return void(ff.disabled=!ff.disabled)}const s=document.createElement('style');s.innerText=css;s.id=ID;document.head.appendChild(s);NO_SEARCH?toastMsg(&quot;Flatflowy: ON&quot;):addBreadcrumbsToMatches()})();">FlatFlowy</a>

## Links:
- [Source code](https://github.com/rawbytz/flatflowy/blob/master/FlatFlowy.js)
- [rawbytz Blog Post](https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/)

## Version Notes
- 2023-09-02: v3.2 Made zoom (via bullet or keyboard shortcut) reliable. Removed match highlighting. Added breadcrumbs on hover.
- 2023-08-31: v3.1 Fix for todo alignment

<!-- 
LINKS REFERENCING THIS

@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG Redirects https://rawbytz.wordpress.com/2015/12/16/flat-workflowy-lists/

@WFBLOG NOT YET https://blog.workflowy.com/2016/05/26/dr-workflowy-dissects-stress-and-anxiety/

 -->
