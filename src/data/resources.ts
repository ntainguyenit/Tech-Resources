export interface Resource {
  id: string;
  name: string;
  note: { vi: string; en: string };
  url: string;
  isNew?: boolean;
}

export interface Section {
  title: { vi: string; en: string };
  links: Resource[];
}

export interface Category {
  id: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  sections: Section[];
}

export const categories: Category[] = [
  {
    id: "m1",
    title: { vi: "Học Lập Trình & CS", en: "Learn Programming & CS" },
    description: { vi: "Kiến thức nền tảng · Ngôn ngữ · Khóa học", en: "Fundamentals · Languages · Courses" },
    sections: [
      {
        title: { vi: "Nền tảng học tập", en: "Learning Platforms" },
        links: [
          { id: "code-org", name: "Code.org", url: "https://code.org/students", note: { vi: "Học CS miễn phí, mọi lứa tuổi", en: "Free CS learning for all ages" } },
          { id: "javatpoint", name: "Javatpoint", url: "https://www.javatpoint.com/", note: { vi: "Hướng dẫn từng ngôn ngữ, ví dụ rõ", en: "Step-by-step tutorials with examples" } },
          { id: "w3schools", name: "W3Schools", url: "https://www.w3schools.com/", note: { vi: "Tài liệu chuẩn: HTML, CSS, JS, SQL", en: "Standard web docs: HTML, CSS, JS" } },
          { id: "geeksforgeeks", name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", note: { vi: "Kho bài CS & DSA khổng lồ", en: "Massive CS & DSA article library" } },
          { id: "programiz", name: "Programiz", url: "https://www.programiz.com/", note: { vi: "Python, C, Java... thân thiện newbie", en: "Python, C, Java... beginner-friendly" } },
          { id: "educative", name: "Educative.io", url: "https://www.educative.io/", note: { vi: "Khóa học tương tác, code trực tiếp", en: "Interactive courses, run code in browser" } },
          { id: "viblo", name: "Viblo", url: "https://viblo.asia/newest", note: { vi: "Cộng đồng IT lớn nhất Việt Nam", en: "Vietnam's largest IT community" } },
        ],
      },
    ],
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
          { id: "visualgo", name: "VisuAlgo", url: "https://visualgo.net/en", note: { vi: "Animation trực quan mọi thuật toán", en: "Visual animations for all algorithms" } },
        ],
      },
      {
        title: { vi: "Kênh YouTube", en: "YouTube Channels" },
        links: [
          { id: "abdul-bari", name: "Abdul Bari", url: "https://www.youtube.com/@abdul_bari", note: { vi: "Giảng dạy thuật toán cực hay", en: "Excellent algorithm tutorials" } },
          { id: "michael-sambol", name: "Michael Sambol", url: "https://www.youtube.com/@MichaelSambol", note: { vi: "Thuật toán ngắn gọn trong 2 phút", en: "Short 2-minute algorithm videos" } },
          { id: "jennys-lectures", name: "Jenny's Lectures", url: "https://www.youtube.com/@JennysLecturesCSIT", note: { vi: "Bài giảng CS & IT chi tiết", en: "Detailed CS & IT lectures" } },
        ],
      },
      {
        title: { vi: "Luyện thuật toán", en: "Practice Platforms" },
        links: [
          { id: "hackerrank", name: "HackerRank", url: "https://www.hackerrank.com/", note: { vi: "Bài theo domain, cấp chứng chỉ", en: "Domain challenges with certificates" } },
          { id: "leetcode", name: "LeetCode", url: "https://leetcode.com/", note: { vi: "Luyện phỏng vấn big tech", en: "Big tech interview practice" } },
          { id: "exercism", name: "Exercism.io", url: "https://exercism.org/", note: { vi: "Mentor review miễn phí", en: "Free mentor code reviews" } },
          { id: "daily-coding", name: "Daily Coding Problem", url: "https://www.dailycodingproblem.com/", note: { vi: "1 bài toán/ngày qua email", en: "One coding problem daily by email" } },
        ],
      },
    ],
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
          { id: "coderabbit", name: "CodeRabbit", url: "https://www.coderabbit.ai/", note: { vi: "AI tự động review PR", en: "Automated AI PR reviews" } },
        ],
      },
      {
        title: { vi: "Vibe Coding / App Builder", en: "Vibe Coding / App Builder" },
        links: [
          { id: "capacity", name: "Capacity", url: "https://capacity.so/", note: { vi: "AI xây dựng app full-stack qua chat", en: "AI builds full-stack apps via chat" }, isNew: true },
          { id: "opal", name: "Opal", url: "https://opal.withgoogle.com/landing", note: { vi: "Tạo mini-app AI bằng ngôn ngữ tự nhiên (Google)", en: "Create AI mini-apps with natural language (Google)" }, isNew: true },
          { id: "aura", name: "Aura", url: "https://aura.build/", note: { vi: "Tự động tạo UI & code bằng AI", en: "Automated AI UI & code generation" }, isNew: true },
          { id: "woz", name: "Woz", url: "https://withwoz.com/", note: { vi: "Nền tảng kỹ sư phần mềm AI", en: "AI software engineer platform" }, isNew: true },
          { id: "lovable", name: "Lovable", url: "https://lovable.dev/", note: { vi: "Fullstack app từ ngôn ngữ tự nhiên", en: "Fullstack app from natural language" } },
          { id: "bolt", name: "Bolt.new", url: "https://bolt.new/", note: { vi: "Build & deploy ngay trong browser", en: "Build & deploy right in browser" } },
          { id: "v0", name: "V0 by Vercel", url: "https://v0.dev/", note: { vi: "Gen UI React từ prompt", en: "Generate React UI from prompts" } },
          { id: "replit", name: "Replit", url: "https://replit.com/", note: { vi: "IDE online, AI Agent, mọi ngôn ngữ", en: "Online IDE, AI Agent, any language" } },
        ],
      },
      {
        title: { vi: "AI Chat & Research", en: "AI Chat & Research" },
        links: [
          { id: "claude", name: "Claude", url: "https://claude.ai/", note: { vi: "AI Anthropic, code & phân tích tốt", en: "Anthropic AI, great coding & analysis" } },
          { id: "blackbox", name: "BlackboxAI", url: "https://www.blackbox.ai/", note: { vi: "AI chuyên gen code", en: "AI for code search & generation" } },
          { id: "kimi", name: "Kimi AI", url: "https://kimi.ai/", note: { vi: "Context dài, xử lý file lớn", en: "Long context, large file support" } },
        ],
      },
    ],
  },
  {
    id: "m5",
    title: { vi: "UI/UX & Thiết Kế", en: "UI/UX & Design" },
    description: { vi: "Figma · Prototyping · Colors · Diagram", en: "Figma · Prototyping · Colors · Diagram" },
    sections: [
      {
        title: { vi: "Công cụ thiết kế", en: "Design Tools" },
        links: [
          { id: "skeudesign", name: "SkeuDesign", url: "https://skeudesign.com/", note: { vi: "AI tạo icon 3D skeuomorphic", en: "AI generates 3D skeuomorphic icons" }, isNew: true },
          { id: "figma", name: "Figma", url: "https://www.figma.com/", note: { vi: "Tool UI/UX số 1, cộng tác cloud", en: "#1 UI/UX tool, cloud collaboration" } },
          { id: "rive", name: "Rive", url: "https://rive.app/", note: { vi: "Animation tương tác, export code", en: "Interactive animations, export code" } },
          { id: "shots", name: "Shots.so", url: "https://shots.so/", note: { vi: "Mockup màn hình mọi thiết bị", en: "Beautiful mockups for any device" } },
        ],
      },
      {
        title: { vi: "Màu sắc & Nền", en: "Colors & Backgrounds" },
        links: [
          { id: "happyhues", name: "Happy Hues", url: "https://www.happyhues.co/", note: { vi: "Bảng màu nền trực quan", en: "Color palettes with live examples" } },
          { id: "neat", name: "Neat", url: "https://neat.firecms.co/", note: { vi: "Gradient động đẹp, copy CSS ngay", en: "Animated gradients, copy CSS instantly" } },
        ],
      },
      {
        title: { vi: "Video & Animation", en: "Video & Animation" },
        links: [
          { id: "swishy", name: "Swishy", url: "https://www.swishy.ai/", note: { vi: "Tạo animation quảng cáo bằng AI", en: "AI-powered ad animation creator" }, isNew: true },
          { id: "captist", name: "Captist", url: "https://captist.com/vi/", note: { vi: "Quay video màn hình chuyên nghiệp, auto zoom", en: "Pro screen recording with auto zoom" }, isNew: true },
        ],
      },
    ],
  },
  {
    id: "m7",
    title: { vi: "Web Templates & UI Kits", en: "Web Templates & UI Kits" },
    description: { vi: "Templates · Components · UI Libraries", en: "Templates · Components · UI Libraries" },
    sections: [
      {
        title: { vi: "UI Components", en: "UI Components" },
        links: [
          { id: "aceternity", name: "Aceternity UI", url: "https://pro.aceternity.com/templates", note: { vi: "Template React đẹp, animation hiện đại", en: "Beautiful React templates & animations" } },
          { id: "reactbits", name: "React Bits", url: "https://www.reactbits.dev/", note: { vi: "Animated components, copy & paste", en: "Animated React components" } },
          { id: "freepik", name: "Freepik", url: "https://www.freepik.com/", note: { vi: "Kho ảnh, vector, mockup lớn", en: "Large image, vector & mockup library" } },
        ],
      },
    ],
  },
];
