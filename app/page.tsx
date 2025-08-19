export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1>Zarr Summit 2025</h1>
          <div className="hero-subtitle">October 13-17 • Rome, Italy</div>
          <div className="hero-tagline">
            Unlocking Scalable and Accessible Open Science on the Cloud with
            Zarr
          </div>

          <div className="cta-buttons">
            <a
              href="https://lu.ma/llsms183"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zarr developer summit (October 13-17)
            </a>
            <a
              href="https://lu.ma/5277wsze"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adopter days registration (October 16-17)
            </a>
          </div>

          <div className="hero-flow">
            <strong>Zarr Developer Days (13-15):</strong> Technical deep-dives
            and feature development
            <br />
            <strong>Zarr Adopter Days (16-17):</strong> Bridge the gap - Zarr
            implementers and adopters collaborate
            <br />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>About the Summit</h2>
          <div className="grid grid-2">
            <div className="card highlight-card">
              <h3>The Challenge</h3>
              <p>
                The transition from Zarr v2 to v3 has revealed fundamental
                coordination challenges. Progress has stalled on crucial
                technical consensus issues around variable chunk grids, sharding
                strategies, and codec standardization. Virtual meetings cannot
                provide the deep, real-time collaboration needed to resolve
                these complex technical disagreements.
              </p>
            </div>
            <div className="card highlight-card">
              <h3>The Solution</h3>
              <p>
                A week-long summit will transform months of asynchronous debate
                into days of productive problem-solving. Face-to-face
                collaboration will enable the trust-building and technical
                discussions necessary for a thriving open-source ecosystem,
                while connecting Zarr implementers directly with the adopters
                who depend on their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2>Two Connected Events</h2>
          <div className="grid grid-2">
            <div className="card developer-card">
              <h3>Developer Summit (Oct 13-15)</h3>
              <p>
                <strong>Who:</strong> Zarr Implementers
              </p>
              <p>
                <strong>Focus:</strong> Technical deep-dives and breakthrough
                sessions
              </p>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
                <li>Variable chunk grid extensions</li>
                <li>Sharding implementation</li>
                <li>Codec standardization</li>
                <li>Cross-language compatibility</li>
              </ul>
            </div>
            <div className="card adopter-card">
              <h3>Adopter Summit (Oct 16-17)</h3>
              <p>
                <strong>Who:</strong> People adopting Zarr{" "}
              </p>
              <p>
                <strong>Focus:</strong> Collaboration and implementation
                guidance
              </p>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
                <li>Round-tables with implementers</li>
                <li>Migration guidance for Zarr V3</li>
                <li>Virtual Zarr for cloud-native access</li>
                <li>Real-world adoption strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Zarr Implementers Should Stay for Both</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>See Your Work in Action</h3>
              <p>
                Experience how your technical implementations solve real-world
                problems for organizations like ESA, NASA, and leading research
                institutions.
              </p>
            </div>
            <div className="card">
              <h3>Direct User Feedback</h3>
              <p>
                Get immediate input from large-scale adopters to shape future
                development priorities and ensure your work meets actual user
                needs.
              </p>
            </div>
            <div className="card">
              <h3>Build Lasting Relationships</h3>
              <p>
                Strengthen connections with the user community that will sustain
                and guide the Zarr ecosystem's growth beyond this summit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Registration Information</h2>
          <div className="grid grid-2">
            <div className="card highlight-card">
              <h3>Full Summit (Developer + Adopter days)</h3>
              <p>
                <strong>Register by August 22</strong>
              </p>
              <p>
                <strong>Dates:</strong> October 13-17, 2025
              </p>
              <p>
                <strong>Includes:</strong> Breakfasts, Lunches, Travel support
                if needed
              </p>
              <p>
                <strong>Ideal for:</strong> Zarr implementers and developers
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://lu.ma/llsms183"
                  className="cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for Full Summit
                </a>
              </div>
            </div>
            <div className="card">
              <h3>Adopter Days Only</h3>
              <p>
                <strong>Register by September 12</strong>
              </p>
              <p>
                <strong>Dates:</strong> October 16-17, 2025
              </p>
              <p>
                <strong>Includes:</strong> Breakfasts, Lunches
              </p>
              <p>
                <strong>Ideal for:</strong> Organizations evaluating or
                implementing Zarr
              </p>
              <p>
                <strong> </strong>
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://lu.ma/5277wsze"
                  className="cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for Adopter Days
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
