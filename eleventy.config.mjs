import fs from "node:fs";
import path from "node:path";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const INPUT = "src";
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"];

// Finds the image file for a name, ignoring case and extension.
// Returns its site path, or an empty string when there is no such image.
function imageFile(dir, name) {
	if (!name) return "";
	const files = fs.readdirSync(path.join(INPUT, dir));
	for (const ext of IMAGE_EXTENSIONS) {
		const wanted = `${name}.${ext}`.toLowerCase();
		const match = files.find((file) => file.toLowerCase() === wanted);
		if (match) return `${dir}/${match}`;
	}
	return "";
}

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ "src/static": "/" });
	eleventyConfig.addPassthroughCopy({ "src/assets/quake-maps": "/assets/quake-maps" });
	eleventyConfig.addPassthroughCopy({
		"node_modules/@fontsource-variable/mulish/files/mulish-latin-wght-normal.woff2":
			"/assets/fonts/mulish.woff2",
	});
	eleventyConfig.addWatchTarget("src/_includes/css/");

	eleventyConfig.addFilter("imageFile", imageFile);
	eleventyConfig.addGlobalData("year", () => new Date().getFullYear());

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		widths: [480, 960, 1600],
		urlPath: "/assets/img/",
		outputDir: "dist/assets/img/",
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
				sizes: "(min-width: 1024px) 960px, 100vw",
			},
		},
	});

	return {
		dir: { input: INPUT, output: "dist" },
		htmlTemplateEngine: "njk",
	};
}
