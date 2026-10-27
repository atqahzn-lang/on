/* Geometry-only game logic, independent of the DOM and report renderer. */
window.CaseCatchEngine = class CaseCatchEngine {
  constructor(ids, collected = [], random = Math.random) {
    this.ids = ids;
    this.collected = new Set(collected.filter(id => ids.includes(id)));
    this.random = random;
    this.catX = .5;
    this.catWidth = .16;
    this.catTop = .7;
    this.catHeight = .25;
    this.fileWidth = .09;
    this.fileHeight = .15;
    this.files = [];
    this.spawnIn = .6;
    this.sequence = 0;
    this.cursor = 0;
  }
  get complete() { return this.collected.size === this.ids.length; }
  moveTo(x) { this.catX = Math.max(this.catWidth / 2, Math.min(1 - this.catWidth / 2, x)); }
  tick(seconds, direction = 0) {
    const dt = Math.min(Math.max(seconds, 0), .05);
    const caught = [];
    if (this.complete) return caught;
    this.moveTo(this.catX + direction * dt * .8);
    this.spawnIn -= dt;
    if (this.spawnIn <= 0) {
      const available = this.ids.filter(id => !this.collected.has(id) && !this.files.some(file => file.id === id));
      if (available.length) {
        const id = available[this.cursor++ % available.length];
        this.files.push({key: ++this.sequence, id, x: .12 + this.random() * .76, y: -.18});
      }
      this.spawnIn = 1.5;
    }
    this.files = this.files.filter(file => {
      file.y += dt * .19;
      const overlapsX = Math.abs(file.x - this.catX) <= (this.catWidth + this.fileWidth) / 2;
      const overlapsY = file.y + this.fileHeight >= this.catTop && file.y <= this.catTop + this.catHeight;
      if (overlapsX && overlapsY && !this.collected.has(file.id)) {
        this.collected.add(file.id);caught.push(file.id);return false;
      }
      return file.y < 1.05 && !this.collected.has(file.id);
    });
    return caught;
  }
};
