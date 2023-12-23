
let btn = $('button');
let ratingInputs = $('input[name="rating"]');
let activeState = $('.first-container');
let thankState = $('.second-container');
thankState.css('display', 'none');


btn.click(function (e) { 
    e.preventDefault();

    let checkedRating = Array.from(ratingInputs).find((input) => input.checked);
    let selectedRating = checkedRating.value;
    let ratingNumber = $('#ratingNumber');

    if (checkedRating) {
        activeState.css('display', 'none');
        thankState.css('display', 'grid');

        ratingNumber.text(`You selected ${selectedRating} out of 5`);
    }
});
