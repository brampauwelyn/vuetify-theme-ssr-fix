import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNode, PropType } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

declare const VSkeletonLoader: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        }> & Omit<{
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        }, "type" | "loading" | "loadingText" | "boilerplate">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        } & {
            height?: string | number | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            theme?: string | undefined;
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
            type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
            loading: boolean;
            loadingText: string;
            boilerplate: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => VNode<vue.RendererNode, vue.RendererElement, {
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
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        theme?: string | undefined;
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
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    theme?: string | undefined;
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
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
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
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[]>;
        default: string;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
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
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<"button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "subtitle" | "chip" | "avatar" | "actions" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[]>;
        default: string;
    };
}>>;
type VSkeletonLoader = InstanceType<typeof VSkeletonLoader>;

export { VSkeletonLoader };
