webpackJsonp([2],{912:function(a,e,r){"use strict";a.exports=function(a){if(a&&a.length)for(var e=0;e<a.length;e++){var r,s=a[e];switch(s.keyword){case"$ref":r="kan inte lösa referens "+s.params.ref;break;case"additionalItems":r="";var t=s.params.limit;r+="borde ha fler än "+t+" sak",1!=t&&(r+="er");break;case"additionalProperties":r="borde inte ha fler egenskaper";break;case"anyOf":r='borde matcha något schema i "anyOf"';break;case"constant":r="bör vara en konstant";break;case"contains":r="bör innehålla ett giltigt objekt";break;case"custom":r='bör passera "'+s.keyword+'" nyckelord validering';break;case"dependencies":r="";var t=s.params.depsCount;r+="borde ha egenskap",1!=t&&(r+="er"),r+=" "+s.params.deps+" när egenskap "+s.params.property+" finns tillgängligt";break;case"enum":r="borde vara ekvivalent med en av dess fördefinierade värden";break;case"format":r='borde matcha formatet "'+s.params.format+'"';break;case"formatExclusiveMaximum":case"formatExclusiveMinimum":r="formatExclusiveMaximum bör vara en boolean";break;case"formatMaximum":case"formatMinimum":r="";var n=s.params.comparison+" "+s.params.limit;r+="bör vara "+n;break;case"maximum":r="";var n=s.params.comparison+" "+s.params.limit;r+="borde vara "+n;break;case"maxItems":r="";var t=s.params.limit;r+="borde inte ha fler än "+t+" sak",1!=t&&(r+="er");break;case"maxLength":r="";var t=s.params.limit;r+="borde inte vara längre än "+t+" tecken";break;case"maxProperties":r="";var t=s.params.limit;r+="borde inte ha fler än "+t+" egenskap",1!=t&&(r+="er");break;case"minimum":r="";var n=s.params.comparison+" "+s.params.limit;r+="borde vara "+n;break;case"minItems":r="";var t=s.params.limit;r+="borde inte ha färre än "+t+" sak",1!=t&&(r+="er");break;case"minLength":r="";var t=s.params.limit;r+="borde inte vara kortare än "+t+" tecken";break;case"minProperties":r="";var t=s.params.limit;r+="borde inte ha färre än "+t+" egenskap",1!=t&&(r+="er");break;case"multipleOf":r="borde vara en multipel av "+s.params.multipleOf;break;case"not":r='borde inte vara giltigt enligt schema i "not"';break;case"oneOf":r='borde matcha exakt ett schema i "oneOf"';break;case"pattern":r='borde matcha mönstret "'+s.params.pattern+'"';break;case"patternGroups":r="";var t=s.params.limit;r+="bör ha "+s.params.reason+" "+t+" egenskap",1!=t&&(r+="er"),r+=' som matchar mönstret "'+s.params.pattern+'"';break;case"patternRequired":r='bör ha en egenskap som matchar mönstret "'+s.params.missingPattern+'"';break;case"required":r="borde ha den nödvändiga egenskapen "+s.params.missingProperty;break;case"switch":r='bör passera "switch" nyckelord validering, fallet '+s.params.caseIndex+" misslyckas";break;case"type":r="borde vara "+s.params.type;break;case"uniqueItems":r="borde inte ha duplicerade saker (sakerna ## "+s.params.j+" och "+s.params.i+" är identiska)";break;default:continue}s.message=r}}}});