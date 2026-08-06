import type { Metadata } from "next";
import WeddingStory from "../../components/WeddingStory";
import { storyBySlug } from "../../stories";

const story = storyBySlug("jasmin-daniel")!;

export const metadata: Metadata = {
  title: "Jasmin & Daniel | RZ Wedding Videos",
  description: "Jasmin and Daniel's wedding story in cinematic motion.",
};

export default function JasminDanielPage() {
  return <WeddingStory story={story} />;
}
