// --- PROJECT DATA ---
const projectsData = [
  {
    id: 1,
    title: "Bài 1: Máy tính và các thiết bị ngoại vi",
    type: "Bài tập 1",
    objective: "Tìm hiểu cấu trúc phần cứng máy tính và cách thiết lập các thiết bị ngoại vi phục vụ học tập.",
    process: "Khảo sát và đánh giá thông số kỹ thuật của CPU, RAM, ổ cứng, card đồ họa. Phân tích sự tương thích phần cứng và lập hướng dẫn sử dụng, kết nối ngoại vi chuẩn xác.",
    link: "https://drive.google.com/file/d/1zUinto5376b_afyi4XO_VFHxeVAN_HhR/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Bài 2: Khai thác dữ liệu và thông tin",
    type: "Bài tập 2",
    objective: "Rèn luyện tư duy tìm kiếm thông tin khoa học nâng cao và đánh giá độ tin cậy của tài liệu.",
    process: "Sử dụng hiệu quả các toán tử tìm kiếm chuyên biệt của Google (filetype:, site:, dấu ngoặc kép). Đối chiếu số liệu từ nhiều nguồn độc lập để viết báo cáo khoa học khách quan.",
    link: "https://drive.google.com/file/d/1-pzGsCeuOrATYRVud2HCLbtIMwlzOQ04/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Bài 3: Tổng quan về trí tuệ nhân tạo (AI)",
    type: "Bài tập 2",
    objective: "Tiếp cận khái niệm cơ bản về AI, Machine Learning và cách ứng dụng AI hỗ trợ học tập.",
    process: "Nghiên cứu sự phát triển của công nghệ AI, tiềm năng đột phá trong lĩnh vực phân tích kinh doanh. Thực hành kiểm chứng và ứng dụng an toàn các công cụ như ChatGPT, Gemini.",
    link: "https://drive.google.com/file/d/1ZNMXwsqEjWjausjOjItqvyG5G9JoXT3j/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
    type: "Bài tập 3",
    objective: "Trải nghiệm quy trình làm việc nhóm trực tuyến đồng bộ và quản trị tiến độ dự án số.",
    process: "Cộng tác từ xa thông qua Slack và Google Workspace, xây dựng bảng Trello theo dõi công việc. Viết tài liệu đồng thời trên Cloud và giải quyết xung đột khi tích hợp nội dung.",
    link: "https://drive.google.com/file/d/1Izla_3Re4RpT2RCOQmXWjqogq6_L8OCJ/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Bài 5: Sáng tạo nội dung số",
    type: "Bài tập 2",
    objective: "Phát triển năng lực thiết kế đồ họa truyền thông và làm video phục vụ marketing.",
    process: "Sử dụng Canva để thiết kế poster kỹ thuật số theo bố cục hiện đại, phối màu hài hòa. Biên tập và cắt ghép clip ngắn giới thiệu dự án, đảm bảo âm thanh và phụ đề trực quan.",
    link: "https://drive.google.com/file/d/1LD_r5PD7TPXLdNjy44zdamnka1zOMsj4/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
    type: "Bài tập 4",
    objective: "Bảo vệ thông tin cá nhân trên mạng xã hội và tuân thủ đạo đức nghiên cứu khoa học.",
    process: "Cấu hình bảo mật 2 lớp (2FA), nhận diện hành vi lừa đảo mạng (phishing). Thực hành trích dẫn tài liệu theo chuẩn APA/IEEE và cách sử dụng các công cụ kiểm tra đạo văn tự động.",
    link: "https://drive.google.com/file/d/1Z1ARkKGNwF-ADlNN1TlztsPGRINHXh4M/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Dự án cuối khóa: Xây dựng Portfolio điện tử",
    type: "Báo cáo tổng kết",
    objective: "Tích hợp toàn bộ hành trình học tập, tự đánh giá và nâng cấp kỹ năng lập trình giao diện.",
    process: "Thiết kế khung giao diện UX/UI hiện đại, viết mã nguồn HTML5/CSS3/JS đáp ứng tốt trên các thiết bị. Kiểm thử đường dẫn Drive của các bài tập lớn đảm bảo hoạt động ổn định.",
    link: "https://drive.google.com/file/d/1hLPvWp8NCBSsqoZUmmFwIzeQGDXceeW3/view?usp=drive_link"
  }
];

// --- APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects();
  initNavigation();
  initMobileMenu();
});

// --- THEME SWITCHER LOGIC ---
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  // Apply initial theme
  document.body.setAttribute("data-theme", currentTheme);
  
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.body.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Simple micro-animation on toggle click
    themeToggleBtn.style.transform = "scale(0.9) rotate(30deg)";
    setTimeout(() => {
      themeToggleBtn.style.transform = "";
    }, 150);
  });
}

// --- DYNAMIC PROJECTS RENDER ---
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = projectsData.map(proj => `
    <div class="project-card" style="animation: fadeInUp 0.5s ease forwards; animation-delay: ${proj.id * 0.1}s;">
      <div class="project-header">
        <span class="project-badge-num">#${proj.id}</span>
        <span class="project-type-tag">${proj.type}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <div class="project-sections">
        <div>
          <h4 class="project-section-title">Mục tiêu</h4>
          <p class="project-section-desc">${proj.objective}</p>
        </div>
        <div>
          <h4 class="project-section-title">Quá trình thực hiện</h4>
          <p class="project-section-desc">${proj.process}</p>
        </div>
      </div>
      <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
        <span>Xem sản phẩm (Drive)</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="0 0.h24v24H0z"/>
          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.414l-7 7L10.586 12l7-7H13V3h8z"/>
        </svg>
      </a>
    </div>
  `).join("");
}

// --- VIEW NAVIGATION LOGIC ---
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const views = document.querySelectorAll(".view-section");
  const navLinksContainer = document.querySelector(".nav-links");
  const mobileToggle = document.getElementById("mobileMenuToggle");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetViewId = link.getAttribute("data-target");
      
      // Update active nav link
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      // Show matching view section with transition
      views.forEach(view => {
        if (view.id === targetViewId) {
          view.classList.add("active");
          view.style.display = "block";
          // Small delay to trigger transition smoothly
          setTimeout(() => {
            view.style.opacity = "1";
            view.style.transform = "translateY(0)";
          }, 50);
        } else {
          view.classList.remove("active");
          view.style.opacity = "0";
          view.style.transform = "translateY(20px)";
          // Hide element completely after transition completes
          setTimeout(() => {
            if (!view.classList.contains("active")) {
              view.style.display = "none";
            }
          }, 300);
        }
      });

      // Scroll to top of content smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      // Collapse mobile menu if open
      if (navLinksContainer.classList.contains("mobile-active")) {
        navLinksContainer.classList.remove("mobile-active");
        if (mobileToggle) {
          mobileToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
            </svg>
          `;
        }
      }
    });
  });
}

// --- MOBILE HAMBURGER MENU ---
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (!mobileToggle || !navLinks) return;
  
  mobileToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-active");
    
    if (isOpen) {
      mobileToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
        </svg>
      `;
    } else {
      mobileToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
        </svg>
      `;
    }
  });
}
