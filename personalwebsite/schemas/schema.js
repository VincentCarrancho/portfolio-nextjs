// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import { type } from "os";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Project",
      name: "project",
      type: "document",
      fields: [
        {
          title: "Project Name",
          name: "projname",
          type: "string",
        },
        {
          title: "Date",
          name: "dateofproj",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
        {
          title: "Paragraph",
          name: "projdesc",
          type: "string",
        },
        {
          title: "Github Link",
          name: "url",
          type: "string",
        },
      ],
    },
  ]),
});
