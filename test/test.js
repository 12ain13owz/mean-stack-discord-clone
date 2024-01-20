const a = "/api/v1/signin/1/2";

const b = a.split("/").slice(3).join("/");
console.log(b);
