/**
 * Hash triggers (`navigate` to `#popup_id`) must leave the browser history
 * exactly as a native dialog does: `[page (opensDialog)] [dialog]`.
 *
 * - `navigate(..., { replace: true })` or a deep link: the current entry
 *   already is the page, so stripping the hash is enough.
 * - `navigate(...)` (push, the common case) added an extra `#hash` entry.
 *   Going back first removes it; the dialog manager then pushes its own entry.
 */

export const decodeHash = (hash: string): string | undefined => {
  if (!hash || hash.length < 2) return undefined;
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return undefined;
  }
};

export const urlWithoutHash = (location: Location): string =>
  `${location.pathname}${location.search}`;

export const stripHash = (win: Window): void => {
  win.history.replaceState(win.history.state, "", urlWithoutHash(win.location));
};

/**
 * Removes the pushed `#hash` entry and resolves once the browser is back on
 * the page entry. Falls back to stripping the hash if no popstate arrives.
 */
export const popHashEntry = (win: Window, timeout = 500): Promise<void> =>
  new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      win.removeEventListener("popstate", onPop);
      clearTimeout(timer);
      if (win.location.hash) stripHash(win);
      resolve();
    };
    const onPop = () => finish();
    const timer = setTimeout(finish, timeout);
    win.addEventListener("popstate", onPop);
    win.history.back();
  });
