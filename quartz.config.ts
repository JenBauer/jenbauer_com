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
    enablePopovers: false,
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
        header: "Merriweather",
        body: "Figtree",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e2eefb",
          gray: "#204f78",
          darkgray: "#122f51",
          dark: "#0c223f",
          secondary: "#0c223f",
          tertiary: "#122f51",
          highlight: "#ffffff",
          textHighlight: "#000000",
          backgroundFade: "linear-gradient(-90deg, #D6EFFA, #e2eefb, #D6EFFA)"
        },
        darkMode: {
          light: "#0c223f",
          lightgray: "#122f51",
          gray: "#e1e9f5",
          darkgray: "#ecf7fe",
          dark: "#ffffff",
          secondary: "#ecf7fe",
          tertiary: "#ddedf4",
          highlight: "#0c223f",
          textHighlight: "#000000",
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
