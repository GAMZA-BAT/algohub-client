require("tsx/cjs");
const { generateEvent } = require("./codegen/generateEvent.ts");

const PLUGIN_NAME = "generate-event-plugin";

let lock = false;
const setLock = (flag) => {
  lock = flag;
};
const checkLock = () => lock;

const queueEvent = async () => {
  if (checkLock()) {
    return;
  }

  setLock(true);
  try {
    await generateEvent();
  } catch (e) {
    /** biome-ignore lint/suspicious/noConsoleLog: logging result of generateEvent */
    console.log("이벤트 생성에 실패하였어요.");
    console.error(e);
    setLock(false);
  }
};

class WebpackGenerateEventPlugin {
  apply(compiler) {
    if (
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_APP_ENV === "production"
    ) {
      compiler.hooks.beforeRun.tapPromise(PLUGIN_NAME, async () => {
        return await queueEvent();
      });
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, async () => {
        return await queueEvent();
      });
    }

    if (
      process.env.NODE_ENV === "production" &&
      process.env.NEXT_PUBLIC_APP_ENV === "production"
    ) {
      compiler.hooks.done.tap(PLUGIN_NAME, () => {
        /** biome-ignore lint/style/useTemplate: logging result of generateEvent */
        console.info("✅ " + PLUGIN_NAME + ": route tree gen completed.");
      });
    }
  }
}

module.exports = { WebpackGenerateEventPlugin };
