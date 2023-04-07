import { defineConfig } from "astro/config";
import astroHello from "./src/integrations/astro-hello";

// https://astro.build/config
export default defineConfig({
  integrations: [astroHello()],
});
