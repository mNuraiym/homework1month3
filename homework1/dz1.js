
const emailInput = document.querySelector(".emailInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");
const emailRegExp = /^([a-z0-9_\-\.\!\#\$\%\^\&\*()\+\=])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/


emailCheck.addEventListener("click",() => {
    if (emailRegExp.test(emailInput.value)) {
        emailResult.innerText = "ok";
        emailResult.style.color = "green";
    } else {
        emailResult.innerText = "not ok";
        emailResult.style.color = "red";
    }
})


let position = 0;

function blockmovement() {
    position +=18;
    if (position > 260) return;
    document.querySelector('.small').style.left = position + 'px';
    animation();
}
function animation() {
    setTimeout(blockmovement, 100);
}
animation();
