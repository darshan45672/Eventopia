import Head from "next/head";
import CustomComponents from "../components/mycustom/MyCustom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eventopia</title>
        <meta
          name="description"
          content="MITE event management"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
