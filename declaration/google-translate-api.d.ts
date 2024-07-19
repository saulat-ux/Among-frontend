// declarations/google-translate-api.d.ts
declare module "google-translate-api" {
  interface TranslateOptions {
    from?: string;
    to: string;
  }

  interface TranslateResult {
    text: string;
    from: {
      language: {
        iso: string;
      };
    };
  }

  function translate(
    text: string,
    options: TranslateOptions
  ): Promise<TranslateResult>;

  export = translate;
}
