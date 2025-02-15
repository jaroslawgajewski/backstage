/*
 * Copyright 2021 The Backstage Authors
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

/**
 * A library for Backstage backend plugins that want to interact with the search backend plugin
 *
 * @packageDocumentation
 */

export { IndexBuilder } from './IndexBuilder';
export { Scheduler } from './Scheduler';
export * from './collators';
export { LunrSearchEngine } from './engines';
export type {
  ConcreteLunrQuery,
  LunrQueryTranslator,
  LunrSearchEngineIndexer,
} from './engines';
export type {
  IndexBuilderOptions,
  RegisterCollatorParameters,
  RegisterDecoratorParameters,
} from './types';
export * from './errors';
export * from './indexing';
export * from './test-utils';

export type { ScheduleTaskParameters } from './Scheduler';

/**
 * @deprecated Import from @backstage/plugin-search-common instead
 */
export type { SearchEngine } from '@backstage/plugin-search-common';
