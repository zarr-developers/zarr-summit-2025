export default function Register() {
  return (
    <div className="container">
      <section className="section">
        <h2>Registration</h2>

        <div className="section" style={{ marginTop: "1rem" }}>
          <div className="grid grid-2">
            <div className="card highlight-card">
              <h3>Full Summit Registration</h3>
              <div
                style={{
                  color: "#2c3e50",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                October 13-17, 2025 (Currently full)
              </div>

              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                What's Included:
              </h4>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>
                  <strong>Developer Days (Oct 13-15):</strong> Technical
                  deep-dives, feature development
                </li>
                <li>
                  <strong>Adopter Days (Oct 16-17):</strong> Collaboration with
                  user community
                </li>
                <li>
                  <strong>Meals:</strong> Coffee, snacks, and lunch for both
                  days
                </li>
                <li>
                  <strong>Travel support eligibility:</strong> Available, please
                  indicate if needed during registration
                </li>
              </ul>

              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                Ideal For:
              </h4>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>Zarr Implementers</li>
                <li>Zarr Steering Council Members</li>
              </ul>

              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <a
                  href="https://lu.ma/llsms183"
                  className="cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the full summit waitlist
                </a>
              </div>
            </div>

            <div className="card">
              <h3>Adopter Days Only</h3>
              <div
                style={{
                  color: "#2c3e50",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                October 16-17, 2025 (Currently full)
              </div>

              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                What's Included:
              </h4>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>
                  <strong>Adopter Days (Oct 16-17):</strong> Migration guidance,
                  roundtables, collaboration with implementers
                </li>
                <li>
                  <strong>Meals:</strong> Coffee, snacks, and lunch for both
                  days
                </li>
              </ul>

              <h4 style={{ color: "#4caf50", marginBottom: "1rem" }}>
                Ideal For:
              </h4>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>Individuals evaluating Zarr for adoption</li>
                <li>Teams already using Zarr</li>
                <li>Teams interesting in Virtual Zarr</li>
              </ul>

              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <a
                  href="https://lu.ma/5277wsze"
                  className="cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the adopter days waitlist
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: "2rem" }}>
          <h3>Travel Support Information</h3>
          <div className="card developer-card">
            <h3>Available for Full Summit Participants</h3>
            <div className="grid grid-2">
              <div>
                <h4>Eligibility & Process</h4>
                <ul style={{ paddingLeft: "1.5rem" }}>
                  <li>Indicate need during registration process</li>
                  <li>More information will be provided to registrants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: "2rem" }}>
          <h3>Questions & Support</h3>
          <div className="grid grid-2">
            <div className="card">
              <h3>Contact Information</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Content Organizers:</strong>
                </li>
                <li>Max Jones (Development Seed)</li>
                <li>Joe Hamman (Earthmover)</li>
                <li>Davis Bennett (Independent)</li>
                <li style={{ marginTop: "1rem" }}>
                  <strong>Logistics Organizers:</strong>
                </li>
                <li>Michelle Roby & Louisa Diggs (Radiant Earth)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Special Accommodations</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Dietary Restrictions:</strong> Specify during
                  registration
                </li>
                <li>
                  <strong>Accessibility Needs:</strong> Contact organizers
                  directly
                </li>
                <li>
                  <strong>Group Accommodation:</strong> Contact logistics team
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#e3f2fd",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <h3 style={{ color: "#1976d2", marginBottom: "1rem" }}>
            Ready to Transform Zarr's Future?
          </h3>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Join us in Rome for five days that will shape the future of
            scalable, accessible open science.
          </p>
          <div className="cta-buttons">
            <a
              href="https://lu.ma/llsms183"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the full summit waitlist
            </a>
            <a
              href="https://lu.ma/5277wsze"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the adopter days waitlist
            </a>
          </div>
          <p style={{ fontWeight: "600", color: "#d32f2f" }}>
            Full summit registration deadline: August 22, 2025
          </p>
          <p style={{ fontWeight: "600", color: "#d32f2f" }}>
            Adopter days registration deadline: September 12, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
