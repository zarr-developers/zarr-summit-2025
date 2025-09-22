export default function Location() {
  return (
    <div className="container">
      <section className="section">
        <h2>Location & Logistics</h2>
        <div
          className="hero-subtitle"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Rome, Italy • October 13-17, 2025
        </div>

        <div className="card highlight-card" style={{ marginBottom: "2rem" }}>
          <h3>Why Rome?</h3>
          <p>
            Rome provides the perfect setting for this crucial summit, combining
            accessibility for our global community with the inspiring atmosphere
            needed for breakthrough collaboration. The city's location makes it
            convenient for both European and international participants, while
            the timing aligns with the concurrent STAC Sprint for maximum
            community impact.
          </p>
        </div>

        <div className="section">
          <h3>Venue Information</h3>
          <div className="card">
            <h4>
              <a
                href="https://zestgroup.vc/en/thehub"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0066cc", textDecoration: "underline" }}
              >
                Zest Hub
              </a>
            </h4>
            <p>
              <strong>About the Venue:</strong>
              <br />
              Zest Hub is modern co-working and event space
            </p>
            <p style={{ marginBottom: "1rem" }}></p>
            <p>
              <strong>Getting to Zest Hub:</strong>
              <br />
              Located within Termini Station (Via Marsala 29h, Rome, Italy), the
              Hub is easily reachable via the rail network, public transport,
              and has a direct connection to Rome Fiumicino Airport.
            </p>
          </div>
        </div>

        <div className="section">
          <h3>Catering & Meals</h3>
          <div className="grid grid-2">
            <div className="card adopter-card">
              <h3>Included Meals</h3>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
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
              <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
                <li>
                  <strong>Welcome Reception:</strong> Monday evening (Oct 12) -
                  informal gathering
                </li>
                <li>
                  <strong>Joint Happy Hour:</strong> Evening gathering with STAC
                  Sprint participants
                </li>
                <li>
                  <strong>Group Dinners:</strong> Optional self-organized group
                  dinners
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section" id="hotels">
          <h3>Hotel Recommendations</h3>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Below are some hotels near the venue with a review score above 8 on Booking.com
          </p>
          <div className="card">
            <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="https://www.hotelartemide.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "underline" }}
                  >
                    Hotel Des Artistes Roma
                  </a>
                </h4>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong>Distance:</strong> 700 m<br />
                  <strong>Average price:</strong> €187/night
                  <br />
                </p>
              </div>
            </div>
            <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="https://www.hotelcameliaroma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "underline" }}
                  >
                    Hotel Camelia
                  </a>
                </h4>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong>Distance:</strong> 750 m<br />
                  <strong>Average price:</strong> €198/night
                  <br />
                </p>
              </div>
            </div>
            <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="https://www.hoteltheliberty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "underline" }}
                  >
                    The Liberty
                  </a>
                </h4>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong>Distance:</strong> 600 m<br />
                  <strong>Average price:</strong> €393/night
                  <br />
                </p>
              </div>
            </div>
            <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <h4 style={{ marginBottom: "0.5rem" }}>
                  <a
                    href="https://www.terrazzamagenta.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "underline" }}
                  >
                    Terrazza Magenta
                  </a>
                </h4>
                <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong>Distance:</strong> 290 m<br />
                  <strong>Average price:</strong> €149/night
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Transportation</h3>
          <div className="grid grid-3">
            <div className="card">
              <h3>Getting to Rome</h3>
              <p>
                <strong>Airports:</strong>
              </p>
              <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem" }}>
                <li>Leonardo da Vinci (FCO) - Main international airport</li>
                <li>
                  Ciampino (CIA) - Secondary airport, primarily low-cost
                  carriers
                </li>
              </ul>

              <p style={{ marginTop: "1.5rem" }}>
                <strong>Train Services:</strong>
              </p>
              <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem" }}>
                <li>Roma Termini (central)</li>
                <li>Roma Tiburtina (high-speed hub)</li>
              </ul>
            </div>
            <div className="card">
              <h3>Travel Support</h3>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                Travel funding logistics managed by Cloud-Native Geospatial Forum (CNG) team.
                Information will be provided to registered participants who
                request travel support.
              </p>
            </div>
          </div>
        </div>

        <div className="card highlight-card">
          <h3>STAC Sprint Coordination</h3>
          <p>
            The Zarr Summit is strategically timed to coincide with the STAC
            (SpatioTemporal Asset Catalog) Sprint happening in Rome during
            October 13-16. This creates unique opportunities for:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
            <li>Joint happy hour</li>
            <li>Cross-community collaboration sessions on Friday October 17</li>
            <li>Shared outcomes and future planning discussions</li>
            <li>Broader ecosystem impact through combined events</li>
          </ul>
          <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
            This coordination maximizes the value of international travel while
            fostering connections between complementary open-source communities.
          </p>
        </div>

        <div className="section">
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
                  (Radiant Earth)
                </li>
                <li>
                  <strong>Emergency Contacts:</strong> Will be provided to
                  registered participants
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <div className="cta-buttons">
            <a
              href="https://lu.ma/llsms183"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Full Summit
            </a>
            <a
              href="https://lu.ma/5277wsze"
              className="cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Adopter Days Only
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
