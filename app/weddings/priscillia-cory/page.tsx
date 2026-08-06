import type { Metadata } from "next";
import WeddingStory from "../../components/WeddingStory";
import { storyBySlug } from "../../stories";

const story = storyBySlug("priscillia-cory")!;

export const metadata: Metadata = {
  title: "Priscillia & Cory | RZ Wedding Videos",
  description: "Priscillia and Cory's wedding story in cinematic motion.",
};

export default function PriscilliaCoryPage() {
  return <WeddingStory story={story} />;
}
