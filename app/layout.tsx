import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zarr Summit 2025 | Rome, Italy",
  description:
    "Unlocking scalable and accessible open science on the cloud with Zarr. October 13-17, 2025 in Rome, Italy.",
  keywords:
    "Zarr, Summit, 2025, Rome, Open Science, Cloud Computing, Data Format",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav">
            <div className="nav-container">
              <div className="logo">
                <h1>Zarr Summit 2025</h1>
              </div>
              <ul className="nav-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/developer-summit">Developer Summit</a>
                </li>
                <li>
                  <a href="/adopter-summit">Adopter Summit</a>
                </li>
                <li>
                  <a href="/location">Location</a>
                </li>
                <li>
                  <a href="/register" className="register-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-container">
            <p>
              &copy; 2025 Zarr Summit. Organized by Radiant Earth and the Zarr
              community.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
