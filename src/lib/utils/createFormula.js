export default function createFormula(equation = "") {
    const operators = "+-*/()".split("");

    const result = equation.split("=")[0].trim();

    // parse expression
    const expression_unparse = equation.split("=")[1].trim();
    const expressionArray = expression_unparse
        .split(/([+-/*()])/) // split between operators (i don't understand regex i just google it)
        .filter((item) => item.trim())
        .map((item) => item.trim()); // remove space at the start and end
    const expressionArrayVariables = expressionArray.map((item) =>
        item.replaceAll(" ", "_")
    ); // replace space between then it can be a function paramater

    // format equation
    const parse_equation = [result.trim(), "=", ...expressionArray].join(" ");

    // filter operators from expression
    const function_params = expressionArrayVariables.filter(
        (item) => !operators.includes(item)
    );

    const function_body = expressionArrayVariables.join(" ");

    // replace all underscore back to space for showing it for placeholder
    const params_placeholder = function_params.map((item) =>
        item.replaceAll("_", " ")
    );

    // create function base to solve the formula
    const solve = new Function(...function_params, `return ${function_body}`);

    const formula = {
        equation: parse_equation,
        result,
        expressionArray,
        params_placeholder,
        solve,
    };

    console.log("formula created", formula);
    return formula;
}
