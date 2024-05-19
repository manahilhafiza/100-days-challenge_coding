var personName = ("Talha");
console.log("toLowerCase:", personName.toLowerCase());
console.log("toUpperCase:", personName.toLocaleUpperCase());
console.log("titleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
