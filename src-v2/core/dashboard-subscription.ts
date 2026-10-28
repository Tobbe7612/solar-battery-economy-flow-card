export interface DashboardConnection {
  subscribeMessage<T>(callback: (payload: T) => void, message: Record<string, unknown>): Promise<() => void>;
}

export class DashboardSubscription {
  private unsubscribe?: () => void;
  private pending?: Promise<void>;
  private generation = 0;

  public subscribe(
    connection: DashboardConnection,
    entryId: string,
    onPayload: (payload: unknown) => void,
    onError: (error: unknown) => void,
  ): Promise<void> {
    if (this.unsubscribe) return Promise.resolve();
    if (this.pending) return this.pending;
    const generation = ++this.generation;
    this.pending = (async () => {
      try {
        const unsubscribe = await connection.subscribeMessage<unknown>(onPayload, {
          type: "solar_battery_economy/subscribe_dashboard_v2",
          config_entry_id: entryId,
        });
        if (generation !== this.generation) {
          unsubscribe();
          return;
        }
        this.unsubscribe = unsubscribe;
      } catch (error) {
        if (generation === this.generation) onError(error);
      } finally {
        if (generation === this.generation) this.pending = undefined;
      }
    })();
    return this.pending;
  }

  public unsubscribeNow(): void {
    this.generation += 1;
    this.unsubscribe?.();
    this.unsubscribe = undefined;
    this.pending = undefined;
  }
}
