document.getElementById("calculate").addEventListener("click", async function () {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    if (!num1 || !num2) {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    const response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            num1: parseFloat(num1),
            num2: parseFloat(num2),
            operation: operation,
        }),
    });

    const data = await response.json();

    if (data.error) {
        document.getElementById("result").innerText = data.error;
    } else {
        document.getElementById("result").innerText = `Result: ${data.result}`;
    }
});
