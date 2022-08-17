export default function createFormula(equation = "") {
    console.log("test");
    const operators = "+-*/()".split("");

    const result = equation.split("=")[0].trim();

    // parse expression
    const expression_unparse = equation.split("=")[1].trim();
    const expressionArray = expression_unparse
        .split(/([+-/*()])/) // between operators (i don't understand regex i just google it)
        .filter((item) => item.trim()) // remove space at the start and end
        .map((item) => item.trim().replaceAll(" ", "_")); // replace space between then it can be a function paramater

    // filter operators from expression
    const function_params = expressionArray.filter(
        (item) => !operators.includes(item)
    );

    const function_body = expressionArray.join(" ");

    // replace all underscore back to space for showing it for placeholder
    const params_placeholder = function_params.map((item) =>
        item.replaceAll("_", " ")
    );

    // create function base to solve the formula
    const solve = new Function(...function_params, `return ${function_body}`);

    const formula = {
        equation,
        result,
        params_placeholder,
        solve,
    };

    return formula;
}
