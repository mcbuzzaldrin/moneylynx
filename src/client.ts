import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "lw7lyn2s", // find this at manage.sanity.io or in your sanity.json
    dataset: "bitcoin2021", // this is from those question during 'sanity init'
    useCdn: true,
});
