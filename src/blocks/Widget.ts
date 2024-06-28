import {Block} from "payload/types";

export const Widget: Block = {
    slug: "Widget",
    interfaceName: "WidgetBlock",
    fields: [
        {
            name: "text",
            type: "richText",
            required: true
        }
    ]
}