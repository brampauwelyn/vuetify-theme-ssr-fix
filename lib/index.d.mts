import * as vue from 'vue';
import { Ref, DeepReadonly, JSXComponent, PropType, CSSProperties, App } from 'vue';

interface DateAdapter<T = unknown> {
    date(value?: any): T | null;
    format(date: T, formatString: string): string;
    toJsDate(value: T): Date;
    parseISO(date: string): T;
    toISO(date: T): string;
    startOfDay(date: T): T;
    endOfDay(date: T): T;
    startOfMonth(date: T): T;
    endOfMonth(date: T): T;
    startOfYear(date: T): T;
    endOfYear(date: T): T;
    isBefore(date: T, comparing: T): boolean;
    isAfter(date: T, comparing: T): boolean;
    isEqual(date: T, comparing: T): boolean;
    isSameDay(date: T, comparing: T): boolean;
    isSameMonth(date: T, comparing: T): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: T, range: [T, T]): boolean;
    addDays(date: T, amount: number): T;
    addMonths(date: T, amount: number): T;
    getYear(date: T): number;
    setYear(date: T, year: number): T;
    getDiff(date: T, comparing: T | string, unit?: string): number;
    getWeekArray(date: T): T[][];
    getWeekdays(): string[];
    getMonth(date: T): number;
    setMonth(date: T, month: number): T;
    getNextMonth(date: T): T;
}

interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
interface LocaleOptions {
    messages?: LocaleMessages;
    locale?: string;
    fallback?: string;
    adapter?: LocaleInstance;
}
interface LocaleInstance {
    name: string;
    messages: Ref<LocaleMessages>;
    current: Ref<string>;
    fallback: Ref<string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
}
declare function useLocale(): LocaleInstance & RtlInstance;
interface RtlOptions {
    rtl?: Record<string, boolean>;
}
interface RtlInstance {
    isRtl: boolean;
    rtl: Record<string, boolean>;
    rtlClasses: string;
}
declare function useRtl(): {
    isRtl: boolean;
    rtlClasses: string;
};

interface DateInstance<T = DateInstanceType['instanceType']> extends DateAdapter<T> {
    locale?: any;
}
/** Supports module augmentation to specify date object types */
interface DateInstanceType {
    instanceType: unknown;
}
type InternalDateOptions<T = unknown> = {
    adapter: (new (options: {
        locale: any;
        formats?: any;
    }) => DateInstance<T>) | DateInstance<T>;
    formats?: Record<string, any>;
    locale: Record<string, any>;
};
type DateOptions<T = any> = Partial<InternalDateOptions<T>>;
declare function useDate(): {
    locale?: any;
    date: (value?: any) => unknown;
    format: (date: unknown, formatString: string) => string;
    toJsDate: (value: unknown) => Date;
    parseISO: (date: string) => unknown;
    toISO: (date: unknown) => string;
    startOfDay: (date: unknown) => unknown;
    endOfDay: (date: unknown) => unknown;
    startOfMonth: (date: unknown) => unknown;
    endOfMonth: (date: unknown) => unknown;
    startOfYear: (date: unknown) => unknown;
    endOfYear: (date: unknown) => unknown;
    isBefore: (date: unknown, comparing: unknown) => boolean;
    isAfter: (date: unknown, comparing: unknown) => boolean;
    isEqual: (date: unknown, comparing: unknown) => boolean;
    isSameDay: (date: unknown, comparing: unknown) => boolean;
    isSameMonth: (date: unknown, comparing: unknown) => boolean;
    isValid: (date: any) => boolean;
    isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
    addDays: (date: unknown, amount: number) => unknown;
    addMonths: (date: unknown, amount: number) => unknown;
    getYear: (date: unknown) => number;
    setYear: (date: unknown, year: number) => unknown;
    getDiff: (date: unknown, comparing: unknown, unit?: string | undefined) => number;
    getWeekArray: (date: unknown) => unknown[][];
    getWeekdays: () => string[];
    getMonth: (date: unknown) => number;
    setMonth: (date: unknown, month: number) => unknown;
    getNextMonth: (date: unknown) => unknown;
};

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
type ThemeOptions = false | {
    cspNonce?: string;
    defaultTheme?: string;
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
};
type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}
interface ThemeInstance {
    readonly isDisabled: boolean;
    readonly themes: Ref<Record<string, InternalThemeDefinition>>;
    readonly name: Readonly<Ref<string>>;
    readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
    readonly themeClasses: Readonly<Ref<string | undefined>>;
    readonly styles: Readonly<Ref<string>>;
    readonly global: {
        readonly name: Ref<string>;
        readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    };
}
declare function useTheme(): ThemeInstance;

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;
type DisplayThresholds = {
    [key in DisplayBreakpoint]: number;
};
interface DisplayProps {
    mobileBreakpoint?: number | DisplayBreakpoint;
}
interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
type SSROptions = boolean | {
    clientWidth: number;
    clientHeight?: number;
};
interface DisplayPlatform {
    android: boolean;
    ios: boolean;
    cordova: boolean;
    electron: boolean;
    chrome: boolean;
    edge: boolean;
    firefox: boolean;
    opera: boolean;
    win: boolean;
    mac: boolean;
    linux: boolean;
    touch: boolean;
    ssr: boolean;
}
interface DisplayInstance {
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobile: Ref<boolean>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    update(): void;
}
declare function useDisplay(props?: DisplayProps, name?: string): {
    displayClasses: vue.ComputedRef<{
        [x: string]: boolean;
    }>;
    mobile: vue.ComputedRef<boolean>;
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    /** @internal */
    ssr: boolean;
    update(): void;
};

type DefaultsInstance = undefined | {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
};
type DefaultsOptions = Partial<DefaultsInstance>;
declare function useDefaults<T extends Record<string, any>>(props: T, name?: string): T;
declare function useDefaults(props?: undefined, name?: string): Record<string, any>;

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;
interface IconAliases {
    [name: string]: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sortAsc: IconValue;
    sortDesc: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
    calendar: IconValue;
}
interface IconProps {
    tag: string;
    icon?: IconValue;
    disabled?: Boolean;
}
type IconComponent = JSXComponent<IconProps>;
interface IconSet {
    component: IconComponent;
}
type IconOptions = {
    defaultSet?: string;
    aliases?: Partial<IconAliases>;
    sets?: Record<string, IconSet>;
};

type Position = 'top' | 'left' | 'right' | 'bottom';
interface Layer {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface LayoutItem extends Layer {
    id: string;
    size: number;
    position: Position;
}
declare function useLayout(): {
    getLayoutItem: (id: string) => LayoutItem | undefined;
    mainRect: Ref<Layer>;
    mainStyles: Ref<CSSProperties>;
};

interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}

interface VuetifyOptions {
    aliases?: Record<string, any>;
    blueprint?: Blueprint;
    components?: Record<string, any>;
    date?: DateOptions;
    directives?: Record<string, any>;
    defaults?: DefaultsOptions;
    display?: DisplayOptions;
    theme?: ThemeOptions;
    icons?: IconOptions;
    locale?: LocaleOptions & RtlOptions;
    ssr?: SSROptions;
}
interface Blueprint extends Omit<VuetifyOptions, 'blueprint'> {
}
declare function createVuetify(vuetify?: VuetifyOptions): {
    install: (app: App) => void;
    defaults: vue.Ref<DefaultsInstance>;
    display: DisplayInstance;
    theme: ThemeInstance & {
        install: (app: App<any>) => void;
    };
    icons: Record<string, any>;
    locale: {
        isRtl: boolean;
        rtl: Record<string, boolean>;
        rtlClasses: string;
        name: string;
        messages: vue.Ref<LocaleMessages>;
        current: vue.Ref<string>;
        fallback: vue.Ref<string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: LocaleOptions) => LocaleInstance;
    };
    date: {
        options: InternalDateOptions<unknown>;
        instance: {
            locale?: any;
            date: (value?: any) => unknown;
            format: (date: unknown, formatString: string) => string;
            toJsDate: (value: unknown) => Date;
            parseISO: (date: string) => unknown;
            toISO: (date: unknown) => string;
            startOfDay: (date: unknown) => unknown;
            endOfDay: (date: unknown) => unknown;
            startOfMonth: (date: unknown) => unknown;
            endOfMonth: (date: unknown) => unknown;
            startOfYear: (date: unknown) => unknown;
            endOfYear: (date: unknown) => unknown;
            isBefore: (date: unknown, comparing: unknown) => boolean;
            isAfter: (date: unknown, comparing: unknown) => boolean;
            isEqual: (date: unknown, comparing: unknown) => boolean;
            isSameDay: (date: unknown, comparing: unknown) => boolean;
            isSameMonth: (date: unknown, comparing: unknown) => boolean;
            isValid: (date: any) => boolean;
            isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
            addDays: (date: unknown, amount: number) => unknown;
            addMonths: (date: unknown, amount: number) => unknown;
            getYear: (date: unknown) => number;
            setYear: (date: unknown, year: number) => unknown;
            getDiff: (date: unknown, comparing: unknown, unit?: string | undefined) => number;
            getWeekArray: (date: unknown) => unknown[][];
            getWeekdays: () => string[];
            getMonth: (date: unknown) => number;
            setMonth: (date: unknown, month: number) => unknown;
            getNextMonth: (date: unknown) => unknown;
        };
    };
};
declare namespace createVuetify {
    var version: string;
}
declare const version: string;

export { Blueprint, DateInstance, DateOptions, DefaultsInstance, DisplayBreakpoint, DisplayInstance, DisplayThresholds, IconAliases, IconOptions, IconProps, IconSet, LocaleInstance, LocaleMessages, LocaleOptions, RtlInstance, RtlOptions, SubmitEventPromise, ThemeDefinition, ThemeInstance, VuetifyOptions, createVuetify, useDate, useDefaults, useDisplay, useLayout, useLocale, useRtl, useTheme, version };

/* eslint-disable local-rules/sort-imports */

import type { ComponentPublicInstance, FunctionalComponent, UnwrapNestedRefs, VNodeChild } from 'vue'


declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      $children: {}
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>
}

declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    $children?: VNodeChild
  }
  export interface SVGAttributes {
    $children?: VNodeChild
  }
}

declare module '@vue/runtime-core' {
  interface Vuetify {
    defaults: DefaultsInstance
    display: UnwrapNestedRefs<DisplayInstance>
    theme: UnwrapNestedRefs<ThemeInstance>
    icons: IconOptions
    locale: UnwrapNestedRefs<LocaleInstance & RtlInstance>
    date: DateInstance
  }

  export interface ComponentCustomProperties {
    $vuetify: Vuetify
  }

  export interface GlobalComponents {
    VAlert: typeof import('vuetify/components')['VAlert']
    VAlertTitle: typeof import('vuetify/components')['VAlertTitle']
    VApp: typeof import('vuetify/components')['VApp']
    VAutocomplete: typeof import('vuetify/components')['VAutocomplete']
    VBadge: typeof import('vuetify/components')['VBadge']
    VAppBar: typeof import('vuetify/components')['VAppBar']
    VAppBarNavIcon: typeof import('vuetify/components')['VAppBarNavIcon']
    VAppBarTitle: typeof import('vuetify/components')['VAppBarTitle']
    VAvatar: typeof import('vuetify/components')['VAvatar']
    VBottomNavigation: typeof import('vuetify/components')['VBottomNavigation']
    VBottomSheet: typeof import('vuetify/components')['VBottomSheet']
    VBanner: typeof import('vuetify/components')['VBanner']
    VBannerActions: typeof import('vuetify/components')['VBannerActions']
    VBannerText: typeof import('vuetify/components')['VBannerText']
    VBreadcrumbs: typeof import('vuetify/components')['VBreadcrumbs']
    VBreadcrumbsItem: typeof import('vuetify/components')['VBreadcrumbsItem']
    VBreadcrumbsDivider: typeof import('vuetify/components')['VBreadcrumbsDivider']
    VBtn: typeof import('vuetify/components')['VBtn']
    VBtnToggle: typeof import('vuetify/components')['VBtnToggle']
    VCheckbox: typeof import('vuetify/components')['VCheckbox']
    VCheckboxBtn: typeof import('vuetify/components')['VCheckboxBtn']
    VChip: typeof import('vuetify/components')['VChip']
    VBtnGroup: typeof import('vuetify/components')['VBtnGroup']
    VCard: typeof import('vuetify/components')['VCard']
    VCardActions: typeof import('vuetify/components')['VCardActions']
    VCardItem: typeof import('vuetify/components')['VCardItem']
    VCardSubtitle: typeof import('vuetify/components')['VCardSubtitle']
    VCardText: typeof import('vuetify/components')['VCardText']
    VCardTitle: typeof import('vuetify/components')['VCardTitle']
    VCarousel: typeof import('vuetify/components')['VCarousel']
    VCarouselItem: typeof import('vuetify/components')['VCarouselItem']
    VChipGroup: typeof import('vuetify/components')['VChipGroup']
    VCode: typeof import('vuetify/components')['VCode']
    VColorPicker: typeof import('vuetify/components')['VColorPicker']
    VCounter: typeof import('vuetify/components')['VCounter']
    VDivider: typeof import('vuetify/components')['VDivider']
    VCombobox: typeof import('vuetify/components')['VCombobox']
    VDataTable: typeof import('vuetify/components')['VDataTable']
    VDataTableFooter: typeof import('vuetify/components')['VDataTableFooter']
    VDataTableRows: typeof import('vuetify/components')['VDataTableRows']
    VDataTableRow: typeof import('vuetify/components')['VDataTableRow']
    VDataTableVirtual: typeof import('vuetify/components')['VDataTableVirtual']
    VDataTableServer: typeof import('vuetify/components')['VDataTableServer']
    VField: typeof import('vuetify/components')['VField']
    VFieldLabel: typeof import('vuetify/components')['VFieldLabel']
    VExpansionPanels: typeof import('vuetify/components')['VExpansionPanels']
    VExpansionPanel: typeof import('vuetify/components')['VExpansionPanel']
    VExpansionPanelText: typeof import('vuetify/components')['VExpansionPanelText']
    VExpansionPanelTitle: typeof import('vuetify/components')['VExpansionPanelTitle']
    VDialog: typeof import('vuetify/components')['VDialog']
    VDatePicker: typeof import('vuetify/components')['VDatePicker']
    VDatePickerControls: typeof import('vuetify/components')['VDatePickerControls']
    VDatePickerHeader: typeof import('vuetify/components')['VDatePickerHeader']
    VDatePickerMonth: typeof import('vuetify/components')['VDatePickerMonth']
    VDatePickerMonths: typeof import('vuetify/components')['VDatePickerMonths']
    VDatePickerYears: typeof import('vuetify/components')['VDatePickerYears']
    VFileInput: typeof import('vuetify/components')['VFileInput']
    VFooter: typeof import('vuetify/components')['VFooter']
    VImg: typeof import('vuetify/components')['VImg']
    VIcon: typeof import('vuetify/components')['VIcon']
    VComponentIcon: typeof import('vuetify/components')['VComponentIcon']
    VSvgIcon: typeof import('vuetify/components')['VSvgIcon']
    VLigatureIcon: typeof import('vuetify/components')['VLigatureIcon']
    VClassIcon: typeof import('vuetify/components')['VClassIcon']
    VInput: typeof import('vuetify/components')['VInput']
    VInfiniteScroll: typeof import('vuetify/components')['VInfiniteScroll']
    VLabel: typeof import('vuetify/components')['VLabel']
    VKbd: typeof import('vuetify/components')['VKbd']
    VItemGroup: typeof import('vuetify/components')['VItemGroup']
    VItem: typeof import('vuetify/components')['VItem']
    VMain: typeof import('vuetify/components')['VMain']
    VList: typeof import('vuetify/components')['VList']
    VListGroup: typeof import('vuetify/components')['VListGroup']
    VListImg: typeof import('vuetify/components')['VListImg']
    VListItem: typeof import('vuetify/components')['VListItem']
    VListItemAction: typeof import('vuetify/components')['VListItemAction']
    VListItemMedia: typeof import('vuetify/components')['VListItemMedia']
    VListItemSubtitle: typeof import('vuetify/components')['VListItemSubtitle']
    VListItemTitle: typeof import('vuetify/components')['VListItemTitle']
    VListSubheader: typeof import('vuetify/components')['VListSubheader']
    VMessages: typeof import('vuetify/components')['VMessages']
    VMenu: typeof import('vuetify/components')['VMenu']
    VOverlay: typeof import('vuetify/components')['VOverlay']
    VNavigationDrawer: typeof import('vuetify/components')['VNavigationDrawer']
    VOtpInput: typeof import('vuetify/components')['VOtpInput']
    VProgressCircular: typeof import('vuetify/components')['VProgressCircular']
    VPagination: typeof import('vuetify/components')['VPagination']
    VRadioGroup: typeof import('vuetify/components')['VRadioGroup']
    VProgressLinear: typeof import('vuetify/components')['VProgressLinear']
    VRating: typeof import('vuetify/components')['VRating']
    VSelect: typeof import('vuetify/components')['VSelect']
    VSelectionControl: typeof import('vuetify/components')['VSelectionControl']
    VSkeletonLoader: typeof import('vuetify/components')['VSkeletonLoader']
    VSheet: typeof import('vuetify/components')['VSheet']
    VSlideGroup: typeof import('vuetify/components')['VSlideGroup']
    VSlideGroupItem: typeof import('vuetify/components')['VSlideGroupItem']
    VStepper: typeof import('vuetify/components')['VStepper']
    VStepperActions: typeof import('vuetify/components')['VStepperActions']
    VStepperHeader: typeof import('vuetify/components')['VStepperHeader']
    VStepperItem: typeof import('vuetify/components')['VStepperItem']
    VStepperWindow: typeof import('vuetify/components')['VStepperWindow']
    VStepperWindowItem: typeof import('vuetify/components')['VStepperWindowItem']
    VSlider: typeof import('vuetify/components')['VSlider']
    VSelectionControlGroup: typeof import('vuetify/components')['VSelectionControlGroup']
    VTabs: typeof import('vuetify/components')['VTabs']
    VTab: typeof import('vuetify/components')['VTab']
    VSystemBar: typeof import('vuetify/components')['VSystemBar']
    VSnackbar: typeof import('vuetify/components')['VSnackbar']
    VTextField: typeof import('vuetify/components')['VTextField']
    VTextarea: typeof import('vuetify/components')['VTextarea']
    VTable: typeof import('vuetify/components')['VTable']
    VSwitch: typeof import('vuetify/components')['VSwitch']
    VTooltip: typeof import('vuetify/components')['VTooltip']
    VToolbar: typeof import('vuetify/components')['VToolbar']
    VToolbarTitle: typeof import('vuetify/components')['VToolbarTitle']
    VToolbarItems: typeof import('vuetify/components')['VToolbarItems']
    VTimeline: typeof import('vuetify/components')['VTimeline']
    VTimelineItem: typeof import('vuetify/components')['VTimelineItem']
    VWindow: typeof import('vuetify/components')['VWindow']
    VWindowItem: typeof import('vuetify/components')['VWindowItem']
    VDataIterator: typeof import('vuetify/components')['VDataIterator']
    VDefaultsProvider: typeof import('vuetify/components')['VDefaultsProvider']
    VForm: typeof import('vuetify/components')['VForm']
    VHover: typeof import('vuetify/components')['VHover']
    VContainer: typeof import('vuetify/components')['VContainer']
    VCol: typeof import('vuetify/components')['VCol']
    VRow: typeof import('vuetify/components')['VRow']
    VSpacer: typeof import('vuetify/components')['VSpacer']
    VLazy: typeof import('vuetify/components')['VLazy']
    VLayout: typeof import('vuetify/components')['VLayout']
    VLayoutItem: typeof import('vuetify/components')['VLayoutItem']
    VLocaleProvider: typeof import('vuetify/components')['VLocaleProvider']
    VParallax: typeof import('vuetify/components')['VParallax']
    VNoSsr: typeof import('vuetify/components')['VNoSsr']
    VRadio: typeof import('vuetify/components')['VRadio']
    VRangeSlider: typeof import('vuetify/components')['VRangeSlider']
    VResponsive: typeof import('vuetify/components')['VResponsive']
    VThemeProvider: typeof import('vuetify/components')['VThemeProvider']
    VValidation: typeof import('vuetify/components')['VValidation']
    VFabTransition: typeof import('vuetify/components')['VFabTransition']
    VDialogBottomTransition: typeof import('vuetify/components')['VDialogBottomTransition']
    VDialogTopTransition: typeof import('vuetify/components')['VDialogTopTransition']
    VFadeTransition: typeof import('vuetify/components')['VFadeTransition']
    VScaleTransition: typeof import('vuetify/components')['VScaleTransition']
    VScrollXTransition: typeof import('vuetify/components')['VScrollXTransition']
    VScrollXReverseTransition: typeof import('vuetify/components')['VScrollXReverseTransition']
    VScrollYTransition: typeof import('vuetify/components')['VScrollYTransition']
    VScrollYReverseTransition: typeof import('vuetify/components')['VScrollYReverseTransition']
    VSlideXTransition: typeof import('vuetify/components')['VSlideXTransition']
    VSlideXReverseTransition: typeof import('vuetify/components')['VSlideXReverseTransition']
    VSlideYTransition: typeof import('vuetify/components')['VSlideYTransition']
    VSlideYReverseTransition: typeof import('vuetify/components')['VSlideYReverseTransition']
    VExpandTransition: typeof import('vuetify/components')['VExpandTransition']
    VExpandXTransition: typeof import('vuetify/components')['VExpandXTransition']
    VDialogTransition: typeof import('vuetify/components')['VDialogTransition']
    VVirtualScroll: typeof import('vuetify/components')['VVirtualScroll']
    VPicker: typeof import('vuetify/labs/components')['VPicker']
    VPickerTitle: typeof import('vuetify/labs/components')['VPickerTitle']
    VConfirmEdit: typeof import('vuetify/labs/components')['VConfirmEdit']
  }
}
