import React, { useState, useEffect } from 'react';
import { SecurityLock } from './components/SecurityLock';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecommendationBanner from './components/RecommendationBanner';
import ModuleCard from './components/ModuleCard';
import WizardModal from './components/WizardModal';
import Footer from './components/Footer';
import { categories, SUGGEST_MAP } from './data/resources';
import { useLanguage } from './context/LanguageContext';
import { 
  BookOpen, 
  Code2, 
  Users, 
  Cpu, 
  Palette, 
  Layers, 
  Layout, 
  Volume2, 
  Wrench, 
  Compass 
} from 'lucide-react';

const getCategoryIcon = (id: string) => {
  const props = { 
    size: 15, 
    style: { marginRight: '8px', flexShrink: 0 } 
  };
  switch (id) {
    case 'm1': return <BookOpen {...props} />;
    case 'm2': return <Code2 {...props} />;
    case 'm3': return <Users {...props} />;
    case 'm4': return <Cpu {...props} />;
    case 'm5': return <Palette {...props} />;
    case 'm6': return <Layers {...props} />;
    case 'm7': return <Layout {...props} />;
    case 'm8': return <Volume2 {...props} />;
    case 'm9': return <Wrench {...props} />;
    case 'm10': return <Compass {...props} />;
    default: return <BookOpen {...props} />;
  }
};


export const App: React.FC = () => {
  const { language } = useLanguage();
  const [wizardOpen, setWizardOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('m1');

  // 1. Calculate recommendations from answers
  const calculateRecommendations = (prefs: { [key: string]: string }) => {
    const allVals = Object.values(prefs).filter(Boolean);
    const moduleSet = new Set<string>();
    
    allVals.forEach(val => {
      if (SUGGEST_MAP[val]) {
        SUGGEST_MAP[val].forEach(m => moduleSet.add(m));
      }
    });

    return Array.from(moduleSet);
  };

  // 2. Lifecycle initial hook
  useEffect(() => {
    const savedPrefs = localStorage.getItem('trh-prefs');
    const wizardDone = localStorage.getItem('trh-wizard-done');

    if (!wizardDone) {
      const timer = setTimeout(() => {
        setWizardOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    } else if (savedPrefs) {
      try {
        const parsed = JSON.parse(savedPrefs);
        const suggested = calculateRecommendations(parsed);
        setRecommendations(suggested);
      } catch (e) {
        console.error('Error parsing stored preferences:', e);
      }
    }
  }, []);

  // 3. Scroll-spy listener to highlight active category in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = categories.map(cat => document.getElementById(cat.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 140; // top offset padding

      let currentActive = 'm1';
      for (const el of categoryElements) {
        if (el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        } else {
          break;
        }
      }
      setActiveCategory(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Handle wizard finish
  const handleWizardFinish = (prefs: { [key: string]: string }) => {
    localStorage.setItem('trh-prefs', JSON.stringify(prefs));
    localStorage.setItem('trh-wizard-done', '1');
    setWizardOpen(false);
    
    const suggested = calculateRecommendations(prefs);
    setRecommendations(suggested);
  };

  // 5. Handle survey retake
  const handleRetakeSurvey = () => {
    localStorage.removeItem('trh-wizard-done');
    localStorage.removeItem('trh-prefs');
    setRecommendations([]);
    setWizardOpen(true);
  };

  // 6. Deep search filtering algorithm
  const getFilteredCategories = () => {
    if (!searchQuery.trim()) return categories;

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const matchesQuery = (text: string) => text.toLowerCase().includes(normalizedQuery);

    return categories.map(cat => {
      // Filter sections in this category
      const filteredSections = cat.sections.map(section => {
        // Filter links
        const filteredLinks = section.links?.filter(link => 
          matchesQuery(link.name) || 
          matchesQuery(link.note.vi) || 
          matchesQuery(link.note.en)
        ) || [];

        // Check if section tags match query
        const tagsMatch = section.tags?.some(tag => matchesQuery(tag)) || false;

        // Check if section title matches query
        const titleMatches = section.title && (matchesQuery(section.title.vi) || matchesQuery(section.title.en));

        // If title matches or tags match, keep all links of the section!
        const finalLinks = (titleMatches || tagsMatch) ? (section.links || []) : filteredLinks;

        // Keep section if it has links or matching tags
        if (finalLinks.length > 0 || (section.tags && section.tags.length > 0 && tagsMatch)) {
          return {
            ...section,
            links: finalLinks
          };
        }
        return null;
      }).filter(Boolean) as typeof cat.sections;

      // Keep category if it has matching sections or its own title/description matches
      const catTitleMatches = matchesQuery(cat.title.vi) || matchesQuery(cat.title.en) || matchesQuery(cat.description.vi) || matchesQuery(cat.description.en);
      const finalSections = catTitleMatches ? cat.sections : filteredSections;

      if (finalSections.length > 0) {
        return {
          ...cat,
          sections: finalSections
        };
      }
      return null;
    }).filter(Boolean) as typeof categories;
  };

  const filteredCategories = getFilteredCategories();

  return (
    <div className="app">
      {/* DevTools, copy/cut, and keydown security guard */}
      <SecurityLock />

      {/* Sticky navigation bar with search and control options */}
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onBrandClick={() => setSearchQuery('')}
      />

      {/* Main content wrapper */}
      <div className="page-wrap">
        <Hero />

        {/* Dynamic suggestion chips banner based on user survey preferences */}
        <RecommendationBanner 
          recommendations={recommendations} 
          onRetake={handleRetakeSurvey} 
        />
      </div>

      {/* Dashboard Two-Column Container */}
      <div className="app-container">
        {/* Left column: Sticky Category Navigation */}
        <aside className="sidebar">
          <h3 className="sidebar-title">
            {language === 'vi' ? "DANH MỤC" : "CATEGORIES"}
          </h3>
          <div className="sidebar-list">
            {filteredCategories.map(cat => (
              <a
                key={cat.id}
                className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center' }}
                onClick={() => {
                  const el = document.getElementById(cat.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    setActiveCategory(cat.id);
                  }
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{language === 'vi' ? cat.title.vi : cat.title.en}</span>
              </a>
            ))}
          </div>
        </aside>

        {/* Right column: Main scroll content list */}
        <main className="main-content">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(cat => (
              <ModuleCard 
                key={cat.id} 
                category={cat} 
              />
            ))
          ) : (
            <div className="no-results">
              {language === 'vi' 
                ? "Không tìm thấy tài nguyên nào phù hợp..." 
                : "No matching resources found..."}
            </div>
          )}
        </main>
      </div>

      <div className="page-wrap">
        <Footer />
      </div>

      {/* Recommendation Wizard Survey Modal overlay */}
      <WizardModal 
        isOpen={wizardOpen} 
        onClose={() => setWizardOpen(false)} 
        onFinish={handleWizardFinish} 
      />
    </div>
  );
};

export default App;
