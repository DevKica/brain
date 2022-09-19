;(() => {
  const arrowWrappers = document.getElementsByClassName("a-wrapper")
  const titles = document.getElementsByClassName("title")

  for (const el of arrowWrappers) {
    el.addEventListener("click", () => {
      const arrow = el.getElementsByClassName("arrow")[0]
      if (arrow.classList.contains("down")) {
        arrow.classList.remove("down")
      } else {
        arrow.classList.add("down")
      }
    })
  }

  let index = 0
  for (const el of titles) {
    const arrow = document.getElementsByClassName("arrow")[index]
    el.addEventListener("click", () => {
      if (!arrow.classList.contains("down")) {
        arrow.classList.add("down")
      }
    })
    index++
  }
})()
