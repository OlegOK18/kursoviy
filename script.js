
    document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.createElement('div');
        burgerMenu.className = 'burger-menu';
        burgerMenu.innerHTML = `
            <div class="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        const headerContent = document.querySelector('.header-content');
        headerContent.appendChild(burgerMenu);
        
        const nav = document.querySelector('.nav');
        const burgerIcon = document.querySelector('.burger-icon');
        
        burgerIcon.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            burgerIcon.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('nav-active');
                burgerIcon.classList.remove('active');
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        function checkScroll() {
            const elements = document.querySelectorAll('.service-item, .project-card, .event-card');
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        document.querySelectorAll('.service-item, .project-card, .event-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        window.addEventListener('scroll', checkScroll);
        checkScroll(); 
    });
// --- КОД ДЛЯ ДИНАМІЧНОГО ВИВОДУ ПОСЛУГ (Пункт 5) ---

// Виконуємо код лише тоді, коли завантажено DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Шукаємо контейнер на сторінці
    const servicesContainer = document.getElementById('services-container');

    // 2. Якщо ми НЕ на сторінці "what-we-do.html",
    //    то servicesContainer буде null, і код не виконається.
    //    Це захист, щоб код працював ЛИШЕ на потрібній сторінці.
    if (servicesContainer) {
        
        // 3. Створюємо масив об'єктів (це вимагає курсова)
        const servicesData = [
            {
                imgSrc: 'IMG/AnyConv.com__Icon.webp',
                imgAlt: 'Підтримка родини',
                title: 'Підтримка родини',
                description: 'Ми надаємо консультації та підтримку для батьків, допомагаючи їм створити найкращі умови для розвитку дитини.'
            },
            {
                imgSrc: 'IMG/AnyConv.com__Icon (1).webp',
                imgAlt: 'Переваги для здоров\'я',
                title: 'Переваги для здоров\'я',
                description: 'Наші програми включають фізіотерапію, оздоровчі заняття та моніторинг стану здоров\'я дітей.'
            },
            {
                imgSrc: 'IMG/AnyConv.com__Icon (2).webp',
                imgAlt: 'Стипендії та допомога',
                title: 'Стипендії та допомога',
                description: 'Ми допомагаємо талановитим дітям отримати доступ до якісної освіти через стипендіальні програми.'
            },
            {
                imgSrc: 'IMG/AnyConv.com__Icon (3).webp',
                imgAlt: 'Терапія',
                title: 'Терапія та розвиток',
                description: 'Індивідуальні та групові заняття з логопедами, психологами та терапевтами для всебічного розвитку.'
            },
            {
                imgSrc: 'IMG/AnyConv.com__Icon (2).webp',
                imgAlt: 'Соціалізація',
                title: 'Соціалізація та інклюзія',
                description: 'Організація спільних заходів, свят та екскурсій для інтеграції дітей у суспільство.'
            }
        ];

        // 4. Генеруємо HTML для кожного об'єкта в масиві
        servicesData.forEach(service => {
            // Створюємо HTML-розмітку для картки
            const serviceCardHTML = `
                <div class="service-item">
                    <div class="service-image">
                        <img src="${service.imgSrc}" alt="${service.imgAlt}">
                    </div>
                    <div class="service-info">
                        <h4>${service.title}</h4>
                        <p>${service.description}</p>
                    </div>
                </div>
            `;
            
            // 5. Додаємо згенеровану картку в контейнер на сторінці
            servicesContainer.innerHTML += serviceCardHTML;
        });
    }
});
/* --- СКРИПТ МОДАЛЬНОГО ВІКНА --- */
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо елементи
    const modal = document.getElementById("videoModal");
    const btn = document.querySelector(".btn-video"); // Кнопка "Play Video"
    const span = document.querySelector(".close-modal"); // Хрестик
    const videoPlayer = document.getElementById("mainVideo");

    // Відкрити модальне вікно при кліку на кнопку
    if(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Щоб не перекидало вгору сторінки
            modal.classList.add("show");
            if(videoPlayer) videoPlayer.play(); // Автозапуск (за бажанням)
        });
    }

    // Закрити при кліку на хрестик
    if(span) {
        span.addEventListener('click', function() {
            modal.classList.remove("show");
            if(videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0; // Скинути відео на початок
            }
        });
    }

    // Закрити при кліку поза вікном
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
            if(videoPlayer) {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Loader
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }

    // 2. Scroll to Top
    const scrollBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('active');
        } else {
            scrollBtn.classList.remove('active');
        }
    });

    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Video Modal (На головній сторінці)
    const modal = document.getElementById('videoModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-modal');
    const video = document.getElementById('mainVideo');

    if (modal && openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
            if (video) video.play();
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }
});
// --- ЛОГІКА ДЛЯ МОДАЛЬНОГО ВІКНА "ПОЖЕРТВУВАТИ" ---
    
    const donateModal = document.getElementById('donateModal');
    // Знаходимо всі кнопки з класом .btn-donate (якщо їх декілька, наприклад в хедері та футері)
    const donateButtons = document.querySelectorAll('.btn-donate'); 
    const closeDonateBtn = donateModal.querySelector('.modal-close-btn');

    // Відкриття вікна при кліку на будь-яку кнопку "Пожертвувати"
    donateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Щоб не переходило за посиланням
            donateModal.classList.add('active');
        });
    });

    // Закриття при кліку на хрестик
    closeDonateBtn.addEventListener('click', function() {
        donateModal.classList.remove('active');
    });

    // Закриття при кліку за межами вікна
    donateModal.addEventListener('click', function(e) {
        if (e.target === donateModal) {
            donateModal.classList.remove('active');
        }
    });