// components/FacebookSDKInitializer.tsx
'use client';

import { FACEBOOK_API_VERSION, FACEBOOK_APP_ID } from '@/utils/constants';
import { useEffect } from 'react';

const FacebookSDKInitializer = () => {
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: FACEBOOK_API_VERSION,
            });

            window.FB.AppEvents.logPageView();
        };

        // (function (d, s, id) {
        //     console.log(d, s, id)

        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     console.log("%c%s", "background: #04b8f4; color: #000000", "🚀 ~ file: FacebookSDKInitializer.tsx:24 ~ useEffect ~ fjs:", fjs)
        //     console.log("%c%s", "background: #04b8f4; color: #000000", "🚀 ~ file: FacebookSDKInitializer.tsx:24 ~ useEffect ~ js:", js)


        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
        //     fjs.parentNode.insertBefore(js, fjs);
        // })(document, 'script', 'facebook-jssdk');
    }, []);

    return null;
};

export default FacebookSDKInitializer;
