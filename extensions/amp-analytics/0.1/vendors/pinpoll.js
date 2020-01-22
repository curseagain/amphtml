/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {jsonLiteral} from '../../../../src/json';

const PINPOLL_CONFIG = jsonLiteral({
  'requests': {
    'pageview':
      '${protocol}://${host}/${version}?' +
      'url=${sourceUrl}&' +
      'sourceHost=${sourceHost}&' +
      'sourceHostname=${sourceHostname}&' +
      'sourcePath=${sourcePath}&' +
      'canonicalUrl=${canonicalUrl}&' +
      'platform=AMP&' +
      'title=${title}&' +
      'referrer=${documentReferrer}&' +
      'screenHeight=${screenHeight}&' +
      'screenWidth=${screenWidth}&' +
      'screenColorDepth=${screenColorDepth}&' +
      'ua=${userAgent}&' +
      'clientId=${clientId(pinpoll)}',
  },
  'triggers': {
    'pageview': {
      'on': 'visible',
      'request': 'pageview',
    },
  },
  'vars': {
    'version': 'v1',
    'protocol': 'https',
    'host': 'pa.pinpoll.com',
  },
});

export {PINPOLL_CONFIG};
