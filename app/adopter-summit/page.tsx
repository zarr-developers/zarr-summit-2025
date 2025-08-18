export default function AdopterSummit() {
  return (
    <div className="container">
      <section className="section">
        <h2>Adopter Summit</h2>
        <div
          className="hero-subtitle"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          October 16-17, 2025 • Developer-Adopter Collaboration • ~40
          Participants Expected
        </div>

        <div className="card highlight-card" style={{ marginBottom: "2rem" }}>
          <h3>Bridge the Gap: From Implementation to Adoption</h3>
          <p>
            The final two days of the summit focus on collaboration between Zarr
            developers and the organizations that depend on this critical
            infrastructure. This is where technical breakthroughs meet
            real-world implementation challenges.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card adopter-card">
            <h3>Session Focus</h3>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
              <li>
                <strong>Roundtables:</strong> Unprecedented opportunity for
                adopters to meet with implementers
              </li>
              <li>
                <strong>Migration Guidance:</strong> Walk through Zarr V3
                adoption process and address implementation gaps
              </li>
              <li>
                <strong>Virtual Zarr Guidance:</strong> Unlock cloud-native data
                access for massive archival datasets
              </li>
              <li>
                <strong>Real-world Use Cases:</strong> Share challenges and
                solutions from production deployments
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Target Organizations</h3>
            <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem" }}>
              <li>European Space Agency (ESA)</li>
              <li>NASA</li>
              <li>USGS</li>
              <li>EUMETSAT</li>
              <li>CNES</li>
              <li>Copernicus Programme</li>
              <li>NVIDIA</li>
              <li>Google</li>
              <li>Esri</li>
              <li>Climate research centers</li>
              <li>Bioinformatics institutions</li>
              <li>...and more!</li>
            </ul>
            <p>
              We want to connect with you! Reach out if you're interested, or go
              ahead and register!
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://lu.ma/5277wsze"
            className="cta-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for Zarr Adopter Days
          </a>
        </div>
      </section>
    </div>
  );
}
