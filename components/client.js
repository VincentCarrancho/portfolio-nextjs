import sanityClient from "@sanity/client";
import { projectId } from "keys/keys";

export default sanityClient({
  apiVersion: "2021-08-31",
  projectId: projectId, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});
