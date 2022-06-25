var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Equipment
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e667dfc = require("../../../../chunks/index-1e667dfc.js");
var import_index_bb50f2da = require("../../../../chunks/index-bb50f2da.js");
var import_compressorjs = require("compressorjs");
var import_Gallery_72c88b6a = require("../../../../chunks/Gallery-72c88b6a.js");
var import_Loading_d732ebf6 = require("../../../../chunks/Loading-d732ebf6.js");
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = (0, import_index_bb50f2da.w)(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_1e667dfc.l)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_1e667dfc.l)();
      cancel_task = false;
      task = (0, import_index_1e667dfc.o)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var RangePips_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".rangeSlider{--pip:var(--range-pip, lightslategray);--pip-text:var(--range-pip-text, var(--pip));--pip-active:var(--range-pip-active, darkslategrey);--pip-active-text:var(--range-pip-active-text, var(--pip-active));--pip-hover:var(--range-pip-hover, darkslategrey);--pip-hover-text:var(--range-pip-hover-text, var(--pip-hover));--pip-in-range:var(--range-pip-in-range, var(--pip-active));--pip-in-range-text:var(--range-pip-in-range-text, var(--pip-active-text))}.rangePips{position:absolute;height:1em;left:0;right:0;bottom:-1em}.rangePips.vertical{height:auto;width:1em;left:100%;right:auto;top:0;bottom:0}.rangePips .pip{height:0.4em;position:absolute;top:0.25em;width:1px;white-space:nowrap}.rangePips.vertical .pip{height:1px;width:0.4em;left:0.25em;top:auto;bottom:auto}.rangePips .pipVal{position:absolute;top:0.4em;transform:translate(-50%, 25%)}.rangePips.vertical .pipVal{position:absolute;top:0;left:0.4em;transform:translate(25%, -50%)}.rangePips .pip{transition:all 0.15s ease}.rangePips .pipVal{transition:all 0.15s ease, font-weight 0s linear}.rangePips .pip{color:lightslategray;color:var(--pip-text);background-color:lightslategray;background-color:var(--pip)}.rangePips .pip.selected{color:darkslategrey;color:var(--pip-active-text);background-color:darkslategrey;background-color:var(--pip-active)}.rangePips.hoverable:not(.disabled) .pip:hover{color:darkslategrey;color:var(--pip-hover-text);background-color:darkslategrey;background-color:var(--pip-hover)}.rangePips .pip.in-range{color:darkslategrey;color:var(--pip-in-range-text);background-color:darkslategrey;background-color:var(--pip-in-range)}.rangePips .pip.selected{height:0.75em}.rangePips.vertical .pip.selected{height:1px;width:0.75em}.rangePips .pip.selected .pipVal{font-weight:bold;top:0.75em}.rangePips.vertical .pip.selected .pipVal{top:0;left:0.75em}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover{transition:none}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover .pipVal{transition:none;font-weight:bold}",
  map: null
};
const RangePips = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let pipStep;
  let pipCount;
  let pipVal;
  let isSelected;
  let inRange;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = true } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i) => v } = $$props;
  let { focus = void 0 } = $$props;
  let { orientationStart = void 0 } = $$props;
  let { percentOf = void 0 } = $$props;
  let { moveHandle = void 0 } = $$props;
  let { fixFloat = void 0 } = $$props;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.orientationStart === void 0 && $$bindings.orientationStart && orientationStart !== void 0)
    $$bindings.orientationStart(orientationStart);
  if ($$props.percentOf === void 0 && $$bindings.percentOf && percentOf !== void 0)
    $$bindings.percentOf(percentOf);
  if ($$props.moveHandle === void 0 && $$bindings.moveHandle && moveHandle !== void 0)
    $$bindings.moveHandle(moveHandle);
  if ($$props.fixFloat === void 0 && $$bindings.fixFloat && fixFloat !== void 0)
    $$bindings.fixFloat(fixFloat);
  $$result.css.add(css$2);
  pipStep = pipstep || ((max - min) / step >= (vertical ? 50 : 100) ? (max - min) / (vertical ? 10 : 20) : 1);
  pipCount = parseInt((max - min) / (step * pipStep), 10);
  pipVal = function(val) {
    return fixFloat(min + val * step * pipStep);
  };
  isSelected = function(val) {
    return values.some((v) => fixFloat(v) === fixFloat(val));
  };
  inRange = function(val) {
    if (range === "min") {
      return values[0] > val;
    } else if (range === "max") {
      return values[0] < val;
    } else if (range) {
      return values[0] < val && values[1] > val;
    }
  };
  return `<div class="${[
    "rangePips",
    (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + " " + (focus ? "focus" : "")
  ].join(" ").trim()}">${all && first !== false || first ? `<span class="${[
    "pip first",
    (isSelected(min) ? "selected" : "") + " " + (inRange(min) ? "in-range" : "")
  ].join(" ").trim()}" style="${(0, import_index_1e667dfc.e)(orientationStart) + ": 0%;"}">${all === "label" || first === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_1e667dfc.e)(prefix)}</span>` : ``}${(0, import_index_1e667dfc.e)(formatter(fixFloat(min), 0, 0))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_1e667dfc.e)(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}

  ${all && rest !== false || rest ? `${(0, import_index_1e667dfc.j)(Array(pipCount + 1), (_, i) => {
    return `${pipVal(i) !== min && pipVal(i) !== max ? `<span class="${[
      "pip",
      (isSelected(pipVal(i)) ? "selected" : "") + " " + (inRange(pipVal(i)) ? "in-range" : "")
    ].join(" ").trim()}" style="${(0, import_index_1e667dfc.e)(orientationStart) + ": " + (0, import_index_1e667dfc.e)(percentOf(pipVal(i))) + "%;"}">${all === "label" || rest === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_1e667dfc.e)(prefix)}</span>` : ``}${(0, import_index_1e667dfc.e)(formatter(pipVal(i), i, percentOf(pipVal(i))))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_1e667dfc.e)(suffix)}</span>` : ``}
            </span>` : ``}
        </span>` : ``}`;
  })}` : ``}

  ${all && last !== false || last ? `<span class="${[
    "pip last",
    (isSelected(max) ? "selected" : "") + " " + (inRange(max) ? "in-range" : "")
  ].join(" ").trim()}" style="${(0, import_index_1e667dfc.e)(orientationStart) + ": 100%;"}">${all === "label" || last === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${(0, import_index_1e667dfc.e)(prefix)}</span>` : ``}${(0, import_index_1e667dfc.e)(formatter(fixFloat(max), pipCount, 100))}${suffix ? `<span class="${"pipVal-suffix"}">${(0, import_index_1e667dfc.e)(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}</div>`;
});
var RangeSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.rangeSlider{--slider:var(--range-slider, #d7dada);--handle-inactive:var(--range-handle-inactive, #99a2a2);--handle:var(--range-handle, #838de7);--handle-focus:var(--range-handle-focus, #4a40d4);--handle-border:var(--range-handle-border, var(--handle));--range-inactive:var(--range-range-inactive, var(--handle-inactive));--range:var(--range-range, var(--handle-focus));--float-inactive:var(--range-float-inactive, var(--handle-inactive));--float:var(--range-float, var(--handle-focus));--float-text:var(--range-float-text, white)}.rangeSlider{position:relative;border-radius:100px;height:0.5em;margin:1em;transition:opacity 0.2s ease;user-select:none}.rangeSlider *{user-select:none}.rangeSlider.pips{margin-bottom:1.8em}.rangeSlider.pip-labels{margin-bottom:2.8em}.rangeSlider.vertical{display:inline-block;border-radius:100px;width:0.5em;min-height:200px}.rangeSlider.vertical.pips{margin-right:1.8em;margin-bottom:1em}.rangeSlider.vertical.pip-labels{margin-right:2.8em;margin-bottom:1em}.rangeSlider .rangeHandle{position:absolute;display:block;height:1.4em;width:1.4em;top:0.25em;bottom:auto;transform:translateY(-50%) translateX(-50%);z-index:2}.rangeSlider.reversed .rangeHandle{transform:translateY(-50%) translateX(50%)}.rangeSlider.vertical .rangeHandle{left:0.25em;top:auto;transform:translateY(50%) translateX(-50%)}.rangeSlider.vertical.reversed .rangeHandle{transform:translateY(-50%) translateX(-50%)}.rangeSlider .rangeNub,.rangeSlider .rangeHandle:before{position:absolute;left:0;top:0;display:block;border-radius:10em;height:100%;width:100%;transition:box-shadow 0.2s ease}.rangeSlider .rangeHandle:before{content:"";left:1px;top:1px;bottom:1px;right:1px;height:auto;width:auto;box-shadow:0 0 0 0px var(--handle-border);opacity:0}.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before{box-shadow:0 0 0 8px var(--handle-border);opacity:0.2}.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before,.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:hover:before{box-shadow:0 0 0 12px var(--handle-border);opacity:0.4}.rangeSlider.range:not(.min):not(.max) .rangeNub{border-radius:10em 10em 10em 1.6em}.rangeSlider.range .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(135deg)}.rangeSlider .rangeFloat{display:block;position:absolute;left:50%;top:-0.5em;transform:translate(-50%, -100%);font-size:1em;text-align:center;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.2s ease;font-size:0.9em;padding:0.2em 0.4em;border-radius:0.2em}.rangeSlider .rangeHandle.active .rangeFloat,.rangeSlider.hoverable .rangeHandle:hover .rangeFloat{opacity:1;top:-0.2em;transform:translate(-50%, -100%)}.rangeSlider .rangeBar{position:absolute;display:block;transition:background 0.2s ease;border-radius:1em;height:0.5em;top:0;user-select:none;z-index:1}.rangeSlider.vertical .rangeBar{width:0.5em;height:auto}.rangeSlider{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeBar{background-color:#99a2a2;background-color:var(--range-inactive)}.rangeSlider.focus .rangeBar{background-color:#838de7;background-color:var(--range)}.rangeSlider .rangeNub{background-color:#99a2a2;background-color:var(--handle-inactive)}.rangeSlider.focus .rangeNub{background-color:#838de7;background-color:var(--handle)}.rangeSlider .rangeHandle.active .rangeNub{background-color:#4a40d4;background-color:var(--handle-focus)}.rangeSlider .rangeFloat{color:white;color:var(--float-text);background-color:#99a2a2;background-color:var(--float-inactive)}.rangeSlider.focus .rangeFloat{background-color:#4a40d4;background-color:var(--float)}.rangeSlider.disabled{opacity:0.5}.rangeSlider.disabled .rangeNub{background-color:#d7dada;background-color:var(--slider)}',
  map: null
};
const RangeSlider = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let percentOf;
  let clampValue;
  let alignValueToStep;
  let orientationStart;
  let orientationEnd;
  let $springPositions, $$unsubscribe_springPositions = import_index_1e667dfc.n, $$subscribe_springPositions = () => ($$unsubscribe_springPositions(), $$unsubscribe_springPositions = (0, import_index_1e667dfc.a)(springPositions, ($$value) => $springPositions = $$value), springPositions);
  let { slider = void 0 } = $$props;
  let { range = false } = $$props;
  let { pushy = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { float = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pips = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = void 0 } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { handleFormatter = formatter } = $$props;
  let { precision = 2 } = $$props;
  let { springValues = { stiffness: 0.15, damping: 0.4 } } = $$props;
  const dispatch = (0, import_index_1e667dfc.p)();
  let valueLength = 0;
  let focus = false;
  let activeHandle = values.length - 1;
  let startValue;
  let previousValue;
  let springPositions;
  const fixFloat = (v) => parseFloat(v.toFixed(precision));
  function trimRange(values2) {
    if (range === "min" || range === "max") {
      return values2.slice(0, 1);
    } else if (range) {
      return values2.slice(0, 2);
    } else {
      return values2;
    }
  }
  function moveHandle(index, value) {
    value = alignValueToStep(value);
    if (typeof index === "undefined") {
      index = activeHandle;
    }
    if (range) {
      if (index === 0 && value > values[1]) {
        if (pushy) {
          values[1] = value;
        } else {
          value = values[1];
        }
      } else if (index === 1 && value < values[0]) {
        if (pushy) {
          values[0] = value;
        } else {
          value = values[0];
        }
      }
    }
    if (values[index] !== value) {
      values[index] = value;
    }
    if (previousValue !== value) {
      eChange();
      previousValue = value;
    }
    return value;
  }
  function rangeStart(values2) {
    if (range === "min") {
      return 0;
    } else {
      return values2[0];
    }
  }
  function rangeEnd(values2) {
    if (range === "max") {
      return 0;
    } else if (range === "min") {
      return 100 - values2[0];
    } else {
      return 100 - values2[1];
    }
  }
  function eChange() {
    !disabled && dispatch("change", {
      activeHandle,
      startValue,
      previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
      value: values[activeHandle],
      values: values.map((v) => alignValueToStep(v))
    });
  }
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.pushy === void 0 && $$bindings.pushy && pushy !== void 0)
    $$bindings.pushy(pushy);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pips === void 0 && $$bindings.pips && pips !== void 0)
    $$bindings.pips(pips);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.handleFormatter === void 0 && $$bindings.handleFormatter && handleFormatter !== void 0)
    $$bindings.handleFormatter(handleFormatter);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.springValues === void 0 && $$bindings.springValues && springValues !== void 0)
    $$bindings.springValues(springValues);
  $$result.css.add(css$1);
  clampValue = function(val) {
    return val <= min ? min : val >= max ? max : val;
  };
  alignValueToStep = function(val) {
    if (val <= min) {
      return fixFloat(min);
    } else if (val >= max) {
      return fixFloat(max);
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step) {
      aligned += remainder > 0 ? step : -step;
    }
    aligned = clampValue(aligned);
    return fixFloat(aligned);
  };
  percentOf = function(val) {
    let perc = (val - min) / (max - min) * 100;
    if (isNaN(perc) || perc <= 0) {
      return 0;
    } else if (perc >= 100) {
      return 100;
    } else {
      return fixFloat(perc);
    }
  };
  {
    {
      if (!Array.isArray(values)) {
        values = [(max + min) / 2];
        console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)");
      }
      values = trimRange(values.map((v) => alignValueToStep(v)));
      if (valueLength !== values.length) {
        $$subscribe_springPositions(springPositions = spring(values.map((v) => percentOf(v)), springValues));
      } else {
        springPositions.set(values.map((v) => percentOf(v)));
      }
      valueLength = values.length;
    }
  }
  orientationStart = vertical ? reversed ? "top" : "bottom" : reversed ? "right" : "left";
  orientationEnd = vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
  $$unsubscribe_springPositions();
  return `<div${(0, import_index_1e667dfc.i)("id", id, 0)} class="${[
    "rangeSlider",
    (range ? "range" : "") + " " + (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + "  " + (range === "min" ? "min" : "") + " " + (range === "max" ? "max" : "") + " " + (pips ? "pips" : "") + " " + (all === "label" || first === "label" || last === "label" || rest === "label" ? "pip-labels" : "")
  ].join(" ").trim()}"${(0, import_index_1e667dfc.i)("this", slider, 0)}>${(0, import_index_1e667dfc.j)(values, (value, index) => {
    return `<span role="${"slider"}" class="${[
      "rangeHandle",
      " "
    ].join(" ").trim()}"${(0, import_index_1e667dfc.i)("data-handle", index, 0)} style="${(0, import_index_1e667dfc.e)(orientationStart) + ": " + (0, import_index_1e667dfc.e)($springPositions[index]) + "%; z-index: " + (0, import_index_1e667dfc.e)(activeHandle === index ? 3 : 2) + ";"}"${(0, import_index_1e667dfc.i)("aria-valuemin", range === true && index === 1 ? values[0] : min, 0)}${(0, import_index_1e667dfc.i)("aria-valuemax", range === true && index === 0 ? values[1] : max, 0)}${(0, import_index_1e667dfc.i)("aria-valuenow", value, 0)} aria-valuetext="${(0, import_index_1e667dfc.e)(prefix) + (0, import_index_1e667dfc.e)(handleFormatter(value, index, percentOf(value))) + (0, import_index_1e667dfc.e)(suffix)}"${(0, import_index_1e667dfc.i)("aria-orientation", vertical ? "vertical" : "horizontal", 0)}${(0, import_index_1e667dfc.i)("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}${(0, import_index_1e667dfc.i)("tabindex", disabled ? -1 : 0, 0)}><span class="${"rangeNub"}"></span>
      ${float ? `<span class="${"rangeFloat"}">${prefix ? `<span class="${"rangeFloat-prefix"}">${(0, import_index_1e667dfc.e)(prefix)}</span>` : ``}${(0, import_index_1e667dfc.e)(handleFormatter(value, index, percentOf(value)))}${suffix ? `<span class="${"rangeFloat-suffix"}">${(0, import_index_1e667dfc.e)(suffix)}</span>` : ``}
        </span>` : ``}
    </span>`;
  })}
  ${range ? `<span class="${"rangeBar"}" style="${(0, import_index_1e667dfc.e)(orientationStart) + ": " + (0, import_index_1e667dfc.e)(rangeStart($springPositions)) + "%; " + (0, import_index_1e667dfc.e)(orientationEnd) + ": " + (0, import_index_1e667dfc.e)(rangeEnd($springPositions)) + "%;"}"></span>` : ``}
  ${pips ? `${(0, import_index_1e667dfc.v)(RangePips, "RangePips").$$render($$result, {
    values,
    min,
    max,
    step,
    range,
    vertical,
    reversed,
    orientationStart,
    hoverable,
    disabled,
    all,
    first,
    last,
    rest,
    pipstep,
    prefix,
    suffix,
    formatter,
    focus,
    percentOf,
    moveHandle,
    fixFloat
  }, {}, {})}` : ``}</div>

`;
});
function blobToImage(blob) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(blob);
    let img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(this.src);
      resolve(this);
    };
    img.src = url;
  });
}
var equipment_svelte_svelte_type_style_lang = "";
const css = {
  code: "canvas.svelte-ezgo01,#image-area.svelte-ezgo01,#canvas-overlay.svelte-ezgo01{position:absolute;left:0;top:0;width:100vw;height:100vw;touch-action:none}#image-area.svelte-ezgo01{background-color:black}#body.svelte-ezgo01{position:absolute;left:0;top:100vw;width:100vw;height:calc(100vh - 100vw - 60px);background-color:white}",
  map: null
};
const canvasMargin = 20;
const Equipment = (0, import_index_1e667dfc.c)(($$result, $$props, $$bindings, slots) => {
  let images = [];
  let canvas, canvasOverlay;
  const dragBoxHalfWidth = canvasMargin / 2;
  const constraints = {
    top: dragBoxHalfWidth,
    left: dragBoxHalfWidth,
    bottom: 0,
    right: 0
  };
  function drawConstraints() {
    const ctx = canvasOverlay.getContext("2d");
    ctx.clearRect(0, 0, canvasOverlay.width, canvasOverlay.height);
    ctx.fillStyle = "black";
    const constraintsArr = Object.values(constraints);
    for (let i in constraintsArr) {
      ctx.beginPath();
      ctx.rect(+i == 3 ? constraints.right - dragBoxHalfWidth : 0, +i == 2 ? constraints.bottom - dragBoxHalfWidth : 0, +i == 1 ? constraints.left + dragBoxHalfWidth : canvasOverlay.width + 2, +i == 0 ? constraints.top + dragBoxHalfWidth : canvasOverlay.height + 2);
      ctx.fill();
    }
    for (let i in constraintsArr) {
      ctx.fillStyle = "#888";
      ctx.beginPath();
      ctx.rect(constraintsArr[+i % 2 * 2 + 1] - dragBoxHalfWidth, constraintsArr[Math.floor(+i / 2) * 2] - dragBoxHalfWidth, dragBoxHalfWidth * 2, dragBoxHalfWidth * 2);
      ctx.fill();
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.rect(constraintsArr[+i % 2 * 2 + 1] - dragBoxHalfWidth / 2, constraintsArr[Math.floor(+i / 2) * 2] - dragBoxHalfWidth / 2, dragBoxHalfWidth, dragBoxHalfWidth);
      ctx.fill();
      ctx.fillStyle = "#888";
      ctx.beginPath();
      ctx.rect(+i % 2 == 1 ? +i == 1 ? constraints.left - dragBoxHalfWidth / 4 : constraints.right - dragBoxHalfWidth / 4 : (constraints.left + constraints.right) / 2 - dragBoxHalfWidth, +i % 2 == 0 ? +i == 0 ? constraints.top - dragBoxHalfWidth / 4 : constraints.bottom - dragBoxHalfWidth / 4 : (constraints.top + constraints.bottom) / 2 - dragBoxHalfWidth, +i % 2 == 1 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2, +i % 2 == 0 ? dragBoxHalfWidth / 2 : dragBoxHalfWidth * 2);
      ctx.fill();
    }
  }
  let files = null, filePtr = -1;
  async function loadImage() {
    if (!files.length || filePtr < 0) {
      return console.log("All images done");
    }
    try {
      const img = await blobToImage(files[filePtr]);
      constraints.right = canvasOverlay.width - dragBoxHalfWidth;
      constraints.bottom = canvasOverlay.height - dragBoxHalfWidth;
      const imgWidth = img.naturalWidth, imgHeight = img.naturalHeight;
      canvas.width = canvas.height = Math.max(imgWidth, imgHeight);
      const conversion = canvas.width / window.innerWidth;
      const ctx = canvas.getContext("2d");
      const wgh = imgWidth > imgHeight;
      const imgWidthMargin = imgWidth - canvasMargin * conversion * 2;
      const imgHeightMargin = imgHeight - canvasMargin * conversion * 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, !wgh ? canvas.width / 2 - imgWidth / 2 + canvasMargin * conversion : canvasMargin * conversion, wgh ? canvas.width / 2 - imgHeight / 2 + canvasMargin * conversion : canvasMargin * conversion, wgh ? imgWidthMargin : imgWidth / imgHeightMargin * imgHeight, !wgh ? imgHeight / imgWidthMargin * imgWidth : imgHeightMargin);
      drawConstraints();
    } catch (error) {
      console.error(error);
    }
  }
  let values = [0];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (files == null ? void 0 : files.length) {
        filePtr = files.length - 1;
        loadImage();
      }
    }
    {
      if (canvas == null ? void 0 : canvas.style)
        canvas.style.transform = `rotate(${values[0]}deg)`;
    }
    $$rendered = `<div>${filePtr >= 0 ? `<div id="${"image-area"}" class="${"svelte-ezgo01"}"><canvas${(0, import_index_1e667dfc.i)("width", window.innerWidth, 0)}${(0, import_index_1e667dfc.i)("height", window.innerWidth, 0)} class="${"svelte-ezgo01"}"${(0, import_index_1e667dfc.i)("this", canvas, 0)}></canvas><canvas id="${"canvas-overlay"}"${(0, import_index_1e667dfc.i)("width", window.innerWidth, 0)}${(0, import_index_1e667dfc.i)("height", window.innerWidth, 0)} class="${"svelte-ezgo01"}"${(0, import_index_1e667dfc.i)("this", canvasOverlay, 0)}></canvas></div>

    <div id="${"body"}" class="${"svelte-ezgo01"}">${(0, import_index_1e667dfc.v)(RangeSlider, "RangeSlider").$$render($$result, {
      min: -180,
      max: 180,
      float: true,
      pips: true,
      pipstep: 45,
      all: "label",
      suffix: "\xBA",
      springValues: { stiffness: 0.3, damping: 1 },
      values
    }, {
      values: ($$value) => {
        values = $$value;
        $$settled = false;
      }
    }, {})}

      <button>Crop</button></div>` : `<input type="${"file"}" id="${"camera"}" accept="${"image/*"}" capture="${"application"}" ${"multiple"}>

    ${(0, import_index_1e667dfc.v)(import_Gallery_72c88b6a.G, "Gallery").$$render($$result, { images }, {
      images: ($$value) => {
        images = $$value;
        $$settled = false;
      }
    }, {})}
    `}

</div>`;
  } while (!$$settled);
  return $$rendered;
});