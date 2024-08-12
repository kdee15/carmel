import { createClient } from "contentful";
import Component2ColumnImageText from "../components/organisms/component2ColumnImageText/Component2ColumnImageText";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentFooter from "../components/blocks/componentFooter/ComponentFooter";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHome",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const handyMan = Page[0].fields.components[2].fields;
  const lockSmith = Page[0].fields.components[3].fields;
  const painting = Page[0].fields.components[4].fields;
  const roofWork = Page[0].fields.components[5].fields;
  const carpentry = Page[0].fields.components[6].fields;
  const rennovations = Page[0].fields.components[7].fields;
  const aluminium = Page[0].fields.components[8].fields;
  const footer = Page[0].fields.components[9].fields;
  console.log("Page", footer);

  return (
    <div className="anchor">
      <ComponentHeroBanner contentModule={heroBanner} />
      <Component2ColumnImageText contentModule={handyMan} />
      <Component2ColumnImageText contentModule={lockSmith} />
      <Component2ColumnImageText contentModule={painting} />
      <Component2ColumnImageText contentModule={roofWork} />
      <Component2ColumnImageText contentModule={carpentry} />
      <Component2ColumnImageText contentModule={rennovations} />
      <Component2ColumnImageText contentModule={aluminium} />
      <ComponentFooter contentModule={footer} />
    </div>
  );
}
