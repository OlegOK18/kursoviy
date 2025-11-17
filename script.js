
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
                imgSrc: 'IMG/icon-placeholder.png', // Додайте нову іконку
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