import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: "2021-08-31",
  projectId: "842ganpl", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});
