function createGame(player1, group,hour, player2){
  return `
    
  <h3>${group}</h3>                             
  
  <li>  <!--1° jogo do dia-->
     
    <ol>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <h4>${player1}</h4>              
    </ol>   

    <strong>${hour}</strong> 
  
    <ol>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      <h4>${player2}</h4>
    </ol>                            
                                                            
  </li>
  `
}

let delay = -1;

function createCard(date, day, games) {
  delay = delay + 1;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2> 
      
      <ul>
        ${games}                                 
      </ul>
                  
    </div>
  `
}

document.querySelector("#cards").innerHTML = 

  createCard("20/11","domingo",
    createGame("qatar", "grupo a", "13:00", "equador")
  ) +
  
  createCard("21/11","segunda",
    createGame("senegal", "grupo a", "13:00", "holanda") +
    createGame("inglaterra", "grupo b", "10:00", "iran") +
    createGame("usa", "", "16:00", "gales")
  ) +

  createCard("22/11","terça",
    createGame("argentina", "grupo c", "07:00", "a.saudita") +
    createGame("mexico", "", "13:00", "polonia") +
    createGame("dinamarca", "grupo d", "10:00", "tunisia") +
    createGame("franca", "", "16:00", "australia")
  ) +

  createCard("23/11","quarta",
    createGame("alemanha", "grupo e", "10:00", "japao") +
    createGame("espanha", "", "13:00", "c.rica") +
    createGame("marrocos", " grupo f", "07:00", "croacia") +
    createGame("belgica", "", "16:00", "canada")
  ) +

  createCard("24/11","quinta",
    createGame("suica", "grupo g", "07:00", "camaroes") +
    createGame("brasil", "", "16:00", "servia") +
    createGame("uruguai", "grupo h", "10:00", "cr do sul") +
    createGame("portugal", "", "13:00", "gana")
  )
