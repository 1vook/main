// При старті питаємо у користувача чи хоче він читати новини. Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net.

let res = confirm("Чи хочете ви читати новини?")
if (res) {
  window.location.href = "https://www.ukr.net/"
} else {
  setTimeout(() => (window.location.href = "https://www.ukr.net/"), 20000)
}
