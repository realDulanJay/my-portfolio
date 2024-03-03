export class Tag {
  static readonly ANGULAR = new Tag('Angular');
  static readonly TYPESCRIPT = new Tag('TypeScript');
  static readonly JAVA = new Tag('Java');
  static readonly JAVAFX = new Tag('JavaFX');
  static readonly JAVASCRIPT = new Tag('JavaScript');
  static readonly MYSQL = new Tag('MySQL');
  static readonly NODEJS = new Tag('Node.js');
  static readonly EXPRESSJS = new Tag('Express.js');

  private constructor(private readonly key: string) {}

  toString() {
    return this.key;
  }
}
