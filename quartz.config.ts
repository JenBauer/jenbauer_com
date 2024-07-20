import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 * 
 * typography: {
 *       title: This is not in use yet.
 * https://venngage.com/tools/accessible-color-palette-generator
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jen Bauer",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "jenbauer.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Arsenal SC",
        header: "Figtree",
        body: "Figtree",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#d8e1ed",
          gray: "#204f78",
          darkgray: "#173d64",
          dark: "#0d2c51",
          secondary: "#284b63",
          tertiary: "#8394ab",
          highlight: "#204f78",
          textHighlight: "#8394ab",
          backgroundFade: "linear-gradient(-90deg, #76bfd1, #a0dbf9, #76bfd1)"
        },
        darkMode: {
          light: "#0d2c51",
          lightgray: "#173d64",
          gray: "#8394ab",
          darkgray: "#d8e1ed",
          dark: "#faf8f8",
          secondary: "#7b97aa",
          tertiary: "#ddedf4",
          highlight: "#ddedf4",
          textHighlight: "#faf8f8",
          backgroundFade: "linear-gradient(-90deg, #0D1D42, #023563, #03437D, #023563, #01213D)"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
