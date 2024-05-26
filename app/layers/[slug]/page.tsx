import { notFound } from "next/navigation";
// import LayerProps from '@/components/layer/layerProps';
import LayerHead from "@/components/layer/layerHead";
import LayerSummary from "@/components/layer/layerSummary";
// import LayerChart from '@/components/layer/layerChart';
import LayerBody from "@/components/layer/layerBody";
import { allLayers, allLayerSlugs } from "@/util/layer_index";

async function getLayerFromSlug(slug: string) {
  const layer = allLayers.find((layer) => layer.slug === slug);
  if (!layer) {
    return null;
  }
  return layer;
}

export default async function LayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("Fetching data for slug:", slug);
  const layer = await getLayerFromSlug(slug);

  if (!layer) {
    console.log("Layer not found:", slug);
    return notFound();
  }

  console.log("Fetched layer:", layer);

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center gap-8 w-full">
          <div className="flex-grow flex items-center gap-[30px] h-[156px]">
            <div className="special_header flex-grow h-20">
            {layer.title}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <h1 className="mb-2">{layer.title}</h1>
          <hr className="my-4 border-white border-2" />
        </div>
        <div className="col-span-3 md:col-span-2 pr-4">
          <LayerHead layer={layer} />
          <div className="mt-8">
            <LayerSummary layer={layer} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <LayerChart layer={layer} />
        </div>
      </div>
      <LayerBody layer={layer} />
    </article> */}
    </article>
  );
}

export async function generateStaticParams() {
  console.log("Generating paths for layers:", allLayerSlugs);
  return allLayerSlugs.map((slug) => ({
    slug,
  }));
}
