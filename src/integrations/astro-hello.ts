import kleur from "kleur";
import type { AstroIntegration } from "astro";

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const logServerMessage = (message: string) => {
  const date = dateTimeFormat.format(new Date());
  console.log(`${kleur.gray(date)} ${kleur
    .bold()
    .cyan("[astro-hello-integration]")} ${message}
    `);
};

export default function helloIntegration(): AstroIntegration {
  return {
    name: "astro-hello",
    hooks: {
      "astro:config:setup": (options) => {
        options.injectScript("page", `import '/src/scripts/globalLog.js'`);

        logServerMessage("Injected script");
      },
    },
  };
}
