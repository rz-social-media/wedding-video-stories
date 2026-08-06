"use client";

import { useState } from "react";
import { stories } from "./stories";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetUrl = (url: string) => (url.startsWith("/") ? `${publicBasePath}${url}` : url);

export default function Home() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <main className="portfolio-shell">
      <img
        alt=""
        aria-hidden="true"
        className="portfolio-backdrop"
        decoding="async"
        fetchPriority="high"
        src={assetUrl(stories[activeStory].heroImage)}
      />
      <div className="portfolio-wash" aria-hidden="true" />

      <header className="portfolio-header">
        <span className="brand" aria-label="RZ Weddings">
          <span className="brand-seal">RZ</span>
          <span className="brand-copy">
            <strong>RZ Weddings</strong>
            <small>Selected motion</small>
          </span>
        </span>

        <div className="portfolio-meta" aria-label="Wedding video portfolio">
          <span>Wedding video portfolio</span>
          <span>Selected stories</span>
        </div>
      </header>

      <section className="portfolio-intro" aria-labelledby="portfolio-title">
        <p className="eyebrow">Stories made to be felt</p>
        <h1 id="portfolio-title">
          Wedding <em>Stories</em>
        </h1>
        <p className="portfolio-description">
          Cinematic wedding videos shaped around atmosphere, movement and the
          people who made the day unforgettable.
        </p>
      </section>

      <section className="story-dock" aria-label="Selected wedding stories">
        {stories.map((story, index) => (
          <a
            className={`story-card${activeStory === index ? " is-active" : ""}`}
            href={`${publicBasePath}/weddings/${story.slug}/`}
            key={story.slug}
            onFocus={() => setActiveStory(index)}
            onMouseEnter={() => setActiveStory(index)}
            aria-label={`View ${story.names}'s wedding story`}
          >
            <img
              alt={`${story.names}'s wedding story`}
              decoding="async"
              src={assetUrl(story.heroImage)}
            />
            <span className="story-card-shade" aria-hidden="true" />
            <span className="story-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="story-card-copy">
              <small>{story.location}</small>
              <strong>{story.names}</strong>
              <span className="story-link">View story <i aria-hidden="true">↗</i></span>
            </span>
          </a>
        ))}
      </section>

      <p className="portfolio-count" aria-live="polite">
        <span>{String(activeStory + 1).padStart(2, "0")}</span> / {String(stories.length).padStart(2, "0")}
      </p>
    </main>
  );
}
