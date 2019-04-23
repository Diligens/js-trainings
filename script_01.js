let app = (function(){
  let name = "IIFE and Closures";
  let status = "In progress";

  let getName = function() {
    return name;
  };
  let getStatus = function() {
    return status;
  };

  return {
    getName: getName,
    getStatus: getStatus
  };
})();

console.log("============ SCRIPT 01 LOGS START ============");

console.log(app.getName());
console.log(app.getStatus());