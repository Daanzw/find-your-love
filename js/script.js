$(document).ready(function(){var e=($(window).width()-200)/2;$("#bgheart").css("margin-left",e)}),$(window).resize(function(){var e=($(window).width()-200)/2;$("#bgheart").css("margin-left",e)}),$("#replace").click(function(){var e=$("#name1").val(),n=$("#name2").val();$("#name1").val(n),$("#name2").val(e)}),$("#sub").click(function(){$("#sub").prop("disabled",!0);var e=$("#name1").val(),n=$("#name2").val(),a=[],l=e.replace(" ","").toLowerCase(),r=n.replace(" ","").toLowerCase(),o=l+"love"+r,t=0,s=[],u=[],h=o.split("");console.log(h);for(var i=0;h.length>i;i++){for(var g=!0,t=0,c=0;s.length>c;c++)h[i]==s[c]&&(g=!1);if(0!=g){for(var v=i;h.length>v;v++)h[i]==h[v]&&t++;s.push(h[i]),0!=t&&a.push(t)}}for(console.log(a);a.length>2||10==a[1]&&2==a.length;){u=[],console.log("num:"),console.log(a);for(var m=0,f=0;Math.round(a.length/2)>f;f++)if(f==Math.round(a.length/2)-1&&0!=a.length%2)u.push(a[f]+m);else{var p=a[f]+a[a.length-f-1]+m;m=0,p>9&&(p-=10,m=1),u.push(p)}a=u,console.log(u)}console.log(a);var w=""+a[0]+(""+a[1]);console.log(w);var i=0;timer=setInterval(function(){i++,$("#ulove").text(i+"%"),i==w&&(clearInterval(timer),$("#sub").prop("disabled",!1))},90)});