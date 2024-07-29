import { defineConfig } from "astro/config";

export default defineConfig({
  // サイトのベースURLを設定
  base: "/02_ecsite",

  // ビルド出力ディレクトリを設定（デフォルトは 'dist'）
  outDir: "./dist/02_ecsite",
  // 必要に応じて他の設定を追加
});
