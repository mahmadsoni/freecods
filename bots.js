// Базаи коментҳо ва лайкҳои ботҳо
const botsDatabase = {
    // Бото барои коди ID: 1 (Формаи Логин)
    1: {
        likes: 12500, // Миқдори лайкҳои ботӣ
        comments: [
            { name: "Фирӯз IT", text: "Ин дизайн умуман дигар хел будааст! Ба лоиҳаи ман 100% мувофиқ омад.", lang: "tg" },
            { name: "Sarah_Dev", text: "Wow, this cyberpunk layout is absolutely stunning! Saved.", lang: "en" },
            { name: "Ҷаҳонгир", text: "Братка кодош чотка кор кадестай, раҳмат барои сайти зур.", lang: "tg" },
            { name: "CodeX", text: "Premium quality for free, thanks FreeCods!", lang: "en" },
            { name: "Мадина_прог", text: "Кнопкаи Authorize-аш супер аниматсия дорад, лайк!", lang: "tg" }
        ]
    },
    // Бото барои коди ID: 2 (Кнопкаи Неонӣ)
    2: {
        likes: 8400,
        comments: [
            { name: "Алишер", text: "Дурахши неонаш дарун ба даруни телефон даҳшат менамояд.", lang: "tg" },
            { name: "Alex_Grid", text: "The glow effect transition is so smooth.", lang: "en" },
            { name: "Рустам_99", text: "Ака коди ҷустуҷӯро ҳам тезтар бор кун, интизорем.", lang: "tg" }
        ]
    },
    // Бото барои коди ID: 3 (Ҷустуҷӯ)
    3: {
        likes: 15400,
        comments: [
            { name: "Суҳроб", text: "Ана аниматсия! Клик мекуни кушода мешавад, гап нест.", lang: "tg" },
            { name: "NeonByte", text: "Exactly what I needed for my portfolio header.", lang: "en" }
        ]
    },
    // Бото барои коди ID: 4 (Карточкаи Профил)
    4: {
        likes: 11200,
        comments: [
            { name: "BehruzDev", text: "Профил карточкаш ай dribbble ҳам қашангтар баромадай 😎", lang: "tg" },
            { name: "EmilyUI", text: "This profile card design feels futuristic and clean.", lang: "en" },
            { name: "Шаҳло", text: "Glassmorphism эффектш хеле зебоай.", lang: "tg" },
            { name: "DevMotion", text: "The hover animation is incredibly satisfying.", lang: "en" },
            { name: "Муниса", text: "Ба dashboard-и ман 100% рост омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 5 (Navbar Cyberpunk)
    5: {
        likes: 9800,
        comments: [
            { name: "RustamX", text: "Navbar-ш ай бозии cyberpunk монанд шудай.", lang: "tg" },
            { name: "Jennifer", text: "This neon navbar is absolutely amazing.", lang: "en" },
            { name: "KamolTJ", text: "Responsive-ш ҳам хуб кор мекна.", lang: "tg" },
            { name: "CodeSphere", text: "Perfect navigation UI for modern websites.", lang: "en" },
            { name: "Нозия", text: "Рангбандияш хеле professional 😍", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 6 (Music Player)
    6: {
        likes: 17600,
        comments: [
            { name: "SardorDev", text: "Music player-ш воқеан futuristic менамояд.", lang: "tg" },
            { name: "LucasFX", text: "The equalizer animation is super smooth!", lang: "en" },
            { name: "Фарҳод", text: "Инхел UI кам вомехӯра ака.", lang: "tg" },
            { name: "MiaDesign", text: "Love the glowing controls and gradients.", lang: "en" },
            { name: "Зулайхо", text: "Player design-ш хеле premium ҳис мешавад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 7 (Dashboard Admin)
    7: {
        likes: 22300,
        comments: [
            { name: "AliCoder", text: "Dashboard-ш барои admin panel идеални будаст.", lang: "tg" },
            { name: "NathanCode", text: "This admin UI is clean and modern.", lang: "en" },
            { name: "Меҳринисо", text: "Chart-ош хеле smooth animation дора.", lang: "tg" },
            { name: "DevCore", text: "Professional frontend structure right here.", lang: "en" },
            { name: "Azizbek", text: "Ҳама widget-ош чотка ҷойгир шудаанд.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 8 (Loading Screen)
    8: {
        likes: 7300,
        comments: [
            { name: "Nekruz", text: "Loader animation-ш кайфият дод 😅", lang: "tg" },
            { name: "OliviaUI", text: "Beautiful loading transition and effects.", lang: "en" },
            { name: "Сабрина", text: "Инхел preload-ерда сайт luxury метобад.", lang: "tg" },
            { name: "CodePixel", text: "The glowing spinner looks fantastic.", lang: "en" },
            { name: "Sherzod", text: "Performance-ш ҳам тезай, respect.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 9 (Checkout Form)
    9: {
        likes: 14100,
        comments: [
            { name: "FarhodJS", text: "Checkout form-ш хеле professional будаст.", lang: "tg" },
            { name: "Scarlett", text: "This payment UI looks premium and secure.", lang: "en" },
            { name: "Гулнора", text: "Input эффектҳош хеле soft мебароянд.", lang: "tg" },
            { name: "AndrewTech", text: "Excellent UX decisions in this layout.", lang: "en" },
            { name: "Абубакр", text: "Ба e-commerce project-и ман рост омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 10 (Chat UI)
    10: {
        likes: 19500,
        comments: [
            { name: "ShoxDev", text: "Chat design-ш мисли Discord futuristic шудааст.", lang: "tg" },
            { name: "SophiaCode", text: "Absolutely love the neon message bubbles.", lang: "en" },
            { name: "Малика", text: "Dark mode-ш хеле чашмра роҳат мекна.", lang: "tg" },
            { name: "RyanGrid", text: "The UI feels immersive and interactive.", lang: "en" },
            { name: "Фотима", text: "Typing animation-ш беҳтарин қисми сайтай.", lang: "tg" }
        ]
    },
    // Бото барои коди ID: 11 (Hero Section)
    11: {
        likes: 28700,
        comments: [
            { name: "Jamshed", text: "Hero section-ш ай startup website монанд шудай 🔥", lang: "tg" },
            { name: "VictoriaUI", text: "The landing page instantly grabs attention.", lang: "en" },
            { name: "Мунира", text: "Неонови background-ш хеле атмосферниай.", lang: "tg" },
            { name: "ChrisMotion", text: "Amazing typography and glowing effects.", lang: "en" },
            { name: "Kamron", text: "Ин қисм user-ра маҷбур мекна то охир бина 😄", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 12 (Sidebar Menu)
    12: {
        likes: 9200,
        comments: [
            { name: "Behruz", text: "Sidebar-ш хеле minimal ва удобни шудааст.", lang: "tg" },
            { name: "GraceUI", text: "Love the clean neon navigation layout.", lang: "en" },
            { name: "Нилуфар", text: "Icon-ош хеле professional интихоб шудаанд.", lang: "tg" },
            { name: "KevinDev", text: "Smooth transitions and perfect spacing.", lang: "en" },
            { name: "Фирдавс", text: "Ба admin panel-и ман рост омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 13 (Pricing Cards)
    13: {
        likes: 16800,
        comments: [
            { name: "Rustam_99", text: "Pricing card-ош ай themeforest беҳтар метобад 😅", lang: "tg" },
            { name: "EllaDesign", text: "These pricing cards look super modern.", lang: "en" },
            { name: "Шабнам", text: "Glow border-ш кайфият дод.", lang: "tg" },
            { name: "LoganFX", text: "Excellent balance between colors and layout.", lang: "en" },
            { name: "AzamDev", text: "UX-ш хеле user friendly будаст.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 14 (404 Page)
    14: {
        likes: 6100,
        comments: [
            { name: "Ali_TJ", text: "404 page-ш ҳатто ай саҳифаи асосӣ қашангтар 😄", lang: "tg" },
            { name: "JenniferCode", text: "Creative and stylish error page design!", lang: "en" },
            { name: "Мадина", text: "Animation-ош хеле зинда менамоянд.", lang: "tg" },
            { name: "PixelCraft", text: "Best cyberpunk 404 concept I've seen.", lang: "en" },
            { name: "Суҳроб", text: "Developer воқеан вкус доштаст.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 15 (Notification Popup)
    15: {
        likes: 13400,
        comments: [
            { name: "Nekruz", text: "Popup эффектш ай telegram mini app монанд шудай.", lang: "tg" },
            { name: "SophiaGrid", text: "These notifications feel smooth and polished.", lang: "en" },
            { name: "Гулчеҳра", text: "Рангбандияш хеле futuristic будаст.", lang: "tg" },
            { name: "DanielWeb", text: "Excellent micro-interactions here.", lang: "en" },
            { name: "Sardor", text: "Frontend кодош чисто level up 😎", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 16 (Image Gallery)
    16: {
        likes: 25100,
        comments: [
            { name: "Farhod", text: "Gallery layout-ш хеле premium менамояд.", lang: "tg" },
            { name: "ScarlettUI", text: "The hover zoom effects are beautiful.", lang: "en" },
            { name: "Меҳринисо", text: "Grid system-ш хеле аккуратниай.", lang: "tg" },
            { name: "RyanPixels", text: "Perfect gallery for a modern portfolio.", lang: "en" },
            { name: "JovidDev", text: "Light эффектҳош воқеан топчик шудаанд.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 17 (Stats Counter)
    17: {
        likes: 8800,
        comments: [
            { name: "Sherzod", text: "Counter animation-ш хеле smooth будаст.", lang: "tg" },
            { name: "NathanUI", text: "Love the animated statistics section.", lang: "en" },
            { name: "Муниса", text: "Неонови рақамҳо хеле зебо мебароянд.", lang: "tg" },
            { name: "AlexMotion", text: "Great combination of motion and UI.", lang: "en" },
            { name: "Firdavs", text: "Ин компонент барои dashboard беҳтарин.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 18 (Video Player)
    18: {
        likes: 19400,
        comments: [
            { name: "Kamol", text: "Video player-ш ай Netflix futuristic шудааст 😂", lang: "tg" },
            { name: "OliviaFX", text: "The glowing controls look amazing.", lang: "en" },
            { name: "Заррина", text: "Fullscreen animation-ш хеле professional.", lang: "tg" },
            { name: "MichaelDev", text: "Beautiful cinematic UI experience.", lang: "en" },
            { name: "Абдураҳмон", text: "UI/UX-ш ай ҳад зиёд тозаай.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 19 (File Upload)
    19: {
        likes: 10500,
        comments: [
            { name: "ShoxTJ", text: "Drag & drop эффектш беҳтарин қисми компонентай.", lang: "tg" },
            { name: "EmilyCode", text: "This upload area feels very intuitive.", lang: "en" },
            { name: "Сабрина", text: "Border glow-ш хеле қашанг мебарояд.", lang: "tg" },
            { name: "CodeNova", text: "Minimal and highly functional design.", lang: "en" },
            { name: "BehruzDev", text: "Ба cloud app-и ман рост омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 20 (Crypto Dashboard)
    20: {
        likes: 32100,
        comments: [
            { name: "Azizbek", text: "Crypto dashboard-ш ай Binance ҳам futuristic 😅", lang: "tg" },
            { name: "LucasTrade", text: "This crypto UI looks insanely premium.", lang: "en" },
            { name: "Малика", text: "Chart animation-ш хеле smooth мебошад.", lang: "tg" },
            { name: "DevMatrix", text: "Excellent data visualization and layout.", lang: "en" },
            { name: "Jahongir", text: "Dark neon style-ш воқеан топчик.", lang: "tg" }
        ]
    },
    // Бото барои коди ID: 21 (Task Manager)
    21: {
        likes: 14900,
        comments: [
            { name: "AbuCoder", text: "Task manager-ш хеле clean ва удобниай.", lang: "tg" },
            { name: "CharlotteUI", text: "This productivity UI looks fantastic.", lang: "en" },
            { name: "Мунира", text: "Checkbox animation-ш кайфият дод 😄", lang: "tg" },
            { name: "EthanDev", text: "Minimal, modern, and very user-friendly.", lang: "en" },
            { name: "Сулаймон", text: "Ба startup app-и ман идеални омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 22 (Weather App)
    22: {
        likes: 11700,
        comments: [
            { name: "Rustam", text: "Weather widget-ш хеле futuristic баромадай.", lang: "tg" },
            { name: "AvaDesign", text: "The glass effect combined with neon is perfect.", lang: "en" },
            { name: "Гулчеҳра", text: "Background animation-ш ором ва зебоай.", lang: "tg" },
            { name: "NoahUI", text: "Beautiful weather interface and transitions.", lang: "en" },
            { name: "Jovid", text: "Ҳавора нишон доданша хеле professional кадай.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 23 (Login Modal)
    23: {
        likes: 13600,
        comments: [
            { name: "Farzona", text: "Popup login-ш ай app-ои premium монанд 😍", lang: "tg" },
            { name: "AndrewGrid", text: "Elegant modal animations and blur effects.", lang: "en" },
            { name: "KamolDev", text: "Коди frontend-ш хеле тоза навишта шудааст.", lang: "tg" },
            { name: "MiaUX", text: "This modal feels smooth and modern.", lang: "en" },
            { name: "Нозанин", text: "Input focus эффектш ай ҳад зиёд хшру.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 24 (Portfolio Grid)
    24: {
        likes: 27400,
        comments: [
            { name: "BehruzFX", text: "Portfolio grid-ш воқеан next level шудааст.", lang: "tg" },
            { name: "LilyCode", text: "Perfect portfolio layout for developers.", lang: "en" },
            { name: "Шаҳло", text: "Hover effect-ош хеле smooth мебароянд.", lang: "tg" },
            { name: "CodeVortex", text: "The neon borders look absolutely stunning.", lang: "en" },
            { name: "Azamat", text: "Developer вкус дора ака, respect.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 25 (Settings Panel)
    25: {
        likes: 8100,
        comments: [
            { name: "Sherali", text: "Settings panel-ш хеле аккуратни сохта шудааст.", lang: "tg" },
            { name: "GraceMotion", text: "Love the futuristic toggle switches.", lang: "en" },
            { name: "Мадина", text: "Dark neon style-ш хеле кайфият дора.", lang: "tg" },
            { name: "KevinCode", text: "Smooth UI interactions everywhere.", lang: "en" },
            { name: "FirdavsTJ", text: "Customization layout-ш беҳтарин будаст.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 26 (Contact Form)
    26: {
        likes: 12800,
        comments: [
            { name: "NekruzDev", text: "Contact form-ш ай themeforest ҳам беҳтар 😅", lang: "tg" },
            { name: "SophiaUX", text: "Very clean and responsive contact section.", lang: "en" },
            { name: "Зебо", text: "Focus animation-ш хеле professional менамояд.", lang: "tg" },
            { name: "RyanCoder", text: "Excellent spacing and typography.", lang: "en" },
            { name: "Абдулло", text: "Ба portfolio-и ман рост омад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 27 (Mobile App UI)
    27: {
        likes: 21900,
        comments: [
            { name: "SardorX", text: "Mobile UI-ш ай iOS app монанд шудааст.", lang: "tg" },
            { name: "VictoriaGlow", text: "This mobile concept looks super polished.", lang: "en" },
            { name: "Муниса", text: "Swipe animation-ш хеле smooth 😍", lang: "tg" },
            { name: "ChrisDev", text: "Great futuristic mobile experience.", lang: "en" },
            { name: "AliCoder", text: "UX-ш барои app беҳтарин мебошад.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 28 (Analytics Page)
    28: {
        likes: 18200,
        comments: [
            { name: "Kamron", text: "Analytics dashboard-ш хеле профессионалиай.", lang: "tg" },
            { name: "EmilyCharts", text: "Amazing charts and modern data visualization.", lang: "en" },
            { name: "Сабрина", text: "Графикош хеле soft animation доранд.", lang: "tg" },
            { name: "DanielUX", text: "This dashboard feels premium and powerful.", lang: "en" },
            { name: "RustamDev", text: "Chart color-ош ай ҳад зиёд зебо.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 29 (Music Streaming UI)
    29: {
        likes: 30100,
        comments: [
            { name: "Jamshed", text: "Spotify style + cyberpunk = шедевр 🔥", lang: "tg" },
            { name: "OliviaWave", text: "This music streaming UI is incredible.", lang: "en" },
            { name: "Малика", text: "Player controls-ш хеле futuristic менамоянд.", lang: "tg" },
            { name: "PixelRhythm", text: "Excellent balance of visuals and usability.", lang: "en" },
            { name: "BehruzIT", text: "Ай ҳама music UI-ҳое ки дидм беҳтариншай.", lang: "tg" }
        ]
    },

    // Бото барои коди ID: 30 (Gaming Dashboard)
    30: {
        likes: 38800,
        comments: [
            { name: "ShoxGaming", text: "Gaming dashboard-ш мисли AAA game launcher 😎", lang: "tg" },
            { name: "LucasCyber", text: "The futuristic gaming aesthetic is insane.", lang: "en" },
            { name: "Зулайхо", text: "Неонови button-ош хеле қави мебароянд.", lang: "tg" },
            { name: "CodePhantom", text: "This UI belongs in a sci-fi universe.", lang: "en" },
            { name: "SherzodX", text: "Developer воқеан creative будаст.", lang: "tg" }
        ]
    }
    
};
