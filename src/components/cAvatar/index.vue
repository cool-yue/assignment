<script>
export default {
    name: "cAvatar",
    functional: true,
    props: {
        source: {
            type: String,
            default: ""
        }
    },
    render(createElement, context) {
        const source = context.props.source;
        return createElement(
            "div",
            {
                class: {
                    "c-avatar": true
                }
            },
            [createElement("img", {
                attrs: {
                    src: source
                },
                class: {
                    "c-avatar__img": true
                }
            })]
        );
    }
};
</script>
<style>
.c-avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
}
.c-avatar__img{
    height:40px;
}
</style>