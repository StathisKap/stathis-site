import { w as writeAndUnwriteText } from './writeAndUnwriteText-c9f2acc6.js';
import { a as animationSetup, m as makeNestedStaticElementsVisible } from './animationSetup-cbe348c2.js';
import './writeEffect-cfb18845.js';
import './unwriteEffect-32d514dd.js';
import './index-d4538545.js';

const loop = async (node, props) => {
  const { options, elements } = animationSetup(node, props);
  while (true) {
    makeNestedStaticElementsVisible(node);
    for (const element of elements)
      await writeAndUnwriteText(element, options);
  }
};

export { loop as default };
//# sourceMappingURL=loop-7a669042.js.map
