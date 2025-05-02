document.addEventListener("DOMContentLoaded", function () {
    // モーダル要素を動的に作成
    const modalHtml = `
        <div id="imageModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="modalImage">
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);

    // モーダル関連の要素を取得
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    // すべての画像に対してクリックイベントを追加
    document.querySelectorAll(".swiper-slide img").forEach((img) => {
        img.onclick = function () {
            // 特定のクラスを持つスワイパーの場合はモーダルを表示しない
            const swiper = this.closest(".swiper");
            if (
                swiper &&
                swiper.classList.contains("mySwiper") &&
                swiper.classList.contains("swiper-initialized") &&
                swiper.classList.contains("swiper-horizontal") &&
                swiper.classList.contains("swiper-free-mode") &&
                swiper.classList.contains("swiper-watch-progress") &&
                swiper.classList.contains("swiper-thumbs")
            ) {
                return;
            }
            modal.classList.add("show");
            modalImg.src = this.src;
        };
    });

    // モーダルを閉じる
    closeBtn.onclick = function () {
        modal.classList.remove("show");
    };

    // モーダルの外側をクリックしても閉じる
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    };

    // ESCキーでも閉じる
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
        }
    });
});
