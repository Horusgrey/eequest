export function renderCourseListing() {
  return `
    <section class="courses">
      <h2>Course Listings</h2>
      <div class="course">
        <h3>Introduction to Marketing</h3>
        <p>A comprehensive overview of marketing principles.</p>
        <button onclick="addToResume('Introduction to Marketing')">Add to Resume</button>
      </div>
      <div class="course">
        <h3>Fundamentals of Computer Science</h3>
        <p>Learn programming basics and computational thinking.</p>
        <button onclick="addToResume('Fundamentals of Computer Science')">Add to Resume</button>
      </div>
    </section>
  `;
}

window.addToResume = (course) => {
  window.userData.resume.push(course);
  alert(`${course} added to your resume! Check your profile.`);
};