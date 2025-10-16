export default function Schedule() {
  return (
    <div className="container">
      <section className="section">
        <h2>Summit Schedule</h2>
        <div
          className="hero-subtitle"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Five Days of Collaboration • October 13-17, 2025 • Rome, Italy
        </div>

        <div className="card highlight-card">
          <h3>Summit Structure</h3>
          <p>
            The summit is designed as a progression from deep technical work to
            collaborative implementation, with developers strongly encouraged to
            participate in both phases to experience the complete journey from
            code to real-world impact.
          </p>
        </div>
        <div
          className="section"
          style={{
            marginTop: "0rem",
            marginBottom: "0.5rem",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <h3>Adopter Days: Collaboration & Implementation</h3>
          <div>
            <div className="card adopter-card">
              <h3>Friday, October 17</h3>
              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                Adopter Summit (workshops and breakout sessions)
              </h4>
              <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
                Lightning talk presenters: please email slides to{" "}
                <a href="mailto:max@developmentseed.org">
                  max@developmentseed.org
                </a>
              </p>

              <p>
                <strong>9:00 AM:</strong> Registration & welcome coffee
              </p>
              <p>
                <strong>9:15 AM:</strong> From first steps to production
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Workshop: Icechunk Deep Dive</li>
                <li>Breakout group: Choosing if Zarr is right for you</li>
              </ul>
              <p>
                <strong>10:30 AM:</strong> Break <em>(30 minutes)</em>
              </p>
              <p>
                <strong>11:00 AM:</strong> Virtual and native Zarr
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Workshop: Virtual Zarr for archival file formats</li>
                <li>
                  Breakout group: Native zarr features
                  <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Sharding</li>
                    <li>New data types</li>
                    <li>Migrating to Zarr V3</li>
                    <li>Chunk grids</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>12:00 PM:</strong> Lunch (catered)
              </p>
              <p>
                <strong>1:00 PM:</strong> Lightning Talks
              </p>
              <p>
                <strong>2:00 PM:</strong> Fine-tuning for your interests
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Workshop: Optimizing Zarr Performance</li>
                <li>
                  Birds of a feather:
                  <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem" }}>
                    <li>Machine Learning</li>
                    <li>Visualization</li>
                    <li>Earth sciences</li>
                    <li>Microscopy</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>3:00 PM:</strong> Break <em>(30 minutes)</em>
              </p>
              <p>
                <strong>3:30 PM:</strong> Birds of a feather: Zarr languages, or
                build your own!
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Zarr in Rust</li>
                <li>Zarr in Python</li>
                <li>Zarr in R</li>
                <li>Zarr in Julia</li>
                <li>Or, build your own!</li>
              </ul>
              <p>
                <strong>4:00 PM:</strong> Zarr retrospective and vision driving
              </p>
              <p>
                <strong>4:30 PM:</strong> Closing Remarks
              </p>
              <p>
                <strong>4:45 PM:</strong> Summit conclusion
              </p>
            </div>
            <div className="card adopter-card" style={{ marginTop: "2rem" }}>
              <h3>Thursday, October 16</h3>
              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                Adopter Summit (Presentations, panels, and Q&As)
              </h4>

              <p>
                <strong>9:00 AM:</strong> Registration & welcome coffee
              </p>
              <p>
                <strong>9:30 AM:</strong> Opening keynotes
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Davis Bennett - From A to Zarr</li>
                <li>Ryan Abernathey - What we need from Zarr 4</li>
              </ul>
              <p>
                <strong>10:45 AM:</strong> Break
              </p>
              <p>
                <strong>11:15 AM:</strong> Technical presentations: Zarr
                applications
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Joe Hamman - How to make Zarr go zoom zoom</li>
                <li>Max Jones - The GeoZarr challenge</li>
              </ul>
              <p>
                <strong>11:45 AM:</strong> Audience Q&A
              </p>
              <p>
                <strong>12:00 PM:</strong> Lunch (catered)
              </p>
              <p>
                <strong>1:25 PM:</strong> Technical presentations: Tools
                leveraging the Zarr data format
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Lachlan Deakin - zarrs: Zarr in the Rust Ecosystem</li>
                <li>
                  Sebastian Galkin - Icechunk, or how to put your Zarr data in
                  production
                </li>
                <li>
                  Tom Nicholas - VirtualiZarr: A bridge from archival file
                  formats to Zarr
                </li>
              </ul>
              <p>
                <strong>2:30 PM:</strong> Inverse Panel: Zarr in Production
              </p>
              <p>
                <strong>2:45 PM:</strong> Break
              </p>
              <p>
                <strong>3:15 PM:</strong> Technical presentations: Featured
                use-cases
              </p>
              <ul style={{ marginLeft: "1.5rem" }}>
                <li>Norman Rzepka - Zarr for peta-scale neurobiology</li>
                <li>
                  Alessandro Amici - The Earth Data Hub: Fast access to massive
                  climate and Earth observation datasets using Xarray and Zarr
                </li>
                <li>
                  Tobias Ferreira - Experiments at NOC with Browser-Based Zarr
                  Visualization
                </li>
                <li>
                  Tina Odaka - Grid4Earth: Unifying DGGS and Zarr for Scalable,
                  Interoperable Earth Data for DestinE and Copernicus Sentinel
                  Data
                </li>
                <li>
                  Emmanuel Mathot - EOPF Explorer. Expand Zarr for dynamic
                  vizualization of Copernicus Sentinel Data
                </li>
              </ul>
              <p>
                <strong>4:45 PM:</strong> Wrap up & day 2 previews
              </p>
              <p>
                <strong>5:00 PM:</strong> Day conclusion
              </p>
              <p>
                <strong>6 - 8 PM:</strong> Aperitivo (snacks and beverages)
              </p>
            </div>
          </div>
        </div>
        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <h3>Developer Days: Technical Deep-Dives </h3>
          <div
            className="grid grid-3"
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            <div className="card developer-card">
              <h3>Wednesday, October 15</h3>
              <h4 style={{ color: "#9c27b0", marginBottom: "1rem" }}>
                Wrap-up & Roadmap
              </h4>
              <p>
                <strong>9:00 AM:</strong> Welcome
              </p>
              <p>
                <strong>9:00 AM:</strong> Breakout groups
              </p>
              <p>
                <strong>11:00 AM:</strong> Roadmap development
              </p>
              <p>
                <strong>1:00 PM onwards:</strong> Free time in Rome
              </p>
              <p>
                <strong>Evening:</strong> Happy hour with STAC!
              </p>
            </div>
            <div className="card developer-card">
              <h3>Tuesday, October 14</h3>
              <h4 style={{ color: "#9c27b0", marginBottom: "1rem" }}>
                Continued development work
              </h4>
              <p>
                <strong>9:00 AM:</strong> Welcome
              </p>
              <p>
                <strong>9:30 AM:</strong> Review technical problems
              </p>
              <p>
                <strong>10:00 AM:</strong> Breakout groups
              </p>
              <p>
                <strong>11:30 AM:</strong> Group discussion
              </p>
              <p>
                <strong>12:00 PM:</strong> Lunch (Catered)
              </p>
              <p>
                <strong>1:00 PM:</strong> Breakout groups
              </p>
              <p>
                <strong>4:30 PM:</strong> Group discussion
              </p>
              <p>
                <strong>5:30 PM:</strong> Developer day concludes
              </p>
              <p>
                <strong>Evening:</strong> Optional team dinner
              </p>
            </div>
            <div className="card developer-card">
              <h3>Monday, October 13</h3>
              <h4 style={{ color: "#9c27b0", marginBottom: "1rem" }}>
                Welcome & Technical Deep-Dive
              </h4>
              <p>
                <strong>9:00 AM:</strong> Welcome & opening remarks
              </p>
              <p>
                <strong>9:30 AM:</strong> Review technical problems
              </p>
              <p>
                <strong>10:00 AM:</strong> Breakout groups
              </p>
              <p>
                <strong>11:30 AM:</strong> Group discussion
              </p>
              <p>
                <strong>12:00 PM:</strong> Lunch (Catered)
              </p>
              <p>
                <strong>1:00 PM:</strong> Breakout groups
              </p>
              <p>
                <strong>4:30 PM:</strong> Group discussion
              </p>
              <p>
                <strong>5:30 PM:</strong> Developer day concludes
              </p>
              <p>
                <strong>Evening:</strong> Optional team dinner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
