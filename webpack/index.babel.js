import merge from 'webpack-merge';

import { development } from './configurations/development';
import { production } from './configurations/production';
import { common } from './configurations/common';

export default (env) => {
    if (env === 'production') {
        return merge(common, production);
    }

    return merge(common, development);
};
