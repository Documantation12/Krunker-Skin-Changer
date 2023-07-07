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