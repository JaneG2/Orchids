<!--
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function P7_ShowPic(a,b) { //v2.0 by PVII
 var g,gg,d,dd,ic,im;if((g=MM_findObj(b))!=null){
 if(!document.P7ShowPic){document.P7ShowPic=true;}else{
 if((d=MM_findObj(document.P7SPlay))!=null){
  dd=(document.layers)?d:d.style;dd.visibility="hidden";}}
 document.P7SPlay=b;gg=(document.layers)?g:g.style;im=b+"im";
 if((ic=MM_findObj(im))!=null){ic.src=a;gg.visibility="visible";}}
}
//-->