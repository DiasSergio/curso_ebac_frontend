const form = document.getElementById(`formNumbers`);

console.log(form)

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    validateNumberB();

})

function validateNumberB() {
    const numberA = document.getElementById(`numberA`);
    const numberB = document.getElementById(`numberB`);

    numberB.value > numberA.value ? alert("Your form is valid.")
        : alert("Number B should be bigger than number A")

    numberA.value = null;
    numberB.value = null;
};
