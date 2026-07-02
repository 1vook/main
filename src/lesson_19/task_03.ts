const button = document.querySelector("button")
const lists = document.querySelectorAll("ol")

button?.addEventListener("click", () => {
  lists.forEach((list) => {
    if (list.children.length % 2 === 0) {
      list.style.color = "green"
    } else {
      list.style.color = "red"
    }
  })
})
