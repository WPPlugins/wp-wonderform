webpackJsonp([5],{397:function(e,a,i){"use strict";e.exports=function(e){if(e&&e.length)for(var a=0;a<e.length;a++){var i,n=e[a];switch(n.keyword){case"$ref":i="nie można znaleść schematu "+n.params.ref;break;case"additionalItems":i="";var r=n.params.limit;i+="nie powinien mieć więcej niż "+r+" element",i+=1==r?"u":"ów";break;case"additionalProperties":i="nie powinien zawierać dodatkowych pól";break;case"anyOf":i='powinien pasować do wzoru z sekcji "anyOf"';break;case"constant":i="powinien być równy stałej";break;case"contains":i="should contain a valid item";break;case"custom":i='powinien przejść walidację "'+n.keyword+'"';break;case"dependencies":i="";var r=n.params.depsCount;i+="powinien zawierać pol",i+=1==r?"e":"a",i+=" "+n.params.deps+" kiedy pole "+n.params.property+" jest obecne";break;case"enum":i="powinien być równy jednej z predefiniowanych wartości";break;case"format":i='powinien zgadzać się z formatem "'+n.params.format+'"';break;case"formatExclusiveMaximum":i="formatExclusiveMaximum powinien być boolean";break;case"formatExclusiveMinimum":i="formatExclusiveMinimum powinień być boolean";break;case"formatMaximum":case"formatMinimum":case"maximum":i="";var s=n.params.comparison+" "+n.params.limit;i+="powinien być "+s;break;case"maxItems":i="";var r=n.params.limit;i+="nie powinien mieć więcej niż "+r+" element",i+=1==r?"u":"ów";break;case"maxLength":i="";var r=n.params.limit;i+="nie powinien być dłuższy niż "+r+" znak",1!=r&&(i+="ów");break;case"maxProperties":i="";var r=n.params.limit;i+="nie powinien zawierać więcej niż "+r+" ",i+=1==r?"pole":"pól";break;case"minimum":i="";var s=n.params.comparison+" "+n.params.limit;i+="powinien być "+s;break;case"minItems":i="";var r=n.params.limit;i+="nie powinien mieć mniej niż "+r+" element",i+=1==r?"u":"ów";break;case"minLength":i="";var r=n.params.limit;i+="nie powinien być krótszy niż "+r+" znak",1!=r&&(i+="ów");break;case"minProperties":i="";var r=n.params.limit;i+="nie powinien zawierać mniej niż "+r+" ",i+=1==r?"pole":"pól";break;case"multipleOf":i="powinien być wielokrotnością "+n.params.multipleOf;break;case"not":i='nie powinien pasować do wzoru z sekcji "not"';break;case"oneOf":i='powinien pasować do jednego wzoru z sekcji "oneOf"';break;case"pattern":i='powinien zgadzać się ze wzorem "'+n.params.pattern+'"';break;case"patternGroups":i="";var r=n.params.limit;i+="powinien mieć "+n.params.reason+" "+r+" pol",i+=1==r?"e":"a",i+=' pasujące do wzorca "'+n.params.pattern+'"';break;case"patternRequired":i='powinien mieć pole pasujące do wzorca "'+n.params.missingPattern+'"';break;case"required":i="powinien zawierać wymagane pole "+n.params.missingProperty;break;case"switch":i='powinien przejść walidacje pola "switch", przypadek '+n.params.caseIndex+" zawiódł";break;case"type":i="powinien być "+n.params.type;break;case"uniqueItems":i="nie powinien zawierać elementów które się powtarzają (elementy "+n.params.j+" i "+n.params.i+" są identyczne)";break;default:continue}n.message=i}}}});