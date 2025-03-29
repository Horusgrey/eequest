export function renderProfileDashboard() {
  const resumeList = window.userData.resume.map(course => `<li>${course}</li>`).join('');
  const quizScore = window.userData.quizScores.length > 0 ? window.userData.quizScores.reduce((a, b) => a + b.score, 0) : 0;
  return `
    <section class="profile">
      <h2>Your Dashboard</h2>
      <div class="user-info">
        <img src="/public/images/logo.png" alt="Profile Picture" width="100">
        <p>Name: ${window.userData.name}</p>
        <p>Progress: ${window.userData.progress}% of degree completed</p>
      </div>
      <div class="resume-section">
        <h3>Resume Score: ${Math.min(80 + window.userData.resume.length * 5, 100)}%</h3>
        <ul>${resumeList}</ul>
        <button onclick="optimizeResume()">Optimize Resume</button>
      </div>
      <div class="job-applications">
        <h3>Recommended Jobs</h3>
        <div id="job-recommendations">
          <p>AI matching pending: Based on your ${window.userData.resume.length} courses.</p>
        </div>
      </div>
    </section>
  `;
}

window.optimizeResume = () => {
  alert('Resume optimized! (AI enhancement pending)');
};