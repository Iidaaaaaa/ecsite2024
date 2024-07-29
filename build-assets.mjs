import { promises as fs } from "fs";
import path from "path";

// ビルドディレクトリとassetsディレクトリのパスを定義
const buildDir = path.join(process.cwd(), "dist");
const assetsDir = path.join(process.cwd(), "assets");

// assetsディレクトリからファイルをコピーする関数
async function copyAssets(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
        await fs.mkdir(destPath, { recursive: true });
        await copyAssets(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    })
  );
}

// ビルドディレクトリを作成し、assetsをコピー
async function build() {
  try {
    await fs.mkdir(buildDir, { recursive: true });
    await copyAssets(assetsDir, buildDir);
    console.log("Assets copied successfully.");
  } catch (error) {
    console.error("Error copying assets:", error);
  }
}

build();
