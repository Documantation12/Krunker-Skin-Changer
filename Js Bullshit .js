https://krunk.cc/js/login.js

const CLIENT_ID = '1112438872085889024';
const REDIRECT_URI = '/callback';
const SCOPES = 'identify';
const RESPONSE_TYPE = 'code';
const BASE = 'https://discord.com/oauth2/authorize';

document.getElementById('login').addEventListener('click', () => {
    let searchParams = new URLSearchParams();
    searchParams.set('client_id', CLIENT_ID);
    searchParams.set('redirect_uri', new URL(REDIRECT_URI, window.location.href).toString());
    searchParams.set('response_type', RESPONSE_TYPE);
    searchParams.set('scope', SCOPES);

    window.location.href = BASE + '?' + searchParams.toString();
});




https://krunk.cc/js/stats.js


fetch('/stats').then(x => x.json()).then(stats => {
    document.getElementById('users').innerText = stats.users.toLocaleString('en-US');
    document.getElementById('dlcLaunches').innerText = stats.launches.toLocaleString('en-US');
    document.getElementById('updates').innerText = stats.updates.toLocaleString('en-US');
    document.getElementById('onlineUsers').innerText = stats.online.toLocaleString('en-US');
    document.getElementById('daysSinceRelease').innerText = stats.daysSinceRelease.toLocaleString('en-US');
    document.getElementById('unpatched').innerText = stats.daysSinceLastUnpatch.toLocaleString('en-US');
});


{
    "users": 7,
    "launches": 97,
    "updates": 1,
    "online": 0,
    "daysSinceRelease": 0,
    "daysSinceLastUnpatch": 12
}



https://krunk.cc/js/team.js
let teamEl = document.getElementById('team');
fetch('/team').then(res => res.json()).then(team => {
    team.forEach(({ discriminator, avatar, role, id, global_name: displayName }) => {
        let el = document.createElement('div');
        avatar = avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.${avatar.startsWith('a_') ? 'gif' : 'png'}` : `https://cdn.discordapp.com/embed/avatars/${discriminator % 5}.png`;
        el.className = 'member';
        el.style.cssText = '--avatar: url("' + avatar + '")';
        el.innerHTML = `
            <img src="${avatar}" height="128px" alt="${displayName}">
            <div class="member-inner">
                <div class="member-name t">${displayName}</div>
                <div class="member-role g">${role}</div>
            </div>
        `;

        teamEl.appendChild(el);
    });
});



https://krunk.cc/team



[
    {
        "role": "Founder",
        "id": "1070723247781462106",
        "username": "telepresence",
        "avatar": "7c902291fd581fa4bab50756462a9cc8",
        "discriminator": "0",
        "public_flags": 4194304,
        "flags": 4194304,
        "banner": null,
        "accent_color": 0,
        "global_name": "banks",
        "avatar_decoration": null,
        "display_name": "banks",
        "banner_color": "#000000"
    },
    {
        "role": "Developer",
        "id": "740167253491843094",
        "username": "zedboy",
        "avatar": "a_dc52d0d3b59ae59fd3bd43c689754737",
        "discriminator": "0",
        "public_flags": 4194368,
        "flags": 4194368,
        "banner": "b2a3e020f081b38dd5bc8d4d75c5c354",
        "accent_color": 0,
        "global_name": "ZEDBOY",
        "avatar_decoration": null,
        "display_name": "ZEDBOY",
        "banner_color": "#000000"
    },
    {
        "role": "Developer",
        "id": "538381464622989323",
        "username": "petiuka",
        "avatar": "a_0a44a2ac4d46f3f4d783aaed21536959",
        "discriminator": "0",
        "public_flags": 128,
        "flags": 128,
        "banner": "a_aca6a12f4bab7cb4001f6ba1c9202b92",
        "accent_color": 16711680,
        "global_name": "petiuka",
        "avatar_decoration": null,
        "display_name": "petiuka",
        "banner_color": "#ff0000"
    },
    {
        "role": "Cutie",
        "id": "737808704191201343",
        "username": "bread1337.",
        "avatar": null,
        "discriminator": "0",
        "public_flags": 0,
        "flags": 0,
        "banner": null,
        "accent_color": 3553599,
        "global_name": "bread",
        "avatar_decoration": null,
        "display_name": "bread",
        "banner_color": "#36393f"
    }
]