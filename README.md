# alexa-skill-visitorCounter-slot-demo

<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4295005053/kun432-22/ref=nosim/" name="amazletlink" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/41x16Y2WZkL._SL160_.jpg" alt="Amazon Alexaプログラミング入門 (impress top gear)" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4295005053/kun432-22/ref=nosim/" name="amazletlink" target="_blank">Amazon Alexaプログラミング入門 (impress top gear)</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 19.01.10</div></div><div class="amazlet-detail">畠中 幸司 <br />インプレス (2018-12-06)<br />売り上げランキング: 150,228<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4295005053/kun432-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>

章立ては悪くない本だと思っているのですが、なぜか前半がask-sdk v1。。。2018年12月時点で最も最新なのにそれはないだろうということで、v2で書き換えてみたサンプルです。第３章 3-3の「来場者カウント」スキル・スロット版です

- 第2章は[こちら](https://github.com/kun432/alexa-skill-visitorCount-demo)
- 第3章 3-4のダイアログモデル版は後ほど

## 使い方

### 1. Alexa Skills Kitの設定

- Alexa Developer Portalでスキル作成
  - 「デフォルトの言語」は「日本語」
  - スキルモデルは「カスタム」
- JSONエディター画面で、models/ja-JP.jsonをドラッグ＆ドロップ
- モデルを保存・ビルド
- エンドポイントで「AWS LambdaのARN」を選択し、スキルIDを控えておく。

### 2. Lambdaの設定

- 関数を作成
  - ランタイムは、```Node.js 8.10```
  - トリガーの追加で```Alexa Skills Kit```を選択
    - トリガーの設定で、スキルID検証を「有効（推奨）」
    - スキルIDに、Alexa Developer Portalで控えておいたスキルIDを入力
  - lambda/custom.zipをアップロード
  - 保存
- LambdaのARNを控えておく

### 3. Alexa Skills KitとLambdaの紐づけ

- Alexa Developer PortalでスキルのエンドポイントにLambdaのARNを入力1