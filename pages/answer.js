import { createClient } from "next-sanity";

export default function IndexPage({ animals }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Animals</h2>
        <ul>
          {animals.map((animal) => (
            <ul key={animal._id}>
              {animal.question}
              <li>{animal.option1}</li>
              <li>{animal.option2}</li>
            </ul>
          ))}
        </ul>
      </main>
    </>
  );
}

const client = createClient({
  projectId: "pgmavw8h",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getStaticProps() {
  const animals = await client.fetch(`*[_type == "animal"]`);

  return {
    props: {
      animals,
    },
  };
}
