// ----- Pencarian -----
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
    const term = searchInput.value.toLowerCase();
    products.forEach(p => {
        const name = p.querySelector("h2").textContent.toLowerCase();
        p.style.display = name.includes(term) ? "block" : "none";
    });
});

// ----- Filter Kategori -----
document.getElementById("categoryFilter").addEventListener("change", function () {
    const filter = this.value;

    products.forEach(p => {
        const cat = p.dataset.category;
        p.style.display = (filter === "all" || cat === filter) ? "block" : "none";
    });
});

// ----- DARK MODE -----
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// ----- MODAL DETAIL PRODUK -----
const modal = document.getElementById("productModal");
const close = document.querySelector(".close");

const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

document.querySelectorAll(".detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";

        modalImg.src = btn.dataset.img;
        modalName.textContent = btn.dataset.name;
        modalPrice.textContent = btn.dataset.price;
        modalDesc.textContent = btn.dataset.desc;

        document.getElementById("checkoutBtn").dataset.product =
            `${btn.dataset.name} - ${btn.dataset.price}`;
    });
});

close.onclick = () => modal.style.display = "none";

// ----- MODAL CHECKOUT -----
const checkoutModal = document.getElementById("checkoutModal");
const close2 = document.querySelector(".close2");

document.getElementById("checkoutBtn").onclick = (e) => {
    checkoutModal.style.display = "flex";
    document.getElementById("checkoutProduct").textContent =
        "Produk: " + e.target.dataset.product;
};

close2.onclick = () => checkoutModal.style.display = "none";

// Tutup klik di luar modal
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
    if (e.target === checkoutModal) checkoutModal.style.display = "none";
};
