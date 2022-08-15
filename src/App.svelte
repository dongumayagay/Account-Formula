<script>
    let formulas = [];

    function addFormula(
        equation = "Break-Even_Point = Fixed_costs / ( Sales_per_unit_cost - Fixed_cost_per_unit )"
    ) {
        const expression = equation.split("=")[1].trim();
        let params = expression.split(/[\+\-\*\/\(\)]/);
        params = params
            .filter((item) => item.trim())
            .map((item) => item.trim());

        formulas.push({
            equation,
            solve: new Function(...params, `return ${expression}`),
        });
    }

    addFormula("sum = a + b");
    console.log(formulas);
    console.log(formulas[0].solve(1, 1));
</script>
