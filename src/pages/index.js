/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import all, { attributes, react as HomeContent } from "../content/home.md";

export const Home = () => {
  const { title, cats } = attributes;

  console.log("DAta?", all);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Home;
