//フレームワーク
import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/tailwind.css";
import router from "./router";
import store from "./store";

//aws
import {
  AmplifyButton,
  AmplifyCheckBox,
  AmplifyTextField,
  Authenticator,
} from "@aws-amplify/ui-vue";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const app = createApp(App).use(router).use(store);

// Register each component as a global component
app.component("AmplifyButton", AmplifyButton);
app.component("AmplifyCheckBox", AmplifyCheckBox);
app.component("AmplifyTextField", AmplifyTextField);
app.component("AuthenticatorPage", Authenticator); // Use 'Authenticator' here instead of 'AuthenticatorView'

app.mount("#app");
