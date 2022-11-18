import { w as writeEffect, t as typingInterval } from './writeEffect-cfb18845.js';
import { u as unwriteEffect } from './unwriteEffect-32d514dd.js';
import { b as runOnEveryParentUntil } from './animationSetup-cbe348c2.js';

const writeAndUnwriteText = async ({ currentNode, text }, options) => {
  await writeEffect({ currentNode, text }, options);
  const textWithUnescapedAmpersands = text.replaceAll("&", "&amp;");
  const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands;
  if (fullyWritten) {
    options.dispatch("done");
    await typingInterval(options.wordInterval);
    await unwriteEffect(currentNode, options);
  }
  runOnEveryParentUntil(currentNode, options.parentElement, (element) => {
    currentNode === element ? element.classList.remove("typing") : element.classList.remove("finished-typing");
  });
};

export { writeAndUnwriteText as w };
//# sourceMappingURL=writeAndUnwriteText-c9f2acc6.js.map
