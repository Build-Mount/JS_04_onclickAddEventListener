document.getElementById("btn").addEventListener("click", btnClick);
document.getElementById("btn").addEventListener("click", btnClick2);
function btnClick() {
    document.getElementById("output").textContent = "addEventListener";
    document.getElementById("output3").textContent = "addEventListener";
};

function btnClick2() {
    document.getElementById("output4").textContent = "addEventListener2つ目";
};

function btnOnClick() {
    document.getElementById("output").textContent = "onclick";
    document.getElementById("output2").textContent = "onclick";
};