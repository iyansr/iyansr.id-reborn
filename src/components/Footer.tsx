import React from "react";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Made with ❤️ by Iyan Saputra</p>
        </aside>
      </footer>
    </div>
  );
}
