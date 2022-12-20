import esbuild from "esbuild";

const outDir = "dist";

const settings = {
    entryPoints: ["src/popup/popup.ts", "src/scripts/content.ts"],
    bundle: false,
    minify: false,
    sourcemap: true,
    outdir: outDir,
};

esbuild.build(settings).catch(() => process.exit(1));
