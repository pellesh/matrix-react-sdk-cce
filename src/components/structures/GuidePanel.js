/*
Copyright 2018 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import PropTypes from 'prop-types';

import { _t } from '../../languageHandler';
// import sdk from '../../index';

const GuidePanel = React.createClass({
    displayName: 'GuidePanel',

    propTypes: {
        roomId: PropTypes.string.isRequired,
    },

    render: function() {
        // const AppTile = sdk.getComponent("views.elements.AppTile");

        return (
            <div className="mx_GuidePanel">
            </div>
        );
    },
});

module.exports = GuidePanel;
