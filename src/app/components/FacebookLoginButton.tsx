// components/FacebookLoginButton.tsx
'use client';

import Head from "next/head";
import Script from "next/script";

const FacebookLoginButton = () => {
    const handleFacebookLogin = () => {
        window.FB.login(
            function (response: any) {
                if (response.authResponse) {
                    console.log('Welcome! Fetching your information.... ');
                    window.FB.api('/me', function (userData: any) {
                        console.log('Good to see you, ' + userData.name + '.');
                        // Send the access token to your server
                        fetch('/api/auth/facebook', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ accessToken: response.authResponse.accessToken }),
                        })
                            .then(res => res.json())
                            .then(data => {
                                // Handle the response from your server
                                console.log(data);
                            });
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            },
            { scope: 'public_profile,email' }
        );
    };

    return <>
        <Script
            id="facebook-sdk"
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </>;
};

export default FacebookLoginButton;
