import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

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
type SelectItemKey<T = Record<string, any>> = boolean | null | undefined | string | readonly (string | number)[] | ((item: T, fallback?: any) => any);

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type ListItemSlot = {
    isActive: boolean;
    isSelected: boolean;
    isIndeterminate: boolean;
    select: (value: boolean) => void;
};
type ListItemTitleSlot = {
    title?: string | number | boolean;
};
type ListItemSubtitleSlot = {
    subtitle?: string | number | boolean;
};
type VListItemSlots = {
    prepend: ListItemSlot;
    append: ListItemSlot;
    default: ListItemSlot;
    title: ListItemTitleSlot;
    subtitle: ListItemSubtitleSlot;
};
declare const VListItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            link: boolean;
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }> & Omit<{
            replace: boolean;
            exact: boolean;
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            onClick?: (((args_0: MouseEvent) => void) & ((e: MouseEvent | KeyboardEvent) => any)) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            activeColor?: string | undefined;
            subtitle?: string | number | boolean | undefined;
            lines?: "one" | "two" | "three" | undefined;
            $children?: vue.VNodeChild | {
                prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | ((arg: ListItemSlot) => vue.VNodeChild);
            'v-slots'?: {
                prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            replace: boolean;
            exact: boolean;
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            onClick?: ((args_0: MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            activeColor?: string | undefined;
            subtitle?: string | number | boolean | undefined;
            lines?: "one" | "two" | "three" | undefined;
        } & {
            $children?: vue.VNodeChild | {
                prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | ((arg: ListItemSlot) => vue.VNodeChild);
            'v-slots'?: {
                prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, "replace" | "link" | "exact" | "active" | "nav" | "style" | "disabled" | "tag" | "rounded" | "density" | "variant" | "slim" | "ripple">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: ((arg: ListItemTitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "click", e: MouseEvent | KeyboardEvent) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            replace: boolean;
            exact: boolean;
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            onClick?: ((args_0: MouseEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            activeColor?: string | undefined;
            subtitle?: string | number | boolean | undefined;
            lines?: "one" | "two" | "three" | undefined;
        } & {
            $children?: vue.VNodeChild | {
                prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | ((arg: ListItemSlot) => vue.VNodeChild);
            'v-slots'?: {
                prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
                title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            click: (e: MouseEvent | KeyboardEvent) => true;
        }, string, {
            replace: boolean;
            link: boolean;
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }, {}, string, vue.SlotsType<Partial<{
            prepend: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            title: (arg: ListItemTitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: ListItemSubtitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        replace: boolean;
        exact: boolean;
        nav: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        density: Density;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        activeColor?: string | undefined;
        subtitle?: string | number | boolean | undefined;
        lines?: "one" | "two" | "three" | undefined;
    } & {
        $children?: vue.VNodeChild | {
            prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | ((arg: ListItemSlot) => vue.VNodeChild);
        'v-slots'?: {
            prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    exact: boolean;
    nav: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
} & {
    link?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    title?: string | number | boolean | undefined;
    class?: any;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    activeColor?: string | undefined;
    subtitle?: string | number | boolean | undefined;
    lines?: "one" | "two" | "three" | undefined;
} & {
    $children?: vue.VNodeChild | {
        prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    } | ((arg: ListItemSlot) => vue.VNodeChild);
    'v-slots'?: {
        prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
} & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    click: (e: MouseEvent | KeyboardEvent) => true;
}, string, {
    replace: boolean;
    link: boolean;
    exact: boolean;
    active: boolean;
    nav: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
}, {}, string, vue.SlotsType<Partial<{
    prepend: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: ListItemTitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: ListItemSubtitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
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
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three">;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    slim: BooleanConstructor;
    subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    value: null;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
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
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three">;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    slim: BooleanConstructor;
    subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    value: null;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
}>>;
type VListItem = InstanceType<typeof VListItem>;

type OpenStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type OpenSelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown> | null;
type OpenStrategy = {
    open: OpenStrategyFn;
    select: OpenSelectStrategyFn;
};

type SelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Map<unknown, 'on' | 'off' | 'indeterminate'>;

type SelectStrategy = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | 'classic' | SelectStrategyFn;
type OpenStrategyProp = 'single' | 'multiple' | 'list' | OpenStrategy;

type VListChildrenSlots<T> = {
    [K in keyof Omit<VListItemSlots, 'default'>]: VListItemSlots[K] & {
        item: T;
    };
} & {
    default: never;
    item: {
        props: InternalListItem['props'];
    };
    divider: {
        props: InternalListItem['props'];
    };
    subheader: {
        props: InternalListItem['props'];
    };
    header: {
        props: InternalListItem['props'];
    };
};

interface InternalItem<T = any> {
    value: any;
    raw: T;
}

interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children?: ListItem<T>[];
}

interface InternalListItem<T = any> extends ListItem<T> {
    type?: 'item' | 'subheader' | 'divider';
}
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
declare const VList: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            valueComparator: typeof deepEqual;
            selectStrategy: NonNullable<SelectStrategy>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            valueComparator: typeof deepEqual;
            selectStrategy: NonNullable<SelectStrategy>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            valueComparator: typeof deepEqual;
            selectStrategy: NonNullable<SelectStrategy>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
        } & {
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "nav" | "style" | "disabled" | "tag" | "mandatory" | "rounded" | "density" | "variant" | "slim" | "valueComparator" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            title?: ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "click:open", value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) & ((event: "click:select", value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            valueComparator: typeof deepEqual;
            selectStrategy: NonNullable<SelectStrategy>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            rounded?: string | number | boolean | undefined;
            bgColor?: string | undefined;
            baseColor?: string | undefined;
            activeClass?: string | undefined;
            activeColor?: string | undefined;
        } & {
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, {
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:selected': (value: unknown[]) => boolean;
            'update:opened': (value: unknown[]) => boolean;
            'click:open': (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => boolean;
            'click:select': (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => boolean;
        }, "$children" | "selected" | "v-slot:default" | "items" | "v-slots" | "v-slot:title" | "v-slot:append" | "v-slot:prepend" | "opened" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader" | "itemTitle" | "itemValue" | "itemChildren" | "itemProps" | "update:selected" | "update:opened">, string, {
            nav: boolean;
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: Density;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            slim: boolean;
            valueComparator: typeof deepEqual;
            selectStrategy: NonNullable<SelectStrategy>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }, {}, string, vue.SlotsType<Partial<{
            title: (arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: {
                isActive: boolean;
                isSelected: boolean;
                isIndeterminate: boolean;
                select: (value: boolean) => void;
            } & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subtitle: (arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            divider: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            subheader: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            header: (arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
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
    } & {
        nav: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean;
        density: Density;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        slim: boolean;
        valueComparator: typeof deepEqual;
        selectStrategy: NonNullable<SelectStrategy>;
        openStrategy: NonNullable<OpenStrategyProp>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        elevation?: string | number | undefined;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        baseColor?: string | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
    } & {
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        open: (id: unknown, value: boolean, event?: Event | undefined) => void;
        select: (id: unknown, value: boolean, event?: Event | undefined) => void;
        focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
    }> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    nav: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    slim: boolean;
    valueComparator: typeof deepEqual;
    selectStrategy: NonNullable<SelectStrategy>;
    openStrategy: NonNullable<OpenStrategyProp>;
    lines: false | "one" | "two" | "three";
    returnObject: boolean;
    itemType: string;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
    elevation?: string | number | undefined;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    baseColor?: string | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
} & {
    "onClick:open"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
}, {
    open: (id: unknown, value: boolean, event?: Event | undefined) => void;
    select: (id: unknown, value: boolean, event?: Event | undefined) => void;
    focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:selected': (value: unknown[]) => boolean;
    'update:opened': (value: unknown[]) => boolean;
    'click:open': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
    'click:select': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
}, "$children" | "selected" | "v-slot:default" | "items" | "v-slots" | "v-slot:title" | "v-slot:append" | "v-slot:prepend" | "opened" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader" | "itemTitle" | "itemValue" | "itemChildren" | "itemProps" | "update:selected" | "update:opened">, string, {
    nav: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean;
    rounded: string | number | boolean;
    density: Density;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    slim: boolean;
    valueComparator: typeof deepEqual;
    selectStrategy: NonNullable<SelectStrategy>;
    openStrategy: NonNullable<OpenStrategyProp>;
    lines: false | "one" | "two" | "three";
    returnObject: boolean;
    itemType: string;
}, {}, string, vue.SlotsType<Partial<{
    title: (arg: ListItemTitleSlot & {
        item: any;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: {
        isActive: boolean;
        isSelected: boolean;
        isIndeterminate: boolean;
        select: (value: boolean) => void;
    } & {
        item: any;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: {
        isActive: boolean;
        isSelected: boolean;
        isIndeterminate: boolean;
        select: (value: boolean) => void;
    } & {
        item: any;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: ListItemSubtitleSlot & {
        item: any;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    divider: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subheader: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1 extends readonly any[], S = unknown, O = unknown>(props: {
    items?: T_1 | undefined;
    itemTitle?: SelectItemKey<ItemType<T_1>>;
    itemValue?: SelectItemKey<ItemType<T_1>>;
    itemChildren?: SelectItemKey<ItemType<T_1>>;
    itemProps?: SelectItemKey<ItemType<T_1>>;
    selected?: readonly S[] | undefined;
    'onUpdate:selected'?: ((value: S[]) => void) | undefined;
    opened?: readonly O[] | undefined;
    'onUpdate:opened'?: ((value: O[]) => void) | undefined;
}, slots: VListChildrenSlots<ItemType<T_1>>) => GenericProps<{
    items?: T_1 | undefined;
    itemTitle?: SelectItemKey<ItemType<T_1>>;
    itemValue?: SelectItemKey<ItemType<T_1>>;
    itemChildren?: SelectItemKey<ItemType<T_1>>;
    itemProps?: SelectItemKey<ItemType<T_1>>;
    selected?: readonly S[] | undefined;
    'onUpdate:selected'?: ((value: S[]) => void) | undefined;
    opened?: readonly O[] | undefined;
    'onUpdate:opened'?: ((value: O[]) => void) | undefined;
}, VListChildrenSlots<ItemType<T_1>>>) & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    itemType: {
        type: StringConstructor;
        default: string;
    };
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
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    selectStrategy: {
        type: PropType<NonNullable<SelectStrategy>>;
        default: NonNullable<SelectStrategy>;
    };
    openStrategy: {
        type: PropType<NonNullable<OpenStrategyProp>>;
        default: NonNullable<OpenStrategyProp>;
    };
    opened: PropType<readonly unknown[]>;
    selected: PropType<readonly unknown[]>;
    mandatory: BooleanConstructor;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: string;
    };
    slim: BooleanConstructor;
    nav: BooleanConstructor;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    itemType: {
        type: StringConstructor;
        default: string;
    };
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
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    selectStrategy: {
        type: PropType<NonNullable<SelectStrategy>>;
        default: NonNullable<SelectStrategy>;
    };
    openStrategy: {
        type: PropType<NonNullable<OpenStrategyProp>>;
        default: NonNullable<OpenStrategyProp>;
    };
    opened: PropType<readonly unknown[]>;
    selected: PropType<readonly unknown[]>;
    mandatory: BooleanConstructor;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: string;
    };
    slim: BooleanConstructor;
    nav: BooleanConstructor;
}>>;
type VList = InstanceType<typeof VList>;

declare const VListGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        }> & Omit<{
            style: vue.StyleValue;
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
            color?: string | undefined;
            value?: any;
            title?: string | undefined;
            class?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        } & {
            color?: string | undefined;
            value?: any;
            title?: string | undefined;
            class?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        }, "style" | "tag" | "subgroup" | "collapseIcon" | "expandIcon" | "fluid">;
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
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        } & {
            color?: string | undefined;
            value?: any;
            title?: string | undefined;
            class?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isOpen: boolean;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
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
        style: vue.StyleValue;
        tag: string;
        subgroup: boolean;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        fluid: boolean;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        class?: any;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    subgroup: boolean;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    fluid: boolean;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    class?: any;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
    subgroup: boolean;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    fluid: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    activator: (arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prependIcon: vue.PropType<IconValue>;
    appendIcon: vue.PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prependIcon: vue.PropType<IconValue>;
    appendIcon: vue.PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}>>;
type VListGroup = InstanceType<typeof VListGroup>;

declare const VListImg: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            tag: string;
        }> & Omit<{
            style: vue.StyleValue;
            tag: string;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "style" | "tag">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
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
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VListImg = InstanceType<typeof VListImg>;

declare const VListItemAction: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        }> & Omit<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "end" | "start" | "style" | "tag">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
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
        end: boolean;
        start: boolean;
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    end: boolean;
    start: boolean;
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    end: boolean;
    start: boolean;
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>;
type VListItemAction = InstanceType<typeof VListItemAction>;

declare const VListItemMedia: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        }> & Omit<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "end" | "start" | "style" | "tag">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            end: boolean;
            start: boolean;
            style: vue.StyleValue;
            tag: string;
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
        end: boolean;
        start: boolean;
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    end: boolean;
    start: boolean;
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    end: boolean;
    start: boolean;
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>;
type VListItemMedia = InstanceType<typeof VListItemMedia>;

declare const VListItemSubtitle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            tag: string;
        }> & Omit<{
            style: vue.StyleValue;
            tag: string;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "style" | "tag">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
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
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VListItemSubtitle = InstanceType<typeof VListItemSubtitle>;

declare const VListItemTitle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            tag: string;
        }> & Omit<{
            style: vue.StyleValue;
            tag: string;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "style" | "tag">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            tag: string;
        } & {
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            style: vue.StyleValue;
            tag: string;
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
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VListItemTitle = InstanceType<typeof VListItemTitle>;

declare const VListSubheader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            inset: boolean;
            style: vue.StyleValue;
            tag: string;
            sticky: boolean;
        }> & Omit<{
            inset: boolean;
            style: vue.StyleValue;
            tag: string;
            sticky: boolean;
            color?: string | undefined;
            title?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            inset: boolean;
            style: vue.StyleValue;
            tag: string;
            sticky: boolean;
        } & {
            color?: string | undefined;
            title?: string | undefined;
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "inset" | "style" | "tag" | "sticky">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inset: boolean;
            style: vue.StyleValue;
            tag: string;
            sticky: boolean;
        } & {
            color?: string | undefined;
            title?: string | undefined;
            class?: any;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            inset: boolean;
            style: vue.StyleValue;
            tag: string;
            sticky: boolean;
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
        inset: boolean;
        style: vue.StyleValue;
        tag: string;
        sticky: boolean;
    } & {
        color?: string | undefined;
        title?: string | undefined;
        class?: any;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inset: boolean;
    style: vue.StyleValue;
    tag: string;
    sticky: boolean;
} & {
    color?: string | undefined;
    title?: string | undefined;
    class?: any;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    inset: boolean;
    style: vue.StyleValue;
    tag: string;
    sticky: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
}>>;
type VListSubheader = InstanceType<typeof VListSubheader>;

export { VList, VListGroup, VListImg, VListItem, VListItemAction, VListItemMedia, VListItemSubtitle, VListItemTitle, VListSubheader };
