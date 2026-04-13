function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    let sum = a + b;
    let difference = a - b;
    let product = a * b;

    document.getElementById("result").innerHTML =
        "Sum: " + sum + "<br>" +
        "Difference: " + difference + "<br>" +
        "Product: " + product;
}