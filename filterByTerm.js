"use strict";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm 不能为空");
    if (!input.length)
        throw Error("input 不能为空");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
filterByTerm([{ url: "string1" }, { url: "string2" }, { url: "string3" }], "java");
