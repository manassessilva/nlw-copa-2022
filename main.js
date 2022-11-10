function createGame(player1, group,hour, player2) {
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
  createCard(
    "20/11",
    "domingo",
    createGame("qatar", "grupo a", "13:00", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "grupo a", "13:00", "holanda") +
      createGame("inglaterra", "grupo b", "10:00", "iran") +
      createGame("usa", "", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "grupo c", "07:00", "arb saudita") +
      createGame("mexico", "", "13:00", "polonia") +
      createGame("dinamarca", "grupo d", "10:00", "tunisia") +
      createGame("franca", "", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("alemanha", "grupo e", "10:00", "japao") +
      createGame("espanha", "", "13:00", "cst rica") +
      createGame("marrocos", " grupo f", "07:00", "croacia") +
      createGame("belgica", "", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "grupo g", "07:00", "camaroes") +
      createGame("brasil", "", "16:00", "servia") +
      createGame("uruguai", "grupo h", "10:00", "cr do sul") +
      createGame("portugal", "", "13:00", "gana")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("qatar", "gupo a", "10:00", "senegal") +
      createGame("holanda", "", "13:00", "equador") +
      createGame("gales", "grupo b", "07:00", "iran") +
      createGame("inglaterra", "", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("polonia", "grupo c", "10:00", "arb saudita") +
      createGame("argentina", "", "16:00", "mexico") +
      createGame("tunisia", "grupo d", "07:00", "australia") +
      createGame("franca", "", "13:00", "dinamarca")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "grupo e", "07:00", "cst rica") +
      createGame("espanha", "", "16:00", "alemanha") +
      createGame("belgica", "grupo f", "10:00", "marrocos") +
      createGame("croacia", "", "13:00", "canada")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "grupo g", "07:00", "servia") +
      createGame("brasil", "", "13:00", "suica") +
      createGame("cr do sul", "grupo h", "10:00", "gana") +
      createGame("portugal", "", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terca",
    createGame("equador", "grupo a", "12:00", "senegal") +
      createGame("holanda", "", "12:00", "qatar") +
      createGame("iran", "grupo b", "16:00", "usa") +
      createGame("gales", "", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("polonia", "grupo c", "16:00", "argentina") +
      createGame("arb saudita", "", "16:00", "mexico") +
      createGame("tunisia", "grupo d", "12:00", "franca") +
      createGame("australia", "", "12:00", "dinamarca")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("japao", "grupo e", "16:00", "espanha") +
      createGame("cst rica", "", "16:00", "alemanha") +
      createGame("croacia", "grupo f", "12:00", "belgica") +
      createGame("canada", "", "12:00", "marrocos")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("servia", "grupo g", "16:00", "suica") +
      createGame("camaroes", "", "16:00", "brasil") +
      createGame("cr do sul", "grupo h", "12:00", "portugal") +
      createGame("gana", "", "12:00", "uruguai")
  )
  
