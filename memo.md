# Google 認証のフロー

以下は、Google 認証を使用した際の一連のフローを示しています。

1. ユーザーがアプリケーションで「Sign in with Google」をクリックします。
2. アプリケーション（AWS Amplify 等を使用）はユーザーを`https://typing-dev.auth.ap-northeast-1.amazoncognito.com`にリダイレクトします。
3. Amazon Cognito はユーザーを Google にリダイレクトします。
4. ユーザーは Google でログインします。
5. Google はユーザーを`https://typing-dev.auth.ap-northeast-1.amazoncognito.com/oauth2/idpresponse`にリダイレクトします。
6. Amazon Cognito は認証結果を処理し、ユーザーを`http://localhost:8080/`にリダイレクトします。
7. アプリケーションは Cognito からのリダイレクトを受け取り、ユーザーが認証されたことを認識します。

このフローを理解することで、Google 認証の各ステップとその目的を理解することができます。
image.png
https://youtu.be/e9s12_G4YE4

使用しているフォント、
https://googlefonts.github.io/japanese/#nikukyu
画像SaaS
https://tech-lagoon.com/imagechef/text-to-image.html?cache=20230502211012&reloaded=true
アイコン
https://fontawesome.com/
