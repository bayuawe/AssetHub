import { CollectionConfig } from "payload/types";

export const ProductFile: CollectionConfig = {
    slug: "product_files"
    admin: {
        hidden: ({ user }) => user.role !== "admin",
    },
    upload: {
        staticURL: "/product_file",
        staticDir: "product_file",
        mimeTypes: ["image/*", "font/*", "application/postscript"]
    }
}