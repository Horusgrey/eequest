export function renderJobFeed() {
  return `
    <section class="jobs">
      <h2>Job Opportunities</h2>
      <div class="job-listing">
        <h3>Software Developer</h3>
        <p>Company XYZ is looking for a skilled developer.</p>
        <button onclick="fastTrackJob('Software Developer')">Fast-Track Me</button>
      </div>
      <div class="job-listing">
        <h3>Digital Marketer</h3>
        <p>Company ABC needs a creative marketing mind.</p>
        <button onclick="fastTrackJob('Digital Marketer')">Fast-Track Me</button>
      </div>
    </section>
  `;
}

window.fastTrackJob = (job) => {
  document.querySelector('.jobs').innerHTML += `
    <p>Fast-Track: AI suggests learning skills for ${job}. (Backend integration pending)</p>
  `;
};