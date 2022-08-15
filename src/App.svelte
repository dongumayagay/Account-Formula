<script>
    let globalObject = {};
    let nameFn = "MyNewFunction";

    const createFn = function (object, functionName, Body) {
        object[functionName] = new Function(Body);
    };

    createFn(globalObject, nameFn, "return (arguments[0] + arguments[1])/2");
    createFn(globalObject, "sum", "return (arguments[0]+arguments[1])");
    console.log(globalObject[nameFn](10, 20));
    console.log(globalObject["sum"](10, 20));
</script>
