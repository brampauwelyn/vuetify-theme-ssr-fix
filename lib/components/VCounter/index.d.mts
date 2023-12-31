import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, Component } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};
declare const VCounter: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            active: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            value: string | number;
            style: vue.StyleValue;
        }> & Omit<{
            active: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            value: string | number;
            style: vue.StyleValue;
            max?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | ((arg: VCounterSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            active: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            value: string | number;
            style: vue.StyleValue;
        } & {
            max?: string | number | undefined;
            class?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | ((arg: VCounterSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        }, "active" | "transition" | "value" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            active: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            value: string | number;
            style: vue.StyleValue;
        } & {
            max?: string | number | undefined;
            class?: any;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | ((arg: VCounterSlot) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
            active: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: Component | undefined;
            })> | {
                component: Component;
            };
            value: string | number;
            style: vue.StyleValue;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        active: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
        value: string | number;
        style: vue.StyleValue;
    } & {
        max?: string | number | undefined;
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } | ((arg: VCounterSlot) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    active: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })> | {
        component: Component;
    };
    value: string | number;
    style: vue.StyleValue;
} & {
    max?: string | number | undefined;
    class?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } | ((arg: VCounterSlot) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: Component | undefined;
    })> | {
        component: Component;
    };
    value: string | number;
    style: vue.StyleValue;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: Component | undefined;
        })> | {
            component: Component;
        };
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
type VCounter = InstanceType<typeof VCounter>;

export { VCounter };
