/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HugoAlert {
        "button": boolean;
        "type": string;
    }
}
declare global {
    interface HTMLHugoAlertElement extends Components.HugoAlert, HTMLStencilElement {
    }
    var HTMLHugoAlertElement: {
        prototype: HTMLHugoAlertElement;
        new (): HTMLHugoAlertElement;
    };
    interface HTMLElementTagNameMap {
        "hugo-alert": HTMLHugoAlertElement;
    }
}
declare namespace LocalJSX {
    interface HugoAlert {
        "button"?: boolean;
        "type"?: string;
    }
    interface IntrinsicElements {
        "hugo-alert": HugoAlert;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hugo-alert": LocalJSX.HugoAlert & JSXBase.HTMLAttributes<HTMLHugoAlertElement>;
        }
    }
}
