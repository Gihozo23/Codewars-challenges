"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = join;
function join(tokens, glue) {
    if (glue) {
        if (typeof tokens !== "string") {
            return tokens.join(glue);
        }
        else
            return tokens + glue;
    }
    return typeof tokens !== "string" ? tokens.join("") : tokens;
}
// a simpler way
// export function join(tokens: string | string[], glue?: string): string {
//     return glue ? typeof tokens !== "string" ? tokens.join(glue) : tokens + glue : typeof tokens !== "string" ? tokens.join("") : tokens;
// }
