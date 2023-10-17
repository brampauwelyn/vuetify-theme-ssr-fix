import { mergeProps as _mergeProps, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
import "./VOtpInput.css";

// Components
import { makeVFieldProps, VField } from "../../components/VField/VField.mjs";
import { VOverlay } from "../../components/VOverlay/VOverlay.mjs";
import { VProgressCircular } from "../../components/VProgressCircular/VProgressCircular.mjs"; // Composables
import { provideDefaults } from "../../composables/defaults.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeFocusProps, useFocus } from "../../composables/focus.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, ref, watch } from 'vue';
import { filterInputAttrs, focusChild, genericComponent, IN_BROWSER, only, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVOtpInputProps = propsFactory({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: '$vuetify.input.otp'
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: undefined
  },
  placeholder: String,
  type: {
    type: String,
    default: 'number'
  },
  ...makeDimensionProps(),
  ...makeFocusProps(),
  ...only(makeVFieldProps({
    variant: 'outlined'
  }), ['baseColor', 'bgColor', 'class', 'color', 'disabled', 'error', 'loading', 'rounded', 'style', 'theme', 'variant'])
}, 'VOtpInput');
export const VOtpInput = genericComponent()({
  name: 'VOtpInput',
  props: makeVOtpInputProps(),
  emits: {
    finish: val => true,
    'update:focused': val => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, 'modelValue', '', val => String(val).split(''), val => val.join(''));
    const {
      t
    } = useLocale();
    const fields = computed(() => Array(Number(props.length)).fill(0));
    const focusIndex = ref(-1);
    const contentRef = ref();
    const inputRef = ref([]);
    const current = computed(() => inputRef.value[focusIndex.value]);
    function onInput() {
      const array = model.value.slice();
      const value = current.value.value;
      array[focusIndex.value] = value;
      model.value = array;
      let target = null;
      if (focusIndex.value > model.value.length) {
        target = model.value.length;
      } else if (focusIndex.value + 1 !== Number(props.length)) {
        target = 'next';
      } else {
        requestAnimationFrame(() => current.value?.blur());
      }
      if (target) focusChild(contentRef.value, target);
    }
    function onKeydown(e) {
      const array = model.value.slice();
      const index = focusIndex.value;
      let target = null;
      if (!['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete'].includes(e.key)) return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        target = 'prev';
      } else if (e.key === 'ArrowRight') {
        target = 'next';
      } else if (['Backspace', 'Delete'].includes(e.key)) {
        array[focusIndex.value] = '';
        model.value = array;
        if (focusIndex.value > 0 && e.key === 'Backspace') {
          target = 'prev';
        } else {
          requestAnimationFrame(() => {
            inputRef.value[index]?.select();
          });
        }
      }
      requestAnimationFrame(() => {
        if (target != null) {
          focusChild(contentRef.value, target);
        }
      });
    }
    function onPaste(index, e) {
      e.preventDefault();
      e.stopPropagation();
      model.value = (e?.clipboardData?.getData('Text') ?? '').split('');
      inputRef.value?.[index].blur();
    }
    function reset() {
      model.value = [];
    }
    function onFocus(e, index) {
      focus();
      focusIndex.value = index;
    }
    function onBlur() {
      blur();
      focusIndex.value = -1;
    }
    provideDefaults({
      VField: {
        color: computed(() => props.color),
        bgColor: computed(() => props.color),
        baseColor: computed(() => props.baseColor),
        disabled: computed(() => props.disabled),
        error: computed(() => props.error),
        variant: computed(() => props.variant)
      }
    }, {
      scoped: true
    });
    watch(model, val => {
      if (val.length === Number(props.length)) emit('finish', val.join(''));
    }, {
      deep: true
    });
    watch(focusIndex, val => {
      if (val < 0) return;
      IN_BROWSER && window.requestAnimationFrame(() => {
        inputRef.value[val]?.select();
      });
    });
    useRender(() => {
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      return _createVNode("div", _mergeProps({
        "class": ['v-otp-input', {
          'v-otp-input--divided': !!props.divider
        }, props.class],
        "style": [props.style]
      }, rootAttrs), [_createVNode("div", {
        "ref": contentRef,
        "class": "v-otp-input__content",
        "style": [dimensionStyles.value]
      }, [fields.value.map((_, i) => _createVNode(_Fragment, null, [props.divider && i !== 0 && _createVNode("span", {
        "class": "v-otp-input__divider"
      }, [props.divider]), _createVNode(VField, {
        "focused": isFocused.value && props.focusAll || focusIndex.value === i,
        "key": i
      }, {
        ...slots,
        default: () => {
          return _createVNode("input", {
            "ref": val => inputRef.value[i] = val,
            "aria-label": t(props.label, i + 1),
            "autofocus": i === 0 && props.autofocus,
            "autocomplete": "one-time-code",
            "class": ['v-otp-input__field'],
            "inputmode": "text",
            "min": props.type === 'number' ? 0 : undefined,
            "maxlength": "1",
            "placeholder": props.placeholder,
            "type": props.type,
            "value": model.value[i],
            "onInput": onInput,
            "onFocus": e => onFocus(e, i),
            "onBlur": onBlur,
            "onKeydown": onKeydown,
            "onPaste": event => onPaste(i, event)
          }, null);
        }
      })])), _createVNode("input", _mergeProps({
        "class": "v-otp-input-input",
        "type": "hidden"
      }, inputAttrs, {
        "value": model.value.join('')
      }), null), _createVNode(VOverlay, {
        "contained": true,
        "content-class": "v-otp-input__loader",
        "model-value": !!props.loading,
        "persistent": true
      }, {
        default: () => [slots.loader?.() ?? _createVNode(VProgressCircular, {
          "color": typeof props.loading === 'boolean' ? undefined : props.loading,
          "indeterminate": true,
          "size": "24",
          "width": "2"
        }, null)]
      }), slots.default?.()])]);
    });
    return {
      blur: () => {
        inputRef.value?.some(input => input.blur());
      },
      focus: () => {
        inputRef.value?.[0].focus();
      },
      reset,
      isFocused
    };
  }
});
//# sourceMappingURL=VOtpInput.mjs.map