/**
 * CV Website - Main JavaScript
 * Vanilla JS, no dependencies
 */

(function() {
  'use strict';

  // ========================================
  // Data Configuration
  // ========================================
  // THAY ĐỔI CÁC GIÁ TRỊ DƯỚI ĐÂY BẰNG THÔNG TIN CỦA BẠN
  const CV_DATA = {
    // Thông tin cơ bản
    name: '[Họ và Tên]',
    title: '[Chức danh / Vị trí mong muốn]',
    location: '[Thành phố, Quốc gia]',
    email: '[email@domain.com]',
    phone: '[+84 xxx xxx xxx]',
    linkedin: '[linkedin-url]',
    github: '[github-url]',
    portfolio: '[portfolio-url]',
    lastUpdated: '[Tháng/Năm]',

    // Giới thiệu
    profile: '[Viết 3-5 câu tóm tắt về bản thân: số năm kinh nghiệm, chuyên môn chính, đam mê công nghệ, giá trị cốt lõi, mục tiêu nghề nghiệp ngắn/hạn dài...]',

    // Mục tiêu nghề nghiệp
    objective: '[Mô tả mục tiêu nghề nghiệp: vị trí mong muốn, môi trường làm việc lý tưởng, hướng phát triển kỹ năng, đóng góp mong muốn cho tổ chức...]',

    // Kỹ năng (sidebar - thanh tiến trình)
    // level: 0-100
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 65 },
    ],

    // Ngoại ngữ
    languages: [
      { name: 'Tiếng Việt', level: 'Ngôn ngữ mẹ đẻ' },
      { name: 'Tiếng Anh', level: 'IELTS 7.0 / TOEIC 900' },
      { name: '[Ngôn ngữ khác]', level: '[Trình độ]' },
    ],

    // Sở thích
    interests: [
      'Đọc sách công nghệ',
      'Open Source',
      'Chạy bộ',
      'Du lịch',
      'Nấu ăn',
      'Chơi game',
    ],

    // Kinh nghiệm làm việc
    experience: [
      {
        role: '[Vị trí công việc]',
        company: '[Tên công ty]',
        date: '[Tháng/Năm - Tháng/Năm]',
        description: '[Mô tả ngắn về công ty/nhóm dự án, quy mô, ngành nghề...]',
        tasks: [
          '[Thành tựu / Trách nhiệm chính 1 - có số liệu đo lường nếu có]',
          '[Thành tựu / Trách nhiệm chính 2]',
          '[Thành tựu / Trách nhiệm chính 3]',
        ],
      },
      {
        role: '[Vị trí công việc]',
        company: '[Tên công ty]',
        date: '[Tháng/Năm - Tháng/Năm]',
        description: '[Mô tả ngắn về công ty/nhóm dự án...]',
        tasks: [
          '[Thành tựu / Trách nhiệm chính 1]',
          '[Thành tựu / Trách nhiệm chính 2]',
          '[Thành tựu / Trách nhiệm chính 3]',
        ],
      },
    ],

    // Giáo dục
    education: [
      {
        degree: '[Tên bằng cấp / Chuyên ngành]',
        school: '[Tên trường Đại học / Cao đẳng]',
        date: '[Năm tốt nghiệp]',
        detail: '[Xếp loại / GPA / Chuyên ngành / Hoạt động nổi bật]',
      },
      {
        degree: '[Tên bằng cấp / Chứng chỉ khác]',
        school: '[Tên tổ chức đào tạo]',
        date: '[Năm hoàn thành]',
        detail: '[Mô tả thêm nếu cần]',
      },
    ],

    // Dự án
    projects: [
      {
        name: '[Tên dự án 1]',
        description: '[Mô tả ngắn 1-2 câu về dự án, vấn đề giải quyết, kết quả đạt được, quy mô người dùng...]',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        github: '[link-github]',
        demo: '[link-demo]',
      },
      {
        name: '[Tên dự án 2]',
        description: '[Mô tả ngắn 1-2 câu về dự án, vấn đề giải quyết, kết quả đạt được...]',
        tech: ['Vue.js', 'Firebase', 'TailwindCSS'],
        github: '[link-github]',
        demo: '[link-demo]',
      },
      {
        name: '[Tên dự án 3]',
        description: '[Mô tả ngắn 1-2 câu về dự án...]',
        tech: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
        github: '[link-github]',
        demo: null,
      },
    ],

    // Kỹ năng chi tiết (main section)
    skillsDetail: [
      {
        category: 'Frontend',
        icon: 'icon-globe',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'TailwindCSS', 'Vite'],
      },
      {
        category: 'Backend',
        icon: 'icon-building',
        tags: ['Node.js', 'Express', 'Fastify', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
      },
      {
        category: 'DevOps & Tools',
        icon: 'icon-tag',
        tags: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'Linux', 'Nginx'],
      },
      {
        category: 'Testing & Quality',
        icon: 'icon-star',
        tags: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright', 'ESLint', 'Prettier', 'Husky'],
      },
    ],
  };

  // ========================================
  // DOM Elements
  // ========================================
  const elements = {
    navToggle: document.querySelector('.nav-toggle'),
    navMenu: document.querySelector('.nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    sections: document.querySelectorAll('.section'),
    sidebarCards: document.querySelectorAll('.sidebar-card'),
    downloadBtn: document.getElementById('download-pdf'),
    currentYear: document.getElementById('current-year'),
    lastUpdated: document.getElementById('last-updated'),
    avatar: document.getElementById('avatar'),
    avatarFallback: document.getElementById('avatar-fallback'),
  };

  // ========================================
  // Initialize
  // ========================================
  function init() {
    injectData();
    setupMobileNav();
    setupScrollSpy();
    setupScrollReveal();
    setupPDFDownload();
    setupAvatarFallback();
    updateCopyrightYear();
    updateLastUpdated();
  }

  // ========================================
  // Data Injection
  // ========================================
  function injectData() {
    // Update meta
    document.title = `CV - ${CV_DATA.name}`;
    document.querySelector('meta[name="description"]').content = `CV cá nhân - ${CV_DATA.name} - ${CV_DATA.title}`;

    // Profile
    document.querySelector('.profile-name').textContent = CV_DATA.name;
    document.querySelector('.profile-title').textContent = CV_DATA.title;
    document.querySelector('.profile-location').textContent = `📍 ${CV_DATA.location}`;
    document.querySelector('.nav-logo').textContent = CV_DATA.name;
    document.querySelector('.profile-text').textContent = CV_DATA.profile;

    // Objective
    document.querySelector('.objective-text').textContent = CV_DATA.objective;

    // Contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks[0].href = `mailto:${CV_DATA.email}`;
    contactLinks[0].querySelector('span').textContent = CV_DATA.email;
    contactLinks[1].href = `tel:${CV_DATA.phone}`;
    contactLinks[1].querySelector('span').textContent = CV_DATA.phone;
    contactLinks[2].href = CV_DATA.linkedin;
    contactLinks[3].href = CV_DATA.github;
    contactLinks[4].href = CV_DATA.portfolio;

    // Footer contact
    document.querySelector('.btn-outline').href = `mailto:${CV_DATA.email}`;

    // Skills bars
    renderSkillsBars();

    // Languages
    renderLanguages();

    // Interests
    renderInterests();

    // Experience
    renderExperience();

    // Education
    renderEducation();

    // Projects
    renderProjects();

    // Skills Detail
    renderSkillsDetail();
  }

  function renderSkillsBars() {
    const container = document.getElementById('skills-bars');
    container.innerHTML = CV_DATA.skills.map(skill => `
      <div class="skill-bar">
        <span class="skill-name">${escapeHtml(skill.name)}</span>
        <div class="skill-track">
          <div class="skill-fill" style="--level: ${skill.level}%"></div>
        </div>
        <span class="skill-value">${skill.level}%</span>
      </div>
    `).join('');

    // Animate skill bars when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(fill => {
            const level = fill.style.getPropertyValue('--level');
            fill.style.width = level;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(container);
  }

  function renderLanguages() {
    const container = document.getElementById('languages-list');
    container.innerHTML = CV_DATA.languages.map(lang => `
      <li class="lang-item">
        <span class="lang-name">${escapeHtml(lang.name)}</span>
        <span class="lang-level">${escapeHtml(lang.level)}</span>
      </li>
    `).join('');
  }

  function renderInterests() {
    const container = document.getElementById('interests-list');
    container.innerHTML = CV_DATA.interests.map(interest => `
      <li class="interest-tag">${escapeHtml(interest)}</li>
    `).join('');
  }

  function renderExperience() {
    const container = document.getElementById('experience-timeline');
    container.innerHTML = CV_DATA.experience.map((exp, index) => `
      <li class="timeline-item reveal" style="transition-delay: ${index * 100}ms">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
            <span class="timeline-company">${escapeHtml(exp.company)}</span>
            <time class="timeline-date" datetime="${escapeHtml(exp.date)}">${escapeHtml(exp.date)}</time>
          </div>
          <p class="timeline-desc">${escapeHtml(exp.description)}</p>
          <ul class="timeline-tasks">
            ${exp.tasks.map(task => `<li class="timeline-task">${escapeHtml(task)}</li>`).join('')}
          </ul>
        </div>
      </li>
    `).join('');
  }

  function renderEducation() {
    const container = document.getElementById('education-list');
    container.innerHTML = CV_DATA.education.map((edu, index) => `
      <li class="edu-item reveal" style="transition-delay: ${index * 100}ms">
        <div class="edu-icon">
          <svg class="icon" aria-hidden="true"><use href="#icon-graduation"></use></svg>
        </div>
        <div>
          <h3 class="edu-degree">${escapeHtml(edu.degree)}</h3>
          <p class="edu-school">${escapeHtml(edu.school)}</p>
          <p class="edu-date">${escapeHtml(edu.date)} ${edu.detail ? '• ' + escapeHtml(edu.detail) : ''}</p>
        </div>
      </li>
    `).join('');
  }

  function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = CV_DATA.projects.map((project, index) => `
      <article class="project-card reveal" style="transition-delay: ${index * 100}ms">
        <div class="project-header">
          <h3 class="project-name">${escapeHtml(project.name)}</h3>
        </div>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" class="project-link"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg>Code</a>` : ''}
          ${project.demo ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer" class="project-link"><svg class="icon" aria-hidden="true"><use href="#icon-arrow-right"></use></svg>Demo</a>` : ''}
        </div>
      </article>
    `).join('');
  }

  function renderSkillsDetail() {
    const container = document.getElementById('skills-detail-grid');
    container.innerHTML = CV_DATA.skillsDetail.map((cat, index) => `
      <div class="skill-category reveal" style="transition-delay: ${index * 100}ms">
        <h3 class="skill-category-title">
          <svg class="icon" aria-hidden="true"><use href="#${cat.icon}"></use></svg>
          ${escapeHtml(cat.category)}
        </h3>
        <div class="skill-tags">
          ${cat.tags.map(tag => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // ========================================
  // Mobile Navigation
  // ========================================
  function setupMobileNav() {
    const { navToggle, navMenu, navLinks } = elements;

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  }

  // ========================================
  // Scroll Spy
  // ========================================
  function setupScrollSpy() {
    const { navLinks, sections } = elements;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    });

    sections.forEach(section => observer.observe(section));
  }

  // ========================================
  // Scroll Reveal
  // ========================================
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ========================================
  // PDF Download
  // ========================================
  function setupPDFDownload() {
    const btn = elements.downloadBtn;
    btn.addEventListener('click', () => {
      // Add print class for styling
      document.body.classList.add('printing');

      // Small delay to allow class to apply
      setTimeout(() => {
        window.print();
      }, 100);

      // Remove class after print dialog
      setTimeout(() => {
        document.body.classList.remove('printing');
      }, 1000);
    });
  }

  // ========================================
  // Avatar Fallback
  // ========================================
  function setupAvatarFallback() {
    const { avatar, avatarFallback } = elements;

    // Generate initials from name
    const initials = CV_DATA.name
      .split(' ')
      .map(w => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    avatarFallback.textContent = initials || '?';

    avatar.addEventListener('error', () => {
      avatar.style.display = 'none';
      avatarFallback.style.display = 'flex';
    });

    // If placeholder image, show fallback immediately
    if (avatar.src.includes('avatar.jpg')) {
      avatar.style.display = 'none';
      avatarFallback.style.display = 'flex';
    }
  }

  // ========================================
  // Utility
  // ========================================
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function updateCopyrightYear() {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  function updateLastUpdated() {
    elements.lastUpdated.textContent = CV_DATA.lastUpdated;
  }

  // ========================================
  // Run on DOM Ready
  // ========================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();