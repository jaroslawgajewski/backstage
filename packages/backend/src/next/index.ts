/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createBackend } from '@backstage/backend-app-api';
import { catalogPlugin } from '@backstage/plugin-catalog-backend';
import { scaffolderCatalogExtension } from '@backstage/plugin-scaffolder-backend';

// export const appPlugin = createBackendPlugin({
//   id: 'app',
//   register(env) {
//     env.registerInit({
//       deps: {
//         httpRouter: httpRouterServiceRef,
//         database: databaseServiceRef,
//         logger: loggerServiceRef,
//         config: configServiceRef,
//       },
//       async init({ httpRouter, config, logger, database }) {
//         console.log('App plugin init');

//         const appBackendRoute = await createAppBackendRouter({
//           appPackageName: 'example-app',
//           config,
//           logger: loggerToWinstonLogger(logger),
//           database,
//         });
//       },
//     });
//   },
// });

const backend = createBackend({
  apis: [],
});

backend.add(catalogPlugin({}));
backend.add(scaffolderCatalogExtension({}));
backend.start();
