import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, PropType, nextTick } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

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

type VPickerSlots = {
    header: never;
    default: never;
    actions: never;
    title: never;
};

type VDatePickerSlots = Omit<VPickerSlots, 'header'> & {
    header: {
        header: string;
        transition: string;
    };
};
declare const VDatePicker: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: string | string[];
            header: string;
            style: vue.StyleValue;
            title: string;
            disabled: boolean;
            landscape: boolean;
            tag: string;
            rounded: string | number | boolean;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            hideHeader: boolean;
        }> & Omit<{
            header: string;
            style: vue.StyleValue;
            title: string;
            disabled: boolean;
            landscape: boolean;
            tag: string;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            hideHeader: boolean;
            max?: unknown;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: string | string[] | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            text?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            class?: any;
            min?: unknown;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            allowedDates?: Function | unknown[] | undefined;
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
            "onUpdate:viewMode"?: ((date: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            header: string;
            style: vue.StyleValue;
            title: string;
            disabled: boolean;
            landscape: boolean;
            tag: string;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            hideHeader: boolean;
        } & {
            max?: unknown;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: string | string[] | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            text?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            class?: any;
            min?: unknown;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            allowedDates?: Function | unknown[] | undefined;
        } & {
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
            "onUpdate:viewMode"?: ((date: any) => any) | undefined;
        }, "active" | "header" | "style" | "title" | "disabled" | "landscape" | "tag" | "rounded" | "nextIcon" | "prevIcon" | "modeIcon" | "viewMode" | "hideWeekdays" | "showAdjacentMonths" | "showWeek" | "hideHeader">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            actions?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: {
                header: string;
                transition: string;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:month", date: any) => void) & ((event: "update:year", date: any) => void) & ((event: "update:viewMode", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            header: string;
            style: vue.StyleValue;
            title: string;
            disabled: boolean;
            landscape: boolean;
            tag: string;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            hideHeader: boolean;
        } & {
            max?: unknown;
            location?: Anchor | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: string | string[] | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
            text?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            class?: any;
            min?: unknown;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            allowedDates?: Function | unknown[] | undefined;
        } & {
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
            "onUpdate:viewMode"?: ((date: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (date: any) => true;
            'update:month': (date: any) => true;
            'update:year': (date: any) => true;
            'update:viewMode': (date: any) => true;
        }, "multiple" | "$children" | "v-slot:default" | "v-slots" | "v-slot:title" | "modelValue" | "update:modelValue" | "v-slot:header" | "v-slot:actions">, string, {
            active: string | string[];
            header: string;
            style: vue.StyleValue;
            title: string;
            disabled: boolean;
            landscape: boolean;
            tag: string;
            rounded: string | number | boolean;
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            hideHeader: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: {
                header: string;
                transition: string;
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
        header: string;
        style: vue.StyleValue;
        title: string;
        disabled: boolean;
        landscape: boolean;
        tag: string;
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        hideWeekdays: boolean;
        showAdjacentMonths: boolean;
        showWeek: boolean;
        hideHeader: boolean;
    } & {
        max?: unknown;
        location?: Anchor | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: string | string[] | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        text?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        class?: any;
        min?: unknown;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        allowedDates?: Function | unknown[] | undefined;
    } & {
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
        "onUpdate:viewMode"?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    header: string;
    style: vue.StyleValue;
    title: string;
    disabled: boolean;
    landscape: boolean;
    tag: string;
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
    hideWeekdays: boolean;
    showAdjacentMonths: boolean;
    showWeek: boolean;
    hideHeader: boolean;
} & {
    max?: unknown;
    location?: Anchor | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: string | string[] | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
    text?: string | undefined;
    month?: string | number | undefined;
    year?: string | number | undefined;
    class?: any;
    min?: unknown;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    allowedDates?: Function | unknown[] | undefined;
} & {
    "onUpdate:month"?: ((date: any) => any) | undefined;
    "onUpdate:year"?: ((date: any) => any) | undefined;
    "onUpdate:viewMode"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (date: any) => true;
    'update:month': (date: any) => true;
    'update:year': (date: any) => true;
    'update:viewMode': (date: any) => true;
}, "multiple" | "$children" | "v-slot:default" | "v-slots" | "v-slot:title" | "modelValue" | "update:modelValue" | "v-slot:header" | "v-slot:actions">, string, {
    active: string | string[];
    header: string;
    style: vue.StyleValue;
    title: string;
    disabled: boolean;
    landscape: boolean;
    tag: string;
    rounded: string | number | boolean;
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
    hideWeekdays: boolean;
    showAdjacentMonths: boolean;
    showWeek: boolean;
    hideHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        header: string;
        transition: string;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1, Multiple extends boolean = false>(props: {
    modelValue?: (Multiple extends true ? T_1[] : T_1) | undefined;
    'onUpdate:modelValue'?: ((value: Multiple extends true ? T_1[] : T_1) => void) | undefined;
    multiple?: Multiple | undefined;
}, slots: VDatePickerSlots) => GenericProps<{
    modelValue?: (Multiple extends true ? T_1[] : T_1) | undefined;
    'onUpdate:modelValue'?: ((value: Multiple extends true ? T_1[] : T_1) => void) | undefined;
    multiple?: Multiple | undefined;
}, VDatePickerSlots>) & FilterPropsOptions<{
    modelValue: null;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    month: (StringConstructor | NumberConstructor)[];
    hideWeekdays: BooleanConstructor;
    multiple: BooleanConstructor;
    showAdjacentMonths: BooleanConstructor;
    showWeek: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    active: {
        type: vue.PropType<string | string[]>;
        default: undefined;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: vue.PropType<"month" | "year" | "months">;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    modelValue: null;
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    month: (StringConstructor | NumberConstructor)[];
    hideWeekdays: BooleanConstructor;
    multiple: BooleanConstructor;
    showAdjacentMonths: BooleanConstructor;
    showWeek: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    active: {
        type: vue.PropType<string | string[]>;
        default: undefined;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: vue.PropType<"month" | "year" | "months">;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VDatePicker = InstanceType<typeof VDatePicker>;

declare const VDatePickerControls: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: string | string[];
            disabled: string | boolean | string[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
        }> & Omit<{
            disabled: string | boolean | string[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
            active?: string | string[] | undefined;
            text?: string | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "onClick:year"?: (() => any) | undefined;
            "onClick:month"?: (() => any) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
            "onClick:text"?: (() => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            disabled: string | boolean | string[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
        } & {
            active?: string | string[] | undefined;
            text?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onClick:year"?: (() => any) | undefined;
            "onClick:month"?: (() => any) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
            "onClick:text"?: (() => any) | undefined;
        }, "active" | "disabled" | "nextIcon" | "prevIcon" | "modeIcon" | "viewMode">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click:year") => void) & ((event: "click:month") => void) & ((event: "click:prev") => void) & ((event: "click:next") => void) & ((event: "click:text") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: string | boolean | string[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
        } & {
            active?: string | string[] | undefined;
            text?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onClick:year"?: (() => any) | undefined;
            "onClick:month"?: (() => any) | undefined;
            "onClick:prev"?: (() => any) | undefined;
            "onClick:next"?: (() => any) | undefined;
            "onClick:text"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:year': () => true;
            'click:month': () => true;
            'click:prev': () => true;
            'click:next': () => true;
            'click:text': () => true;
        }, string, {
            active: string | string[];
            disabled: string | boolean | string[];
            nextIcon: string;
            prevIcon: string;
            modeIcon: string;
            viewMode: "month" | "year" | "months";
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        disabled: string | boolean | string[];
        nextIcon: string;
        prevIcon: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
    } & {
        active?: string | string[] | undefined;
        text?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onClick:year"?: (() => any) | undefined;
        "onClick:month"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:text"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: string | boolean | string[];
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
} & {
    active?: string | string[] | undefined;
    text?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onClick:year"?: (() => any) | undefined;
    "onClick:month"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:text"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:year': () => true;
    'click:month': () => true;
    'click:prev': () => true;
    'click:next': () => true;
    'click:text': () => true;
}, string, {
    active: string | string[];
    disabled: string | boolean | string[];
    nextIcon: string;
    prevIcon: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "year" | "months">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    disabled: {
        type: PropType<string | boolean | string[]>;
        default: boolean;
    };
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "year" | "months">;
        default: string;
    };
}>>;
type VDatePickerControls = InstanceType<typeof VDatePickerControls>;

declare const VDatePickerHeader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            color?: string | undefined;
            transition?: string | undefined;
            header?: string | undefined;
            onClick?: (((args_0: MouseEvent) => void) & (() => any)) | undefined;
            appendIcon?: string | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                prepend?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "onClick:append"?: (() => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {} & {
            color?: string | undefined;
            transition?: string | undefined;
            header?: string | undefined;
            onClick?: ((args_0: MouseEvent) => void) | undefined;
            appendIcon?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                prepend?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            onClick?: (() => any) | undefined;
            "onClick:append"?: (() => any) | undefined;
        }, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click") => void) & ((event: "click:append") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            color?: string | undefined;
            transition?: string | undefined;
            header?: string | undefined;
            onClick?: ((args_0: MouseEvent) => void) | undefined;
            appendIcon?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                prepend?: (() => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | (() => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            onClick?: (() => any) | undefined;
            "onClick:append"?: (() => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            click: () => true;
            'click:append': () => true;
        }, string, {}, {}, string, vue.SlotsType<Partial<{
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    } & {} & {
        color?: string | undefined;
        transition?: string | undefined;
        header?: string | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        appendIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            prepend?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        onClick?: (() => any) | undefined;
        "onClick:append"?: (() => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    color?: string | undefined;
    transition?: string | undefined;
    header?: string | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    appendIcon?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        prepend?: (() => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
} & {
    onClick?: (() => any) | undefined;
    "onClick:append"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    click: () => true;
    'click:append': () => true;
}, string, {}, {}, string, vue.SlotsType<Partial<{
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    appendIcon: StringConstructor;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: vue.PropType<(args_0: MouseEvent) => void>;
}, vue.ExtractPropTypes<{
    appendIcon: StringConstructor;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: vue.PropType<(args_0: MouseEvent) => void>;
}>>;
type VDatePickerHeader = InstanceType<typeof VDatePickerHeader>;

declare const VDatePickerMonth: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            multiple: boolean;
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
        }> & Omit<{
            disabled: boolean;
            multiple: boolean;
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
            max?: unknown;
            color?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            min?: unknown;
            modelValue?: unknown[] | undefined;
            allowedDates?: Function | unknown[] | undefined;
            $children?: {} | vue.VNodeChild | {
                day?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                day?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:day"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            disabled: boolean;
            multiple: boolean;
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
        } & {
            max?: unknown;
            color?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            min?: unknown;
            modelValue?: unknown[] | undefined;
            allowedDates?: Function | unknown[] | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                day?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                day?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:day"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
        }, "disabled" | "multiple" | "hideWeekdays" | "showAdjacentMonths" | "showWeek">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            day?: ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", date: any) => void) & ((event: "update:month", date: any) => void) & ((event: "update:year", date: any) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            disabled: boolean;
            multiple: boolean;
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
        } & {
            max?: unknown;
            color?: string | undefined;
            month?: string | number | undefined;
            year?: string | number | undefined;
            min?: unknown;
            modelValue?: unknown[] | undefined;
            allowedDates?: Function | unknown[] | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                day?: ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                day?: false | ((arg: {
                    props: {
                        onClick: () => void;
                    };
                    item: any;
                    i: number;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:day"?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
            "onUpdate:month"?: ((date: any) => any) | undefined;
            "onUpdate:year"?: ((date: any) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: any) => true;
            'update:month': (date: any) => true;
            'update:year': (date: any) => true;
        }, string, {
            disabled: boolean;
            multiple: boolean;
            hideWeekdays: boolean;
            showAdjacentMonths: boolean;
            showWeek: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            day: (arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
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
        disabled: boolean;
        multiple: boolean;
        hideWeekdays: boolean;
        showAdjacentMonths: boolean;
        showWeek: boolean;
    } & {
        max?: unknown;
        color?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        min?: unknown;
        modelValue?: unknown[] | undefined;
        allowedDates?: Function | unknown[] | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            day?: ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            day?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:day"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => JSX.Element> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
    multiple: boolean;
    hideWeekdays: boolean;
    showAdjacentMonths: boolean;
    showWeek: boolean;
} & {
    max?: unknown;
    color?: string | undefined;
    month?: string | number | undefined;
    year?: string | number | undefined;
    min?: unknown;
    modelValue?: unknown[] | undefined;
    allowedDates?: Function | unknown[] | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        day?: ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        day?: false | ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:day"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    "onUpdate:month"?: ((date: any) => any) | undefined;
    "onUpdate:year"?: ((date: any) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: any) => true;
    'update:month': (date: any) => true;
    'update:year': (date: any) => true;
}, string, {
    disabled: boolean;
    multiple: boolean;
    hideWeekdays: boolean;
    showAdjacentMonths: boolean;
    showWeek: boolean;
}, {}, string, vue.SlotsType<Partial<{
    day: (arg: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    color: StringConstructor;
    month: (StringConstructor | NumberConstructor)[];
    hideWeekdays: BooleanConstructor;
    max: PropType<unknown>;
    min: PropType<unknown>;
    modelValue: PropType<unknown[]>;
    multiple: BooleanConstructor;
    showAdjacentMonths: BooleanConstructor;
    showWeek: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
}, vue.ExtractPropTypes<{
    allowedDates: (FunctionConstructor | ArrayConstructor)[];
    disabled: BooleanConstructor;
    color: StringConstructor;
    month: (StringConstructor | NumberConstructor)[];
    hideWeekdays: BooleanConstructor;
    max: PropType<unknown>;
    min: PropType<unknown>;
    modelValue: PropType<unknown[]>;
    multiple: BooleanConstructor;
    showAdjacentMonths: BooleanConstructor;
    showWeek: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
}>>;
type VDatePickerMonth = InstanceType<typeof VDatePickerMonth>;

declare const VDatePickerMonths: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            height?: string | number | undefined;
            color?: string | undefined;
            modelValue?: number | undefined;
            $children?: {} | vue.VNodeChild | {
                month?: ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                month?: false | ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:month"?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {} & {
            height?: string | number | undefined;
            color?: string | undefined;
            modelValue?: number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                month?: ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                month?: false | ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:month"?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
        }, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", date: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            height?: string | number | undefined;
            color?: string | undefined;
            modelValue?: number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                month?: ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                month?: false | ((arg: {
                    month: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:month"?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((date: any) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (date: any) => boolean;
        }, string, {}, {}, string, vue.SlotsType<Partial<{
            month: (arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
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
    } & {} & {
        height?: string | number | undefined;
        color?: string | undefined;
        modelValue?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            month?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:month"?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    height?: string | number | undefined;
    color?: string | undefined;
    modelValue?: number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        month?: ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        month?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:month"?: false | ((arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (date: any) => boolean;
}, string, {}, {}, string, vue.SlotsType<Partial<{
    month: (arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    modelValue: NumberConstructor;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    modelValue: NumberConstructor;
}>>;
type VDatePickerMonths = InstanceType<typeof VDatePickerMonths>;

declare const VDatePickerYears: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{
            max?: unknown;
            height?: string | number | undefined;
            color?: string | undefined;
            min?: unknown;
            modelValue?: number | undefined;
            $children?: {} | vue.VNodeChild | {
                year?: ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                year?: false | ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:year"?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((year: number) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {} & {
            max?: unknown;
            height?: string | number | undefined;
            color?: string | undefined;
            min?: unknown;
            modelValue?: number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                year?: ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                year?: false | ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:year"?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((year: number) => any) | undefined;
        }, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", year: number) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{} & {
            max?: unknown;
            height?: string | number | undefined;
            color?: string | undefined;
            min?: unknown;
            modelValue?: number | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                year?: ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                year?: false | ((arg: {
                    year: {
                        text: string;
                        value: number;
                    };
                    i: number;
                    props: {
                        active: boolean;
                        color?: string;
                        rounded: boolean;
                        text: string;
                        variant: 'flat' | 'text';
                        onClick: () => void;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:year"?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((year: number) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (year: number) => boolean;
        }, string, {}, {}, string, vue.SlotsType<Partial<{
            year: (arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {} & {
        max?: unknown;
        height?: string | number | undefined;
        color?: string | undefined;
        min?: unknown;
        modelValue?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            year?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: 'flat' | 'text';
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:year"?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: 'flat' | 'text';
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((year: number) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{} & {
    max?: unknown;
    height?: string | number | undefined;
    color?: string | undefined;
    min?: unknown;
    modelValue?: number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        year?: ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: 'flat' | 'text';
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        year?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: 'flat' | 'text';
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:year"?: false | ((arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: 'flat' | 'text';
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((year: number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (year: number) => boolean;
}, string, {}, {}, string, vue.SlotsType<Partial<{
    year: (arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: 'flat' | 'text';
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
}>>;
type VDatePickerYears = InstanceType<typeof VDatePickerYears>;

export { VDatePicker, VDatePickerControls, VDatePickerHeader, VDatePickerMonth, VDatePickerMonths, VDatePickerYears };
