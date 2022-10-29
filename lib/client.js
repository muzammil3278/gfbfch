import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'pgmavw8h',
  dataset: 'production',
  apiversion: '2022-27-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN_SANITY
});
