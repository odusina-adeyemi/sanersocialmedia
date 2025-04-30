import antfu from '@antfu/eslint-config'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default antfu({
  unocss: true,
  vue: true,
});
