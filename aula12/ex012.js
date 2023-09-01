//var hora = 1

var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

// if (hora > 6 && hora < 12) {
//   console.log('Bom dia!')
// } else if (hora >= 12 && hora <= 18) {
//   console.log('É horário da tarde!')
// } else (
//   console.log('É horário da noite!')
// )

if (hora < 5) {
  console.log('Boa madrugada!')
} else if ( hora <= 11) {
  console.log('Bom dia!')
} else if (hora <= 18) {
  console.log('Boa tarde!')
} else if (hora <= 22) {
  console.log('Boa noite!')
}