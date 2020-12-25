function getDomPosition(dom) {
    if (!dom) {
        return;
    }
    return {
        x: dom.offsetLeft - 24,
        y: dom.offsetTop + 44
    };
}

export {
    getDomPosition
};