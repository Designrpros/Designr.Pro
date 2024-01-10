import React from 'react';
import MaprImage from './Assets/MaprImage.png';

const Mapr = () => {
  return (
    <div className="mapr-landing">
      <header className="mapr-header">
        <h1>Mapr - Project Management, Redefined</h1>
        <p>Revolutionizing project management for Tradesmen with a map-based interface.</p>
      </header>

      <section className="mapr-intro">
        <img src={MaprImage} alt="Mapr Screenshot" />
        <div>
          <h2>Visualize Your Projects Geographically</h2>
          <p>Mapr offers a unique, map-based interface to manage projects across multiple sites, providing a spatial context to your project management.</p>
        </div>
      </section>

      <section className="mapr-features">
        <h2>Key Features</h2>
        <ul>
          <li><strong>Contact Information:</strong> Easily store and manage project contacts.</li>
          <li><strong>Project Description:</strong> Keep detailed descriptions and objectives.</li>
          <li><strong>Time Tracking:</strong> Monitor time spent on tasks for productivity analysis.</li>
          <li><strong>Materials Management:</strong> Track and budget project materials.</li>
          <li><strong>Task Checklist:</strong> Ensure all project tasks are completed.</li>
          <li><strong>Project Summary:</strong> Quick snapshot of project status.</li>
          <li><strong>Participants:</strong> Add team members to projects.</li>
          <li><strong>Nearby Stores:</strong> Find local suppliers for essential materials.</li>
          <li><strong>Custom Checklists:</strong> Tailor checklists to your project needs.</li>
          <li><strong>Calendar:</strong> View project timelines and deadlines.</li>
          <li><strong>Calculators:</strong> Access essential tools like the Norwegian Cable Calculator.</li>
        </ul>
      </section>

      <section className="mapr-testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          "Clearly made by a tradesman! Convenient, easy to use, and keeps getting better with every update. It's free - doesn't get much better."
        </blockquote>
        <p>- A Satisfied User</p>
      </section>

      <section className="mapr-usage">
        <h2>How to Use Mapr</h2>
        <p>Create a project by searching for a location, pin it, and start managing with our comprehensive tools. Export your project details as a PDF for easy sharing and reporting.</p>
      </section>

      <footer className="mapr-footer">
        <p>© 2024 Mapr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Mapr;
