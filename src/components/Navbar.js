export function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="logo">
        <a href="#">EduQuest</a>
      </div>
      <div class="nav-links">
        <a href="#" onclick="navigate('home')">Home</a>
        <a href="#" onclick="navigate('edegree')">Edegree</a>
        <a href="#" onclick="navigate('jobs')">Jobs</a>
        <a href="#" onclick="navigate('quizzes')">Quizzes</a>
        <a href="#" onclick="navigate('profile')">Profile</a>
        <a href="#" onclick="navigate('employers')">Employers</a>
      </div>
    </nav>
  `;
}
