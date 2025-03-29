export function renderDegreePanel() {
  return `
    <section class="edegree">
      <h2>Choose Your Major</h2>
      <div class="degree-options">
        <button onclick="selectMajor('Marketing')">Marketing</button>
        <button onclick="selectMajor('Computer Science')">Computer Science</button>
        <button onclick="selectMajor('Music Theory')">Music Theory</button>
      </div>
      <div id="ai-recommendations"></div>
    </section>
  `;
}

window.selectMajor = (major) => {
  document.getElementById('ai-recommendations').innerHTML = `
    <p>AI Suggestion: Start with foundational courses in ${major}. (Backend integration pending)</p>
  `;
};