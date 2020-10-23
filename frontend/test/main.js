function addCard() {
    var card = `<div class="card">
    <p class="bold">Name</p>
    <p>Text</p>
    `;
    $(card).insertBefore(this);
}

$('button').on('click', addCard);