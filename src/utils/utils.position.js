function getDomPosition(dom) {
    if (!dom) {
        return;
    }
    const rect = dom.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}

export {
    getDomPosition
};