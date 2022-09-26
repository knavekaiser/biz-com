import { endpoints } from "config";

export const getServerSideProps = async (ctx) => {
  const file = await fetch(
    `${endpoints.server.baseApiUrl}${ctx.resolvedUrl}`
  ).then((res) => res.blob());
  // console.log(ctx.res);
  // return { props: {} };
  return {
    redirect: {
      destination: `${endpoints.server.baseApiUrl}${ctx.resolvedUrl}`,
      permanent: false,
    },
  };
  // return ctx.res.sendFile(file);
};

export default function File({ url }) {
  return <>ulr</>;
}
