const USD_RATE = 41
const EUR_RATE = 48

const uah = document.getElementById("uah") as HTMLInputElement
const eur = document.getElementById("eur") as HTMLInputElement
const usd = document.getElementById("usd") as HTMLInputElement

document.getElementById("convertBtn")?.addEventListener("click", () => {
  const amount = Number(uah.value)

  usd.value = (amount / USD_RATE).toFixed(2)
  eur.value = (amount / EUR_RATE).toFixed(2)
})
