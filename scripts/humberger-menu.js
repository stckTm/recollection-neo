const btn = document.querySelector(".toggle-btn")
const nav = document.querySelector("nav")
const mask = document.querySelector("#mask")

const navCategory = document.querySelector(".navLinks-category")
const itemCategory = document.querySelector(".product-open")
const triangle = document.querySelector(".triangle")

btn.addEventListener("click", () => {
  btn.classList.toggle("active")
  nav.classList.toggle("active")
  mask.classList.toggle("active")

  itemCategory.classList.remove("category-open")
  triangle.classList.remove("category-open")
})

mask.addEventListener("click", () => {
  btn.classList.toggle("active")
  nav.classList.toggle("active")
  mask.classList.toggle("active")
})

navCategory.addEventListener("click", () => {
  itemCategory.classList.toggle("category-open")
  triangle.classList.toggle("category-open")
})

const ItemCategoryTag = document.querySelectorAll(
  "#appsItemCategoryTag .appsItemCategoryTag_child > a"
)
// ItemCategoryTag.forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     event.preventDefault()
//     // const lowerChild = document.querySelector(
//     //   ".appsItemCategoryTag_child .appsItemCategoryTag_lowerchild"
//     // )
//     // if (lowerChild) {
//     //   lowerChild.classList.add("close")
//       // brands の appsItemCategoryTag_lowerchild に close クラスを追加
//     // }
//   })
// })
