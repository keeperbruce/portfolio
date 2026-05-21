import { z, defineCollection } from 'astro:content';
// Importiamo la funzione glob, il loader nativo di Astro v6 per scansionare i file locali
import { glob } from 'astro/loaders'; 

const photosCollection = defineCollection({
  // Il loader definisce DOVE si trovano i dati e CHE TIPO di file cercare
  loader: glob({ 
    pattern: "**/*.md", // Cerca qualsiasi file Markdown a qualsiasi profondità
    base: "./src/content/photos" // La cartella di partenza per la scansione
  }),
  schema: z.object({
    title: z.string(),
    src: z.string(),
    tech: z.string(),
    date: z.string().optional(),
  }),
});

export const collections = {
  'photos': photosCollection,
};