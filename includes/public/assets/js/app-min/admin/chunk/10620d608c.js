webpackJsonp([10],{904:function(e,a,r){"use strict";e.exports=function(e){if(e&&e.length)for(var a=0;a<e.length;a++){var r,s=e[a];switch(s.keyword){case"$ref":r="no se puede resolver la referencia "+s.params.ref;break;case"additionalItems":r="";var n=s.params.limit;r+="no debe tener más de "+n+" elemento",1!=n&&(r+="s");break;case"additionalProperties":r="no debe tener propiedades adicionales";break;case"anyOf":r='debe coincidir con algún esquema en "anyOf"';break;case"constant":r="debe ser igual a la constante";break;case"contains":r="should contain a valid item";break;case"custom":r='debe pasar la validación de palabra clave "'+s.keyword+'"';break;case"dependencies":r="";var n=s.params.depsCount;r+="debe contener la",1!=n&&(r+="s"),r+=" propiedad",1!=n&&(r+="es"),r+=" "+s.params.deps+" cuando la propiedad "+s.params.property+" se encuentra presente";break;case"enum":r="deber ser igual a uno de los valores predefinidos";break;case"format":r='debe coincidir con el formato "'+s.params.format+'"';break;case"formatExclusiveMaximum":r="formatExclusiveMaximum debe ser booleano";break;case"formatExclusiveMinimum":r="formatExclusiveMinimum debe ser booleano";break;case"formatMaximum":case"formatMinimum":case"maximum":r="";var i=s.params.comparison+" "+s.params.limit;r+="debe ser "+i;break;case"maxItems":r="";var n=s.params.limit;r+="no debe contener más de "+n+" elemento",1!=n&&(r+="s");break;case"maxLength":r="";var n=s.params.limit;r+="no debe contener más de "+n+" caracter",1!=n&&(r+="es");break;case"maxProperties":r="";var n=s.params.limit;r+="no debe contener más de "+n+" propiedad",1!=n&&(r+="es");break;case"minimum":r="";var i=s.params.comparison+" "+s.params.limit;r+="debe ser "+i;break;case"minItems":r="";var n=s.params.limit;r+="no debe contener menos de "+n+" elemento",1!=n&&(r+="s");break;case"minLength":r="";var n=s.params.limit;r+="no debe contener menos de "+n+" caracter",1!=n&&(r+="es");break;case"minProperties":r="";var n=s.params.limit;r+="no debe contener menos de "+n+" propiedad",1!=n&&(r+="es");break;case"multipleOf":r="debe ser múltiplo de "+s.params.multipleOf;break;case"not":r='no debe ser válido según el esquema en "not"';break;case"oneOf":r='debe coincidir con un solo esquema en "oneOf"';break;case"pattern":r='debe coincidir con el patron "'+s.params.pattern+'"';break;case"patternGroups":r="";var n=s.params.limit;r+="debe tener "+s.params.reason+" "+n+" propiedad",1!=n&&(r+="es"),r+=" coincidente",1!=n&&(r+="s"),r+=' con el patrón "'+s.params.pattern+'"';break;case"patternRequired":r='la propiedad debe coincidir con el patrón "'+s.params.missingPattern+'"';break;case"required":r="debe tener la propiedad requerida "+s.params.missingProperty;break;case"switch":r='debe pasar la validación "switch" de palabra clave, el caso '+s.params.caseIndex+" falló";break;case"type":r="debe ser "+s.params.type;break;case"uniqueItems":r="no debe contener elementos duplicados, (los elementos ## "+s.params.j+" y "+s.params.i+" son idénticos)";break;default:continue}s.message=r}}}});