import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType, ComputedRef, Ref } from 'vue';

type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

declare function deepEqual(a: any, b: any): boolean;

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type VMessageSlot = {
    message: string;
};

interface VInputSlot {
    id: ComputedRef<string>;
    messagesId: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}
type VInputSlots = {
    default: VInputSlot;
    prepend: VInputSlot;
    append: VInputSlot;
    details: VInputSlot;
    message: VMessageSlot;
};

type VRadioGroupSlots = Omit<VInputSlots, 'default'> & {
    default: never;
    label: {
        label: string | undefined;
        props: Record<string, any>;
    };
};
declare const VRadioGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            inline: boolean;
            error: boolean;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: IconValue;
            trueIcon: IconValue;
            valueComparator: typeof deepEqual;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            type: string;
            inline: boolean;
            error: boolean;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: IconValue;
            trueIcon: IconValue;
            valueComparator: typeof deepEqual;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            defaultsTarget?: string | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            type: string;
            inline: boolean;
            error: boolean;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: IconValue;
            trueIcon: IconValue;
            valueComparator: typeof deepEqual;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            defaultsTarget?: string | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "type" | "inline" | "error" | "height" | "direction" | "style" | "disabled" | "readonly" | "messages" | "density" | "ripple" | "falseIcon" | "trueIcon" | "valueComparator" | "focused" | "errorMessages" | "maxErrors" | "rules" | "centerAffix" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            type: string;
            inline: boolean;
            error: boolean;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: IconValue;
            trueIcon: IconValue;
            valueComparator: typeof deepEqual;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            defaultsTarget?: string | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => boolean;
        }, "$children" | "v-slot:default" | "v-slots" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "update:modelValue" | "v-slot:label" | "v-slot:message" | "v-slot:details">, string, {
            type: string;
            inline: boolean;
            error: boolean;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            falseIcon: IconValue;
            trueIcon: IconValue;
            valueComparator: typeof deepEqual;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            centerAffix: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        type: string;
        inline: boolean;
        error: boolean;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        density: Density;
        ripple: boolean;
        falseIcon: IconValue;
        trueIcon: IconValue;
        valueComparator: typeof deepEqual;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        defaultsTarget?: string | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {} & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    falseIcon: IconValue;
    trueIcon: IconValue;
    valueComparator: typeof deepEqual;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
} & {
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    defaultsTarget?: string | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => boolean;
}, "$children" | "v-slot:default" | "v-slots" | "v-slot:append" | "v-slot:prepend" | "modelValue" | "update:modelValue" | "v-slot:label" | "v-slot:message" | "v-slot:details">, string, {
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    falseIcon: IconValue;
    trueIcon: IconValue;
    valueComparator: typeof deepEqual;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    centerAffix: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
}, {}, string, vue.SlotsType<Partial<{
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1>(props: {
    modelValue?: T_1 | null | undefined;
    'onUpdate:modelValue'?: ((value: T_1 | null) => void) | undefined;
}, slots: VRadioGroupSlots) => GenericProps<{
    modelValue?: T_1 | null | undefined;
    'onUpdate:modelValue'?: ((value: T_1 | null) => void) | undefined;
}, VRadioGroupSlots>) & FilterPropsOptions<{
    trueIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    class: vue.PropType<any>;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:append': vue.PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, vue.ExtractPropTypes<{
    trueIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    disabled: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    class: vue.PropType<any>;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:append': vue.PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>;
type VRadioGroup = InstanceType<typeof VRadioGroup>;

export { VRadioGroup };
