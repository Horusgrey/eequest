import { renderNavbar } from '../components/Navbar.js';
import { renderHeroSection } from '../components/HeroSection.js';
import { renderFeatureHighlights } from '../components/FeatureHighlights.js';
import { renderFooter } from '../components/Footer.js';
import { renderDegreePanel } from '../components/DegreePanel.js';
import { renderCourseListing } from '../components/CourseListing.js';
import { renderJobFeed } from '../components/JobFeed.js';
import { renderQuizComponent } from '../components/QuizComponent.js';
import { renderProfileDashboard } from '../components/ProfileDashboard.js';

const appContainer = document.getElementById('app');

window.navigate = (page) => {
  const content = document.getElementById('content');
  switch (page) {
    case 'edegree':
      content.innerHTML = renderDegreePanel() + renderCourseListing();
      break;
    case 'jobs':
      content.innerHTML = renderJobFeed();
      break;
    case 'quizzes':
      content.innerHTML = renderQuizComponent();
      break;
    case 'profile':
      content.innerHTML = renderProfileDashboard();
      break;
    case 'employers':
      content.innerHTML = '<section class="employers"><h2>Employers Dashboard</h2><p>Post jobs and find candidates (coming soon).</p></section>';
      break;
    case 'home':
    default:
      content.innerHTML = '';
  }
};

export function initApp() {
  appContainer.innerHTML = `
    ${renderNavbar()}
    ${renderHeroSection()}
    ${renderFeatureHighlights()}
    <div id="content"></div>
    ${renderFooter()}
  `;
  window.navigate('home');
}

window.userData = { name: "Zachary", progress: 45, resume: [], quizScores: [] };