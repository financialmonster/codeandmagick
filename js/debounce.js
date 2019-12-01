function debounce(func, ...args) {
    return function() {
        if (lastTimeout) {
            clearTimeout(lastTimeout);
        }

        lastTimeout = setTimeout(() => {
            func(...args);
        }, DEBOUNCE_INTERVAL);
    };
}

const DEBOUNCE_INTERVAL = 500;
let lastTimeout = null;

export default debounce;
