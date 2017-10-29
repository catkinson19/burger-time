$("#burgerFormInput").change(() => {
    if ($("#burgerFormInput").val() !== '') {
        $("#burgerFormSubmit").prop('disabled', false);
    }
});

$("#burgerFormSubmit").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
        name: $("#burgerFormInput").val().trim(),
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            location.reload();
        }
        );
});

$(".eatBurger").on("click", function (event) {
    event.preventDefault();
    console.log('hey');

    let currentBurger = $(".eatBurger").attr('id')

    console.log(currentBurger);

    // Send the PUT request.
    $.ajax(`/api/burger/${currentBurger}`, {
        type: "PUT",
        data: "TRUE"
    }).then(
        function () {
            console.log("updated burger");
            location.reload();
        }
        );
});