const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");
const mask = document.querySelector("#mask");

const navCategories = document.querySelectorAll(".navLinks-category");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
    mask.classList.toggle("active");

    // Close all category menus when hamburger menu is closed
    document.querySelectorAll(".navLinks-category__medium").forEach((item) => {
        item.classList.remove("category-open");
    });
    document.querySelectorAll(".triangle").forEach((triangle) => {
        triangle.classList.remove("category-open");
    });
});

mask.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
    mask.classList.toggle("active");
});

// Add click event to all category menus
navCategories.forEach((navCategory) => {
    navCategory.addEventListener("click", () => {
        const itemCategory = navCategory.nextElementSibling;
        const triangle = navCategory.querySelector(".triangle");

        // Close all other category menus first
        document
            .querySelectorAll(".navLinks-category__medium")
            .forEach((item) => {
                if (item !== itemCategory) {
                    item.classList.remove("category-open");
                }
            });
        document.querySelectorAll(".triangle").forEach((tri) => {
            if (tri !== triangle) {
                tri.classList.remove("category-open");
            }
        });

        // Toggle the clicked category menu
        itemCategory.classList.toggle("category-open");
        triangle.classList.toggle("category-open");
    });
});

const ItemCategoryTag = document.querySelectorAll(
    "#appsItemCategoryTag .appsItemCategoryTag_child > a"
);
