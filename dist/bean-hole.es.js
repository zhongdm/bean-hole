import { openBlock, createElementBlock, createTextVNode, toDisplayString, createElementVNode } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "a[data-v-1f2c245a]{color:#42b983}.modal[data-v-1f2c245a]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#00000080;display:flex;flex-direction:column;align-items:center;justify-content:center}.modal div[data-v-1f2c245a]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;width:300px;height:300px;padding:5px}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = ["value"];
const _sfc_main = {
  __name: "index",
  props: {
    value: String
  },
  emits: ["onInput"],
  setup(__props, { emit }) {
    function onInput($event) {
      const actualValue = $event.target.value;
      const newStr = actualValue.replace(/,/g, "").split("").reverse().join("").replace(/\d{3}(?=\d)/g, function() {
        return arguments[0] + ",";
      });
      const formatValue = newStr.split("").reverse().join("");
      emit("update:value", formatValue);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createTextVNode(toDisplayString(__props.value) + "dd ", 1),
        createElementVNode("input", {
          type: "text",
          value: __props.value,
          onInput
        }, null, 40, _hoisted_1)
      ]);
    };
  }
};
var InputCurrency = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f2c245a"]]);
const InputCurrencyPlugin = {
  install(app) {
    app.component("input-currency", InputCurrency);
  }
};
const BeanHolePlugin = {
  install(app) {
    if (InputCurrencyPlugin.install) {
      InputCurrencyPlugin.install(app);
    }
  }
};
export { InputCurrency, InputCurrencyPlugin, BeanHolePlugin as default };
