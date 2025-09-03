function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a imagem
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")

  // Substituição da imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adciona aimagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute("alt", "Foto de Roberto Ligth")
  } else {
    // se não tiver ligth mode, mantem a imagem
    img.setAttribute("src", "./assets/avatar.png")
    alt.setAttribute("alt", "Foto de Roberto Dark")
  }
}
