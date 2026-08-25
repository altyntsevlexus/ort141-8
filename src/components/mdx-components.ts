import Callout from './Callout.astro';
import CodeBlock from './CodeBlock.astro';
import Keys from './Keys.astro';
import Practice from './Practice.astro';
import Screenshot from './Screenshot.astro';
import Section from './Section.astro';
import Steps from './Steps.astro';
import Syntax from './Syntax.astro';

/**
 * Injected into every Конспект so MDX files need no imports. Adding a component
 * here makes it available to all lesson content.
 */
export const mdxComponents = {
  Callout,
  CodeBlock,
  Keys,
  Practice,
  Screenshot,
  Section,
  Steps,
  Syntax,
};
