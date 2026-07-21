import { Download, Github, Apple, Monitor } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Ready to run agents{" "}
            <span className="gradient-text">at scale</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Download ACR for macOS, Linux, or Windows. Open source. Always free.
          </p>

          {/* Download cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Apple, label: "macOS", arch: "Apple Silicon / Intel", soon: false },
              { icon: Monitor, label: "Windows", arch: "x64", soon: false },
              { icon: Monitor, label: "Linux", arch: "AppImage / .deb / .rpm", soon: false },
            ].map((os) => (
              <div key={os.label} className="card text-center">
                <os.icon size={32} className="mx-auto mb-3 text-acr-500" />
                <h3 className="font-semibold text-lg">{os.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{os.arch}</p>
                <a
                  href="https://github.com/AgentContextRelay/acr-tc/releases"
                  className="btn-primary !py-2 !px-4 w-full mt-4 !text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  Coming Soon
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/AgentContextRelay/acr-tc"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Build from source
            </a>
            <span className="text-sm text-gray-400">
              Releases coming soon — follow on GitHub for updates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
