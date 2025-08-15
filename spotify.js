function loadPlaylist(panelID, file, cssFile) {
    fetch(file)
    .then(res => res.text())
    .then(html => {
        document.getElementById(panelID).innerHTML = html;

        document.querySelectorAll('.snippet-style').forEach(el => el.remove());

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssFile;
        link.classList.add("snippet-style");
        document.head.appendChild(link);

        const playlistContainer = document.getElementById('songs-playlist');
        if (!playlistContainer) {
            console.error('Container #songs-playlist NOT found');
            return;
        }

        const playlist = [
            {
                cover: 'https://i.scdn.co/image/ab67616d0000b2736182cfe2e2a090d125c81dc0',
                title: 'Les',
                artist: 'Childish Gambino',
                album: 'Camp',
                duration: '5:17',
                artistImage: 'https://www.rollingstone.com/wp-content/uploads/2024/07/childish-gambino-album-is-here.jpg?w=1581&h=1054&crop=1',
                bio: 'nobody gives a fu*k',
                listeners: '25,860,824 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/1153d899d70528bf2182769c0eb41898.1000x1000x1.jpg',
                title: 'What You Heard',
                artist: 'Sonder',
                album: 'What You Heard',
                duration: '3:18',
                artistImage: 'https://earmilk.com/wp-content/uploads/2019/02/sonder3jpg-800x380.jpg',
                bio: 'Made up of producers Atu and Dpat with lead vocals by Brent Faiyaz, the collaborative entity Sonder took formk',
                listeners: '7,453,126 monthly listeners',
            },
            {
                cover: 'https://i.scdn.co/image/ab67616d0000b27309a4abca212c575edf9f6c77',
                title: 'Wicked Game',
                artist: 'Chris Isaak',
                album: 'Heart Shaped World',
                duration: '4:47',
                artistImage: 'https://www.buscadero.com/wp-content/uploads/2016/02/ChrisIsaak-FTR-.jpg',
                bio: 'Chris Isaak fashioned himself as a throwback to the early days of rock & roll, devising a fusion between <span><a href="">Elvis</a></span>...k',
                listeners: '9,847,602 monthly listeners',
            },
            {
                cover: 'https://i.scdn.co/image/ab67616d0000b273ebc6455b3ba773abc40119c0',
                title: 'Glory Box',
                artist: 'Portishead',
                album: 'Roseland NYC Live',
                duration: '5:37',
                artistImage: 'https://i.scdn.co/image/05d3721739aee511a898081ab140daa7890a0120',
                bio: 'PORTISHEAD Beth Gibbons, Geoff Barrow and Adrian Utley, sometimes citing a fourth member, Dave',
                listeners: '5,274,187 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/5e5355bc88adec85d4ac512fda916472.1000x1000x1.jpg',
                title: 'All I Wanted',
                artist: 'Paramore',
                album: 'Brand New Eyes',
                duration: '3:45',
                artistImage: 'https://i0.wp.com/withdrumsandcolour.com/wp-content/uploads/2017/11/paramore.png?fit=770,281&ssl=1',
                bio: 'When Paramore revealed they were recording together in January 2022 the response from music fans around the ',
                listeners: '29,017,673 monthly listeners',
            },
            {
                cover: 'https://f4.bcbits.com/img/a1806759544_10.jpg',
                title: 'Sour Breath',
                artist: 'Julien Baker',
                album: 'Turn Out the Lights',
                duration: '3:04',
                artistImage: 'https://www.nme.com/wp-content/uploads/2025/01/Julien-Baker-Torres.-Credit-Ebru-Yildiz.jpg',
                bio: 'Julien Baker & TORRES’ Send A Prayer My Way was written and sung in the best of the outlaw tradition— defiant,',
                listeners: '389,983 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/43dbb381553b8acd10de5695fc29d404.1000x1000x1.jpg',
                title: 'Black Swan',
                artist: 'BTS',
                album: 'Black Swan',
                duration: '3:18',
                artistImage: 'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2023/07/26224952/FxikKayaEAAFpZF-scaled.jpeg',
                bio: 'Record-breaking South Korean boy band BTS (aka Bangtan Boys) deliver an energetic blend of dance-pop and hip',
                listeners: '27,874,095 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/70c6c28129f5a15eb670e0041963ddda.570x577x1.jpg',
                title: 'Out On a Limb',
                artist: 'Teena Marie',
                album: 'Starchild',
                duration: '6:37',
                artistImage: 'https://www.houmatoday.com/gcdn/authoring/2010/12/27/NCOU/ghows-DA-4e61be95-048b-4e98-95da-097c2fafee32-2c8b81f9.jpeg?width=660&height=496&fit=crop&format=pjpg&auto=webp',
                bio: 'Teena Marie is known most for her unmistakable voice, an elastic and vibrant soprano that exemplifies soul,',
                listeners: '1,373,621 monthly listeners',
            },{
                cover: 'https://images.genius.com/6414a88fca65215aff9f28ee31bf07e5.1000x1000x1.png',
                title: 'Everybody Here Wants You',
                artist: 'Jeff Buckley',
                album: 'Sketches of My Sweeth...',
                duration: '4:46',
                artistImage: 'https://ew.com/thmb/B7UbvYE7fa1VNOS_Vl6xSEi34oc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jeff20buckley_20c20david20gahr-2000-acaa205a25fb48f1986c0391a83b0653.jpeg',
                bio: 'Since he was the son of cult songwriter Tim Buckley, Jeff Buckley faced more expectations and preconceived notions',
                listeners: '8,824,150 monthly listeners',
            },
            {
                cover: 'https://i.scdn.co/image/ab67616d0000b273e83ea8335db3b91ca88be053',
                title: "Lover, You Should've Come Over",
                artist: 'Jeff Buckley',
                album: 'Last Goodbye EP',
                duration: '7:18',
                artistImage: 'https://ew.com/thmb/B7UbvYE7fa1VNOS_Vl6xSEi34oc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jeff20buckley_20c20david20gahr-2000-acaa205a25fb48f1986c0391a83b0653.jpeg',
                bio: 'Since he was the son of cult songwriter Tim Buckley, Jeff Buckley faced more expectations and preconceived notions',
                listeners: '8,824,150 monthly listeners',
            },
            {
                cover: 'https://res.cloudinary.com/epitaph/image/upload/v1/anti/releases/0045778672967.png',
                title: "O Children",
                artist: 'Nick Cave & The Bad Seeds',
                album: 'Abbatoir Blues',
                duration: '6:51',
                artistImage: 'https://fastly-s3.allmusic.com/artist/mn0000866271/400/ShlPZNaGqC9Xp6IQ6fUM7YAf7E_1E-2MlBBPmPAXRBU=.jpg',
                bio: 'Nick Cave & The Bad Seeds are one of the world’s most exciting, influential, innovative and compelling bands',
                listeners: '3,914,672 monthly listeners',
            },
            {
                cover: 'https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf',
                title: 'Smells Like Teen Spirit',
                artist: 'Nirvana',
                album: 'Nevermind (Remastered)',
                duration: '5:37',
                artistImage: 'https://www.hollywoodreporter.com/wp-content/uploads/2011/09/nirvana-publicity-michael-lavine-2-a-l.jpg?w=1440&h=810&crop=1',
                bio: "Nothing was ever quite the same after Nirvana. The band's second album, 1991's Nevermind, revolutionized",
                listeners: '34,841,192 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/824e10bdd629eea7462980972f342700.1000x1000x1.png',
                title: "TV",
                artist: 'Billie Eilish',
                album: 'Guitar Songs',
                duration: '4:41',
                artistImage: 'https://static.independent.co.uk/2024/05/28/21/Billie20Eilish20Petros20Studio.jpg',
                bio: 'Billie Eilish remains one of the biggest stars to emerge in the 21st century. Her third studio album, HIT ME HARD AND',
                listeners: '90,997,426 monthly listeners',
            },
            {
                cover: 'https://images.genius.com/05f9c301a11f2d5c6aba0007fe6234e4.1000x1000x1.png',
                title: 'House of Cards',
                artist: 'BTS',
                album: 'The Most Beautiful Mom...',
                duration: '3:46',
                artistImage: 'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2023/07/26224952/FxikKayaEAAFpZF-scaled.jpeg',
                bio: 'Record-breaking South Korean boy band BTS (aka Bangtan Boys) deliver an energetic blend of dance-pop and hip',
                listeners: '27,874,095 monthly listeners',
            },
        ];

        playlist.forEach((song, index) => {
            const row = document.createElement('div');
            row.classList.add('song-row');

            row.innerHTML = `
            <div class="rows">
                <div class='songs'>
                    <div class='numbers'><p>${index + 1}</p></div>
                    <div class='titles'>
                        <img src='${song.cover}' alt='${song.title}'>
                        <div class='song-artist'>
                            <p>${song.title}</p>
                            <div class='artists'>
                                <p>${song.artist}</p> 
                            </div>  
                        </div>
                    </div>
                    <div class='albums'><p>${song.album}</p></div>
                    <div class='durations'><p>${song.duration}</p></div>
                </div>
                <div class='overlay'>
                    <i class="bi bi-play-fill"></i>
                </div>
            </div>
            `;
            row.addEventListener('click', () => {
                updateSong(song);
            });

            playlistContainer.appendChild(row);
        });
    })
    .catch(err => console.error('Error loading snippet:', err));
};

function updateSong(song) {
    document.querySelector('.song-cover img').src = song.cover;
    document.querySelector('.song-name a').textContent = song.title;
    document.querySelector('.song-artist a').textContent = song.artist;
    document.querySelector('.artist-name a').textContent = song.artist;
    document.querySelector('.artist-profile img').src = song.artistImage;
    document.querySelector('.listeners p').textContent = song.listeners;
    document.querySelector('.artist-info p').textContent = song.bio;
}

function dropDown() {
    const down = document.getElementById('drop');
    const existingDropdown = document.querySelector('.drop-down');
    
    if(existingDropdown) {
        existingDropdown.remove();
    } else {
        const drop = document.createElement('div');
        drop.classList.add('drop-down');
        drop.innerHTML = `
            <ul>
                <li class='account'><a href="account.html">Account</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Download</a></li>
                <li><a href="">Settings</a></li>
                <li class='log-out'><a href="">Log Out</a></li>
            </ul>
        `;
        down.appendChild(drop);
    }
}