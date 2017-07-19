webpackJsonp([6],{396:function(a,e,r){"use strict";a.exports=function(a){if(a&&a.length)for(var e=0;e<a.length;e++){var r,s=a[e];switch(s.keyword){case"$ref":r=s.params.ref+"のスキーマを見つけることができない";break;case"additionalItems":r="";var m=s.params.limit;r+="は"+m+"以上あってはいけない";break;case"additionalProperties":r="追加してはいけない";break;case"anyOf":r='"anyOf"のスキーマとマッチしなくてはいけない';break;case"constant":r="should be equal to constant";break;case"contains":r="should contain a valid item";break;case"custom":r='should pass "'+s.keyword+'" keyword validation';break;case"dependencies":r=s.params.property+"がある場合、";var m=s.params.depsCount;r+="は"+s.params.deps+"をつけなければいけない";break;case"enum":r="事前に定義された値のいずれかに等しくなければいけない";break;case"format":r='"'+s.params.format+'"形式に揃えなければいけない';break;case"formatExclusiveMaximum":r="formatExclusiveMaximum should be boolean";break;case"formatExclusiveMinimum":r="formatExclusiveMinimum should be boolean";break;case"formatMaximum":case"formatMinimum":r="";var i=s.params.comparison+" "+s.params.limit;r+="should be "+i;break;case"maximum":r="";var i=s.params.comparison+" "+s.params.limit;r+=i+"でなければいけない";break;case"maxItems":r="";var m=s.params.limit;r+="は"+m+"個以上であってはいけない";break;case"maxLength":r="";var m=s.params.limit;r+="は"+m+"文字以上であってはいけない";break;case"maxProperties":r="";var m=s.params.limit;r+="は"+m+"個以上のプロパティを有してはいけない";break;case"minimum":r="";var i=s.params.comparison+" "+s.params.limit;r+=i+"でなければいけない";break;case"minItems":r="";var m=s.params.limit;r+="は"+m+"個以下であってはいけない";break;case"minLength":r="";var m=s.params.limit;r+="は"+m+"文字以下であってはいけない";break;case"minProperties":r="";var m=s.params.limit;r+="は"+m+"個以下のプロパティを有してはいけない";break;case"multipleOf":r=s.params.multipleOf+"の倍数でなければいけない";break;case"not":r='"not"のスキーマに従って有効としてはいけない';break;case"oneOf":r='"oneOf"のスキーマと完全に一致しなくてはいけない';break;case"pattern":r='"'+s.params.pattern+'"のパターンと一致しなければいけない';break;case"patternGroups":r="";var m=s.params.limit;r+="should have "+s.params.reason+" "+m+" propert",r+=1==m?"y":"ies",r+=' matching pattern "'+s.params.pattern+'"';break;case"patternRequired":r='should have property matching pattern "'+s.params.missingPattern+'"';break;case"required":r="必要なプロパティ"+s.params.missingProperty+"がなければいけない";break;case"switch":r='should pass "switch" keyword validation, case '+s.params.caseIndex+" fails";break;case"type":r=s.params.type+"でなければいけない";break;case"uniqueItems":r="重複するアイテムがあってはいけない（"+s.params.j+"と"+s.params.i+"は同じである）";break;default:continue}s.message=r}}}});