function eventTriggerGenerator(eventName) {
    return function (dom) {
        const e = new Event(eventName);
        dom.dispatchEvent(e);
    };
}

function getClass(dom) {
    return dom.getAttribute("class");
}


const triggerClick = eventTriggerGenerator("click");
const triggerMouseover = eventTriggerGenerator("mouseover");
const triggerMounseleave = eventTriggerGenerator("mouseleave");
const triggerMounseenter = eventTriggerGenerator("mouseenter");

export {
    triggerClick,
    triggerMouseover,
    triggerMounseleave,
    triggerMounseenter,
    getClass
};