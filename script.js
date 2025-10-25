
document.addEventListener("DOMContentLoaded", () => {


    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark_mode");
        document.body.classList.toggle("light_mode");
    });

    
    const tempBtn = document.getElementById("temp");
    const currBtn = document.getElementById("curr");
    const tempPanel = document.getElementById("temp_panel");
    const currPanel = document.getElementById("curr_panel");

    tempBtn.addEventListener("click", () => {
        tempPanel.style.display = "block";
        currPanel.style.display = "none";
        tempBtn.classList.add("active");
        currBtn.classList.remove("active");
    });

    currBtn.addEventListener("click", () => {
        currPanel.style.display = "block";
        tempPanel.style.display = "none";
        currBtn.classList.add("active");
        tempBtn.classList.remove("active");
    });

    
    const tempConBtn = document.getElementById("temp_con");
    const tempResetBtn = document.getElementById("temp_reset");
    const tempInput = document.getElementById("temp_input");
    const fromTemp = document.getElementById("from_temp");
    const toTemp = document.getElementById("to_temp");
    const tempResult = document.getElementById("temp_result");

    tempConBtn.addEventListener("click", () => {
        let value = parseFloat(tempInput.value);
        if (isNaN(value)) {
            tempResult.textContent = "Please enter a valid number!";
            return;
        }

        let from = fromTemp.value;
        let to = toTemp.value;
        let result;

        if (from === to) result = value;
        else if (from === "celsius" && to === "fahrenheit") result = value * 9/5 + 32;
        else if (from === "celsius" && to === "kelvin") result = value + 273.15;
        else if (from === "fahrenheit" && to === "celsius") result = (value - 32) * 5/9;
        else if (from === "fahrenheit" && to === "kelvin") result = (value - 32) * 5/9 + 273.15;
        else if (from === "kelvin" && to === "celsius") result = value - 273.15;
        else if (from === "kelvin" && to === "fahrenheit") result = (value - 273.15) * 9/5 + 32;

        tempResult.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    });

    tempResetBtn.addEventListener("click", () => {
        tempInput.value = "";
        tempResult.textContent = "";
        fromTemp.selectedIndex = 0;
        toTemp.selectedIndex = 0;
    });

    
    const currConBtn = document.getElementById("curr_con");
    const currResetBtn = document.getElementById("curr_reset");
    const currInput = document.getElementById("curr_input");
    const fromCurr = document.getElementById("from_curr");
    const toCurr = document.getElementById("to_curr");
    const currResult = document.getElementById("curr_result");

    const rates = {
        usd: { usd: 1, inr: 83, eur: 0.92 },
        inr: { usd: 0.012, inr: 1, eur: 0.011 },
        eur: { usd: 1.09, inr: 90, eur: 1 }
    };

    currConBtn.addEventListener("click", () => {
        let value = parseFloat(currInput.value);
        if (isNaN(value)) {
            currResult.textContent = "Please enter a valid amount!";
            return;
        }

        let from = fromCurr.value;
        let to = toCurr.value;
        let result = value * rates[from][to];

        currResult.textContent = `${value} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`;
    });

    currResetBtn.addEventListener("click", () => {
        currInput.value = "";
        currResult.textContent = "";
        fromCurr.selectedIndex = 0;
        toCurr.selectedIndex = 0;
    });

}); 
