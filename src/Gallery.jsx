import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = Array.from({ length: 8 }, (_, i) => ({
    src: `https://picsum.photos/seed/${i + 1}/600/400`,
    alt: `Random ${i + 1}`,
  }));

  return (
    <main className="container">
      <h1>Image Gallery</h1>
      <section className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} />
        ))}
      </section>
    </main>
  );
}