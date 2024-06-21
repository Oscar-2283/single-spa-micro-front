// src/loadScript.js
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script load error for ${url}`));
    document.head.appendChild(script);
  });
}
