import yargs from "yargs";
import AbstractCommand from "../../lib/abstract_command";
import { nextOrPrev } from "../original-commands/next-or-prev";

const args = {
  silent: {
    describe: `silence output from the command`,
    demandOption: false,
    default: false,
    type: "boolean",
    alias: "s",
  },
} as const;

type argsT = yargs.Arguments<yargs.InferredOptionTypes<typeof args>>;
export class NextCommand extends AbstractCommand<typeof args> {
  static args = args;
  public async _execute(argv: argsT): Promise<void> {
    await nextOrPrev("next", argv.silent);
  }
}

export const command = "next";
export const description =
  "If you're in a stack: Branch A → Branch B (you are here) → Branch C. Takes you to the next branch (Branch C). If there are two descendent branches, errors out and tells you the various branches you could go to.";
export const builder = args;
export const handler = async (argv: argsT): Promise<void> => {
  await new NextCommand().execute(argv);
};
