import { Block } from "payload/types";
import { Widget } from "./Widget";

export const Row: Block = {
    slug: "Row",
    interfaceName: "RowBlock",
    labels:
    {
        singular: "Content Row",
        plural: "Content Rows"
    },
    fields: [
        {
            name: "widgets",
            type: "blocks",
            required: true,
            blocks: [
                Widget
            ],
            admin: {
                initCollapsed: true
            }
        }
    ]
}