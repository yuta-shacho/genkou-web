## Qiita

https://qiita.com/yuta-shacho/items/9248e36866742b512d47

# 概要
技育CAMPハッカソンvol.17で作成した**『限稿』** フロントエンドソースコード

https://x.com/geek_pjt/status/1852988176631013735

## 背景
* 発表で使用する原稿は多くの時間と集中力を必要とする
* 従来の原稿作成では時間管理が難しい
   * 発表時にペース配分の課題がある
* Markdownでの原稿作成と時間管理機能を統合
  * 効率的で計画的な発表が可能に！

## 技術（◎=初挑戦）
**フロントエンド (TypeScript)**
* React：UIライブラリ
* TanStack Router：ルーティング用ライブラリ◎
* TanStack Query：データフェッチやキャッシュ管理を行うライブラリ◎
* MUI：cssフレームワーク
* DateFNS：日付の操作を行うライブラリ
**ツール (Tools)**
* Storybook：コンポーネントの開発やドキュメント化を支援するツール◎
* Vite：ビルドツール
* pnpm：パッケージマネージャ（npmの代替として使用）◎
**バックエンド (Python)**
* FastAPI：PythonベースのWebフレームワーク◎
* OpenAPI：APIの定義やドキュメント化に利用◎
* Orval：OpenAPIをもとにクライアントコードを生成するツール◎
**データベース (DB)**
* Supabase：PostgreSQLベースのバックエンドサービス
* MongoDB：NoSQLデータベース
**CI / デプロイ (CI / Deploy)**
* GitHub Actions：CI/CDパイプラインの自動化◎
* Cloudflare Pages：フロントエンドのホスティングサービス
* Render：バックエンドのホスティングサービス◎
### 技術的挑戦（フロントエンド担当）
* 1.TanStack Router,TanStack Queryの導入と活用
   * ルーティングライブラリであるTanStack Routerを使用し、シングルページアプリケーション（SPA）のルーティングを実装
   * TanStack Queryを活用し、サーバーからのデータ取得やキャッシュの管理を効率的に行った

* Storybookによるコンポーネント開発とドキュメント化
Storybookを初めて導入しました。これを通じて、UIコンポーネントを独立して開発・テストできた

* GitHub Actionsを用いたCI/CDパイプラインの構築
初挑戦となるGitHub Actionsを利用して、自動テストやビルド、デプロイのワークフローを構築

* OpenAPIとOrvalを活用したフロントエンドとバックエンドの統合
ここが一番大変でした。バックエンドの知識があまりなく、貢献できなくて悔しかった

## バックエンドリポジトリ

https://github.com/yuta-shacho/genkou-server

