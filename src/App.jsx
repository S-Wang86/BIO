import React, { useState, useEffect, useRef } from 'react';

// --- 图标组件 (内联 SVG) ---
const Moon = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const Sun = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const MenuIcon = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const X = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const Linkedin = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const Mail = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Trophy = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const Instagram = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const ChevronRight = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>;
const Quote = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>;
const ArrowLeft = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const Check = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5"/></svg>;
const Copy = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const Plane = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-.5-.5-2.5 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6c-.1.4.1.9.5 1.1L9 15l-4 4-2.5-.5c-.3-.1-.7 0-.9.3l-1.1 1.1c-.2.2-.2.6 0 .8l3.6 2.6c.2.1.5.2.8.2h.2l2.6-3.6c.2-.2.2-.6 0-.8l-1.1-1.1-.5-2.5 4-4 3.4 6c.2.4.7.6 1.1.5l3.6-1.2c.5-.2.8-.6.7-1.1z"/></svg>;
const Download = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;

// --- 实用工具：触觉反馈 ---
const triggerHaptic = (pattern = 50) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

// --- 语言词典 ---
const t = {
  en: {
    home: "Overview",
    projects: "Portfolio", 
    work: "Work",
    leadership: "Leadership",
    achievements: "Honors",
    hobbies: "Hobbies",
    about: "About",
    backBtn: "Back to Portfolio",
    downloadResume: "Download Resume",
    
    eggMystery: "But a little mystery waiting for you to uncover.",
    eggClickMore: "Keep clicking...",
    eggSecretFound: "🎉 You uncovered a secret: I might actually be a time traveler sent here to engineer a better future. (Just kidding... or am I?)",

    aboutTitle: "About Me",
    aboutP1: "I am a <strong>Mechanical Engineering</strong> student, but physics, math and engineering are never scary subjects to me — they’re how I explore time, understand the world, and try to improve it. I’m always full of curiosity, eager to ask “why” and figure out “how.”",
    aboutP2: "I’m a petrol-head, and to me, Daniel Ricciardo is the GOAT — calm in the cockpit, cheerful off track, and always ready to make every lap count.",
    aboutP3: "I’m not just a science nerd — I’m also a science cheerleader. I want to make science fun, relatable, and something people love to talk about.",
    eduTitle: "Education",
    eduWaterloo: "University of Waterloo",
    eduDegree: "Bachelor of Applied Science, Honours Mechanical Engineering, Co-op Program",
    eduDate: "Expected Graduation: Apr 2030",
    skillsTitle: "Technical Skills",
    skillsCAD: "SolidWorks, AutoCAD, CATIA, Abaqus (FEA), Star-CCM+ (CFD), COMSOL",
    skillsProto: "GD&T, 3D Printing, Laser Cutting, Arduino, ESP32CAM, Raspberry Pi, Sensor Integration",
    skillsProg: "Python (NumPy, Matplotlib), MATLAB, C++, Power BI",
    skillsWeb: "HTML, JavaScript, LaTeX, MS Office",

    projTitle: "Pro. Projects",
    projSubtitle: "A curated selection of my engineering and research works.",
    viewDetails: "Learn more",
    
    proj1Tag: "Fluid Dynamics",
    proj1Title: "Air-Bubble Drag Reduction",
    proj1DescShort: "An award-winning physical modeling study establishing quantitative relationships between velocity, hull shape, and air-injection configurations.",
    
    proj2Tag: "Robotics & IoT",
    proj2Title: "Remote Chemistry Assistant",
    proj2DescShort: "An automated, network-controlled robotic box designed to facilitate high-precision remote junior high chemistry experiments.",
    
    proj3Tag: "Nanotech & AI",
    proj3Title: "Multimodal AI Perception",
    proj3DescShort: "A conceptual demonstration model integrating nano-structured metamaterials with AI-driven data fusion to enhance visibility.",
    
    proj4Tag: "Automation Systems",
    proj4Title: "Intelligent Library Robot",
    proj4DescShort: "An end-to-end prototype for automated book retrieval, featuring a line-following delivery robot and modular sensor-equipped shelving.",
    
    workTitle: "Professional Experience",
    expComacDate: "Jan 2026 — Apr 2026",
    expComacRole: "Design Engineering Intern",
    expComacDesc1: "Leveraged Ansys Topology Optimization and CATIA to redesign critical aircraft structures, reducing mass by <strong>40%</strong> while validating structural integrity against CCAR-25 regulations.",
    expComacDesc2: "Developed a functional prototype for overhead cabin storage using CATIA, featuring electromechanical integration for remote security locks and environmental sensing.",
    
    leadTitle: "Leadership & Community",
    expTongjiTitle: "SYIS Summer Special Program @ Tongji Univ.",
    expTongjiRole: "Lead Organizer & Vice Chairman",
    expTongjiDate: "July 2025",
    expTongjiDesc: "Initiated, planned, and led this entire event. Responsible for developing the concept, liaising with Tongji University's College of Automotive Engineering, and overseeing all logistical aspects to provide junior researchers with an immersive experience in vehicle engineering.",
    expLectureTitle: "School Science Lecture for Adolescents",
    expLectureRole: "Organizer, Planner & Keynote Speaker",
    expLectureDate: "October 2024",
    expLectureDesc: "Developed and delivered a series of academic workshops on research-based learning for high school underclassmen, providing guidance and inspiration for their academic journeys.",
    expLectureReview: "Attending Shaofu Wang's lecture was eye-opening. I learned how to read academic papers, identify research topics, and manage challenges in projects. His journey inspired confidence, and the case studies ignited my passion for science. This experience left a lasting impact on my academic growth.",
    expWaitanTitle: "INCLUSION Conference (The Bund Conference)",
    expWaitanRole: "Project Exhibitor",
    expWaitanDate: "September 2024",
    expWaitanDesc: "Selected to present my 'Remote Chemistry Experiment Assistant' project at the student exhibition section of the INCLUSION Conference. Engaged with attendees, explaining the system's design, functionality, and potential applications in modern education.",
    expSYISTitle: "Student Council of the SYIS",
    expSYISRole: "Vice Chairman",
    expSYISDate: "June 2024 – April 2026",
    expSYISDesc: "A student self-governance organization composed of city-level junior researchers. Responsible for planning, organizing, and executing various student-related activities to promote academic collaboration, innovation, and leadership.",
    expWLAFutureTitle: "WLA Future Scientist Program (Inaugural)",
    expWLAFutureRole: "Outstanding Camper",
    expWLAFutureDate: "2024",
    expWLAFutureDesc: "Participated in the inaugural Future Scientist Program, where I was honored with the <strong>'Outstanding Camper'</strong> award for my performance and contributions throughout the event.",
    expWLAForumTitle: "World Laureates Forum Attendance",
    expWLAForumDesc: "I have had the privilege of attending the prestigious World Laureates Forum for three consecutive years, engaging with leading scientists and global innovators.",

    achTitle: "Honors & Awards",
    achSubtitle: "A record of my accomplishments and awards.",

    hobTitle: "Racing and More!",
    hobP1Part1: "When it comes to racing, my passion hits ",
    hobP1Part2: "full throttle!",
    hobP1Part3: " Whether it’s the exhilarating sound of engines roaring or the razor-sharp turns on the track, I live for the adrenaline that motorsport delivers.",
    hobP2: "As a fan of Daniel Ricciardo, I admire his skill, charisma, and love for the sport. Like him, I approach life with determination, a smile, and a bit of flair!",
    hobP3: "Speed is not just a number; it's a way of life. Whether behind a kart’s steering wheel or watching Formula 1, every moment on the track reminds me to push limits, embrace the challenge, and most importantly—enjoy the ride!",

    footerTitle: "Let's Connect.",
    footerDesc: "Open to discussing new projects, creative ideas or opportunities.",
  },
  zh: {
    home: "概览",
    projects: "作品集", 
    work: "工作",
    leadership: "活动",
    achievements: "荣誉",
    hobbies: "兴趣",
    about: "关于",
    backBtn: "返回作品集",
    downloadResume: "下载完整简历",

    eggMystery: "或者还有一些小秘密等待你的探索。",
    eggClickMore: "继续点击...",
    eggSecretFound: "🎉 你解锁了一个秘密：我其实是一个被派来建立更美好未来的时间旅行者。（开玩笑的...也许吧？）",
    
    aboutTitle: "关于我",
    aboutP1: "作为一名<strong>机械工程专业</strong>的学生，物理和工程对于我，不是令人望而生畏的恐怖学科，更不是为了拿到学分的“天堂路”，而是探索时间、理解世界、改变世界的重要手段。我对身边的事物总是充满好奇，脑中满是“为什么”和“怎么做”。",
    aboutP2: "我是一个赛车迷，丹尼尔·里卡多是我心中的“最佳车手”。乐观、冷静地把握每一次机会。",
    aboutP3: "当然，我并不是一个单纯的书呆子，还是一名科学“推广者”。我的目标是让学习科学像玩游戏一样有趣，走进大众的视野，成为大家愿意了解、乐于讨论、甚至对此津津乐道的存在。",
    eduTitle: "教育背景",
    eduWaterloo: "滑铁卢大学 (University of Waterloo)",
    eduDegree: "应用科学学士, 机械工程荣誉学位, 带薪实习项目 (Co-op)",
    eduDate: "预计毕业: 2030年4月",
    skillsTitle: "技术栈与技能",
    skillsCAD: "SolidWorks, AutoCAD, CATIA, Abaqus (FEA), Star-CCM+ (CFD), COMSOL",
    skillsProto: "GD&T, 3D打印, 激光切割, Arduino, ESP32CAM, 树莓派, 传感器集成",
    skillsProg: "Python (NumPy, Matplotlib), MATLAB, C++, Power BI",
    skillsWeb: "HTML, JavaScript, LaTeX, MS Office",
    
    projTitle: "工程项目",
    projSubtitle: "部分精选的工程研发与研究作品集展示。",
    viewDetails: "了解更多",
    
    proj1Tag: "流体力学研究",
    proj1Title: "船体空泡减阻研究",
    proj1DescShort: "荣获一等奖的物理建模研究，通过分析水流相对速度、船体形状和通气孔配置等参数，推导减阻核心定量关系。",
    
    proj2Tag: "机器人与物联网",
    proj2Title: "远程化学实验助手",
    proj2DescShort: "一个集成高清图传与机械臂的网络控制自动箱，旨在提供高精度的远程初中化学实验解决方案。",
    
    proj3Tag: "纳米科技与AI",
    proj3Title: "多模态AI感知增强系统",
    proj3DescShort: "结合微观超材料特性与多模态AI驱动的数据融合技术，为低能见度环境设计的概念演示模型。",
    
    proj4Tag: "自动化工程系统",
    proj4Title: "智能图书馆送书系统",
    proj4DescShort: "端到端的无人化图书馆原型系统，包含定制开发的运书机器人、模块化感应书架及移动应用程序。",
    
    workTitle: "职业经历",
    expComacDate: "2026年1月 — 2026年4月",
    expComacRole: "设计工程实习生",
    expComacDesc1: "利用 Ansys 拓扑优化和 CATIA 重新设计关键飞机结构，在将质量降低 <strong>40%</strong> 的同时，根据 CCAR-25 规定验证了结构完整性。",
    expComacDesc2: "使用 CATIA 开发了顶部客舱储物柜的功能原型，整合了用于远程安全锁和环境感知的机电一体化系统。",
    
    leadTitle: "领导与社区活动",
    expTongjiTitle: "上海市青少年科学研究院小研究员暑期特别活动",
    expTongjiRole: "活动总负责人",
    expTongjiDate: "2025年7月",
    expTongjiDesc: "作为上海市青少年科学研究院学生理事会副理事长，我独立提出、策划并领导了本次活动的全部流程。我负责构思活动主题、联系同济大学汽车学院，并执行全部落地细节，旨在为小研究员们提供一个沉浸式的车辆工程学习体验。",
    expLectureTitle: "青少年科学讲座",
    expLectureRole: "组织者、策划者与主讲人",
    expLectureDate: "2024年10月",
    expLectureDesc: "作为学生科学论坛的组织者、策划者和主讲人，我为高中低年级学生开发并主讲了一系列关于研究性学习的学术工作坊，为他们的学术之旅提供指导和启发。",
    expLectureReview: "参加王少甫的讲座让我大开眼界。我学会了如何阅读学术论文、确定研究课题并应对项目中的挑战。他的经历激发了我的信心，案例研究点燃了我对科学的热情。这段经历对我的学术成长产生了深远的影响。",
    expWaitanTitle: "外滩大会 (INCLUSION Conference)",
    expWaitanRole: "学生参展人",
    expWaitanDate: "2024年9月",
    expWaitanDesc: "我被选中于外滩大会的学生展览环节，向与会者介绍和展示我的“远程化学实验助手”项目。我负责讲解该系统的设计理念、功能实现及其在现代教育中的应用潜力。",
    expSYISTitle: "上海市青少年科学研究院学生会",
    expSYISRole: "副理事长",
    expSYISDate: "2024年6月 – 2026年4月",
    expSYISDesc: "一个由市级初级研究员组成的学生自治组织。负责规划、组织和执行各种学生活动，以促进学术合作、创新和领导力的发展。",
    expWLAFutureTitle: "首届世界顶尖科学家论坛-未来科学家培养计划",
    expWLAFutureRole: "优秀学员",
    expWLAFutureDate: "2024年",
    expWLAFutureDesc: "参加了首届“未来科学家培养计划”，并因在活动中的表现和贡献，荣获<strong>“优秀学员”</strong>称号。",
    expWLAForumTitle: "世界顶尖科学家论坛参会经历",
    expWLAForumDesc: "我曾有幸连续三年参加享誉盛名的世界顶尖科学家论坛，与顶尖科学家和全球创新领袖们进行交流。",

    achTitle: "荣誉成就",
    achSubtitle: "我的学术成就与获奖记录。",
    
    hobTitle: "对赛车的热情！",
    hobP1Part1: "当谈到赛车，我的热情就已",
    hobP1Part2: "满格！",
    hobP1Part3: "无论是引擎咆哮的轰鸣声，还是赛道上锐利的弯道，我都为赛车运动带来的肾上腺素而着迷。",
    hobP2: "作为丹尼尔·里卡多的粉丝，我欣赏他的技术、个人魅力以及对这项运动的热爱。像他一样，我以决心、微笑和一点点独特的风格来面对生活！",
    hobP3: "速度不仅仅是一个数字，它是一种生活方式。无论是手握卡丁车的方向盘，还是观看F1比赛，赛道上的每一刻都在提醒我：要挑战极限，拥抱挑战，以及最重要的——享受整个过程！",

    footerTitle: "联系我",
    footerDesc: "随时与我联系，期待与您的交流与合作。"
  }
};

// --- 项目详细数据 ---
const projectsData = {
  1: {
    en: {
      title: "Investigation of Air-Bubble Drag Reduction",
      abstract: "Ventilated cavity technology can significantly reduce the underwater drag of a ship by altering the fluid medium and flow structure at the hull's surface. This paper investigates the factors affecting drag reduction by creating a multiphase simulation model and conducting experiments with physical models. The study analyzes the influence of relative velocity, hull shape, and the number and position of vertical air vents on drag reduction efficiency, while keeping total ventilation volume and Reynolds number constant. Experimental data was processed using MATLAB for linear regression to establish a quantitative relationship between relative velocity and drag reduction.",
      gallery: [
        "../../photos/projects/1/summary-highschoolprojects-1.jpg", 
        "../../photos/projects/1/2.jpg", 
        "../../photos/projects/1/quad chart t.jpg", 
        "../../photos/projects/1/board.jpg"
      ],
      sections: [
        {
          title: "Methodology",
          content: "The research was conducted using custom-designed experimental equipment, including a flat plate hull model and a general ship hull model, to test various hypotheses. A force gauge measured the drag, while an air pump provided a stable gas supply. Key variables such as relative water velocity and air vent configurations were systematically adjusted. The collected data was then analyzed using MATLAB. The least squares method was applied to perform a polynomial curve fit, establishing a quantitative formula that describes the relationship between relative velocity and drag reduction efficiency."
        },
        {
          title: "Key Findings",
          bullets: [
            "Drag reduction efficiency is inversely related to the relative velocity between the hull and the water. The relationship is described by the formula: ΔR_f = -0.0088Δv³ + 0.1937Δv² - 1.6634Δv + 14.1185",
            "Vent configuration is critical. At low speeds, a single central vent is most effective. At high speeds, multiple transversely-distributed vents perform best.",
            "The effect of vent diameter is more pronounced when vents are sparsely distributed; smaller diameters yield higher drag reduction in such cases.",
            "Within the scope of this experiment, the difference in hull shape (flat plate vs. general ship hull) had a minor impact on the overall drag reduction efficiency."
          ]
        }
      ],
      badge: "First Prize, Shanghai Science Fair"
    },
    zh: {
      title: "船体通气空泡减阻影响因素探究",
      abstract: "通气空泡减阻技术通过改变船体水下表面的介质属性和流场结构，可实现大幅度减阻。本文以船体气泡流为研究对象，建立了多相仿真模型并结合实物模型实验，探究了影响船体空泡减阻的多种因素。研究在总通气量与雷诺数相同的条件下，分析了船体与水流的相对速度、船体形状、垂直通气孔的数量与位置对减阻效率的影响。通过MATLAB对实验数据进行线性回归，得出了关键因素的定量与定性关系，为后续空泡减阻技术的研究与应用提供了理论参考与支持。",
      gallery: [
        "../../photos/projects/1/summary-highschoolprojects-1.jpg", 
        "../../photos/projects/1/2.jpg", 
        "../../photos/projects/1/quad chart t.jpg", 
        "../../photos/projects/1/board.jpg"
      ],
      sections: [
        {
          title: "研究方法",
          content: "本研究采用了自主设计的实验设备，包括平板船体模型和常规船体模型，用以验证不同的假设。实验中使用测力计来测量阻力，并由气泵提供稳定的气体。研究系统性地调整了关键变量，例如水流相对速度和通气孔的布局方案。采集到的实验数据随后使用MATLAB进行分析。通过最小二乘法进行多项式曲线拟合，最终建立了一个描述相对速度与减阻效率之间关系的定量公式。"
        },
        {
          title: "主要结论",
          bullets: [
            "空泡减阻效率与船体和水流的相对速度成反比。该关系可用以下公式描述：ΔR_f = -0.0088Δv³ + 0.1937Δv² - 1.6634Δv + 14.1185",
            "通气孔布局至关重要。在低速时，单个中部出气口的减阻率最高；而在高速时，多个横向分布的出气口效果最佳。",
            "当通气孔分布较为分散时，其孔径大小对减阻率的影响更显著，此时孔径越小，减阻率越大。",
            "在本实验的模型范围内，船体形状（平板型 vs. 常规船型）对整体减阻效率的影响较小。"
          ]
        }
      ],
      badge: "上海市青少年科创大赛 一等奖"
    }
  },
  2: {
    en: {
      title: "Remote Chemistry Lab Assistant",
      abstract: "This project aims to solve the problem of being unable to conduct chemistry experiments on-site. By combining ESP32-CAM image transmission with Arduino control, a 500x440x300mm Remote Chemistry Experiment Assistant was created. The device can perform typical middle school chemistry experiments such as dissolution, filtration, and evaporation. It integrates multiple functional zones for reagent storage, stirring, heating, and emergency fire suppression, all operated by a central robotic arm capable of 3D movement. Students can remotely access and control the experiment via any electronic device, enhancing their understanding through real-time video monitoring.",
      gallery: [
        "../../photos/projects/2/fig3.jpg", 
        "../../photos/projects/2/7.jpg", 
        "../../photos/projects/2/fig2.jpg", 
        "../../photos/projects/2/5.jpg"
      ],
      sections: [
        {
          title: "Key Features",
          bullets: [
            "<strong>Remote Real-time Control:</strong> Utilizes ESP32-CAM for dual-camera HD video streaming, allowing for remote real-time monitoring and operation.",
            "<strong>Multi-DOF Robotic Arm:</strong> A custom-designed 4-DOF robotic arm with a lead screw and guide rod structure for stable and precise movement.",
            "<strong>Modular & Safe Design:</strong> Features a modular layout with designated functional zones, a fire-retardant coating, and a CO2 emergency fire suppression system."
          ]
        },
        {
          title: "Design & Fabrication",
          content: "The core of the design is the main robotic arm. To ensure stability during grasping, we designed a parallelogram stabilizer structure, effectively preventing forward and backward tilting. The arm's movement mechanism uses guide rods and lead screws to ensure smooth motion within its 350mm(X) x 200mm(Y) x 250mm(Z) operational range. All non-standard structural parts, such as the robotic arm components, servo mounts, and reagent holders, were 3D modeled using CAD software and fabricated via 3D printing (PLA) and laser cutting (basswood sheets). This rapid prototyping approach ensured design precision and significantly shortened the development cycle."
        },
        {
          title: "System Workflow",
          bullets: [
            "1. User's device connects to the experiment box's Wi-Fi network.",
            "2. Control commands are sent to the ESP32-CAM via the web interface.",
            "3. The ESP32-CAM forwards the commands to the Arduino main controller via serial port.",
            "4. Arduino parses the commands and drives the corresponding servos or motors to perform actions.",
            "5. The camera streams the live experiment footage back to the user interface."
          ]
        }
      ],
      badge: "National Emerging Track Finalist"
    },
    zh: {
      title: "远程化学实验助手",
      abstract: "本项目旨在解决因故无法到校进行化学实验的问题。通过结合ESP32-CAM图像传输与Arduino控制，我们制作了一个500x440x300mm的远程化学实验助手。该装置能够执行初中化学中的典型实验，如溶解、过滤和蒸发。箱内集成了试剂存放、搅拌、加热和应急灭火等多个功能区，由一个核心的、可在三维空间移动的机械臂进行操作。学生可以通过任何电子设备远程接入并控制实验过程，并通过实时视频监控和录屏回放功能，加深对实验的理解。该项目不仅提高了实验器材的利用率，也为未来的线上线下混合式教学模式提供了创新的解决方案。",
      gallery: [
        "../../photos/projects/2/fig3.jpg", 
        "../../photos/projects/2/7.jpg", 
        "../../photos/projects/2/fig2.jpg", 
        "../../photos/projects/2/5.jpg"
      ],
      sections: [
        {
          title: "核心功能",
          bullets: [
            "<strong>远程实时操控：</strong>基于ESP32-CAM，实现双机位高清图像传输，用户可远程实时监控和操作。",
            "<strong>多自由度机械臂：</strong>自主设计的4自由度机械臂，采用光杆丝杠结构，移动平稳，定位精准。",
            "<strong>模块化与安全性：</strong>箱内分区明确，功能模块化。内置防火涂层和二氧化碳紧急灭火系统，保障安全。"
          ]
        },
        {
          title: "设计与制作",
          content: "项目的设计核心是主机械臂，为了确保抓取过程的稳定性，我们设计了平四边形稳定结构，有效防止了前后晃动。机械臂的运动机构采用光杆和丝杠，确保了在350mm(X) x 200mm(Y) x 250mm(Z)范围内的平稳移动。所有非标准结构件，如机械臂组件、舵机固定架、试剂盒等，均使用CAD软件进行三维建模，并通过3D打印（PLA材料）和激光切割（椴木板）技术进行快速原型制作。这不仅保证了设计的精度，也极大地缩短了开发周期。"
        },
        {
          title: "系统流程",
          bullets: [
            "1. 用户设备连接到实验箱的Wi-Fi网络。",
            "2. 通过网页控制界面，向ESP32-CAM发送操作指令。",
            "3. ESP32-CAM将指令通过串口转发给Arduino主控板。",
            "4. Arduino解析指令，驱动相应的舵机或电机，执行动作。",
            "5. 摄像头将实验画面实时回传至用户界面。"
          ]
        }
      ],
      badge: "全国大学生创新大赛 萌芽赛道"
    }
  },
  3: {
    en: {
      title: "Multimodal AI-Based Perception Enhancement System",
      abstract: "Led a team to deliver a novel approach to enhance overall human sensitivity, verifying concepts using COMSOL in a tight deadline of two days. Proactively identified and resolved a critical team conflict regarding technical approach by implementing a parallel-workstream strategy, de-risking the timeline and leading to on-time delivery.",
      gallery: [
        "../../photos/projects/3/3.jpg", 
        "../../photos/projects/3/2.jpg", 
        "../../photos/projects/3/1.jpg", 
        "../../photos/projects/3/4.jpg", 
        "../../photos/projects/3/6.jpg", 
        "../../photos/projects/3/7.jpg"
      ],
      sections: [
        {
          title: "The Challenge",
          content: "<strong>Topic:</strong> How to enhance human perception using nanotechnology? <br/><br/>As team leader, I guided my group through an intensive 2-day hackathon. My responsibilities covered the full scope of the challenge: from initial problem analysis and brainstorming our solution, to overseeing the creation of a conceptual demonstration model. I was also responsible for producing and delivering the final presentation."
        },
        {
          title: "Core Innovation",
          content: "Our project's core innovation was the novel proposal to use a piezoelectric electret to create a controllable metasurface. By applying a voltage, the material's surface micro-structure could be dynamically altered, allowing for real-time manipulation of optical properties. This approach formed the theoretical foundation for our conceptual model aimed at enhancing perception."
        },
        {
          title: "Outcomes & Accolades",
          bullets: [
            "Received the <strong>highest score</strong> from the judging panel for our presentation and concept.",
            "Our project was awarded the <strong>'Outstanding Project'</strong> title.",
            "Our team was recognized as an <strong>'Outstanding Team'</strong>.",
            "I was personally honored with the <strong>'Outstanding Camper'</strong> award."
          ]
        }
      ],
      badge: "⭐ Top-tier Evaluation"
    },
    zh: {
      title: "基于多模态人工智能的感知提升系统",
      abstract: "在两天的高强度挑战赛中，带领团队提出了一种提升人类综合感知能力的新颖方法，并利用COMSOL对概念进行了验证。期间主动识别并解决了一项关于技术路线的重大团队冲突，采用了平行工作流策略，成功降低了进度风险，确保了最终原型模型的按时交付。",
      gallery: [
        "../../photos/projects/3/3.jpg", 
        "../../photos/projects/3/2.jpg", 
        "../../photos/projects/3/1.jpg", 
        "../../photos/projects/3/4.jpg", 
        "../../photos/projects/3/6.jpg", 
        "../../photos/projects/3/7.jpg"
      ],
      sections: [
        {
          title: "挑战课题",
          content: "<strong>课题：</strong>如何利用纳米技术提升人类感知？<br/><br/>作为组长，我带领团队完成了一场高强度的为期2天的挑战赛。我的职责贯穿了整个挑战过程：从最初的问题分析、构思解决方案，到主导制作了一个用于阐述我们想法的基于超材料的概念演示模型。最终，我负责制作并完成了现场的最终汇报。"
        },
        {
          title: "核心创新点",
          content: "我们项目的核心创新点，是首次提出利用压电驻极体来制作可控的超表面材料。通过施加电压，我们可以动态地改变材料的表面微观结构，从而实现对光学特性的实时调控。这个方法构成了我们旨在增强感知的概念演示模型的理论基础。"
        },
        {
          title: "成果与荣誉",
          bullets: [
            "我们的汇报与概念方案获得了评委的<strong>最高分</strong>评价。",
            "我们的项目荣获<strong>“优秀项目奖”</strong>。",
            "我们的小组被评为<strong>“优秀小组”</strong>。",
            "我个人荣获<strong>“优秀营员”</strong>称号。"
          ]
        }
      ],
      badge: "⭐ 最高评分"
    }
  },
  4: {
    en: {
      title: "Intelligent Library Book Delivery System",
      abstract: "This project is the minimal functional unit of a larger intelligent library concept. It includes standardized modular bookshelves, a book-retrieving robot with a lifting tray, and a mobile app for user commands. The system achieves automated book retrieval and delivery, enabling unmanaged library services in communities and schools. Users can request books via the app, and the delivery robot navigates to the designated shelf, retrieves the book with its sensor-activated tray, and delivers it to the user. This system is designed to improve accessibility for users with limited mobility and increase the efficiency of library management.",
      gallery: [
        "../../photos/projects/4/1.jpg", 
        "../../photos/projects/4/3.jpg", 
        "../../photos/projects/4/4.jpg", 
        "../../photos/projects/4/5.jpg"
      ],
      sections: [
        {
          title: "Key Components & Technology",
          bullets: [
            "<strong>Modular Bookshelves:</strong> Designed as movable units with a gear-and-rack mechanism for book ejection, controlled by an Arduino and activated by an ultrasonic sensor.",
            "<strong>Delivery Robot:</strong> A line-following vehicle equipped with a lifting platform. The platform's height is adjusted by a 360-degree servo to interface with different shelf levels.",
            "<strong>Mobile App:</strong> Developed using MIT App Inventor, the app allows users to search for books and send commands (book ID, seat number) to the system via Bluetooth.",
            "<strong>Fabrication:</strong> Utilized a combination of 3D printing (for custom parts like gears) and laser cutting, with a robust frame built from aluminum profiles and wood."
          ]
        }
      ],
      badge: "Second Prize, Shanghai Science Fair"
    },
    zh: {
      title: "智能图书馆图书送递系统",
      abstract: "本项目是一个大型智能图书馆概念的最小功能单元，包括标准化的书架、带升降托盘的取书机器人和用于发送指令的手机APP。该系统能基本实现自动取送图书，旨在为社区和学校提供无人化管理的图书借阅服务。使用者可通过APP发送指令，运输机器人根据指令到达指定位置，通过与书架的超声波模块联动，完成取书并送至用户。此系统旨在方便行动不便的用户，减少图书管理的人力操作，并促进图书的共享与流通。",
      gallery: [
        "../../photos/projects/4/1.jpg", 
        "../../photos/projects/4/3.jpg", 
        "../../photos/projects/4/4.jpg", 
        "../../photos/projects/4/5.jpg"
      ],
      sections: [
        {
          title: "核心组件与技术",
          bullets: [
            "<strong>模块化书架：</strong>设计为可移动单元，配备齿轮齿条传动机构用于推出书籍，由Arduino控制并被超声波传感器触发。",
            "<strong>运输机器人：</strong>一台配备升降平台的巡线小车。升降台由一个360度舵机驱动，以适应不同层高的书架。",
            "<strong>手机应用：</strong>使用MIT App Inventor开发，允许用户搜索图书并通过蓝牙发送指令（如图书编号、座位号）给系统。",
            "<strong>制作工艺：</strong>结合了3D打印（用于定制齿轮等零件）和激光切割技术，主体框架由铝型材和木板搭建，保证了结构的稳固性。"
          ]
        }
      ],
      badge: "上海市青少年科创大赛 二等奖"
    }
  }
};

// --- 打字机组件 ---
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink(!blink), 750); 
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2500); 
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 60); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="inline-block text-emerald-400 font-light tracking-wide text-lg sm:text-xl md:text-2xl">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} font-light ml-1 text-emerald-500`}>|</span>
    </span>
  );
};

// --- 桌面端与移动端交互环境波浪光晕与点击水波纹 ---
const AmbientWave = () => {
  const waveRef = useRef(null);
  const pos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const vel = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  
  const [waves, setWaves] = useState([]);
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    // 处理鼠标移动
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    // 处理全局点击或触摸
    const handleInteraction = (e) => {
      // 确定坐标来源：鼠标点击或触摸事件的第一根手指
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      const id = Date.now();

      // 在交互位置创建海浪波纹
      const newWave = {
        id,
        x: clientX,
        y: clientY,
        size: Math.max(window.innerWidth, window.innerHeight) * 2.5 
      };
      setWaves(prev => [...prev, newWave]);

      // 边缘浪花效果逻辑
      const edges = [
        { name: 'top', dist: clientY, px: clientX, py: 0 },
        { name: 'bottom', dist: window.innerHeight - clientY, px: clientX, py: window.innerHeight },
        { name: 'left', dist: clientX, px: 0, py: clientY },
        { name: 'right', dist: window.innerWidth - clientX, px: window.innerWidth, py: clientY }
      ];

      edges.forEach(edge => {
        // 计算海浪到达边缘的大致时间
        const timeToEdge = (edge.dist / (newWave.size / 2)) * 1200; 
        
        setTimeout(() => {
          const numSplashes = Math.floor(Math.random() * 5) + 3;
          const newSplashes = Array.from({ length: numSplashes }).map((_, i) => ({
            id: `${id}-${edge.name}-${i}`,
            x: edge.px,
            y: edge.py,
            tx: edge.name === 'left' ? (Math.random() * 100 + 20) : edge.name === 'right' ? -(Math.random() * 100 + 20) : (Math.random() - 0.5) * 100,
            ty: edge.name === 'top' ? (Math.random() * 100 + 20) : edge.name === 'bottom' ? -(Math.random() * 100 + 20) : (Math.random() - 0.5) * 100,
            scale: Math.random() * 0.8 + 0.4,
            rotation: Math.random() * 360
          }));
          setSplashes(prev => [...prev, ...newSplashes]);

          setTimeout(() => {
            setSplashes(prev => prev.filter(s => !s.id.startsWith(`${id}-${edge.name}`)));
          }, 800);
        }, timeToEdge);
      });

      setTimeout(() => {
        setWaves(prev => prev.filter(w => w.id !== id));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    // 监听点击和触摸开始事件，确保手机端也能触发海浪
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });

    let animationFrameId;
    const update = () => {
      const stiffness = 0.05; 
      const damping = 0.75;   
      
      const forceX = (targetPos.current.x - pos.current.x) * stiffness;
      const forceY = (targetPos.current.y - pos.current.y) * stiffness;

      vel.current.x = (vel.current.x + forceX) * damping;
      vel.current.y = (vel.current.y + forceY) * damping;

      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      if (waveRef.current) {
        const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
        const angle = Math.atan2(vel.current.y, vel.current.x);
        
        const scaleX = 1 + Math.min(speed * 0.015, 0.6); 
        const scaleY = 1 - Math.min(speed * 0.005, 0.2);

        waveRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
      }
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // 修改为 fixed 且支持触摸穿透 pointer-events-none
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60 dark:opacity-40">
      
      {/* 鼠标跟随波浪光晕 - 仅在桌面端显示 */}
      <div ref={waveRef} className="absolute left-0 top-0 hidden md:block" style={{ width: 0, height: 0 }}>
         <div className="absolute w-[60px] h-[60px] bg-emerald-400/50 blur-[15px] rounded-full" style={{ transform: 'translate(-50%, -50%)' }} />
         <div className="absolute w-[40px] h-[40px] bg-teal-300/60 blur-[10px] rounded-full" style={{ transform: 'translate(-30%, -50%)' }} />
      </div>

      {/* 交互产生的海浪扩散 - 桌面和移动端均显示 */}
      {waves.map(wave => (
        <div 
          key={wave.id}
          className="absolute animate-ocean-wave rounded-full border-[2px] md:border-[3px] border-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          style={{
            left: wave.x,
            top: wave.y,
            width: `${wave.size}px`,
            height: `${wave.size}px`,
            transform: `translate(-50%, -50%) scale(0)` // 明确从中心点(鼠标位置)且比例为0开始
          }}
        />
      ))}

      {/* 边缘点击激起的浪花 - 桌面和移动端均显示 */}
      {splashes.map(splash => (
         <div 
          key={splash.id}
          className="absolute rounded-full bg-emerald-200/80 blur-[1px] animate-splash"
          style={{
            left: splash.x,
            top: splash.y,
            width: `${8 * splash.scale}px`,
            height: `${12 * splash.scale}px`,
            '--tx': `${splash.tx}px`,
            '--ty': `${splash.ty}px`,
            '--rot': `${splash.rotation}deg`
          }}
         />
      ))}
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleOrientation = (e) => {
      if (!e.beta || !e.gamma) return;
      const x = Math.min(Math.max(e.gamma, -45), 45) / 45; 
      const y = Math.min(Math.max(e.beta - 45, -45), 45) / 45; 
      document.documentElement.style.setProperty('--gyro-x', `${x * 15}px`);
      document.documentElement.style.setProperty('--gyro-y', `${y * 15}px`);
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const toggleDarkMode = () => {
    triggerHaptic(30);
    setDarkMode(!darkMode);
  };
  
  const toggleLang = () => {
    triggerHaptic(30);
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const navigateTo = (id) => {
    triggerHaptic(30);
    setCurrentPage(id);
    setSelectedProjectId(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav 菜单结构
  const navLinks = [
    { id: 'home', key: 'home' },
    { id: 'projects', key: 'projects' },
    { id: 'work', key: 'work' },
    { id: 'leadership', key: 'leadership' },
    { id: 'achievements', key: 'achievements' },
    { id: 'hobbies', key: 'hobbies' },
    { id: 'about', key: 'about' }
  ];

  // --- Apple Style 设计系统变量 ---
  const appleGradientText = "bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 via-emerald-700 to-amber-700 dark:from-emerald-700 dark:via-emerald-500 dark:to-amber-500";
  
  // 加入移动端陀螺仪阴影位移变量（--gyro-x / --gyro-y）以增加微交互
  const appleCardClass = `rounded-[2rem] overflow-hidden transition-all duration-500 border ${darkMode ? 'bg-[#1c1c1e] border-white/5 hover:border-white/10 hover:bg-[#202022] shadow-[var(--gyro-x,0px)_var(--gyro-y,0px)_40px_rgb(0,0,0,0.5)]' : 'bg-white border-black/5 hover:border-black/10 shadow-[var(--gyro-x,0px)_var(--gyro-y,0px)_40px_rgb(0,0,0,0.08)]'}`;

  // --- 项目详情组件 (Project Details View) ---
  const ProjectDetailsView = ({ id }) => {
    const project = projectsData[id][lang];
    
    return (
      <section className="py-8 animate-fade-in max-w-5xl mx-auto relative z-10">
        <button onClick={() => setSelectedProjectId(null)} className={`flex items-center text-emerald-600 dark:text-emerald-500 hover:opacity-70 mb-10 transition-all group font-medium relative z-10`}>
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t[lang].backBtn}
        </button>
        
        <header className="mb-14 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">{project.title}</h1>
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border ${darkMode ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800/50' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                {project.badge}
            </span>
        </header>

        <div className="space-y-10 relative z-10">
          <div className={`${appleCardClass} p-8 md:p-12 cursor-default`}>
            <h3 className={`text-2xl font-bold mb-4 tracking-tight pb-4 border-b ${darkMode ? 'text-emerald-500 border-gray-800' : 'text-emerald-700 border-gray-100'}`}>
              {lang === 'en' ? 'Abstract' : '项目摘要'}
            </h3>
            <p className={`text-base md:text-lg leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {project.abstract}
            </p>
          </div>

          <div className={`${appleCardClass} p-8 md:p-12 cursor-default`}>
             <h3 className={`text-2xl font-bold mb-6 tracking-tight pb-4 border-b ${darkMode ? 'text-emerald-500 border-gray-800' : 'text-emerald-700 border-gray-100'}`}>
              {lang === 'en' ? 'Gallery' : '项目展示'}
            </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                   <img key={i} src={img} alt="Project Gallery" className={`rounded-2xl shadow-sm w-full h-56 md:h-72 object-cover hover:scale-[1.02] transition-transform duration-500 ${darkMode ? 'border border-gray-800' : 'border border-gray-100'}`} />
                ))}
             </div>
          </div>

          {project.sections.map((sec, i) => (
             <div key={i} className={`${appleCardClass} p-8 md:p-12 cursor-default`}>
                <h3 className={`text-2xl font-bold mb-4 tracking-tight pb-4 border-b ${darkMode ? 'text-emerald-500 border-gray-800' : 'text-emerald-700 border-gray-100'}`}>
                  {sec.title}
                </h3>
                {sec.content && <p className={`text-base md:text-lg leading-relaxed font-light mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} dangerouslySetInnerHTML={{__html: sec.content}}></p>}
                {sec.bullets && (
                   <ul className="space-y-5 mt-6">
                     {sec.bullets.map((b, idx) => (
                        <li key={idx} className={`flex items-start text-base md:text-lg leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                           <span className="text-emerald-500 mr-4 mt-1 text-xl">✦</span> 
                           <span dangerouslySetInnerHTML={{__html: b}}></span>
                        </li>
                     ))}
                   </ul>
                )}
             </div>
          ))}
        </div>
      </section>
    );
  };

  // --- 页面组件 ---

  const Home = () => {
    // 互动 3D 偏转效果 State
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
      // 鼠标移动监听 (桌面端互动)
      const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        // 计算偏移量，最大旋转角度限制在大概 12 度以内
        const x = (e.clientX - left - width / 2) / 15; 
        const y = -(e.clientY - top - height / 2) / 15;
        setTilt({ x, y });
      };
      
      // 设备重力感应 (手机端陀螺仪互动)
      const handleDeviceOrientation = (e) => {
        if (!e.beta || !e.gamma) return;
        const x = Math.min(Math.max(e.gamma / 1.5, -20), 20);
        const y = Math.min(Math.max((e.beta - 45) / 1.5, -20), 20); 
        setTilt({ x, y });
      };

      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', () => setTilt({x:0, y:0}));
      }
      
      window.addEventListener('deviceorientation', handleDeviceOrientation);

      return () => {
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', () => setTilt({x:0, y:0}));
        }
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      };
    }, []);

    return (
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center animate-fade-in py-16 relative z-10">
        <div className="text-center transform mb-8">
            <div className="h-10 mb-4 flex items-center justify-center">
                <Typewriter words={[
                    "Welcome to My Homepage",
                    "欢迎来到我的主页",
                    "Bienvenue sur ma page d'accueil",
                    "私のホームページへようこそ",
                    "Bienvenido a mi página de inicio",
                    "Benvenuti nella mia homepage"
                ]} />
            </div>
        </div>

        {/* 带有悬浮 3D 互动的头像区域 */}
        <div 
          ref={containerRef}
          className="relative group w-48 h-48 sm:w-56 sm:h-56 mb-10 mx-auto" 
          style={{ perspective: '1000px' }} // 开启 3D 景深
        >
          {/* 背后的发光光晕 (产生相反位移，实现视差感) */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-emerald-800 via-emerald-600 to-amber-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-300 ease-out"
            style={{ transform: `translate3d(${-tilt.x * 1.5}px, ${tilt.y * 1.5}px, 0)` }}
          ></div>
          
          {/* 头像本体 (基于陀螺仪或鼠标进行 3D 旋转) */}
          <img 
            src="./profile.JPG" 
            alt="Shaofu Wang" 
            className={`relative z-10 rounded-full object-cover w-full h-full transition-all duration-200 ease-out shadow-2xl ${darkMode ? 'border-[#1c1c1e]' : 'border-white'} border-8`}
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.05, 1.05, 1.05)` }}
          />
        </div>

        <h1 className={`text-4xl sm:text-6xl font-bold mb-6 tracking-tight ${appleGradientText}`}>
          I'm Shaofu Wang.
        </h1>
        
        <div className={`max-w-2xl mx-auto space-y-6 text-xl sm:text-2xl font-medium tracking-tight leading-relaxed ${darkMode ? 'text-[#86868b]' : 'text-[#86868b]'}`}>
          <p>
            Science cheerleader. Engineering enthusiast. <br/> Racing buff.
          </p>
          <p className="text-lg font-normal">
            Uncovering the secrets of how science shapes our world and solving complex problems with elegance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 w-full max-w-3xl">
          <button onClick={() => navigateTo('projects')} className="px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-full transition-all duration-300 flex items-center group shadow-md shadow-emerald-900/20 relative z-20 pointer-events-auto">
            {t[lang].projects} <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => navigateTo('about')} className={`px-8 py-4 font-medium rounded-full transition-all duration-300 flex items-center relative z-20 pointer-events-auto ${darkMode ? 'bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white' : 'bg-[#f5f5f7] hover:bg-[#e8e8ed] text-black'}`}>
            {t[lang].about}
          </button>
        </div>
      </section>
    );
  };

  const Projects = () => {
    if (selectedProjectId) {
      return <ProjectDetailsView id={selectedProjectId} />;
    }

    return (
      <section className="py-12 animate-fade-in max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].projTitle}.</h2>
          <p className={`text-xl font-medium ${darkMode ? 'text-[#86868b]' : 'text-[#86868b]'}`}>
            {t[lang].projSubtitle}
          </p>
        </div>

        {/* Portfolio 风格网格布局：拉大间距，更具呼吸感 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { id: 1, tag: t[lang].proj1Tag, title: t[lang].proj1Title, desc: t[lang].proj1DescShort, img: "../../photos/projects/1/summary-highschoolprojects-1.jpg" },
            { id: 2, tag: t[lang].proj2Tag, title: t[lang].proj2Title, desc: t[lang].proj2DescShort, img: "../../photos/projects/2/fig1.jpg" },
            { id: 3, tag: t[lang].proj3Tag, title: t[lang].proj3Title, desc: t[lang].proj3DescShort, img: "../../photos/projects/3/8.jpg" },
            { id: 4, tag: t[lang].proj4Tag, title: t[lang].proj4Title, desc: t[lang].proj4DescShort, img: "../../photos/projects/4/2.jpg" } 
          ].map((proj) => (
            // 卡片加入苹果级悬浮上移微动效和点击触觉反馈
            <div 
              key={proj.id} 
              onClick={() => { triggerHaptic(50); setSelectedProjectId(proj.id); }} 
              className={`${appleCardClass} group flex flex-col cursor-pointer hover:-translate-y-2 relative z-20 pointer-events-auto`}
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                {/* 图片悬浮时的极简遮罩，提升高级感 */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <span className={`font-semibold text-xs tracking-widest uppercase mb-3 block ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{proj.tag}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{proj.title}</h3>
                <p className={`text-base mb-8 flex-grow leading-relaxed line-clamp-3 font-light ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`} dangerouslySetInnerHTML={{__html: proj.desc}}></p>
                
                {/* 苹果风 "Learn more" 交互文本按钮 */}
                <div className="mt-auto">
                  <span className={`inline-flex items-center text-sm font-medium transition-colors ${darkMode ? 'text-white group-hover:text-emerald-400' : 'text-black group-hover:text-emerald-600'}`}>
                    {t[lang].viewDetails} <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const Work = () => {
    // 彩蛋计数器 State
    const [clicks, setClicks] = useState(0);
    
    return (
      <section className="py-12 animate-fade-in max-w-5xl mx-auto flex flex-col min-h-[60vh] relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].workTitle}.</h2>
        </div>
        
        <div className="space-y-12">
          {/* COMAC Internship Experience */}
          <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row gap-10 items-start cursor-default`}>
            <div className={`w-full md:w-4/12 overflow-hidden rounded-2xl flex-shrink-0 flex items-center justify-center min-h-[220px] ${darkMode ? 'bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e]' : 'bg-gradient-to-br from-emerald-50 to-teal-50'}`}>
              <div className="text-center p-6">
                <Plane className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`} />
                <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-emerald-900'}`}>COMAC</h3>
              </div>
            </div>
            
            <div className="w-full md:w-8/12">
              <h3 className="text-3xl font-bold mb-2 tracking-tight">Commercial Aircraft Corporation of China</h3>
              <h4 className={`text-xl font-medium mb-3 ${darkMode ? 'text-emerald-500' : 'text-emerald-800'}`}>{t[lang].expComacRole}</h4>
              <p className={`text-sm font-mono font-semibold mb-6 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expComacDate}</p>
              
              <ul className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-1 text-emerald-700 dark:text-emerald-500 flex-shrink-0"/>
                  <span dangerouslySetInnerHTML={{__html: t[lang].expComacDesc1}}></span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-3 mt-1 text-emerald-700 dark:text-emerald-500 flex-shrink-0"/>
                  <span dangerouslySetInnerHTML={{__html: t[lang].expComacDesc2}}></span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Interactive Easter Egg Area */}
          <div className={`${appleCardClass} p-12 text-center border border-dashed ${darkMode ? 'border-gray-700' : 'border-gray-300'} bg-transparent transition-all duration-500`}>
            {/* 点击表情触发彩蛋 */}
            <div 
              className={`text-5xl mb-6 transform transition-all duration-300 cursor-pointer select-none inline-block relative z-20 pointer-events-auto ${clicks > 0 && clicks < 5 ? 'scale-125 rotate-12' : 'hover:scale-110'}`}
              onClick={(e) => {
                // 防止冒泡触发波纹，因为这里是专门点彩蛋的
                e.stopPropagation();
                triggerHaptic(50);
                setClicks(c => c + 1);
              }}
            >
              {clicks >= 5 ? '🚀' : '😉'}
            </div>
            
            {/* 彩蛋文字切换 */}
            <h4 className={`text-xl font-bold tracking-tight mb-2 ${clicks >= 5 ? 'text-emerald-500' : (darkMode ? 'text-gray-300' : 'text-gray-800')}`}>
              {clicks >= 5 ? "Secret Unlocked!" : "Nothing else here..."}
            </h4>
            
            <p className={`text-base font-light tracking-wide ${darkMode ? 'text-[#86868b]' : 'text-gray-600'}`}>
              {clicks >= 5 
                ? t[lang].eggSecretFound 
                : (clicks > 0 ? `${t[lang].eggClickMore} (${5 - clicks})` : t[lang].eggMystery)
              }
            </p>
          </div>
        </div>
      </section>
    );
  };

  const Leadership = () => (
    <section className="py-12 animate-fade-in max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].leadTitle}.</h2>
      </div>

      <div className="space-y-12">
        {/* Tongji Event */}
        <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row-reverse items-center gap-10 cursor-default`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl flex-shrink-0">
             <img src="https://placehold.co/800x450/1c1c1e/34d399?text=Tongji+Event" alt="Tongji Event" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{t[lang].expTongjiTitle}</h3>
            <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{t[lang].expTongjiRole}</h4>
            <p className={`text-sm font-mono mb-6 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expTongjiDate}</p>
            <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{t[lang].expTongjiDesc}</p>
          </div>
        </div>

        {/* Student Council */}
        <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10 cursor-default`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl flex-shrink-0">
            <img src="../photos/expericence/opstudentcouncil.jpg" alt="Student Council" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{t[lang].expSYISTitle}</h3>
            <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{t[lang].expSYISRole}</h4>
            <p className={`text-sm font-mono mb-6 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expSYISDate}</p>
            <p className={`leading-relaxed text-sm md:text-base mb-4 ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{t[lang].expSYISDesc}</p>
            
            <ul className={`space-y-3 text-sm font-light ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> {lang === 'en' ? 'Planning and organizing student events and activities' : '策划并组织学生活动'}</li>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> {lang === 'en' ? 'Collaborating with academic and community organizations' : '与学术和社区组织合作沟通'}</li>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> {lang === 'en' ? 'Managing communication and feedback between students and institute leaders' : '管理学生与研究院领导之间的沟通与反馈'}</li>
            </ul>
          </div>
        </div>

        {/* School Lecture */}
        <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10 cursor-default`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl flex-shrink-0">
            <img src="../photos/expericence/schoollecture2.jpg" alt="School Science Lecture" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{t[lang].expLectureTitle}</h3>
            <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{t[lang].expLectureRole}</h4>
            <p className={`text-sm font-mono mb-4 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expLectureDate}</p>
            <p className={`leading-relaxed text-sm md:text-base mb-6 ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{t[lang].expLectureDesc}</p>
            
            <ul className={`space-y-2 text-sm font-light mb-6 ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> {lang === 'en' ? 'Reading Academic Papers & Identifying Research Topics' : '学术论文阅读技巧及研究课题选择'}</li>
              <li className="flex items-start"><ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-emerald-500 flex-shrink-0"/> {lang === 'en' ? 'Managing Research Projects & Case Studies' : '研究项目管理与案例分析应用'}</li>
            </ul>
            <div className={`p-5 rounded-2xl border-l-4 border-emerald-600 ${darkMode ? 'bg-[#252528]' : 'bg-emerald-50/50'}`}>
               <Quote className={`mb-3 w-5 h-5 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`} />
               <p className={`text-sm italic leading-relaxed ${darkMode ? 'text-[#86868b]' : 'text-[#515154]'}`}>
                 "{t[lang].expLectureReview}"
               </p>
            </div>
          </div>
        </div>

        {/* INCLUSION Conference */}
        <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row-reverse items-center gap-10 cursor-default`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl flex-shrink-0">
            <img src="../photos/expericence/waitan.jpg" alt="INCLUSION Conference" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{t[lang].expWaitanTitle}</h3>
            <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{t[lang].expWaitanRole}</h4>
            <p className={`text-sm font-mono mb-6 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expWaitanDate}</p>
            <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{t[lang].expWaitanDesc}</p>
          </div>
        </div>

        {/* WLA Future Scientist Program */}
        <div className={`${appleCardClass} p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10 cursor-default`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl flex-shrink-0">
            <img src="../photos/expericence/wla3.jpg" alt="Future Scientist Program" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{t[lang].expWLAFutureTitle}</h3>
            <h4 className={`text-lg font-medium mb-2 ${darkMode ? 'text-emerald-500' : 'text-emerald-700'}`}>{t[lang].expWLAFutureRole}</h4>
            <p className={`text-sm font-mono mb-6 ${darkMode ? 'text-[#86868b]' : 'text-gray-500'}`}>{t[lang].expWLAFutureDate}</p>
            <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`} dangerouslySetInnerHTML={{__html: t[lang].expWLAFutureDesc}}></p>
          </div>
        </div>

        {/* WLA Forum Attendance */}
        <div className={`${appleCardClass} p-8 sm:p-12 text-center cursor-default`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{t[lang].expWLAForumTitle}</h3>
            <p className={`max-w-3xl mx-auto leading-relaxed mb-8 ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{t[lang].expWLAForumDesc}</p>
            <p className="font-mono text-2xl md:text-3xl tracking-widest font-bold text-emerald-600 dark:text-emerald-500 mb-8">2022 &bull; 2023 &bull; 2024</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <img src="../photos/expericence/wla1.jpg" alt="WLA Forum Photo 1" className="rounded-2xl shadow-lg w-full object-cover transition-transform duration-700 hover:scale-105" />
                <img src="../photos/expericence/wla2.jpg" alt="WLA Forum Photo 2" className="rounded-2xl shadow-lg w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
        </div>
      </div>
    </section>
  );

  const Achievements = () => (
    <section className="py-12 animate-fade-in max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].achTitle}.</h2>
        <p className={`text-xl font-medium ${darkMode ? 'text-[#86868b]' : 'text-[#86868b]'}`}>
          {t[lang].achSubtitle}
        </p>
      </div>

      <div className="space-y-6">
        {[
          { title: lang === 'en' ? "Shanghai Youth Science & Innovation Fair" : "上海市青少年科技创新大赛", level: lang === 'en' ? "Provincial" : "省级", date: "2021-2024", color: "emerald", desc: lang === 'en' ? "Four-time winner. Including First Prize & 4000 CNY special prize (SJTU Si Yuan Award)." : "四届获奖者。2024年一等奖及4000元专项奖（交大思源奖）。" },
          { title: lang === 'en' ? "Shanghai Science Education Innovation Award" : "上海市青少年科技教育创新奖", level: lang === 'en' ? "Provincial" : "省级", date: "Mar 2024", color: "amber", desc: lang === 'en' ? "Third Prize (5000 CNY)." : "三等奖（5000元）。" },
          { title: lang === 'en' ? "World Adolescent Contest of Excellence" : "世界青少年卓越竞赛", level: lang === 'en' ? "Provincial" : "省级", date: "Mar 2024", color: "emerald", desc: lang === 'en' ? "Third Prize. Organized by Shanghai Youth Science Promotion Association." : "三等奖。上海市青少年科学促进会组织。" },
          { title: lang === 'en' ? "China International College Students' Innovation" : "中国国际大学生创新大赛", level: lang === 'en' ? "National" : "国家级", date: "Jan 2024", color: "emerald", desc: lang === 'en' ? "Emerging Track." : "萌芽赛道项目。" },
          { title: lang === 'en' ? "14th Sefu Creativity Competition" : "第十四届赛复创智杯", level: lang === 'en' ? "Provincial" : "省级", date: "Dec 2023", color: "emerald", desc: lang === 'en' ? "Second Prize. Organized by Shanghai Youth Creativity Competition Committee." : "二等奖。上海市青少年创意大赛组委会组织。" },
          { title: lang === 'en' ? "\"Tomorrow's Technology Star\" Competition" : "“明日科技之星”评选活动", level: lang === 'en' ? "Provincial" : "省级", date: "Nov 2023", color: "amber", desc: lang === 'en' ? "Second Prize (3000 CNY)." : "二等奖（3000元）。" },
          { title: lang === 'en' ? "Outstanding Researcher Nomination" : "上海市青少年科学研究院优秀小研究员提名", level: lang === 'en' ? "Provincial" : "省级", date: "Jul 2023", color: "emerald", desc: lang === 'en' ? "Nominated by Shanghai Youth Science Research Institute." : "上海市青少年科学研究院提名。" },
          { title: lang === 'en' ? "Outstanding Student of \"Future Scientists\"" : "“未来科学家”培养计划优秀学员", level: lang === 'en' ? "Provincial" : "省级", date: "May 2023", color: "amber", desc: lang === 'en' ? "Training Program. Organized by World Laureates Association." : "世界顶尖科学家协会组织。" }
        ].map((item, index) => (
          <div key={index} className={`${appleCardClass} p-8 flex flex-col sm:flex-row sm:items-center justify-between cursor-default`}>
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <h3 className="text-2xl font-bold tracking-tight mb-2">{item.title}</h3>
              <div className="flex gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.color === 'emerald' ? (darkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700') : (darkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-700')}`}>{item.level}</span>
                  <span className={`text-xs font-mono py-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.date}</span>
              </div>
              <p className={`text-base ${darkMode ? 'text-[#a1a1a6]' : 'text-[#515154]'}`}>{item.desc}</p>
            </div>
            <Trophy className={`flex-shrink-0 w-12 h-12 hidden sm:block ${darkMode ? 'text-[#2c2c2e]' : 'text-[#f5f5f7]'}`} />
          </div>
        ))}
      </div>
    </section>
  );

  const Hobbies = () => {
    // 趣味彩蛋的 State
    const [isRacing, setIsRacing] = useState(false);
    const [flags, setFlags] = useState([]);

    // 触发赛车飞驰动画
    const triggerDriveBy = (e) => {
        // 防止冒泡触发背景的点击波纹
        e.stopPropagation();
        if(isRacing) return;
        triggerHaptic([50, 100, 50]); // 引擎轰鸣般的多段震动
        setIsRacing(true);
        setTimeout(() => setIsRacing(false), 800);
    };

    // 触发飘旗特效
    const triggerFlags = (e) => {
        e.stopPropagation();
        triggerHaptic(50);
        const newFlag = { id: Date.now(), left: Math.random() * 80 + 10 }; // 随机横向位置 10% - 90%
        setFlags(prev => [...prev, newFlag]);
        setTimeout(() => {
            setFlags(prev => prev.filter(f => f.id !== newFlag.id));
        }, 1500); // 1.5秒后移除旗帜
    };

    return (
      <section className="py-12 animate-fade-in max-w-4xl mx-auto relative z-10 overflow-hidden">
        {/* 全局 CSS 用于彩蛋动画 */}
        <style>{`
          @keyframes fly-by {
            0% { transform: translateX(0) skewX(0); opacity: 1; filter: blur(0); }
            30% { transform: translateX(-5%) skewX(5deg); opacity: 1; filter: blur(2px); }
            60% { transform: translateX(150%) skewX(-20deg); opacity: 0; filter: blur(8px); }
            61% { transform: translateX(-150%) skewX(20deg); opacity: 0; }
            100% { transform: translateX(0) skewX(0); opacity: 1; filter: blur(0); }
          }
          .animate-fly-by {
            animation: fly-by 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          @keyframes float-up {
            0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-150px) scale(1.5) rotate(15deg); opacity: 0; }
          }
          .animate-float-up {
            animation: float-up 1.5s ease-out forwards;
          }
        `}</style>

        {/* 渲染飘逸的旗帜 */}
        {flags.map(flag => (
            <div 
                key={flag.id} 
                className="fixed text-4xl z-50 pointer-events-none animate-float-up"
                style={{ left: `${flag.left}%`, bottom: '20%' }}
            >
                🏁
            </div>
        ))}

        <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].hobTitle}</h2>
        </div>
        <div className={`${appleCardClass} p-10 md:p-16 cursor-default relative`}>
            <div className="space-y-6 text-lg leading-relaxed">
                
                {/* 埋入文字彩蛋：点击 Full throttle / 满格 */}
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {lang === 'en' ? t.en.hobP1Part1 : t.zh.hobP1Part1}
                    <strong 
                        className="cursor-pointer text-emerald-500 hover:text-emerald-400 transition-colors inline-block relative z-20 pointer-events-auto hover:scale-110 active:scale-95"
                        onClick={triggerFlags}
                        title="Click me!"
                    >
                        {lang === 'en' ? t.en.hobP1Part2 : t.zh.hobP1Part2}
                    </strong>
                    {lang === 'en' ? t.en.hobP1Part3 : t.zh.hobP1Part3}
                </p>

                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{t[lang].hobP2}</p>
                
                {/* 埋入图片彩蛋：点击 Daniel 触发漂移特效 */}
                <div className="overflow-hidden rounded-2xl shadow-xl my-10 mx-auto max-w-full md:max-w-lg cursor-pointer relative z-20 pointer-events-auto" onClick={triggerDriveBy}>
                    <img 
                        src="../photos/hobbies.jpg" 
                        alt="Daniel Ricciardo" 
                        className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${isRacing ? 'animate-fly-by' : ''}`}
                    />
                </div>
                
                <p className={`font-medium italic border-l-4 pl-4 ${darkMode ? 'text-emerald-400 border-emerald-500' : 'text-emerald-700 border-emerald-600'}`}>
                    {t[lang].hobP3}
                </p>
            </div>
        </div>
      </section>
    );
  };

  const About = () => (
    <section className="py-12 animate-fade-in max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight mb-4">{t[lang].aboutTitle}.</h2>
      </div>
      
      {/* Bio Section with Resume Download Button */}
      <div className={`${appleCardClass} p-10 md:p-14 mb-12 flex flex-col justify-center cursor-default`}>
          <div className="space-y-6 text-lg leading-relaxed font-light mb-10">
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'} dangerouslySetInnerHTML={{ __html: t[lang].aboutP1 }}></p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'} dangerouslySetInnerHTML={{ __html: t[lang].aboutP2 }}></p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'} dangerouslySetInnerHTML={{ __html: t[lang].aboutP3 }}></p>
          </div>
          
          {/* 下载简历的互动按钮 */}
          <div className={`pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'} flex justify-start`}>
            <a 
              href="./resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => {
                e.stopPropagation(); // 防止冒泡触发背景波纹
                triggerHaptic(40);
              }}
              className={`inline-flex items-center px-6 py-3 font-medium rounded-full transition-all duration-300 shadow-md relative z-20 pointer-events-auto ${darkMode ? 'bg-[#2c2c2e] hover:bg-[#3a3a3c] text-emerald-400' : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'}`}
            >
              <Download className="mr-2 w-5 h-5" />
              {t[lang].downloadResume}
            </a>
          </div>
      </div>

      {/* Education & Skills Section extracted from Resume */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Education */}
        <div className={`${appleCardClass} p-10 h-full cursor-default`}>
            <h3 className={`text-2xl font-bold mb-6 tracking-tight pb-3 border-b ${darkMode ? 'text-emerald-500 border-gray-800' : 'text-emerald-700 border-gray-200'}`}>
                {t[lang].eduTitle}
            </h3>
            <div className="space-y-2">
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t[lang].eduWaterloo}</h4>
                <p className={`text-base font-medium leading-relaxed ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>{t[lang].eduDegree}</p>
                <p className={`text-sm font-mono mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{t[lang].eduDate}</p>
            </div>
        </div>

        {/* Skills */}
        <div className={`${appleCardClass} p-10 h-full cursor-default`}>
            <h3 className={`text-2xl font-bold mb-6 tracking-tight pb-3 border-b ${darkMode ? 'text-emerald-500 border-gray-800' : 'text-emerald-700 border-gray-200'}`}>
                {t[lang].skillsTitle}
            </h3>
            <ul className={`space-y-4 text-sm font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li><strong className="font-medium text-emerald-500 mr-2">CAD & Simulation:</strong> {t[lang].skillsCAD}</li>
                <li><strong className="font-medium text-emerald-500 mr-2">Prototyping:</strong> {t[lang].skillsProto}</li>
                <li><strong className="font-medium text-emerald-500 mr-2">Programming:</strong> {t[lang].skillsProg}</li>
                <li><strong className="font-medium text-emerald-500 mr-2">Misc:</strong> {t[lang].skillsWeb}</li>
            </ul>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'projects': return <Projects />;
      case 'work': return <Work />;
      case 'leadership': return <Leadership />;
      case 'achievements': return <Achievements />;
      case 'hobbies': return <Hobbies />;
      case 'about': return <About />;
      default: return <Home />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col font-sans relative ${darkMode ? 'bg-black text-[#f5f5f7]' : 'bg-[#fbfbf9] text-[#1d1d1f]'}`}>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* 超高级液体波浪动画核心 */
        @keyframes wave-spin-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); border-radius: 43% 57% 43% 57% / 57% 43% 57% 43%; }
          33% { transform: translate(-50%, -50%) rotate(100deg) scale(1.8); border-radius: 57% 43% 57% 43% / 43% 57% 43% 57%; }
          66% { transform: translate(-50%, -50%) rotate(250deg) scale(0.9); border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); border-radius: 43% 57% 43% 57% / 57% 43% 57% 43%; }
        }
        @keyframes wave-spin-medium {
          0% { transform: translate(-50%, -50%) rotate(360deg) scale(1); border-radius: 50% 50% 50% 50% / 40% 60% 40% 60%; }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.2); border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; }
          100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); border-radius: 50% 50% 50% 50% / 40% 60% 40% 60%; }
        }
        @keyframes wave-spin-fast {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0.9); border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(0.9); border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; }
        }
        .animate-wave-spin-slow { animation: wave-spin-slow 20s linear infinite; }
        .animate-wave-spin-medium { animation: wave-spin-medium 17s linear infinite; }
        .animate-wave-spin-fast { animation: wave-spin-fast 15s linear infinite; }
        
        /* 全屏海洋波纹扩散特效 */
        @keyframes ocean-wave {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; border-width: 6px; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; border-width: 1px; }
        }
        .animate-ocean-wave {
          animation: ocean-wave 1.5s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }

        /* 边缘浪花飞溅特效 */
        @keyframes splash {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.5) rotate(var(--rot)); opacity: 0; }
        }
        .animate-splash {
          animation: splash 0.8s cubic-bezier(0.1, 0.9, 0.3, 1) forwards;
        }
      `}</style>

      {/* 桌面端与移动端交互环境波浪光晕与点击全屏水波纹/浪花 */}
      <AmbientWave />

      {/* 顶部导航栏 (极致毛玻璃风格) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-150 ${darkMode ? 'bg-black/40 border-b border-[#333336]/50' : 'bg-white/40 border-b border-gray-200/50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-3 relative z-20 pointer-events-auto" onClick={(e) => { e.stopPropagation(); navigateTo('home'); }}>
              <img 
                src="./icon.PNG" 
                alt="SW Crest Logo" 
                className={`w-9 h-9 rounded-full object-cover transition-transform hover:scale-110 ${darkMode ? 'bg-white/90' : 'border border-gray-300'}`}
              />
              <span className="font-semibold text-lg tracking-tight hover:text-emerald-800 dark:hover:text-emerald-500 transition-colors">
                Shaofu Wang
              </span>
            </div>
            
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => { e.stopPropagation(); navigateTo(link.id); }}
                  className={`text-xs font-medium tracking-wide transition-colors relative z-20 pointer-events-auto ${currentPage === link.id ? (darkMode ? 'text-emerald-400' : 'text-emerald-800') : (darkMode ? 'text-[#86868b] hover:text-emerald-400' : 'text-[#515154] hover:text-emerald-800')}`}
                >
                  {t[lang][link.key]}
                </button>
              ))}

              <div className={`w-px h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

              {/* 语言切换和深色模式 */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => { e.stopPropagation(); toggleLang(); }}
                  className={`px-3 py-1 text-xs font-semibold tracking-widest rounded-full transition-colors border relative z-20 pointer-events-auto ${darkMode ? 'border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-black hover:bg-gray-100'}`}
                >
                  {lang === 'en' ? '中' : 'EN'}
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); toggleDarkMode(); }}
                  className={`p-1.5 rounded-full transition-colors relative z-20 pointer-events-auto ${darkMode ? 'hover:bg-[#333336] text-[#86868b] hover:text-white' : 'hover:bg-gray-200 text-[#515154] hover:text-black'}`}
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>

            {/* 移动端导航触发器 */}
            <div className="md:hidden flex items-center space-x-3">
               <button
                  onClick={(e) => { e.stopPropagation(); toggleLang(); }}
                  className={`px-2.5 py-1 text-xs font-semibold tracking-widest rounded-full transition-colors border relative z-20 pointer-events-auto ${darkMode ? 'border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:text-black hover:bg-gray-100'}`}
                >
                  {lang === 'en' ? '中' : 'EN'}
                </button>
              <button
                onClick={(e) => { e.stopPropagation(); triggerHaptic(30); toggleDarkMode(); }}
                className={`p-1.5 rounded-full transition-colors relative z-20 pointer-events-auto ${darkMode ? 'text-[#86868b]' : 'text-[#515154]'}`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); triggerHaptic(30); setIsMenuOpen(!isMenuOpen); }}
                className={`p-1.5 rounded-full relative z-20 pointer-events-auto ${darkMode ? 'text-white' : 'text-black'}`}
              >
                {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单下拉 (毛玻璃效果) */}
        {isMenuOpen && (
          <div className={`md:hidden absolute w-full h-screen backdrop-blur-3xl backdrop-saturate-200 ${darkMode ? 'bg-black/80' : 'bg-[#fbfbf9]/80'}`}>
            <div className="px-6 py-8 space-y-6 relative z-20 pointer-events-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => { e.stopPropagation(); navigateTo(link.id); }}
                  className={`block w-full text-left text-2xl font-semibold tracking-tight ${currentPage === link.id ? (darkMode ? 'text-emerald-500' : 'text-emerald-800') : (darkMode ? 'text-[#86868b]' : 'text-[#515154]')}`}
                >
                  {t[lang][link.key]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 主要内容区 */}
      <main className="flex-grow w-full pt-20 pb-12 px-4 sm:px-6 relative z-10">
        {renderContent()}
      </main>

      {/* 极简页脚 */}
      <footer className={`py-16 mt-auto text-center border-t relative z-10 ${darkMode ? 'bg-black border-[#333336]' : 'bg-[#f5f5f7] border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 relative z-20 pointer-events-auto">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">{t[lang].footerTitle}</h2>
          <p className={`mb-10 text-lg ${darkMode ? 'text-[#86868b]' : 'text-[#86868b]'}`}>
            {t[lang].footerDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a href="mailto:shaofu.wang86@gmail.com" onClick={(e) => e.stopPropagation()} className="inline-flex items-center px-8 py-3 bg-emerald-800 text-white font-medium rounded-full hover:bg-emerald-900 transition-colors w-full sm:w-auto justify-center">
              <Mail className="mr-2" size={18} />
              shaofu.wang86@gmail.com
            </a>
            <a href="mailto:shaofu.wang@uwaterloo.ca" onClick={(e) => e.stopPropagation()} className={`inline-flex items-center px-8 py-3 font-medium rounded-full transition-colors w-full sm:w-auto justify-center ${darkMode ? 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-emerald-400' : 'bg-white hover:bg-emerald-50 text-emerald-800 shadow-sm'}`}>
              <Mail className="mr-2" size={18} />
              shaofu.wang@uwaterloo.ca
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://www.linkedin.com/in/shaofuwang" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`transition-colors ${darkMode ? 'text-[#86868b] hover:text-white' : 'text-[#515154] hover:text-black'}`}><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/superechonimbus/profilecard/?igsh=dzA4b3FyYW9iNjR5" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`transition-colors ${darkMode ? 'text-[#86868b] hover:text-pink-500' : 'text-[#515154] hover:text-pink-600'}`}><Instagram size={24} /></a>
            <a href="https://www.facebook.com/share/Qur5p4KSUDUU4LRp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`transition-colors ${darkMode ? 'text-[#86868b] hover:text-emerald-500' : 'text-[#515154] hover:text-emerald-700'}`}><Facebook size={24} /></a>
          </div>
          
          <p className={`text-xs font-medium tracking-wide ${darkMode ? 'text-[#515154]' : 'text-[#86868b]'}`}>
            &copy; {new Date().getFullYear()} SHAOFU WANG. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}