function dragStart(e) {
  this.style.opacity = '.4';
}

function dragEnd(e) {
  this.style.opacity = '1';
  
  $('.card').removeClass('over');
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  console.log('over');
  return false;
}

function dragEnter(e) {
  $(this).addClass('over');
  console.log('enter');
}

function dragLeave(e) {
  $(this).removeClass('over');
  console.log('leave');
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

$('section').on('dragenter', dragEnter);
$('section').on('dragleave', dragLeave);
$('section').on('dragend', dragEnd);
