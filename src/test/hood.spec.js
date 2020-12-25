import Vue from "vue";
before(() => {
    Vue.config.productionTip = false;
});

after(() => {
    Vue.config.productionTip = true;
});