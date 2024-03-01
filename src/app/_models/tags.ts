export class Tag {
  static readonly ANGULAR = new Tag('Angular');
  static readonly TYPESCRIPT = new Tag('TypeScript');
  static readonly JAVA = new Tag('Java');
  static readonly JAVAFX = new Tag('Angular');
  static readonly JAVASCRIPT = new Tag('TypeScript');
  static readonly MYSQL = new Tag('Java');

  private constructor(private readonly key: string) {}

  toString() {
    return this.key;
  }
}
