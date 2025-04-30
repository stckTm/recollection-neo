document.addEventListener('DOMContentLoaded', () => {
    const toggleItemDetail = () => {
        const appsItemDetailCustom = document.querySelector('#appsItemDetailCustom');
        const itemDetail = document.querySelector('.itemDetail');

        if (!itemDetail) {
            console.warn('Element with class .itemDetail not found');
            return;
        }

        itemDetail.style.display = appsItemDetailCustom ? 'none' : 'block';
    };

    // Initial check
    toggleItemDetail();

    // Optional: Add mutation observer if the elements might be dynamically added
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                toggleItemDetail();
            }
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}); 