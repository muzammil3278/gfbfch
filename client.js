import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2022-10-10',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
})


  