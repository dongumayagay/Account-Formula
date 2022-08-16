<script>
    let formulas = [];

    function addFormula(formulas, equation = "") {
        const operators = "+-*/()".split("");

        const result = equation.split("=")[0].trim();
        // parse expression
        const expression_unparse = equation.split("=")[1].trim();
        const expressionArray = expression_unparse
            .split(/([+-/*()])/)
            .filter((item) => item.trim())
            .map((item) => item.trim().replaceAll(" ", "_"));

        const function_params = expressionArray.filter(
            (item) => !operators.includes(item)
        );
        const function_body = expressionArray.join(" ");
        const params_placeholder = function_params.map((item) =>
            item.replaceAll("_", " ")
        );
        const solve = new Function(
            ...function_params,
            `return ${function_body}`
        );

        const formula = {
            equation,
            result,
            params_placeholder,
            solve,
        };

        formulas.push(formula);
    }

    // addFormula(
    //     formulas,
    //     "Break-Even Point = Fixed costs / ( Sales per unitcost - Fixed cost per unit )"
    // );

    // console.log(formulas[0].solve(10, 7, 5));
    console.log(formulas);
</script>
