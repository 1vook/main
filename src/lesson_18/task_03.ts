const birthYear = document.getElementById("birthYear") as HTMLInputElement
const ageResult = document.getElementById("ageResult") as HTMLInputElement

document.getElementById("calcAgeBtn")?.addEventListener("click", () => {
  const currentYear = new Date().getFullYear()

  ageResult.value = String(currentYear - Number(birthYear.value))
})
