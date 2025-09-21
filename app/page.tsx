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

          <div className="hero-flow">
            <strong>Zarr Developer Summit (13-17):</strong> Technical deep-dives
            and feature development
            <br />
            <strong>Zarr Adopter Summit (16-17):</strong> Bridge the gap - Zarr
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
              <h3>Developer Summit (Oct 13-17)</h3>
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

      <section className="section" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2>Organizers</h2>
          <div className="logos-section">
            <a
              href="https://developmentseed.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/zarr-summit-2025/development-seed-logo.png"
                alt="Development Seed"
                className="organization-logo"
              />
            </a>
            <a
              href="https://cloudnativegeo.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/zarr-summit-2025/cng-3d-2126F7.png"
                alt="Cloud-Native Geospatial Forum (CNG)"

                className="organization-logo"
              />
            </a>
            <a
              href="https://earthmover.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/zarr-summit-2025/earthmover-logo.png"
                alt="Earthmover"
                className="organization-logo"
              />
            </a>
          </div>
          <h2>Foundational sponsor</h2>
          <div className="logos-section">
            <a
              href="https://www.navigation.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/zarr-summit-2025/the-navigation-fund-logo.png"
                alt="The Navigation Fund"
                className="organization-logo navigation-fund"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
