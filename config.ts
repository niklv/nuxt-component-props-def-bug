import type {ComponentA} from "#components";
import {ComponentOptionsBase} from "@vue/runtime-core";


type ComponentProps<T> = T extends ComponentOptionsBase<infer P, // Props
    any, // RawBindings
    any, // D
    any, // C
    any, // M
    any, // Mixin
    any, // Extends
    any> ? unknown extends P ? {} : P : {};


type CompAProps = ComponentProps<typeof ComponentA>


const someConfig:CompAProps = {
    // @ts-expect-error
    notExistedProp: true // should be error
}