const translations = {
    tg: {
        heroTitle: 'Кодҳои Тайёри <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">UI/UX Премиум</span>',
        heroSubtitle: 'Кодҳои кутоҳ, тугмаҳо, логин-формаҳо ва эффектҳои футуристиро кобед, видеоашро бинед ва бо як клик скачат кунед.',
        searchPlaceholder: 'Ҷустуҷӯи код (масалан: Login, Button)...',
        downloadBtn: 'Скачат кардани код',
        noResults: 'Ҳеҷ чиз ёфт нашуд 😔',
        commentsTitle: 'Комментарияҳо',
        commentPlaceholder: 'Коменти худро нависед...',
        sendComment: 'Фиристодан'
    },
    en: {
        heroTitle: 'Ready-to-Use <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Premium UI Elements</span>',
        heroSubtitle: 'Find short codes, premium buttons, login forms, and cyberpunk effects. Watch autoplay demos and download instantly.',
        searchPlaceholder: 'Search codes (e.g., Login, Button)...',
        downloadBtn: 'Download Code',
        noResults: 'No elements found 😔',
        commentsTitle: 'Comments',
        commentPlaceholder: 'Write a comment...',
        sendComment: 'Send'
    }
};

let currentLang = 'tg';

if (!localStorage.getItem('user_likes')) localStorage.setItem('user_likes', JSON.stringify({}));
if (!localStorage.getItem('user_comments')) localStorage.setItem('user_comments', JSON.stringify({}));

let openComments = {};

function renderCards(items) {
    const container = document.getElementById('cards-container');
    const noResults = document.getElementById('no-results');
    container.innerHTML = '';
    
    if (items.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');

    const storedLikes = JSON.parse(localStorage.getItem('user_likes')) || {};
    const storedComments = JSON.parse(localStorage.getItem('user_comments')) || {};

    items.forEach(item => {
        const title = currentLang === 'tg' ? item.titleTg : item.titleEn;
        
        const botLikes = botsDatabase[item.id] ? botsDatabase[item.id].likes : 0;
        const hasUserLiked = storedLikes[item.id] ? true : false;
        const totalLikes = botLikes + (hasUserLiked ? 1 : 0);

        const botComments = botsDatabase[item.id] ? botsDatabase[item.id].comments : [];
        const userCommentsList = storedComments[item.id] || [];
        const allComments = [...userCommentsList, ...botComments];

        let commentsHTML = '';
        allComments.forEach(c => {
            let avatarHTML = '';
            
            if (c.avatarId && String(c.avatarId).startsWith('user-')) {
                // Иконкаи холӣ барои корбари ҳақиқии сайт (бе сурат)
                avatarHTML = `
                    <div class="w-9 h-9 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                        <i class="fa-solid fa-user text-xs text-slate-500"></i>
                    </div>
                `;
            } else {
                // МУҲИМ: Интихоби сурат дар асоси ҷинсият (gender)
                // Агар дар база ҷинс набошад, мардро ҳамчун дефолт мегирад
                const gender = c.gender === 'female' ? 'female' : 'male';
                
                // Рақами сурат аз 1 то 50
                const photoNum = (c.avatarId && !isNaN(c.avatarId)) ? (c.avatarId % 50) + 1 : Math.floor(Math.random() * 40) + 1;
                const avatarUrl = `https://xsgames.co/randomusers/assets/avatars/${gender}/${photoNum}.jpg`;
                
                avatarHTML = `
                    <img src="${avatarUrl}" alt="${c.name}" class="w-9 h-9 rounded-full border border-cyan-500/20 object-cover shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                `;
            }

            commentsHTML += `
                <div class="border-b border-slate-800/40 py-2.5 last:border-0 flex items-start gap-3 animate-fade-in">
                    ${avatarHTML}
                    <div class="flex-1">
                        <span class="text-xs font-bold text-purple-400 block">${c.name}</span>
                        <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">${c.text}</p>
                    </div>
                </div>
            `;
        });

        const isCommentOpen = openComments[item.id] ? '' : 'hidden';

        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl overflow-hidden flex flex-col group';
        
        card.innerHTML = `
            <div class="relative w-full bg-black/80 overflow-hidden border-b border-cyan-500/5 flex items-center justify-center" style="min-height: 200px; max-height: 250px;">
                <video controls preload="auto" playsinline webkit-playsinline class="w-full h-full max-h-[250px] object-contain block">
                    <source src="${item.videoUrl}" type="video/mp4">
                </video>
            </div>
            
            <div class="p-5 flex flex-col flex-grow justify-between bg-[#121420]/30">
                <div>
                    <h3 class="text-base font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-200 mb-3">
                        ${title}
                    </h3>
                    
                    <div class="flex items-center gap-5 mb-4 pb-3 border-b border-slate-800/60">
                        <button onclick="toggleLike(${item.id})" class="flex items-center gap-1.5 text-xs font-bold ${hasUserLiked ? 'text-pink-500' : 'text-slate-400'} hover:text-pink-500 transition-colors cursor-pointer">
                            <i class="${hasUserLiked ? 'fa-solid' : 'fa-regular'} fa-heart text-sm"></i> 
                            <span>${totalLikes.toLocaleString()}</span>
                        </button>
                        
                        <button onclick="toggleComments(${item.id})" class="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                            <i class="fa-regular fa-comment text-sm"></i> 
                            <span>${allComments.length}</span>
                        </button>
                    </div>

                    <div id="comment-box-${item.id}" class="${isCommentOpen} mb-4 bg-black/50 rounded-xl p-3 border border-slate-800/60">
                        <h4 class="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-2">${translations[currentLang].commentsTitle}</h4>
                        <div class="max-h-48 overflow-y-auto pr-1 space-y-1 scrollbar-thin">
                            ${commentsHTML}
                        </div>
                        
                        <div class="mt-3 flex gap-2 border-t border-slate-800/60 pt-2">
                            <input type="text" id="comment-input-${item.id}" placeholder="${translations[currentLang].commentPlaceholder}" class="w-full bg-[#0a0b10] border border-slate-800 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none focus:border-cyan-500">
                            <button onclick="addUserComment(${item.id})" class="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-[10px] px-3 rounded-lg uppercase cursor-pointer">${translations[currentLang].sendComment}</button>
                        </div>
                    </div>
                </div>
                
                <a href="${item.fileUrl}" download class="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-xs text-center py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 tracking-wider">
                    <i class="fa-solid fa-cloud-arrow-down text-sm"></i> ${translations[currentLang].downloadBtn}
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

window.toggleComments = function(id) {
    const commentBox = document.getElementById(`comment-box-${id}`);
    if (commentBox.classList.contains('hidden')) {
        commentBox.classList.remove('hidden');
        openComments[id] = true;
    } else {
        commentBox.classList.add('hidden');
        openComments[id] = false;
    }
};

window.toggleLike = function(id) {
    let storedLikes = JSON.parse(localStorage.getItem('user_likes')) || {};
    if (storedLikes[id]) {
        delete storedLikes[id];
    } else {
        storedLikes[id] = true;
    }
    localStorage.setItem('user_likes', JSON.stringify(storedLikes));
    renderCards(database);
};

window.addUserComment = function(id) {
    const input = document.getElementById(`comment-input-${id}`);
    if (!input.value.trim()) return;

    let storedComments = JSON.parse(localStorage.getItem('user_comments')) || {};
    if (!storedComments[id]) storedComments[id] = [];

    storedComments[id].unshift({
        name: "Аъзои сайт (Шумо)",
        text: input.value.trim(),
        avatarId: "user-" + Date.now()
    });

    localStorage.setItem('user_comments', JSON.stringify(storedComments));
    input.value = '';
    renderCards(database);
};

function updateLanguage(lang) {
    currentLang = lang;
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').innerText = translations[lang].heroSubtitle;
    document.getElementById('search-input').placeholder = translations[lang].searchPlaceholder;
    document.getElementById('no-results-text').innerText = translations[lang].noResults;
    renderCards(database);
}

function filterItems(query) {
    const filtered = database.filter(item => {
        const searchStr = query.toLowerCase();
        return item.tags.some(tag => tag.includes(searchStr)) || 
               item.titleTg.toLowerCase().includes(searchStr) || 
               item.titleEn.toLowerCase().includes(searchStr);
    });
    renderCards(filtered);
}

document.getElementById('lang-select').addEventListener('change', (e) => updateLanguage(e.target.value));
document.getElementById('search-input').addEventListener('input', (e) => filterItems(e.target.value));

window.addEventListener('DOMContentLoaded', () => renderCards(database));
// Функсия барои ба ҳолати Fullscreen (пурраи экран) гузаштани сайт
function activateFullscreen() {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) { /* Firefox */
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) { /* Chrome, Safari ва Opera */
        docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { /* IE/Edge */
        docElm.msRequestFullscreen();
    }
}

// Ҳамин ки корбар бори аввал экранро ламс кард, панели Chrome гум мешавад
document.addEventListener("click", () => {
    // Агар сайт аллакай Fullscreen набошад, онро Fullscreen мекунад
    if (!document.fullscreenElement) {
        activateFullscreen();
    }
}, { once: true }); // { once: true } мефаҳмонад, ки ин эвент фақат 1 бор кор кунад
