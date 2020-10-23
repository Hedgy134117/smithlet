function dragStart() {
  this.style.opacity = '.4';
}

function dragEnd() {
  this.style.opacity = '1';
}

function addCard() {
    var card = `<div class="card" draggable="true">
    <p class="bold">Name</p>
    <p>Text</p>
    `;
    card = $(card);
    $(card).on('dragstart', dragStart);
    $(card).on('dragend', dragEnd);
    $(card).insertBefore(this);
}

$('button').on('click', addCard);
$('.card').on('dragstart', dragStart);
$('.card').on('dragend', dragEnd);
