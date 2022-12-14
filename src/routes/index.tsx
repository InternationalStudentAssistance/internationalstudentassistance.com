import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation, DocumentHead } from "@builder.io/qwik-city";
import { getContent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";

export const BUILDER_PUBLIC_API_KEY = '2d86af9fbb854700ab69c5d05e1bf5b9';
export const BUILDER_MODEL = "page";

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
        />
      )}
    />
  );
});


export const head: DocumentHead = {
  title: "International Student Assistance",
  meta: [
    {
      name: "description",
      content:
        "The most helpful place on the internet for international students.",
    },
  ],
};
