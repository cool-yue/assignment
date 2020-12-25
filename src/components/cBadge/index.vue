<script>
export default {
    name: "CBadge",
    functional: true,
    props: {
        type: {
            type: String,
            default: ""
        }
    },
    render(createElement, context) {
        const type = context.props.type;
        const baseClass = {
            "c-badge": true,
        };
        if (type) {
            baseClass[`c-badge--${type}`] = true;
        }
        return createElement(
            "span",
            {
                class: baseClass
            },
            `${type}`
        );
    }
};

</script>
<style>
.c-badge {
    font-size: 14px;
    padding:0.2em 1em;
    height: 1.5em;
    line-height: 1.5em;
    color: white;
}
.c-badge--building {
    background-color: #ff9a2a;
}
.c-badge--idle {
    background-color: #7fbc39;
}
</style>