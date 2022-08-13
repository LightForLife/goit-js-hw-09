new Promise(((o,l)=>{const e=Math.random()>.5;setTimeout((()=>{e&&o("(Промис успешный, результат fulfilled)"),l("(Промис с ошибкой rejected)")}),1500)})).then((o=>(console.log(o),5))).then((o=>(console.log(o),10))).then((o=>{console.log(o)})).catch((o=>console.log(o))).finally((()=>console.log("All result")));
//# sourceMappingURL=03-promises.5be8d865.js.map
