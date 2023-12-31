import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType, ComponentInternalInstance, Ref, ComputedRef } from 'vue';

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

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<Readonly<number[]>>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}

type VWindowSlots = {
    default: {
        group: GroupProvide;
    };
    additional: {
        group: GroupProvide;
    };
    prev: {
        props: ControlProps;
    };
    next: {
        props: ControlProps;
    };
};
type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    ariaLabel: string;
};

type VCarouselSlots = VWindowSlots & {
    item: {
        props: Record<string, any>;
        item: {
            id: number;
            value: unknown;
            disabled: boolean | undefined;
        };
    };
};
declare const VCarousel: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
        }> & Omit<{
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
            progress?: string | boolean | undefined;
            color?: string | undefined;
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            verticalDelimiters?: boolean | "left" | "right" | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
        } & {
            progress?: string | boolean | undefined;
            color?: string | undefined;
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            verticalDelimiters?: boolean | "left" | "right" | undefined;
        } & {}, "reverse" | "interval" | "height" | "direction" | "style" | "disabled" | "tag" | "mandatory" | "touch" | "selectedClass" | "continuous" | "nextIcon" | "prevIcon" | "showArrows" | "cycle" | "delimiterIcon" | "hideDelimiters" | "hideDelimiterBackground">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            additional?: ((arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prev?: ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            next?: ((arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
        } & {
            progress?: string | boolean | undefined;
            color?: string | undefined;
            class?: any;
            touch?: boolean | TouchHandlers | undefined;
            theme?: string | undefined;
            verticalDelimiters?: boolean | "left" | "right" | undefined;
        } & {}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => boolean;
        }, "$children" | "v-slot:default" | "v-slots" | "v-slot:additional" | "modelValue" | "update:modelValue" | "v-slot:item" | "v-slot:next" | "v-slot:prev">, string, {
            reverse: boolean;
            interval: string | number;
            height: string | number;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean;
            tag: string;
            mandatory: NonNullable<boolean | "force">;
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
            showArrows: NonNullable<string | boolean>;
            cycle: boolean;
            delimiterIcon: IconValue;
            hideDelimiters: boolean;
            hideDelimiterBackground: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            additional: (arg: {
                group: GroupProvide;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prev: (arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            next: (arg: {
                props: {
                    icon: IconValue;
                    class: string;
                    onClick: () => void;
                    ariaLabel: string;
                };
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                props: Record<string, any>;
                item: {
                    id: number;
                    value: unknown;
                    disabled: boolean | undefined;
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
        reverse: boolean;
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: NonNullable<boolean | "force">;
        selectedClass: string;
        continuous: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: NonNullable<string | boolean>;
        cycle: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    } & {
        progress?: string | boolean | undefined;
        color?: string | undefined;
        class?: any;
        touch?: boolean | TouchHandlers | undefined;
        theme?: string | undefined;
        verticalDelimiters?: boolean | "left" | "right" | undefined;
    } & {} & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: NonNullable<string | boolean>;
    cycle: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
} & {
    progress?: string | boolean | undefined;
    color?: string | undefined;
    class?: any;
    touch?: boolean | TouchHandlers | undefined;
    theme?: string | undefined;
    verticalDelimiters?: boolean | "left" | "right" | undefined;
} & {}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => boolean;
}, "$children" | "v-slot:default" | "v-slots" | "v-slot:additional" | "modelValue" | "update:modelValue" | "v-slot:item" | "v-slot:next" | "v-slot:prev">, string, {
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: NonNullable<boolean | "force">;
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: NonNullable<string | boolean>;
    cycle: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    additional: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            ariaLabel: string;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: Record<string, any>;
        item: {
            id: number;
            value: unknown;
            disabled: boolean | undefined;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T_1>(props: {
    modelValue?: T_1 | undefined;
    'onUpdate:modelValue'?: ((value: T_1) => void) | undefined;
}, slots: VCarouselSlots) => GenericProps<{
    modelValue?: T_1 | undefined;
    'onUpdate:modelValue'?: ((value: T_1) => void) | undefined;
}, VCarouselSlots>) & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | boolean>>;
        default: NonNullable<string | boolean>;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
}>>;
type VCarousel = InstanceType<typeof VCarousel>;

interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}

declare const VCarouselItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            inline: boolean;
            transition: string | boolean;
            style: vue.StyleValue;
            draggable: boolean | "false" | "true";
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
            reverseTransition: string | boolean;
        }> & Omit<{
            inline: boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: string | undefined;
            transition?: string | boolean | undefined;
            value?: any;
            draggable?: boolean | "false" | "true" | undefined;
            class?: any;
            referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
            alt?: string | undefined;
            crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            inline: boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: string | undefined;
            transition?: string | boolean | undefined;
            value?: any;
            draggable?: boolean | "false" | "true" | undefined;
            class?: any;
            referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
            alt?: string | undefined;
            crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
        }, "inline" | "transition" | "style" | "draggable" | "eager" | "disabled" | "options" | "cover" | "src" | "reverseTransition">;
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
            placeholder?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            error?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            sources?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            inline: boolean;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            aspectRatio?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            position?: string | undefined;
            transition?: string | boolean | undefined;
            value?: any;
            draggable?: boolean | "false" | "true" | undefined;
            class?: any;
            referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
            alt?: string | undefined;
            crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
            sizes?: string | undefined;
            srcset?: string | undefined;
            contentClass?: string | undefined;
            gradient?: string | undefined;
            lazySrc?: string | undefined;
            selectedClass?: string | undefined;
            reverseTransition?: string | boolean | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                placeholder?: (() => vue.VNodeChild) | undefined;
                error?: (() => vue.VNodeChild) | undefined;
                sources?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                placeholder?: false | (() => vue.VNodeChild) | undefined;
                error?: false | (() => vue.VNodeChild) | undefined;
                sources?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
        }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            inline: boolean;
            transition: string | boolean;
            style: vue.StyleValue;
            draggable: boolean | "false" | "true";
            eager: boolean;
            disabled: boolean;
            options: IntersectionObserverInit;
            cover: boolean;
            src: string | srcObject;
            reverseTransition: string | boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        inline: boolean;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        aspectRatio?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: string | undefined;
        transition?: string | boolean | undefined;
        value?: any;
        draggable?: boolean | "false" | "true" | undefined;
        class?: any;
        referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        alt?: string | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        contentClass?: string | undefined;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            placeholder?: (() => vue.VNodeChild) | undefined;
            error?: (() => vue.VNodeChild) | undefined;
            sources?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            placeholder?: false | (() => vue.VNodeChild) | undefined;
            error?: false | (() => vue.VNodeChild) | undefined;
            sources?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    inline: boolean;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    aspectRatio?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: string | undefined;
    transition?: string | boolean | undefined;
    value?: any;
    draggable?: boolean | "false" | "true" | undefined;
    class?: any;
    referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
    alt?: string | undefined;
    crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
    sizes?: string | undefined;
    srcset?: string | undefined;
    contentClass?: string | undefined;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        placeholder?: (() => vue.VNodeChild) | undefined;
        error?: (() => vue.VNodeChild) | undefined;
        sources?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        placeholder?: false | (() => vue.VNodeChild) | undefined;
        error?: false | (() => vue.VNodeChild) | undefined;
        sources?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:error"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => vue.VNodeChild) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    transition: string | boolean;
    style: vue.StyleValue;
    draggable: boolean | "false" | "true";
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    placeholder: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    error: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    sources: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    draggable: {
        type: vue.PropType<boolean | "false" | "true">;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: vue.PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: vue.PropType<string | srcObject>;
        default: string;
    };
    crossorigin: vue.PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: vue.PropType<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}, vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: StringConstructor;
    inline: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    draggable: {
        type: vue.PropType<boolean | "false" | "true">;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: vue.PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: vue.PropType<string | srcObject>;
        default: string;
    };
    crossorigin: vue.PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: vue.PropType<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}>>;
type VCarouselItem = InstanceType<typeof VCarouselItem>;

export { VCarousel, VCarouselItem };
