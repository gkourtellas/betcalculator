// Global version management
// Single source of truth for displayed version across all pages
// Update APP_VERSION here ONLY, commit, and all pages will show new version.
const APP_VERSION = '2.14';

function applyVersion() {
  // Fill any element marked with data-app-version
  document.querySelectorAll('[data-app-version]').forEach(el => {
    el.textContent = 'Version ' + APP_VERSION;
  });

  // Update <title> tag version pattern (vX.Y). If none, append.
  const titleEl = document.querySelector('title');
  if (titleEl) {
    if (/v\d+\.\d+/.test(titleEl.textContent)) {
      titleEl.textContent = titleEl.textContent.replace(/v\d+\.\d+/, 'v' + APP_VERSION);
    } else {
      titleEl.textContent = titleEl.textContent.trim() + ' v' + APP_VERSION;
    }
  }
}

document.addEventListener('DOMContentLoaded', applyVersion);

// Optional helper for console verification
console.info('[BetCalculator] Version', APP_VERSION);