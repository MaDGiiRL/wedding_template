import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

const Plugin = {
  id: "mermaid",

  init: function (reveal) {
    let { ...mermaidConfig } = reveal.getConfig().mermaid || {};

    mermaid.initialize({
      // The node size will be calculated incorrectly if set `startOnLoad: start`,
      // so we need to manually render.
      startOnLoad: false,
      ...mermaidConfig,
    });

    const mermaidEls = reveal.getRevealElement().querySelectorAll(".mermaid");

    Array.from(mermaidEls).forEach(async function (el) {
      var graphDefinition = el.textContent.trim();

      try {
        console.log(graphDefinition);
        const { svg } = await mermaid.render(
          `mermaid-${Math.random().toString(36).substring(2)}`,
          `%%{ init: { 'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
${graphDefinition}`
        );
        el.innerHTML = svg;
      } catch (error) {
        let errorStr = "";
        if (error?.str) {
          errorStr = error.str;
        }
        if (error?.message) {
          errorStr = error.message;
        }
        console.error(errorStr, { error, graphDefinition, el });
        el.innerHTML = errorStr;
      }
    });
  },
};

export default () => Plugin;
