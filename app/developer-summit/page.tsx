export default function DeveloperSummit() {
  return (
    <div className="container">
      <section className="section">
        <h2>Developer Summit</h2>
        <div
          className="hero-subtitle"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          October 13-17, 2025 • Technical Deep-Dives • ~20 Participants Expected
        </div>

        <div className="grid grid-2">
          <div className="card developer-card">
            <h3>Focus Areas</h3>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
              <li>
                <strong>Variable Chunk Grids:</strong> Finalize extension
                definition and prototype implementation
              </li>
              <li>
                <strong>Sharding:</strong> Complete design and demonstrate
                high-throughput distributed I/O
              </li>
              <li>
                <strong>Codec Standardization:</strong> Stabilize specifications
                for image compression routines
              </li>
              <li>
                <strong>Cross-Language Support:</strong> Ensure compatibility
                and feature parity across Python, C++, Rust, JavaScript
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Represented groups</h3>
            <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem" }}>
              <li>Zarr steering council</li>
              <li>Zarr-Python</li>
              <li>Zarrs</li>
              <li>GDAL</li>
              <li>Zarr.jl</li>
              <li>Numcodecs</li>
              <li>AnnData</li>
              <li>VirtualiZarr</li>
              <li>Acquire-Zarr</li>
              <li>Icechunk</li>
              <li>Zarr-sparse</li>
              <li>Cubed</li>
              <li>Nvcomp</li>
              <li>Viv</li>
              <li>AnnData</li>
              <li>Xarray</li>
              <li>...and more!</li>
            </ul>
            <p>
              We want to connect with you! Reach out if you have any questions!
            </p>
          </div>
        </div>

        <div className="card highlight-card" style={{ margin: "2rem 0" }}>
          <h3>Why This In-Person Format Matters</h3>
          <p>
            Complex technical challenges require high-bandwidth communication.
            The Zarr community's current barriers can only be overcome through
            intensive, in-person collaboration. Time zone differences, competing
            priorities, and the limitations of asynchronous communication have
            created a deadlock where critical decisions remain unmade month
            after month.
          </p>
          <p style={{ marginTop: "1rem" }}>
            This summit will transform months of asynchronous debate into days
            of productive problem-solving, enabling the real-time discussions
            necessary to resolve technical disagreements and build the trust
            essential for a healthy open-source ecosystem.
          </p>
        </div>

        {/* <div className="section">
          <h3>Daily Focus Areas</h3>
          <div className="grid grid-3">
            <div className="card">
              <h3>Day 1 - October 13</h3>
              <h4 style={{color: '#9c27b0'}}>Variable Chunk Grids</h4>
              <p>The current requirement that all chunks in an array are of equal size limits Zarr's impact.
              We'll settle on an extension definition and prototype its implementation.</p>
            </div>
            <div className="card">
              <h3>Day 2 - October 14</h3>
              <h4 style={{color: '#9c27b0'}}>Sharding Implementation</h4>
              <p>Finalize the design for sharding implementation and demonstrate its use for high-throughput
              distributed I/O while minimizing file count.</p>
            </div>
            <div className="card">
              <h3>Day 3 - October 15</h3>
              <h4 style={{color: '#9c27b0'}}>Codec Standardization</h4>
              <p>Enable high-bandwidth codec development with focus on stabilizing specifications for
              common image compression routines and cross-language compatibility.</p>
            </div>
            <div className="card">
              <h3>Day 4 - October 16</h3>
              <h4 style={{color: '#9c27b0'}}>Joint with Adopter Summit</h4>
              <p>Collaborate with Zarr adopters to facilitate usage, learn pain-points, and strengthen connections.</p>
            </div>
            <div className="card">
              <h3>Day 4 - October 17</h3>
              <h4 style={{color: '#9c27b0'}}>Joint with Adopter Summit</h4>
              <p>Collaborate with Zarr adopters to facilitate usage, learn pain-points, and strengthen connections.</p>
            </div>
          </div>
        </div> */}

        <div className="card highlight-card">
          <h3>Travel Support Available</h3>
          <p>
            Travel support is available for Zarr developer summit participants.
            Please request travel support when registering.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://lu.ma/llsms183"
            className="cta-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the developer summit waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
