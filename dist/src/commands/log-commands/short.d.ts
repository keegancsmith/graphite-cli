import yargs from "yargs";
declare const args: {};
export declare const command = "short";
export declare const description = "Log all stacks tracked by Graphite.";
export declare const builder: {};
export declare const aliases: string[];
declare type argsT = yargs.Arguments<yargs.InferredOptionTypes<typeof args>>;
export declare const handler: (argv: argsT) => Promise<void>;
export {};
