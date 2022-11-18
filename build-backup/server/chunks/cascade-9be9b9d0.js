import { w as writeEffect } from './writeEffect-cfb18845.js';
import { a as animationSetup } from './animationSetup-cbe348c2.js';
import './index-d4538545.js';

const cleanChildText = (elements) => elements.forEach((element) => element.currentNode.textContent = "");
const cascade = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  cleanChildText(elements);
  for (const element of elements) {
    await writeEffect(element, options);
    if (options.keepCursorOnFinish) {
      const isLastElement = elements.indexOf(element) === elements.length - 1;
      !isLastElement && element.currentNode.classList.replace("typing", "finished-typing");
    } else {
      element.currentNode.classList.replace("typing", "finished-typing");
    }
    const cursorHasTimeout = typeof options.keepCursorOnFinish === "number";
    cursorHasTimeout && setTimeout(() => {
      element.currentNode.classList.replace("typing", "finished-typing");
    }, options.keepCursorOnFinish);
  }
  options.dispatch("done");
};

export { cascade as default };
//# sourceMappingURL=cascade-9be9b9d0.js.map
