function mountCards(params) {
    let parent = document.querySelector(".mainContainer")
    fetch('./data.json').then(Response => Response.json())
        .then(data => {
            data.map(card => {
                let singleCard = document.createElement('div')
                singleCard.innerHTML =
                    `<div class="card" style="background-color: ${card.background};">
                    <small><img src=${card.icon} alt=""></small>
                    
                    <div class="details">
                        <div class="above">
                            <h5>${card.title}</h5>
                            <i class="fas fa-ellipsis-h"></i>

                        </div>
                        <div class="hours">
                            <h3>${card.weekly.current}</h3>
                            <small>Last week - ${card.weekly.previous}</small>
                        </div>
                    </div>
                </div>`
                parent.appendChild(singleCard)

            })
        })
        .catch(err => console.log(err.message))


}

mountCards()