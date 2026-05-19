export interface Resource {
  id: string;
  name: string;
  note: { vi: string; en: string };
  url: string;
  isNew?: boolean;
}

export interface Section {
  title?: { vi: string; en: string };
  links?: Resource[];
  tags?: string[];
  note?: { vi: string; en: string };
}

export interface Category {
  id: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  sections: Section[];
}

export interface WizardOption {
  icon: string;
  label: string;
  sub: string;
  val: string;
}

export interface WizardStep {
  title: string;
  sub: string;
  opts: WizardOption[];
}

export const categories: Category[] = [
  {
    id: "m1",
    title: { vi: "Học Lập Trình & CS", en: "Learn Programming & CS" },
    description: { vi: "Kiến thức nền tảng · Ngôn ngữ · Khóa học", en: "Fundamentals · Languages · Courses" },
    sections: [
      {
        links: [
          { id: "code-org", name: "Code.org", url: "https://code.org/students", note: { vi: "Học CS miễn phí, mọi lứa tuổi", en: "Free CS learning for all ages" } },
          { id: "javatpoint", name: "Javatpoint", url: "https://www.javatpoint.com/", note: { vi: "Hướng dẫn từng ngôn ngữ, ví dụ rõ", en: "Step-by-step tutorials with examples" } },
          { id: "w3schools", name: "W3Schools", url: "https://www.w3schools.com/", note: { vi: "Tài liệu chuẩn: HTML, CSS, JS, SQL", en: "Standard web docs: HTML, CSS, JS" } },
          { id: "geeksforgeeks", name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", note: { vi: "Kho bài CS & DSA khổng lồ", en: "Massive CS & DSA article library" } },
          { id: "programiz", name: "Programiz", url: "https://www.programiz.com/", note: { vi: "Python, C, Java... thân thiện newbie", en: "Python, C, Java... beginner-friendly" } },
          { id: "educative", name: "Educative.io", url: "https://www.educative.io/", note: { vi: "Khóa học tương tác, code trực tiếp", en: "Interactive courses, run code in browser" } },
          { id: "viblo", name: "Viblo", url: "https://viblo.asia/newest", note: { vi: "Cộng đồng IT lớn nhất Việt Nam", en: "Vietnam's largest IT community" } }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: { vi: "DSA & Thuật Toán", en: "DSA & Algorithms" },
    description: { vi: "Cấu trúc dữ liệu · Thuật toán · Luyện tập", en: "Data Structures · Algorithms · Practice" },
    sections: [
      {
        title: { vi: "Nền tảng học", en: "Learning Platforms" },
        links: [
          { id: "neetcode", name: "NeetCode.io", url: "https://neetcode.io/", note: { vi: "Lộ trình DSA + video chất lượng", en: "DSA roadmap with quality videos" } },
          { id: "visualgo", name: "VisuAlgo", url: "https://visualgo.net/en", note: { vi: "Animation trực quan mọi thuật toán", en: "Visual animations for all algorithms" } }
        ]
      },
      {
        title: { vi: "Kênh YouTube", en: "YouTube Channels" },
        tags: ["Abdul Bari", "Michael Sambol", "NeetCode", "Jenny's Lectures CS IT"]
      },
      {
        title: { vi: "Luyện thuật toán", en: "Practice Platforms" },
        links: [
          { id: "hackerrank", name: "HackerRank", url: "https://www.hackerrank.com/", note: { vi: "Bài theo domain, cấp chứng chỉ", en: "Domain challenges with certificates" } },
          { id: "leetcode", name: "LeetCode", url: "https://leetcode.com/", note: { vi: "Luyện phỏng vấn big tech", en: "Big tech interview practice" } },
          { id: "exercism", name: "Exercism.io", url: "https://exercism.org/", note: { vi: "Mentor review miễn phí", en: "Free mentor code reviews" } },
          { id: "daily-coding", name: "Daily Coding Problem", url: "https://www.dailycodingproblem.com/", note: { vi: "1 bài toán/ngày qua email", en: "One coding problem daily by email" } }
        ]
      }
    ]
  },
  {
    id: "m3",
    title: { vi: "Diễn Đàn & Cộng Đồng", en: "Forums & Communities" },
    description: { vi: "Q&A · Networking · Dev Community", en: "Q&A · Networking · Dev Community" },
    sections: [
      {
        links: [
          { id: "stackoverflow", name: "Stack Overflow", url: "https://stackoverflow.com/", note: { vi: "Q&A lập trình số 1 thế giới", en: "World's #1 programming Q&A" } },
          { id: "hackerrank-comm", name: "HackerRank", url: "https://www.hackerrank.com/", note: { vi: "Cộng đồng dev, thi coding", en: "Dev community & contests" } },
          { id: "reddit-programming", name: "Reddit r/programming", url: "https://www.reddit.com/r/programming/", note: { vi: "Tin tức & thảo luận tech", en: "Tech news & developer discussions" } }
        ]
      }
    ]
  },
  {
    id: "m4",
    title: { vi: "AI Coding Tools", en: "AI Coding Tools" },
    description: { vi: "Assistants · Code Gen · App Builder · Review", en: "Assistants · Code Gen · App Builder · Review" },
    sections: [
      {
        title: { vi: "AI Editor & IDE", en: "AI Editor & IDE" },
        links: [
          { id: "copilot", name: "GitHub Copilot", url: "https://github.com/features/copilot", note: { vi: "Gợi ý code AI trong editor", en: "AI code suggestions in editor" } },
          { id: "cursor", name: "Cursor", url: "https://www.cursor.com/", note: { vi: "IDE AI, chat & edit codebase", en: "AI IDE, chat & edit codebase" } },
          { id: "windsurf", name: "Windsurf", url: "https://windsurf.com/", note: { vi: "IDE AI agentic bởi Codeium", en: "Agentic AI IDE by Codeium" } },
          { id: "trae", name: "Trae", url: "https://www.trae.ai/", note: { vi: "IDE AI miễn phí từ ByteDance", en: "Free AI IDE by ByteDance" } },
          { id: "warp", name: "Warp", url: "https://www.warp.dev/", note: { vi: "Terminal AI thế hệ mới", en: "Next-gen AI-powered terminal" } },
          { id: "augmentcode", name: "Augment Code", url: "https://www.augmentcode.com/", note: { vi: "AI hiểu codebase dự án lớn", en: "AI for large codebases" } },
          { id: "coderabbit", name: "CodeRabbit", url: "https://www.coderabbit.ai/", note: { vi: "AI tự động review PR", en: "Automated AI PR reviews" } }
        ]
      },
      {
        title: { vi: "Vibe Coding / App Builder", en: "Vibe Coding / App Builder" },
        links: [
          { id: "lovable", name: "Lovable", url: "https://lovable.dev/", note: { vi: "Fullstack app từ ngôn ngữ tự nhiên", en: "Fullstack app from natural language" } },
          { id: "bolt", name: "Bolt.new", url: "https://bolt.new/", note: { vi: "Build & deploy ngay trong browser", en: "Build & deploy right in browser" } },
          { id: "v0", name: "V0 by Vercel", url: "https://v0.dev/", note: { vi: "Gen UI React từ prompt", en: "Generate React UI from prompts" } },
          { id: "replit", name: "Replit", url: "https://replit.com/", note: { vi: "IDE online, AI Agent, mọi ngôn ngữ", en: "Online IDE, AI Agent, any language" } },
          { id: "dora", name: "Dora", url: "https://www.dora.run/", note: { vi: "Website 3D đẹp, không cần code", en: "Stunning 3D websites, no code" } },
          { id: "flames", name: "Flames.blue", url: "https://flames.blue/", note: { vi: "AI App Builder tốc độ cao", en: "High-speed AI App Builder" } },
          { id: "mgx", name: "MGX", url: "https://mgx.dev/", note: { vi: "Multi-agent AI builder", en: "Multi-agent AI builder" } }
        ]
      },
      {
        title: { vi: "AI Chat & Research", en: "AI Chat & Research" },
        links: [
          { id: "claude", name: "Claude", url: "https://claude.ai/", note: { vi: "AI Anthropic, code & phân tích tốt", en: "Anthropic AI, great coding & analysis" } },
          { id: "blackbox", name: "BlackboxAI", url: "https://www.blackbox.ai/", note: { vi: "AI chuyên gen code", en: "AI for code search & generation" } },
          { id: "z-ai-chat", name: "Z.ai Chat", url: "https://chat.z.ai/", note: { vi: "Chat đa mô hình AI", en: "Multi-model AI chat" } },
          { id: "lmarena", name: "LMArena", url: "https://lmarena.ai/", note: { vi: "Xếp hạng AI model dạng arena", en: "AI model ranking in arena" } },
          { id: "manus", name: "Manus AI", url: "https://manus.im/", note: { vi: "Agent AI tự động nhiệm vụ", en: "Autonomous AI agent" } },
          { id: "clawdbot", name: "Clawdbot", url: "https://clawdbot.com/", note: { vi: "AI assistant đa tác vụ", en: "Multi-task AI assistant" } },
          { id: "kimi", name: "Kimi AI", url: "https://kimi.ai/", note: { vi: "Context dài, xử lý file lớn", en: "Long context, large file support" } },
          { id: "scira", name: "Scira", url: "https://scira.app/", note: { vi: "AI search engine OSS", en: "Open-source AI search engine" } }
        ]
      },
      {
        title: { vi: "Infra & Backend", en: "Infra & Backend" },
        links: [
          { id: "vercel", name: "Vercel", url: "https://vercel.com/", note: { vi: "Deploy Next.js cực nhanh", en: "Ultra-fast Next.js deployment" } },
          { id: "firebase-studio", name: "Firebase Studio", url: "https://firebase.google.com/products/studio", note: { vi: "IDE AI Google + Firebase", en: "Google AI IDE + Firebase backend" } },
          { id: "neon", name: "Neon", url: "https://neon.com/", note: { vi: "PostgreSQL serverless, auto-scale", en: "Serverless PostgreSQL, auto-scale" } }
        ]
      },
      {
        title: { vi: "Code Review & Analysis", en: "Code Review & Analysis" },
        links: [
          { id: "greptile", name: "Greptile", url: "https://www.greptile.com/", note: { vi: "AI Q&A sâu cho toàn codebase", en: "Deep AI Q&A for your codebase" } },
          { id: "traycer", name: "Traycer AI", url: "https://traycer.ai/", note: { vi: "AI lên kế hoạch & chia task", en: "AI task planning & breakdown" } },
          { id: "pencil-dev", name: "Pencil.dev", url: "https://pencil.dev/", note: { vi: "AI tự tạo & chạy test", en: "AI auto-generates and runs tests" } }
        ]
      },
      {
        title: { vi: "Mobile App Builder", en: "Mobile App Builder" },
        links: [
          { id: "onspace", name: "OnSpace AI", url: "https://onspace.ai/", note: { vi: "Mobile App bằng AI, zero code", en: "Mobile apps with AI, no code" } }
        ],
        note: {
          vi: "<strong>Less Code → Viết Prompt → Flutter</strong> — Dùng AI mô tả UI rồi gen Flutter code tự động.",
          en: "<strong>Less Code → Write Prompt → Flutter</strong> — Describe UI with AI, auto-gen Flutter code."
        }
      }
    ]
  },
  {
    id: "m5",
    title: { vi: "UI/UX & Thiết Kế", en: "UI/UX & Design" },
    description: { vi: "Figma · Prototyping · Colors · Diagram", en: "Figma · Prototyping · Colors · Diagram" },
    sections: [
      {
        title: { vi: "Device Mockup", en: "Device Mockup" },
        links: [
          { id: "shots", name: "Shots.so", url: "https://shots.so/", note: { vi: "Mockup màn hình mọi thiết bị", en: "Beautiful mockups for any device" } },
          { id: "jitter-motion", name: "Jitter", url: "https://jitter.video/", isNew: true, note: { vi: "Công cụ motion design cho UI", en: "Motion design tool for UI" } },
          { id: "device-frames", name: "Device Frames", url: "https://deviceframes.com/", isNew: true, note: { vi: "Tạo mockup thiết bị 3D", en: "Create 3D device mockups" } },
          { id: "mockups-snap", name: "MockupsSnap", url: "https://mockupsnap.com/", isNew: true, note: { vi: "Tạo mockup nhanh chóng", en: "Create mockups quickly" } },
          { id: "mockup-frame", name: "MockupFrame", url: "https://mockupframe.com/", isNew: true, note: { vi: "Mockup thiết bị và khung hình", en: "Device and frame mockups" } },
          { id: "riseshot", name: "Riseshot", url: "https://www.riseshot.com/", isNew: true, note: { vi: "Mockup thiết bị cao cấp", en: "Premium device mockups" } },
          { id: "screenwrap", name: "Screenwrap", url: "https://screenwrap.app/", isNew: true, note: { vi: "Quay màn hình và mockup đẹp", en: "Screen recording and beautiful mockups" } },
          { id: "chroma-portal", name: "Chroma Portal", url: "https://chromaportal.com/", isNew: true, note: { vi: "Mockup thiết bị 3D trên trình duyệt", en: "3D device mockups in the browser" } }
        ]
      },
      {
        title: { vi: "Màu sắc & Nền", en: "Colors & Backgrounds" },
        links: [
          { id: "happyhues", name: "Happy Hues", url: "https://www.happyhues.co/", note: { vi: "Bảng màu nền trực quan", en: "Color palettes with live examples" } },
          { id: "neat-cms", name: "Neat (FireCMS)", url: "https://neat.firecms.co/", note: { vi: "Gradient động đẹp, copy CSS ngay", en: "Animated gradients, copy CSS instantly" } },
          { id: "svgwave", name: "SVG Wave", url: "https://svgwave.in/", note: { vi: "SVG sóng cho header/footer", en: "Wave SVGs for header/footer" } }
        ]
      },
      {
        title: { vi: "Design Tools", en: "Design Tools" },
        links: [
          { id: "figma", name: "Figma", url: "https://www.figma.com/", note: { vi: "Tool UI/UX số 1, cộng tác cloud", en: "#1 UI/UX tool, cloud collaboration" } },
          { id: "adobexd", name: "Adobe XD", url: "https://www.adobe.com/products/xd.html", note: { vi: "Thiết kế & prototype, Adobe suite", en: "Design & prototype, Adobe suite" } },
          { id: "rive", name: "Rive", url: "https://rive.app/", note: { vi: "Animation tương tác, export code", en: "Interactive animations, export code" } },
          { id: "stitch-google", name: "Stitch by Google", url: "https://stitch.withgoogle.com/", note: { vi: "AI gen giao diện từ prompt (Google)", en: "Google AI UI generator from prompts" } },
          { id: "sleek-design", name: "Sleek Design", url: "https://sleek.design/", note: { vi: "Tài nguyên UI tuyển chọn kỹ", en: "Curated high-quality UI resources" } }
        ]
      },
      {
        title: { vi: "Diagram & Visual", en: "Diagram & Visual" },
        links: [
          { id: "sequencediagram", name: "SequenceDiagram.org", url: "https://www.sequencediagram.org/", note: { vi: "Vẽ UML sequence diagram online", en: "Draw UML sequence diagrams online" } },
          { id: "drawio", name: "Draw.io", url: "https://www.drawio.com/", note: { vi: "Flowchart & sơ đồ hệ thống, free", en: "Flowcharts & system diagrams, free" } }
        ]
      }
    ]
  },
  {
    id: "m6",
    title: { vi: "Animation & Assets", en: "Animation & Assets" },
    description: { vi: "Lottie · Icons · Motion · Scroll Effects", en: "Lottie · Icons · Motion · Scroll Effects" },
    sections: [
      {
        links: [
          { id: "lottiefiles", name: "LottieFiles", url: "https://lottiefiles.com/", note: { vi: "Animation JSON nhẹ, embed dễ", en: "Lightweight JSON animations" } },
          { id: "lordicon", name: "Lordicon", url: "https://lordicon.com/", note: { vi: "Icon động đẹp cho UI", en: "Beautiful animated icons for UI" } },
          { id: "jitter", name: "Jitter", url: "https://jitter.video/", note: { vi: "Motion design & video animation", en: "Motion design & video animations" } },
          { id: "scroll-animation", name: "Scroll Animation", url: "https://webflow.com/made-in-webflow/scroll-animation", note: { vi: "Showcase scroll animation đẹp", en: "Beautiful scroll animation showcase" } }
        ]
      }
    ]
  },
  {
    id: "m7",
    title: { vi: "Web Templates & UI Kits", en: "Web Templates & UI Kits" },
    description: { vi: "Templates · Components · UI Libraries", en: "Templates · Components · UI Libraries" },
    sections: [
      {
        links: [
          { id: "aceternity", name: "Aceternity UI", url: "https://pro.aceternity.com/templates", note: { vi: "Template React đẹp, animation hiện đại", en: "Beautiful React templates & animations" } },
          { id: "reui", name: "ReUI", url: "https://reui.io/", note: { vi: "Components React chuyên nghiệp", en: "Professional React UI components" } },
          { id: "21st-dev", name: "21st.dev", url: "https://21st.dev/home", note: { vi: "UI component OSS chất lượng cao", en: "High-quality open-source UI" } },
          { id: "seraui", name: "SeraUI", url: "https://seraui.com/", note: { vi: "Components đẹp, Tailwind CSS", en: "Beautiful Tailwind CSS components" } },
          { id: "reactbits", name: "React Bits", url: "https://www.reactbits.dev/", note: { vi: "Animated components, copy & paste", en: "Animated React components" } },
          { id: "themedevhub", name: "Themedevhub", url: "https://www.themedevhub.com/", note: { vi: "Template web free & premium", en: "Free & premium web templates" } },
          { id: "freepik", name: "Freepik", url: "https://www.freepik.com/", note: { vi: "Kho ảnh, vector, mockup lớn", en: "Large image, vector & mockup library" } },
          { id: "placeit", name: "Placeit", url: "https://www.placeit.net/", note: { vi: "Mockup & logo nhanh", en: "Quick product mockups & logos" } },
          { id: "thibault-game", name: "Thibault Gamefolio", url: "https://thibautfoussard.com/", note: { vi: "Portfolio sáng tạo, nguồn cảm hứng", en: "Creative portfolio, design inspiration" } }
        ]
      }
    ]
  },
  {
    id: "m8",
    title: { vi: "Nội Dung & TTS", en: "Content & TTS" },
    description: { vi: "Infographic · Text to Speech · Prompt", en: "Infographic · Text to Speech · Prompt" },
    sections: [
      {
        links: [
          { id: "vietcetera", name: "Vietcetera", url: "https://vietcetera.com/", note: { vi: "Media tech & business VN chất lượng", en: "Quality Vietnamese tech & business media" } },
          { id: "notexapp", name: "Notex App", url: "https://notexapp.com/home", note: { vi: "Text → infographic đẹp, nhanh", en: "Text to beautiful infographics fast" } },
          { id: "j2team-tts", name: "J2TEAM", url: "https://j2team.dev/", note: { vi: "TTS / STT, tiện ích J2TEAM", en: "TTS / STT tools by J2TEAM" } },
          { id: "prompts-chat", name: "Prompts.chat", url: "https://prompts.chat/", note: { vi: "Bộ sưu tập AI prompt tốt nhất", en: "Best AI prompt collection" } }
        ]
      }
    ]
  },
  {
    id: "m9",
    title: { vi: "Công Cụ Dev & Tiện Ích", en: "Dev Tools & Utilities" },
    description: { vi: "Tech Stack · SQL · Content Tools", en: "Tech Stack · SQL · Content Tools" },
    sections: [
      {
        links: [
          { id: "builtwith", name: "BuiltWith", url: "https://builtwith.com/", note: { vi: "Kiểm tra tech stack mọi website", en: "Check tech stack of any website" } },
          { id: "runsql", name: "RunSQL", url: "https://runql.com/", note: { vi: "Chạy SQL query trực tiếp", en: "Run SQL queries directly in browser" } },
          { id: "promogen", name: "PromoGen", url: "https://www.promogen.ai/", note: { vi: "Nội dung quảng cáo bằng AI", en: "AI marketing content generator" } }
        ]
      }
    ]
  },
  {
    id: "m10",
    title: { vi: "Roadmap & Học Tổng Hợp", en: "Roadmaps & Learning" },
    description: { vi: "Web Skills · Học mọi thứ · Nâng cao", en: "Web Skills · Learn Anything · Advanced" },
    sections: [
      {
        links: [
          { id: "webskills", name: "Web Skills", url: "https://andreasbm.github.io/web-skills/", note: { vi: "Bản đồ kỹ năng web dev đầy đủ", en: "Full visual web dev skills map" } },
          { id: "learnanything", name: "Learn Anything", url: "https://learn-anything.xyz/", note: { vi: "Lộ trình học mọi chủ đề", en: "Learning paths for any topic" } },
          { id: "google-ai", name: "Google AI Studio", url: "https://ai.google.dev/gemini-api/docs", note: { vi: "Tài liệu chính thức Google AI", en: "Official Google AI & Gemini API docs" } },
          { id: "z-ai-total", name: "Z.ai", url: "https://z.ai/", note: { vi: "AI tổng hợp, so sánh model", en: "All-in-one AI, compare models" } }
        ]
      }
    ]
  }
];

export const WZ_DATA: { vi: { steps: WizardStep[] }; en: { steps: WizardStep[] } } = {
  vi: {
    steps: [
      {
        title: "Lĩnh vực quan tâm",
        sub: "Bạn quan tâm đến mảng nào nhất?",
        opts: [
          { icon: "💻", label: "Lập trình & CS", sub: "Thuật toán, ngôn ngữ", val: "cs" },
          { icon: "🤖", label: "AI & Machine Learning", sub: "AI tools, ML, LLM", val: "ai" },
          { icon: "🎨", label: "UI/UX & Design", sub: "Figma, thiết kế giao diện", val: "design" },
          { icon: "🚀", label: "Fullstack Dev", sub: "Frontend, backend, deploy", val: "fullstack" }
        ]
      },
      {
        title: "Trình độ hiện tại",
        sub: "Bạn đang ở giai đoạn nào?",
        opts: [
          { icon: "🌱", label: "Mới bắt đầu", sub: "Chưa có kinh nghiệm", val: "beginner" },
          { icon: "📖", label: "Đang học", sub: "Đã biết cơ bản", val: "learning" },
          { icon: "⚡", label: "Trung cấp", sub: "Có dự án thực tế", val: "intermediate" },
          { icon: "🔥", label: "Nâng cao", sub: "Senior / chuyên sâu", val: "advanced" }
        ]
      },
      {
        title: "Loại tài nguyên",
        sub: "Bạn thích học qua hình thức nào?",
        opts: [
          { icon: "📚", label: "Tài liệu & Docs", sub: "Đọc, tham khảo nhanh", val: "docs" },
          { icon: "🎥", label: "Video & Khóa học", sub: "YouTube, interactive", val: "video" },
          { icon: "🛠️", label: "Công cụ thực hành", sub: "Build, code, deploy", val: "tools" },
          { icon: "🏆", label: "Luyện tập & Challenge", sub: "LeetCode, hackathons", val: "practice" }
        ]
      },
      {
        title: "Mục tiêu học tập",
        sub: "Bạn muốn đạt được điều gì?",
        opts: [
          { icon: "💼", label: "Tìm việc làm", sub: "Interview, portfolio", val: "job" },
          { icon: "🏗️", label: "Xây dựng sản phẩm", sub: "SaaS, app, side project", val: "build" },
          { icon: "🧠", label: "Nâng cao kiến thức", sub: "Học sâu, nghiên cứu", val: "knowledge" },
          { icon: "🌐", label: "Freelance", sub: "Làm dự án tự do", val: "freelance" }
        ]
      }
    ]
  },
  en: {
    steps: [
      {
        title: "Your Interest Area",
        sub: "What are you most interested in?",
        opts: [
          { icon: "💻", label: "Programming & CS", sub: "Algorithms, languages", val: "cs" },
          { icon: "🤖", label: "AI & Machine Learning", sub: "AI tools, ML, LLM", val: "ai" },
          { icon: "🎨", label: "UI/UX & Design", sub: "Figma, interface design", val: "design" },
          { icon: "🚀", label: "Fullstack Dev", sub: "Frontend, backend, deploy", val: "fullstack" }
        ]
      },
      {
        title: "Current Level",
        sub: "Where are you right now?",
        opts: [
          { icon: "🌱", label: "Beginner", sub: "No experience yet", val: "beginner" },
          { icon: "📖", label: "Learning", sub: "Know the basics", val: "learning" },
          { icon: "⚡", label: "Intermediate", sub: "Have real projects", val: "intermediate" },
          { icon: "🔥", label: "Advanced", sub: "Senior level", val: "advanced" }
        ]
      },
      {
        title: "Resource Type",
        sub: "How do you prefer to learn?",
        opts: [
          { icon: "📚", label: "Docs & References", sub: "Reading, quick reference", val: "docs" },
          { icon: "🎥", label: "Videos & Courses", sub: "YouTube, interactive", val: "video" },
          { icon: "🛠️", label: "Hands-on Tools", sub: "Build, code, deploy", val: "tools" },
          { icon: "🏆", label: "Practice & Challenges", sub: "LeetCode, hackathons", val: "practice" }
        ]
      },
      {
        title: "Learning Goal",
        sub: "What do you want to achieve?",
        opts: [
          { icon: "💼", label: "Get a Job", sub: "Interview, portfolio", val: "job" },
          { icon: "🏗️", label: "Build a Product", sub: "SaaS, app, side project", val: "build" },
          { icon: "🧠", label: "Deepen Knowledge", sub: "Study, research", val: "knowledge" },
          { icon: "🌐", label: "Freelance", sub: "Independent projects", val: "freelance" }
        ]
      }
    ]
  }
};

export const SUGGEST_MAP: { [key: string]: string[] } = {
  cs: ["m1", "m2"],
  ai: ["m4"],
  design: ["m5", "m6", "m7"],
  fullstack: ["m4", "m5", "m9"],
  beginner: ["m1", "m2", "m3"],
  learning: ["m1", "m2", "m4"],
  intermediate: ["m4", "m5", "m9"],
  advanced: ["m4", "m9", "m10"],
  docs: ["m1", "m10"],
  video: ["m2", "m4"],
  tools: ["m4", "m9"],
  practice: ["m2", "m3"],
  job: ["m2", "m3", "m4"],
  build: ["m4", "m7", "m9"],
  knowledge: ["m1", "m10"],
  freelance: ["m5", "m7", "m4"]
};

export const MODULE_NAMES: { vi: { [key: string]: string }; en: { [key: string]: string } } = {
  vi: {
    m1: "Học Lập Trình & CS",
    m2: "DSA & Thuật Toán",
    m3: "Diễn Đàn & Cộng Đồng",
    m4: "AI Coding Tools",
    m5: "UI/UX & Thiết Kế",
    m6: "Animation & Assets",
    m7: "Web Templates & UI Kits",
    m8: "Nội Dung & TTS",
    m9: "Công Cụ Dev & Tiện Ích",
    m10: "Roadmap & Học Tổng Hợp"
  },
  en: {
    m1: "Learn Programming & CS",
    m2: "DSA & Algorithms",
    m3: "Forums & Communities",
    m4: "AI Coding Tools",
    m5: "UI/UX & Design",
    m6: "Animation & Assets",
    m7: "Web Templates & UI Kits",
    m8: "Content & TTS",
    m9: "Dev Tools & Utilities",
    m10: "Roadmap & Learning"
  }
};
