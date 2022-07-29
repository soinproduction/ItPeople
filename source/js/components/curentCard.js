const cardParrents = [...document.querySelectorAll('.mini-card')];

for (const cardParrent of cardParrents) {
  // const cardButton = cardParrent.querySelector('[data-mini]');
  const bigCards = [...document.querySelectorAll('[data-big]')];
  const listParrent = document.querySelector('.index-second__mini');

  function cardButtonHendler(){
    let curentDataId = this.getAttribute('data-mini');
    let bigCurrentCard = document.querySelector(`[data-big='${curentDataId}']`);

    bigCurrentCard.classList.add('show');
    listParrent.classList.add('active');
  }

  cardParrent.addEventListener('click', cardButtonHendler);

  bigCards.map((bigCard) => {
    bigCard.querySelector('.big-card__hide').addEventListener('click', function(){
      bigCard.classList.remove('show');
      listParrent.classList.remove('active');
    })
  });
}
