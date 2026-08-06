import type { Metadata } from "next";
import WeddingStory from "../../components/WeddingStory";
import { storyBySlug } from "../../stories";

const story = storyBySlug("ofir-michael")!;

export const metadata: Metadata = {
  title: "Ofir & Michael | RZ Wedding Videos",
  description: "Ofir and Michael's wedding story in cinematic motion.",
};

export default function OfirMichaelPage() {
  return <WeddingStory story={story} />;
}
