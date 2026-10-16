/** Deterministic window/history double for the history algorithm tests. */
interface Entry {
  url: string;
  state: any;
}

export class FakeWindow extends EventTarget {
  public entries: Entry[];

  public index = 0;

  public readonly history = {
    back: () => {
      if (this.index === 0) return;
      this.index -= 1;
      queueMicrotask(() => this.dispatchEvent(new Event("popstate")));
    },
    pushState: (state: any, _title: string, url: string) => {
      this.entries = this.entries.slice(0, this.index + 1);
      this.entries.push({ url: this._resolve(url), state });
      this.index += 1;
    },
    replaceState: (state: any, _title: string, url?: string) => {
      const current = this.entries[this.index];
      this.entries[this.index] = {
        url: url ? this._resolve(url) : current.url,
        state,
      };
    },
    get state() {
      return undefined as any;
    },
  };

  constructor(url = "/lovelace/home") {
    super();
    this.entries = [{ url, state: { root: true } }];
    Object.defineProperty(this.history, "state", {
      get: () => this.entries[this.index].state,
    });
  }

  public get location() {
    const url = new URL(this.entries[this.index].url, "http://ha.test");
    return {
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    } as Location;
  }

  public get urls(): string[] {
    return this.entries.slice(0, this.index + 1).map((e) => e.url);
  }

  private _resolve(url: string): string {
    const current = new URL(
      this.entries[this.index]?.url ?? "/",
      "http://ha.test",
    );
    const next = new URL(url, current);
    return `${next.pathname}${next.search}${next.hash}`;
  }
}
