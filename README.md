# starter-kit
html5 starter-kit

### 環境構築

nodeのバージョンはv10.15.3（安定版）推奨

npmパッケージをインストール
```
npm　install
```

yarn環境がある場合は
`yarn`

### ファイル構成

- README.md
 - このファイル
- gulpfile.js
 - gulp設定ファイル
- package.json
 - 依存するnpmパッケージに関する設定ファイル
- docs
 - jsのドキュメント
- public
 - Web公開されるファイル
- src
 - ビルドに必要な各種ソースコード

### 開発手順

 開発時に必要なタスクはgulpfile.jsで管理。
 以下のコマンドを実行することで、各種ビルド・タスク実行が可能。

- `gulp`
 - 開発用ブラウザを立ち上げ、その後ソースコードに修正があれば自動ビルド・自動ブラウザ更新します。

- `gulp prd`
 -  ファイルを本番用にビルド。画像の圧縮。cssのミニマム化。jsのミニマム化。vueを本番モードに切り替える。

### 使用言語
 - ejs　→　HTML
 - Sass　→　CSS
 - javaScript（ES6)
