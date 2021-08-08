"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const utils_1 = require("../lib/utils");
class Commit {
    constructor(sha) {
        if (sha.length != 40) {
            throw new Error(`Commit sha must be 40 characters long. Attempted sha = "${sha}"`);
        }
        this.sha = sha;
    }
    parents() {
        try {
            return child_process_1.execSync(`git rev-parse ${this.sha}`)
                .toString()
                .trim()
                .split("\n")
                .map((parentSha) => new Commit(parentSha));
        }
        catch (e) {
            return [];
        }
    }
    message() {
        const message = utils_1.gpExecSync({
            command: `git log --format=%s -n 1 ${this.sha}`,
        }, (_) => {
            // just soft-fail if we can't find the commits
            return Buffer.alloc(0);
        })
            .toString()
            .trim();
        return message;
    }
    timestampInSeconds() {
        const time = utils_1.gpExecSync({
            command: `git log -1 --format=%ct -n 1 ${this.sha}`,
        }, (_) => {
            // just soft-fail if we can't find the commits
            return Buffer.alloc(0);
        })
            .toString()
            .trim();
        return parseInt(time);
    }
}
exports.default = Commit;
//# sourceMappingURL=commit.js.map