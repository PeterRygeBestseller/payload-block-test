import { Block, CollectionConfig } from "payload/types";
import { Row } from "../blocks/Row";
import { text } from "express";

export const Categories: CollectionConfig = {
    slug: "categories",
    versions: {
        drafts: true,
        maxPerDoc: 10
    },
    fields: [
        {
            label: "Name",
            name: "name",
            type: "text",
            required: true
        },
        {
            type: "tabs",
            tabs: [
                {
                    label: "Content",
                    fields: [
                        {
                            name: "rows",
                            type: "blocks",
                            localized: true,
                            blocks: [
                                Row
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    admin: {
        useAsTitle: "name"
    }
}

export default Categories