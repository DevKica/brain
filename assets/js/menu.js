;(() => {
  const arrowWrappers = document.getElementsByClassName("a-wrapper")
  const titles = document.getElementsByClassName("title")

  let index = 0
  for (const el of arrowWrappers) {
    const folders = document.getElementsByClassName("folder")
    const folder = folders[index]

    el.addEventListener("click", () => {
      const arrow = el.getElementsByClassName("arrow")[0]

      arrow.classList.toggle("down")
      folder.classList.toggle("active")
      // if (arrow.classList.contains("down")) {
      //   folder.classList.remove("active")
      //   arrow.classList.remove("down")
      // } else {
      //   folder.classList.add("active")
      //   arrow.classList.add("down")
      // }
    })
    index++
  }

  index = 0
  for (const el of titles) {
    const folders = document.getElementsByClassName("folder")
    const folder = folders[index]

    const arrow = document.getElementsByClassName("arrow")[index]
    el.addEventListener("click", () => {
      if (!arrow.classList.contains("down")) {
        folder.classList.add("active")
        arrow.classList.add("down")
      }
    })
    index++
  }

  const nav_button = document.getElementsByClassName("nav-btn")[0]

  nav_button.addEventListener("click", () => {
    nav_button.classList.toggle("disabled")
  })
})()
