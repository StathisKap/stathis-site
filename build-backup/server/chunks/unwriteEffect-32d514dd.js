import { t as typingInterval } from './writeEffect-cfb18845.js';

const unwriteEffect = async (currentNode, options) => {
  const text = currentNode.innerHTML.replaceAll("&amp;", "&");
  for (let index = text.length - 1; index >= 0; index--) {
    const letter = text[index];
    letter === ">" && (index = text.lastIndexOf("<", index));
    currentNode.innerHTML = text.slice(0, index);
    await typingInterval(options.unwriteInterval ? options.unwriteInterval : options.interval);
  }
};

export { unwriteEffect as u };
//# sourceMappingURL=unwriteEffect-32d514dd.js.map
