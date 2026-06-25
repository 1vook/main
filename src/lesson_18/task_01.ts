const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement
const result = document.getElementById("result") as HTMLInputElement

document.getElementById("addBtn")?.addEventListener("click", () => {
  result.value = String(Number(num1.value) + Number(num2.value))
})

document.getElementById("subBtn")?.addEventListener("click", () => {
  result.value = String(Number(num1.value) - Number(num2.value))
})

document.getElementById("mulBtn")?.addEventListener("click", () => {
  result.value = String(Number(num1.value) * Number(num2.value))
})

document.getElementById("divBtn")?.addEventListener("click", () => {
  result.value = String(Number(num1.value) / Number(num2.value))
})
