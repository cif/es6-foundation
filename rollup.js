import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import jsx from 'rollup-plugin-jsx';
import replace from 'rollup-plugin-replace';
import globalize from 'rollup-plugin-node-globals';

export default {
  entry: 'src/app.js',
  dest: 'dist/dist.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: ['.js', '.jsx'],
    }),
    jsx({ factory: 'React.createElement' }),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['PropTypes', 'Component']
      }
    }),
    babel({
      exclude: ['node_modules/**', 'src/**/*.test.js'],
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    globalize(),
  ],
};
