import React, { useState, useEffect }from 'react';
import './Navbar.css';

function Navbar () {
    const [activeSection, setActiveSection] = useState('home');
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'events', 'contact'];
            let currentSection = 'home';
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    return (
        <nav>
            <ul>
                {["home", "about", "events", "contact"].map((section) => (
                    <li key={section}>
                        <a href={`#${section}`}

                        className={activeSection === section ? "active" : ""}>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
                {darkMode ? "🌙" : "☀"}
            </button>
        </nav>
    );
}

export default Navbar;