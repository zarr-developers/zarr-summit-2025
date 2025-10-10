export default function Location() {
  return (
    <div className="container">
      <section className="section">
        <h2>Location & Logistics</h2>
        <div className="hero-subtitle" style={{ textAlign: "center" }}>
          Rome, Italy • October 13-17, 2025
        </div>

        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <h3>Why Rome?</h3>
          <div className="card highlight-card">
            <p>
              Rome provides the perfect setting for this crucial summit,
              combining accessibility for our global community with the
              inspiring atmosphere needed for breakthrough collaboration. The
              city's location makes it convenient for both European and
              international participants, while the timing aligns with the
              concurrent STAC Sprint for maximum community impact.
            </p>
          </div>
        </div>

        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <h3>Venue Information</h3>
          <div className="card">
            <h4 style={{ paddingBottom: "0.5rem" }}>
              The Zarr summit will be hosted at the{" "}
              <a
                href="https://zestgroup.vc/en/thehub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0066cc", textDecoration: "underline" }}
              >
                Zest Hub
              </a>
              , a modern co-working and event space!
            </h4>
            <p>
              <strong>Getting to Zest Hub:</strong>
              <br />
              Located within Termini Station (Via Marsala 29h, Rome, Italy), the
              Hub is easily reachable via the rail network, public transport,
              and has a direct connection to Rome Fiumicino Airport.
            </p>
          </div>
        </div>

        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <h3>Catering & Meals</h3>
          <div className="grid grid-2" style={{ marginBottom: "0.5rem" }}>
            <div className="card">
              <h3>Included Meals</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Daily Lunch:</strong> Catered on-site
                </li>
                <li>
                  <strong>Coffee & Tea Service:</strong> Available throughout
                  the day
                </li>
                <li>
                  <strong>Dietary Accommodations:</strong> All restrictions
                  accommodated
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Special Events</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Joint Happy Hour:</strong> Wednesday evening (Oct 15)
                  with STAC Sprint participants
                </li>
                <li>
                  <strong>Welcome Reception:</strong> Thursday evening (Oct 16)
                  - snacks and drinks on the Zest Hub roof overlooking Rome
                </li>
                <li>
                  <strong>Group Dinners:</strong> Optional self-organized group
                  dinners
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <h3>STAC Sprint Coordination</h3>
          <div className="card highlight-card">
            <p>
              The Zarr Summit is strategically timed to coincide with the STAC
              (SpatioTemporal Asset Catalog) Sprint happening in Rome during
              October 13-16. This creates unique opportunities for:
            </p>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>Joint happy hour</li>
              <li>
                Cross-community collaboration sessions on Friday October 17
              </li>
              <li>Shared outcomes and future planning discussions</li>
              <li>Broader ecosystem impact through combined events</li>
            </ul>
            <p style={{ fontStyle: "italic" }}>
              This coordination maximizes the value of international travel
              while fostering connections between complementary open-source
              communities.
            </p>
          </div>
        </div>

        <div
          className="section"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <h3>Important Information</h3>
          <div className="grid grid-2">
            <div className="card">
              <h3>Registration Requirements</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Full summit registration deadline:</strong> August 22,
                  2025
                </li>
                <li>
                  <strong>Adopter days registration deadline:</strong> September
                  12, 2025
                </li>
                <li>
                  <strong>Travel Support:</strong> Available for full summit
                  participants, indicate need during registration
                </li>

                <li>
                  <strong>Dietary Requirements:</strong> Specify during
                  registration
                </li>
                <li>
                  <strong>Accessibility Needs:</strong> Contact organizers
                  directly
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Contact Information</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Content:</strong> Max Jones, Joe Hamman, Davis Bennett
                </li>
                <li>
                  <strong>Logistics:</strong> Michelle Roby, Louisa Diggs
                  (Cloud-Native Geospatial Forum)
                </li>
                <li>
                  <strong>Emergency Contacts:</strong> Will be provided to
                  registered participants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
