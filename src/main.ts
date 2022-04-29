import * as core from '@actions/core'

async function main() {
    try {

        const name = core.getInput('Name');
        core.info(`Hello, ${name}`);

    } catch (e) {
        core.setFailed("err: "+ e)
    }
}

main();