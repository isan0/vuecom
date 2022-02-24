import { createApp } from 'vue'
import App from './App.vue'
import router from 'vue-router'
import {createAuth0} from '@auth0/auth0.vue'

createApp(App)
    .use(router)
    .use(createAuth0({
        domain: "dev-frj0bk60.us.auth0.com",
        client_id: "PoHfA3Z5i87zvUdlNwAnVZruOE5ErMWt",
        redirect_uri: window.location.origin,
        audience: "https://vuecom-project.vercel.app/api",
        useRefreshTokens: true,
        cacheLocation: 'localstorage'
    }))
    .mount('#app')
