import { a as animationSetup, b as runOnEveryParentUntil } from './animationSetup-cbe348c2.js';
import { w as writeEffect, t as typingInterval } from './writeEffect-cfb18845.js';
import { u as unwriteEffect } from './unwriteEffect-32d514dd.js';
import './index-d4538545.js';

const loopOnce = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  for (const element of elements) {
    const { currentNode, text } = element;
    await writeEffect(element, options);
    const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
    const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
    if (fullyWritten) {
      options.dispatch("done");
      await typingInterval(options.wordInterval);
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      if (!isLastElement) {
        await unwriteEffect(currentNode, options);
        runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
          currentNode === element2 ? element2.classList.remove("typing") : element2.classList.remove("finished-typing");
        });
      }
      runOnEveryParentUntil(currentNode, options.parentElement, (element2) => {
        const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
        cursorHasTimeout && setTimeout(() => {
          element2.classList.replace("typing", "finished-typing");
        }, options.keepCursorOnFinish);
      });
    }
  }
};

export { loopOnce as default };
//# sourceMappingURL=loopOnce-9dfe9857.js.map
